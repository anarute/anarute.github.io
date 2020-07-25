---
title: "Minha saga com pytest e SQLAlchemy em uma aplicação FastAPI"
slug: minha-saga-com-pytest-e-sqlalchemy
date: 2020-07-25 10:00:00
author: anarute
tags: ["pt-br", "python", "pytest", "sqlalchemy", "carreira"]
fullscreen: false
---

**TLDR:** meu causo sobre aprender `pytest` na marra. Os primeiros parágrafos são
introdutórios, se quiser pular pra parte técnica pode ir direto pro **Perrengue 1**.

Desde que voltei a trabalhar full-time como desenvolvedora (há uns 3 anos), tive
que reaprender muita coisa e não posso mais me dar ao luxo de continuar com
alguns gaps teóricos importantes de computação, já que hoje ocupo uma
posição de tech lead e por estar em um time pequeno, preciso pensar em
arquiteturas de ponta a ponta em stacks diferentes e pra mim o mais difícil:
do zero. Decidi então seguir a onda de aprender em público e começa a escrever
sobre meus aprendizados, quem sabe não ajuda mais alguém que passe pelo mesmo caminho.

Em quase todos os meus trabalhos passados eu sempre entrei em projetos existentes
o que torna muito mais fácil desenvolver novas features, já que temos no próprio
repositório exemplos de como fazer algo. Mas e quando precisamos escolher
todas as ferramentas e configurar tudo do início? As vezes pode ser um trabalho
bem sofrido e moroso. É por isso que ferramentas como [Create
React App](https://reactjs.org/docs/create-a-new-react-app.html), [Django](https://www.djangoproject.com/), e [FastAPI](https://fastapi.tiangolo.com/) (minha favorita da vez) fazem tanto sucesso.

Estou trabalhando em uma API RESTFul criada com o FastAPI. Conseguimos portar uma
API feita em Flask pra FastAPI em apenas ~2 semanas em duas pessoas (!), nada contra Flask, mas por ser tão minimalista, ter que configurar coisas como documentação com especificação OpenAPI, um bom suporte pra gestão do banco de dados e concorrencia estava tomando tempo e exigindo um bom tempo de estudo pra fazer uma trabalho bem feito. E foi nisso que o FastAPI nos conquistou! Ele entrega tudo isso de fábrica.

**Disclaimer**: acho super importante gastar tempo aprendendo pra fazer algo bem
pensado, mas a gente sabe que no dia a dia do trabalho a realidade é outra, né? na maior parte das vezes, independente da cultura da sua empresa, o tempo de estudo é limitado e precisamos entregar o que foi pedido num certo período de tempo.

Comecei então a configurar os testes. Quando o projeto foi feito em Flask tinha
pouquissima cobertura e a configuração do `pytest` não estava muito legal então
resolvi jogar essa parte fora e começar o setup dos testes do zero.

Eu adoro criar testes mas até então só tinha mexido na parte de escrever os casos
de teste mesmo então sempre começava já com ctrl+c, ctrl+v de um teste existente e adaptava pro caso que queria. Também não tinha experiência com `pytest` ainda.

Vendo a documentação do FastAPI, rodar testes com `pytest` no projeto é bem trivial, usei o exemplo padrão e funcionou de primeira, achei que tivesse pronta pra escrever os casos. O projeto usa SQLAlchemy com mysql pra produção e pros testes optei
por sqlite.

Mas aí é quando as dificuldades começam, quando precisamos adaptar pro nosso cenário.
Minhas necessidades eram:

- Iniciar os testes com a banco populado com alguns registros
- O banco precisa ser limpo e populado com os valores iniciais a cada teste, pra
que nenhum teste interfira no outro

Achei que seria simples e acharia muitos exemplos por aí, mas conseguir o que
queria me custou muitas horas a mais do que eu esperava.

## Perrengue 1 (entendendo como isolar os ambientes)

> Ao rodar os testes em um ambiente limpo (no gitlab CI), dava erro por não
> conseguir se conectar ao banco.

Primeiro, por que que ao rodar os testes ele tenta acessar o banco configurado no
`.env` se eu configuro o sqlite espeficamente pros testes? e segundo, porque local funciona e no docker do CI não?

Pela documentaçao do FastAPI, eles recomendam usar o `create_all` do SQLAlchemy
para criar todas as tabelas [antes de iniciar a aplicação](https://fastapi.tiangolo.com/tutorial/sql-databases/#create-the-database-tables). O problema é que fazer
exatamente assim faz com que o `create_all` seja chamado, só pelo fato de importar o app pros testes. Então a solução foi isolar
o `create_all` de modo que ele fosse chamado apenas ao rodar a aplicação real, e
não com os testes. Isso também explica porque local funcionava e no CI não: local
eu tinha as variaveis de ambiente configuradas corretamente então a conexão com
o banco era bem sucedida mesmo que pros testes fosse usado um banco sqlite.

## Perrengue 2 (entendendo pytest.fixture)

> Não consigo conectar ao banco dentro de uma pytest.fixture

Eu sou super defensora de ler a documentação e li e reli a documentação do
`pytest.fixture` umas 5 vezes pra entender o que eu tinha feito errado. Mas às
vezes mesmo lendo a documentação, se a gente não tem ideia do que está
acontencedo a doc simplesmente não faz sentido, pelo menos acontece muito comigo,
eu leio as palavras mas nada acontece na minha cabeça, não absorvo o sentido.
Então o que percebi que funciona pra mim é um mix de brute force com documentação:
lê a doc, experimenta um parâmetro ou propriedade diferente, testa e vê o que acontece, repete até entender.

Baseada na doc do FastAPI, eu tentei usar a mesma função pra conectar ao banco que a aplicação usava, que é algo assim:

```python
def get_db():
    try:
        db = TestingSessionLocal() # sessão criada com sessionmaker do SQLAlchemy
        yield db
    finally:
        db.close()
```

Eu tentei fazer com que isso fosse uma fixture com o parametro `autouse=True`
pra que fosse chamada dentro de cada teste e assim eu poder usar o banco como `db`
pra importar os dados que eu queria e inserir o registros iniciais. Mas ao usar
assim recebia o erro: 

```
yield_fixture function has more than one 'yield'
```

E também passei pelo erro abaixo ao tentar faz algo como `db = get_db()` dentro da fixture:

```
Fixture "get_db" called directly. Fixtures are not meant to be called directly,
but are created automatically when test functions request them as parameters.
See https://docs.pytest.org/en/latest/fixture.html for more information about fixtures, and
https://docs.pytest.org/en/latest/deprecations.html#calling-fixtures-directly about how to update your code.
```

Hmm.. os links que o erro sugere na doc explicam bem sobre o erro acima, mas o que será uma `yield_fixture`? e foi essa dúvida que fez as mil vezes que li
a documentação fazer algum sentido! Basicamente entendi que a `pytest.fixture` funciona como
um "envelope" ao redor do teste, seguindo o seguinte padrão:

```python
@pytest.fixture
def minha_fixture:
    # insira qualquer lógica pra ser executada ANTES do teste

    yield  # (!!) é esse yield que vai retornar o teste e faze-lo rodar

    # insira a lógica de tear down, pra ser executada DEPOIS do test

def test_case_xis(minha_fixture):
    assert a == b
```

Então a `pytest.fixture` realmente era o que eu precisava.

Quando eu chamava o `yield db` lá em cima no `get_db`, o `pytest` tentava
rodar o teste e nunca chegaria no segundo `yield` que roda o teste de fato,
então o que eu gostaria que acontecesse no setup não tava acontecendo.

A solução foi bem simples, eu não precisava de uma função pra acessar o banco, bastava rodar `db = TestingSessionLocal()` onde esse `TestingSessionLocal` é uma sessão criada pelo SQLAlchemy e no tear down do teste, dar um `db.close()`. Isso resolveu meu caso
de acessar o banco, limpa-lo e inserir os dados falsos antes de cada teste.
Ficou algo assim:

```python
@pytest.fixture(autouse=True)
def init_db():
    db = TestingSessionLocal()

    # Clean up tables before importing the initial data
    db.query(MyModel).delete()
    db.commit()

    # Insert mock data in the db
    for r in fake_records:
        new_record = MyModel(**r)
        db.add(new_record)
        db.commit()
        db.refresh(new_record)

    yield # run the test

    db.close() # close session after running the test
```

## Perrengue 3 (entendendo como funcionam os models do SQLAlchemy)

> Consegui popular o banco antes de um teste, fui replicar o mesmo teste e no
> segundo caso os valores do primeiro teste ainda estavam no banco

Depois de finalmente entender como `pytest.fixture` funciona, comecei a ter problemas ao inserir mais casos de teste. Usando nosso amigo `print` a impressão que dava era que a fixture só era acessada no primeiro caso. Isso me levou a pesquisar sobre
cache de fixture, como que as fixtures era chamadas, etc, sem sucesso.

Usando `pdb` eu consegui confirmar que a fixture estava sendo chamada a cada teste, então por que raios o banco não estava sendo limpo?

Foi aí que comecei a desconfiar que o problema não era mais a fixture e precisei entender melhor como o SQLAlchemy lida com sessões
e gerencia o banco em tempo de execução. Recomendo [esse artigo](https://www.michaelcho.me/article/sqlalchemy-commit-flush-expire-refresh-merge-whats-the-difference) sobre isso.

Pra inserir os dados fakes, eu criei um array com meus models já usando o model
da aplicação, algo como:
```python
users = [
    MyModel(id=1, name="ABC"),
    MyModel(id=2, name="XYZ"),
]
```

E na minha fixture:
```python
for user in users:
    db.add(user)
    db.commit()
    db.refresh(user)
```

O primeiro teste a ser rodado SEMPRE dava certo, mas do segundo em diante não.
Eu não conseguia entender o que estava fazendo de errado até tentar entender como
o meu model estava sendo criado: o `MyModel` é uma classe que herda o Base da aplicação que no fundo é um `declarative_base` do SQLAlchemy. Ah-há! eu
achava que eu estava só declarando um array de objetos do tipo MyModel, mas na
verdade ao criar esse array o SQLAlchemy já estava instanciando esses objetos
como parte dos dados da sessão aberta mesmo que eles não tivessem sido inseridos no banco!

Então ao rodar esse `for` mais de uma vez o SQLAlchemy reclamava porque o objeto já tinha sido inserido em algum momento então ele não inseria de novo, por isso eu lidava com erros como:
`Object already attached to session` ou `sqlalchemy.exc.InvalidRequestError: Could not refresh instance`. Tudo porque eu estava tentando inserir um objeto que ja tinha sido
inserido no banco E já tinha sido deletado, porque eu deleto tudo antes de rodar os testes, lembra?

Depois de entender tudo isso fez sentido, eu não preciso ter um array de models reais
pra meus dados falsos antes de criá-los, eu posso ter um array de dicts e na hora de inserir no banco que crio o objeto de verdade, então por fim a solução foi:

```python
users = [
    {"id":1, "name":"ABC"},
    {"id":1, "name":"XYZ"},
]
```

E na minha fixture:
```python
for user in users:
    new_user = MyModel(**user)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
```

Pronto, agora sim posso ter mil testes todos isolados com o banco limpo e dados
inciais antes de rodar :)

## Conclusão

Ficar na superfície pode cobrir a maior parte dos casos, mas assim que precisamos de algo que foge do básico ou da configuração que "vem pronta" (mesmo que não seja nada extraordinário, como foi meu caso), não tem stackoverflow que salve e precisamos entender de fato o que está acontecendo por baixo dos panos. Pra mim o combo ler documentação + um bom tempo com debug e experimentação é a melhor forma de aprender.

Agora posso finalemente focar em escrever os testes de fato e garantir que minha aplicação funciona como esperado.

---

Se eu falei alguma bobeira ou você sabe uma forma melhor de solucionar os casos
que mencionei no post, deixa seu comentário aí embaixo ;)