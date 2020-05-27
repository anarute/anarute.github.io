---
title: "Como gravar sua tela em gifs animados no Linux"
slug: como-gravar-sua-tela-em-gifs-animados-no-linux
date: 2014-06-14 14:30:43
author: anarute
tags: ["gifs", "linux", "tools"]
fullscreen: false
---

**UPDATE 26/06/2017:** Encontrei uma opção bem mais interessante, o [Peek](https://github.com/phw/peek) que tem uma interface gráfica simples, mas que nos permite selecionar com o mouse a área que será gravada, além de controlar visualmente o início e fim da gravação. Testei no Fedora 25 e rodou tranquilamente, vale a pena dar uma olhada: [https://github.com/phw/peek](https://github.com/phw/peek)

---

Todo mundo que me conhece sabe que sou fã incondicional de gifs animados. Ultimamente fui surpreendida pela popularização da utilização de gifs em tutoriais e documentações técnicas, algo que eu ainda não havia pensado sobre mas que achei genial pela simplicidade e eficiência dessa prática. Além de tornar documentações e tutoriais muito mais envolvente. Veja um exemplo que estamos usando na [Escola Mupi](http://escolamupi.com.br "Escola Mupi") ([aqui](http://line25.com/articles/creative-uses-animated-gifs-present-ui-designs "Exemplos de gifs em UX") tem uns legais também):

![](/images/posts/doc-titulo.gif)

Existem várias formas de se fazer isso. Você pode, por exemplo, gravar sua tela em video e depois editar exportando para gif (o Adobe Premiere faz isso, Camtasia também, e existem alguns programas só para este fim). Mas como uso Linux, precisei aprender como fazer isso sem esses programas que só rodam no Windows ou Mac OS, e encontrei o Byzanz, que você pode ver seu [código aqui](https://github.com/GNOME/byzanz "Código Byzanz").  
O Byzanz permite gravar a tela diretamente em um gif animado. Como não encontrei muitas informações sobre ele (parece que seu site está fora do ar), resolvi criar esse tutorial para ensinar como utilizá-lo, já que o achei super simples e soluciona muito bem essa necessidade.  
_Spoiler_: é tudo pela linha de comando então se você, assim como eu, tem muito apego visual, recomendo um pouquinho de paciência que no fim das contas é simples de usar e é possível que você vicie e queira gravar tudo! :)

**1 - Instalar o Byzanz** Abra o seu terminal e execute os passos abaixo para instalar o Byzanz.  
Se você usa Fedora e Gnome, o byzanz já está no repositório do Fedora então basta instalar:

<pre>$ sudo yum install byzanz</pre>

No Ubuntu 14.04:

<pre>$ sudo add-apt-repository ppa:fossfreedom/byzanz
$ sudo apt-get update
$ sudo apt-get install byzanz
</pre>

**2 -** [Opcional] **Instalar o Wmctrl**  
Esse passo é mais uma dica, ele não é necessário. Mas através do [Wmctrl](http://tomas.styblo.name/wmctrl/ "Wmctrl") (um comando que permite você gerenciar suas janelas) a gente consegue experimentar tamanhos e posicionamentos de janelas para definir a área a ser gravada antes de usar o Byzanz.  
Para instalar é igual ao passo 1:

- Para Fedora:

<pre>$ sudo yum install wmctrl</pre>

- Para Ubuntu:

<pre>$ sudo apt-get install wmctrl</pre>

Se não achar o Wmctrl, leia [este tutorial](http://www.installion.co.uk/ubuntu/saucy/universe/w/wmctrl/pt/install.html "Instalando o Wmdctrl").

**3 - Definindo o tamanho da janela que você quer gravar.**  
Com o Wmctrl fica bem mais fácil essa etapa, por isso o passo dois. A linha abaixo está dizendo para posicionar a janela atual (no caso sua janela do terminal) se posicionar 500 pixels à direita (eixo x), 100 pixels abaixo (eixo y), com a largura (width) de 800 pixels e altura de 600 (altura) pixels. A opção `-e` significa que ele vai redimensionar a janela com os parâmetros definidos.

<pre>$ wmctrl -r :ACTIVE: -e 0,500,100,800,600</pre>

E é só isso que precisamos do Wmctrl, se quiser ver mais opções é só ver o help do Wmctrl com o comando `$ wmctrl --help`. Agora você pode ficar experimentando os valores até achar o que quer:  
![terminal](/images/posts/terminal.gif)

**4 - Gravando a tela com o byzanz**  
Com os valores de tela definido, você posiciona a janela que vai ser gravada, seu navegador por exemplo, no local que ficou sua janela do terminal do passo três.  
O uso do byzanz usa os seguintes parâmetros: `byzanz-record [opções] nomedoarquivo.gif`. No caso do meu exemplo usei o comando abaixo, onde `-d 10` se refere à duração da gravação e `-c` que vai gravar o cursor:

<pre>$ byzanz-record -d 10 -c --x=500 --y=100 --width=800 --height=600 terminal.gif</pre>

Para conferir o resultado é só ir na pasta onde você salvou e abrir o gif no seu navegador :)  
Para mais opções do byzanz basta acessar seu manual: `byzanz-record --help`

E seu gif está pronto! Simples, não? Eu particularmente achei muito melhor do que depender de editores de videos pesados que demoram pra renderizar e são difíceis de mexer.  
Agora é experimentar, boas gravações!  
Ah, e se for gravar pra web só cuidado com o tamanho final dos gifs, afinal cada frame é uma imagem que podem custar caro pra sua performance.
