---
title: "Back to Computing"
slug: back-to-computing
date: 2016-04-26 14:30:43
author: anarute
tags: ["outreachy", "FOSS", "taskcluster"]
fullscreen: false
---

**Muito longo; não li (ml; nl ou tl;dr tupiniquim):** post pessoal sobre meu trajeto na computação e aprovação no programa Outreachy.

---

Já sigo um tempo sem postar por aqui nem no [dicas](http://dicasdefrontend.com.br) e toda semana fico pensando "putz, precisava voltar com o blog, preciso mandar email pro dicas"... mas sento no computador, enrolo, entro em mil _vortexes_ pela internet e quando percebo já está tarde e não tenho mais tempo.

Soa familiar? Infelizmente esse é um problema muito comum e não existe segredo - pelo menos não descobri ainda, se souber deixa nos comentários, por favor... É muito difícil achar motivação e foco, principalmente quando a gente já trabalha tanto e quer ficar fazendo nada nas horas vagas. Já li muitos conselhos, posts, livros sobre o assunto e sempre chego à conclusão que a solução mesmo é parar de pensar sobre fazer ou não ou quando começar e sentar a bunda na cadeira e começar o que você quer/tem que fazer. A gente costuma gastar muito tempo se dando desculpas do porquê não começar ao invés de gastar esse tempo fazendo o que tem que ser feito.

Hoje voltei por ter uma novidade muito especial! Pra quem me acompanha desde o início do blog e para os meus amigos próximos, sabem que eu _não_ sou desenvolvedora, embora trabalhe com desenvolvimento de sites desde 2008\. Sempre fui mais designer, porém há uns 2~3 anos minha vontade de voltar a estudar computação (fiz curso técnico) tem aumentado. Do ano passado pra cá tive que me virar muito com a plataforma que usamos na [Mupi](http://mupi.me/), startup da qual sou co-fundadora, e por isso considero que subi alguns níveis na área. De todo modo, continuo com muitas lacunas teóricas e ainda não consigo me definir como desenvolvedora. Ok, tem um pouco de [síndrome de impostora](https://medium.com/the-year-of-the-looking-glass/the-imposter-syndrome-9e23e2326d88#.f39b4bfku) nisso, mas eu chego lá.

Em março deste ano, decidi aplicar novamente para o programa Outreachy que tem o intuito de inserir mulheres na comunidade de software livre - eu já havia aplicado uma vez em 2013 e não tinha conseguido. Fiquei sabendo que as inscrições estavam abertas faltando 1 semana para encerrar (obrigada [Mônica](http://monicabulgari.com) por ter me avisado <3) e corri pra me inscrever, já que o processo consiste em preencher a ficha de inscrição e contribuir com um patch pro projeto que eu queria entrar, ou seja, toma um certo tempo. Passada a correria, stress e tempo livre trabalhando nisso, quem entrou num projeto da Mozilla? Yo! [Olha o meu nominho ali.](https://wiki.gnome.org/Outreachy/2016/MayAugust#Mozilla)

Ser aprovada no Outreachy tem sido muito importante para eu perceber minha capacidade e comprovar que toda conquista é precedida de muito esforço e dedicação, mas é possível! E essa tem sido minha motivação para desprocrastinar.

Para as meninas que queiram prestar nas próximas turmas, o processo que segui foi:

- Fuçar no site do [Outreachy](https://wiki.gnome.org/Outreachy) projetos que fossem do meu interesse (eu me interessei por uns 4, mas é bom focar em 1 porque não há tempo para tentar todos).
- Entrar no canal IRC do projeto escolhido.
- Conversar com os mentores sobre possíveis bugs e patches para enviar e por onde começar.
- Configurar o ambiente de desenvolvimento local para trabalhar nos bugs -> eu tentei trabalhar em dois projetos e **essa é a parte mais difícil e demorada**, pois requer muito tempo para entender como o projeto funciona, instalar todos os requisitos do projeto e fazê-lo rodar como deveria na sua máquina.
- Subir o patch do bug resolvido. -> aqui é importante ter um pouco de familiaridade com git, se você não tem, sugiro começar agora, dá uma olhada nesse [curso gratuito do Willian Justen.](http://willianjusten.teachable.com/courses/git-e-github-para-iniciantes) Recomendo super!

Para vocês veram o tipo de patch que é pedido, eu enviei 2 _pull requests_ ([esse](https://github.com/taskcluster/taskcluster-hooks/pull/23) e [esse](https://github.com/taskcluster/taskcluster-auth/pull/54)) e mandei um [pequeno fix](https://github.com/mozilla/universal-search/pull/97) para um outro projeto da Mozilla.

Todas as pessoas com quem conversei da Mozilla foram super receptivas e atenciosas, então **não** tenha medo de fazer perguntas, nenhuma pergunta é idiota. Mas claro, recomendo você sempre tentar resolver as coisas antes e fazer as perguntas à medida em que ficar bloqueada e não o contrário, perguntar antes de tentar.

Bem, próximos passos: dia 23/05 começa o programa e aí que meu trabalho começa de fato. Pretendo continuar compartilhando meu processo e aprendizado por aqui, quem sabe não ajuda mais pessoas a se movimentarem e a deixarem de procrastinar um pouco? Além de incentivar mais meninas a virarem desenvolvedoras e se aventurarem no mundo do software livre.
