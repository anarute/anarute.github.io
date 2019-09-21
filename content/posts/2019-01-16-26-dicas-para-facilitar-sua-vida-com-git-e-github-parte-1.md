---
title: "26 dicas para facilitar sua vida com Git e Github"
slug: 26-dicas-para-facilitar-sua-vida-com-git-e-github-parte-1
date: 2019-01-16 14:30:43
author: anarute
tags: ["git", "github", "dicas"]
fullscreen: false
---

Entrei na brincadeira do Twitter compilar dica sobre algum assunto em troca de like ou RT e resolvi falar sobre git e GitHub que é um assunto que sinto que muita gente tem dificuldade e se você trabalha com desenvolvimento de software, não importa a linguagem e especialidade, garanto que git é fundamental pro seu dia-a-dia.

> Também quero brincar 🤓
>
> 1 RT = 1 dica de git ou Github
>
> — Ana Rute‏ 🌈 (@ana_rute) [January 10, 2019](https://twitter.com/ana_rute/status/1083352112371765248?ref_src=twsrc%5Etfw)

Segue então um compilado de 26 dicas sobre Git e GitHub:

1.  Acabou de dar commit, não deu push ainda mas quer adicionar mais algum arquivo?  
    1 - `git add`  
    2 - `git commit --amend`  
    O amend modifica o commit passado, então você pode inclusive usá-lo pra remover arquivos do commit, mudar a mensagem, trocar autor, o que quiser!
2.  Criei um monte de commit que não quero mais, mas não quero perder as mudanças que fiz:  
    `git reset --soft`  
    As suas mudanças vão estar staged, prontas pra serem commitadas novamente
3.  Quero apagar tudo (commits e mudanças) que fiz e deixar minha branch exatamente igual a um commit específico ou branch:  
    `git reset --hard`  
    Se quiser deixar igual a uma branch remota, pode ser `git reset --hard origin/branch`
4.  Não faço ideia de como deixei meu repo local nesse estado:  
    `git reflog`  
    Vai te dar um histórico do que você fez
5.  Mexi um monte num arquivo, mas quero commitar só uma parte das mudanças:  
    `git add -p`  
    Vai te mostrar pedaço por pedaço do que você mudou e te perguntar o que quer colocar em stage
6.  Ao começar um projeto novo, não se esqueça de já configurar o arquivo .gitignore pra evitar subir arquivos indesejados. Vai ser bem mais fácil se já fizer do começo do que ter que remover depois 🤙  
    Aqui tem um monte de template que dá pra copiar:

    > [github/gitignore](https://github.com/github/gitignore) - A collection of useful .gitignore templates. Contribute to github/gitignore development by creating an account on GitHub.

7.  Quero ver o diff inteiro de código do que foi feito nos últimos commits  
    `git log -p`
8.  Quero acompanhar o fork de um projeto:  
    `git remote add <https://url-do-fork.git>`  
    Pra ver todos os remotes do repo q vc tem localmente:  
    `git remote -v`  
    Pra usar, é só trocar origin pelo nome que você deu ao remote:  
    git pull , git checkout nome-fork/branch...
9.  No GitHub, se você escrever na mensagem do commit "close", "closes", "closed", "fixes" ou "fixed" seguido de hashtag + número da issue (por exemplo: "Fixes #1234") , a issue é automaticamente fechada
10. Para quem usa o VS Code, super recomendo o plugin Git Lens. Ele mostra visualmente todo o histórico de commits do arquivo, quem fez o quê e quando, bem útil:  
    [GitLens — Git supercharged - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
11. Criou uma branch com o nome errado e só percebeu bem depois, na hora de dar push? no worries:  
    `git branch -m nome-velho nome-novo`
12. Sabia que no GitHub dá pra usar emoji nas mensagens de commit? Pra usar precisa seguir o modelo ":nome-do-emoji:"  
    Pra ser sincera eu não sou muito fã, mas num projeto mais zuerinha, quem sabe :smile:  
    [Aqui tem uma colinha](https://www.webfx.com/tools/emoji-cheat-sheet/).  
    Quem quiser ir além no assunto emoji no commit, dá uma olhada [nesse artigo](https://medium.com/walmartlabs/semantic-commit-messages-with-emojis-dba2541cea9a).
13. Vc sabe a diferença entre git e GitHub? git é o software de controle de versão, GitHub é uma plataforma para hospedar projetos que usam git. Fora o GitHub existem outras soluções como BitBucket e GitLab, e por ser open source vc pode ter o seu próprio servidor de git
14. Se você tem dificuldade com vim ou outro editor de linha de comando, é possível trocar o editor padrão que o git usa pra escrever as mensagens de commit ou resolver conflitos:  
    `git config --global core.editor "seu-editor"`
15. Eu entendo ter preguiça de adicionar arquivo por arquivo, mas ao invés de dar `git add .` e vez ou outra subir o que não deve, usa `git add -u` que ele vai adicionar só os arquivos que já foram trackeados pelo git. Ou melhor, nunca use `git add .`
16. Escreva mensagens de commit concisas e específicas. Quanto mais detalhada for a descrição do commit (to de olho em você só usar `git commit -m`), melhor pro seu eu do futuro, principalmente se seu código não for muito comentado.
17. Eu sou da turma dos micro commits: quanto mais commits melhor. A função funcionou? commita. O teste passou? commita. Isso ajuda muito no futuro caso tenha que desfazer algo, caçar bugs ou reaproveitar código. Mesmo q não esteja 100%, commita com "WIP" na frente q é a dica 18
18. Se você não acabou o que tinha que fazer mas não quer correr o risco de perder o que já foi feito, vc pode commitar e na mensagem adicionar "WIP" antes, que significa Work in Progress. Quando tiver pronto vc poder dar commit --amend e tirar o WIP da mensagem ;)
19. Mais sobre WIP: essa dica é só pra quando você estiver numa branch separada. Se tiver trabalhando com alguém na mesma branch, é bom avisar pra não mandar código quebrado pra coleguinha. E evite mandar WIP pra master, já que devemos sempre evitar modificar o passado dessa branch
20. Se tiver q modificar um commit do passado que ñ seja o último, por exemplo pra tirar um commit WIP, a gente usa o `git rebase -i`, que é o rebase interativo. Esse já é um pouco mais difícil, eu fiz um post que explica uma das formas de usar: anarute.com/preciso-modifi…
21. Use `git stash` pra guardar _temporariamente_ os arquivos modificados q ainda ñ foram commitados. Útil qndo precisa trocar de branch, por ex., testar o código sem suas mudanças, ou testar em outra branch. Pra "pegar" as mudanças de volta `git stash pop`
22. Quero pegar só um commitzinho de uma branch que ainda não tá em master e jogar na branch que você está:  
    `git cherry-pick`
23. Eu to dando várias dicas e uma galera já tá contribuindo falando outras formas de fazer algo que eu disse. Uma das coisas mais legais de git é que tem vários caminhos de chegar num mesmo resultado, você tem q ver o que é melhor/mais produtivo pro seu fluxo de trabalho
24. Eu vejo muita gente que tá começando tendo que digitar nome e usuário TODA vez que clona, dá push ou pull. Isso é porque vc ainda não adicionou uma chave SSH do seu computador no GitHub! Arrumar isso é facinho: help.github.com/articles/addin…
25. Todas as dicas dessa thread são pra usar git na linha de comando. Por isso é mega importante perder o medo do terminal! Ele não morde, aos pouquinhos a gente se familiariza a ponto de preferir fazer tudo por lá
26. Sobre git e terminal: se vc ainda ñ modificou seus dotfiles ou não usa algum tema bonitinho q mostra qual branch vc tá, status do staging, etc. Recomendo q faça já! Aumenta a produtividade exponencialmente.  
    Eu uso zsh + oh my zsh + qlqr tema que trate git  
    [Link para Oh my Zsh](https://github.com/robbyrussell/oh-my-zsh)
