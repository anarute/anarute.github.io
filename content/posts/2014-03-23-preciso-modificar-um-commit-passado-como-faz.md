---
title: "Preciso modificar um commit passado, como faz?"
description: "Aprenda a usar rebase interativo para modificar um commit do passado"
slug: preciso-modificar-um-commit-passado-como-faz
date: 2014-03-23 14:30:43
author: anarute
tags: ["git"]
fullscreen: false
---

> Nas últimas duas semanas tenho tido um intensivão de aprendizado de git por causa da reformulação do site da [Escola Mupi](http://mupi.me "Escola Mupi"). O projeto usa como base uma plataforma que se chama [Timtec](https://github.com/hacklabr/timtec "Timtec"), mas que ainda está sendo desenvolvida, logo muitos bugs, features faltando e muitos _merge conflicts_... Eu que ainda estou descobrindo as magias do git, tenho uma relacionamento de amor e ódio, pois já fiz muita besteira e perdi muitas horas de trabalho por não saber como ele funciona direito, assim como ele já me salvou muitas vezes <3
>
> Esses dias, precisei adicionar alguns arquivos num commit antigo para manter minha árvore organizada e coerente. Para isso, [@padovan](http://padovan.org "Gustavo Padovan") me ensinou a resolver esse problema usando **fixup** + **rebase interactive** [que eu particularmente achei incrível]. Vamos lá:

Antes de iniciar, você precisa copiar um pedaço inicial do hash do commit que você deseja modificar. O hash é o código de identificação do commit, exemplo: 636bf2643e67bf34f67691333b916e292571a469\. No caso os 6 primeiros caracteres já são suficientes. Você pode achar o hash com o comando <span style="color: #800000;">`git log`</span>.

Tendo isso copiado, deve-se fazer um "fake" commit. Ou seja, criamos um commit que servirá apenas como um repositório temporário das novas modificações que serão acrescentadas ao commit desejado. Para isso usamos o seguinte comando:

<pre>$ git commit --fixup=636bf26</pre>

Isso cria um commit com a mensagem "fixup! + msg do commit selecionado". Isso ajuda a identificar que esse não é um commit convencional, mas que precisa ser "fixed up". Feito isso, agora vem a magia: `git rebase --interactive` ou `git rebase -i`. O rebase interactive dá muito mais flexibilidade para modificar os commits. Para usá-lo precisamos indicar a quantidade de últimos commits a serem mostrados a partir do HEAD. No meu caso, os 4 últimos commits foram suficientes:

<pre>$ git rebase -i HEAD~4</pre>

que nos dá no editor padrão do terminal a quantidade indicada de commits em ordem do mais antigo ao mais novo, assim como todas as opções do `rebase interactive`. Nesse exemplo só vamos utilizar fixup (note que existem outras opções pra rebase interativo que podem ser muito úteis em outras situações):

![](http://i.imgur.com/U0abklc.png)

Para a magia acontecer, é preciso escrever `f` no lugar de `pick` na frente do commit de fixup e modificar a ordem dos commits, colocando-o logo abaixo do commit desejado:

![](http://i.imgur.com/qb8mwCx.png)

Agora é só salvar e voi lá! o "fake" commit é fundido no commit de cima =) é só dar um checada se deu tudo certo com git log.

UPDATE: Como pode se ver na primeira imagem, existem outras opções bem interessantes para se usar no rebase interativo, como o `reword`, que permite modificar apenas a mensagem de algum commit, e o `squash` que permite juntar dois ou mais commits em um só. Para quem lê em inglês, sugiro [este artigo](https://help.github.com/articles/interactive-rebase "Interactive rebase") do github a respeito e dou um quote de alerta (tradução livre minha): "É considerada uma má prática dar rebase em commits que já foram submetidos ao repositório remoto. Ao fazer isso, você poderá invocar a ira dos deuses do git".

obs.: Para modificar o último commit feito, `git commit --amend` é a melhor opção, já que "reabre" o último commit para edição.
