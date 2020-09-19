---
title: "Primeiros passos com Next.js"
slug: primeiros-passos-com-nextjs
date: 2020-09-19 10:00:00
author: anarute
tags: ["pt-br", "javascript", "nextjs", "react"]
fullscreen: false
---

Cerca de 8 anos atrás (!), para um dos meus trabalhos finais da faculdade eu
desenvolvi um site que inicialmente era estátipo "puro" (HTML, CSS e js), virou
um Wordpress para que outras pessoas pudessem mexer no conteúdo e finalmente
foi abandonado com o passar do tempo a ponto de precisar ser removido ao ser
hackeado - clássico fim de sites wordpress que não sofrem manutenção frequente.

Recentemente uma das criadoras do projeto entrou em contato comigo para subirmos
o site novamente e como gosto muito do projeto, topei. Porém, terei que refazer
do zero, já que quero que novamente seja estático, sem ter que manter um CMS, nem
me preocupar com manutençao de servidor, se o site pode ser hackeado, nada disso.

Ao invés de fazer com js vanilla, resolvi aproveitar a oportunidade pra
fazer em Next.js e tentar entender porque que esse framework está tão em alta.

Antes de tudo é importante entender a diferença entre site estático, site
renderizado no cliente e renderizado no servidor. Pra isso recomendo [o excelente
video do Willian Justen](https://www.youtube.com/watch?v=X3W-YFe2_io), ele explica de forma super didática essas diferenças e quando usar cada um.

## Iniciando o projeto em Next.js

De cara já fiquei super feliz com o boilerplate do Next.js. Segui a
[documentação](https://nextjs.org/docs#setup) e instalei usando `npx create-next-app`.
Ele já me deu esqueleto inicial com alguns páginas e até uma mini Rest API. Pro
meu projeto atual não vou precisar mas fiquei surpresa quando vi, pode ser bem
útil em outros projetos.

Eu gosto muito que o Next.js cuida das rotas baseado na estrutura das pastas sem
a gente precisar configurar nada.

## Importando uma biblioteca externa que é rendereziada no cliente

De cara meu primeiro desafio foi lidar com o erro `ReferenceError: window is not defined`.
Ele apareceu quando tentei adicionar ao projeto uma
[biblioteca externa](http://wavesurfer-js.org) e inseri como sempre fiz em
qualquer outro projeto React - instalei com npm/yarn, e dei o import `import WaveSurfer from "wavesurfer.js";` e oops:

![Window not defined](/images/posts/window-not-defined.png)


A principio achei bem esquisito, já que o objeto [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) é basicamente a porta de entrada pro DOM da janela atual
onde o script está sendo rodado. Como assim ele não foi definido? Imaginei que
poderia ser algo relacionado ao documento ainda não ter sido renderizado então
adicionei o componente dentro do `useEffect`, mas continuei com o mesmo problema.
Depois de ler um pouco sobre que me toquei que esse código provavelmente está
sendo rodado do lado do servidor! E nesse caso não existe mesmo uma `window`.

Aí veio a segunda surpresa boa: a documentação do Next.js é ótima e já tinha uma
[seção só pra isso](https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr).
Eu passei por vários artigos e respostas no stackoverflow que
só induziam a um ctrl+c ctrl+v sem explicar direito. No fim bastava ler a
documentação para chegar na solução: o que queremos é que esse componente seja
renderizado apenas do lado do cliente. Pra isso basta fazer um import dinâmico
com a opção `ssr: false`, ou seja, sem renderizar no servidor.

```
const AudioPlayer = dynamic(() => import("../components/AudioPlayer"), {
  ssr: false,
});
``` 

E o componente AudioPlayer escrevo normal como em qualquer outro projeto React.

## Conclusão

O bom de ter lidado com esse erro logo de cara foi que me fez mudar a forma de
pensar no início do projeto e lembrar que a principal diferença do Next.js e
outros projetos React é justamente entender que o projeto é renderizado no
servidor ao invés do cliente, mas ao mesmo tempo ele permite esse dinamismo
quando precisamos que algo seja renderizado no cliente, dando o melhor dos dois mundos!