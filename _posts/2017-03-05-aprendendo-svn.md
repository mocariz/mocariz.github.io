---
layout: "post"
title: "Guia para Iniciantes em SVN - Subversion"
date: "2017-03-05 19:00"
description: "Guia prático para controle de versão utilizando o SVN- Subversion"
image: "/assets/img/posts/svn.png"
main-class: dev
box-style: "background: url('/assets/img/home/post-2017-03-05.png');background-color: #E6C1FD; background-repeat: no-repeat; background-size: contain;"
tags:
- Tutorial
- Versionamento
twitter_text: "Guia para Iniciantes SVN"
introduction: "Manter o controle de versão dos projetos é um fator indispensável.
Neste guia aprenda os comandos básicos do SVN no uso diário."
---

## Apresentação

Hi everyone!

Como foi a semana de vocês? A minha anda sendo bem corrida, ultimamente não tenho
muito tempo livre, mas essa semana teve noticia boa, saiu o novo album do maravilhoso
Ed Sheeran [Divide](https://play.spotify.com/album/3T4tUhGYeRNVUGevb0wThu)
e devo confessar que não consigo parar de escutar, a música que mais gosto é What Do I Know?  :3

No meu dia-a-dia comecei a usar o SVN por causa do trabalho, e para isso tive que reaprender sobre ele
(ultima vez que usei foi em 2015), durante meus estudos tive que olhar varios sites
para entender a coisas, e resolvi reunir todo o conhecimento que adquiri e trazer em
forma de guia, então vamos lá?

## Introdução

Antes de tudo o que é importante saber o que é o SVN. O Apache Subversion, popularmente
conhecido como SVN é uma ferramenta para controle de versão. Mas o que é em si o
controle de versão? Controle de Versão é gerenciar as mundanças das informações
dos seus arquivos, mantendo um histórico sobre elas. Se você já conhece o GIT, a idéia
é semelhante.

Quando trabalhamos com versionamento, existe alguns conceitos básicos que é importante saber,
e não se preocupe se não memorizar na primeira vez, pois fica tão comum no seu dia-a-dia
que parece que faz parte do seu vocabulário depois.


 - `Repositório`: Local aonde estão contidos todos os arquivos do seu projeto.
 - `Working Copy`: Quando você baixa o projeto do seu repositório, chamamos de working copy, é a cópia de trabalho local
 onde você trabalha.
 - `Checkout`: Quando você faz o download do projeto para sua máquina local, mantendo vinculado ao SVN.
 - `Import`: Quando você envia um novo projeto da sua máquina local para o repositório do SVN.
 - `Export`: Quando você baixa um projeto do SVN sem vincular.
 - `Commit`: Sempre que você envia os dados modificados de um projeto para o repositório do SVN.
 - `Update`: Atualizar seu projeto local com o do SVN.
 - `Revision`: Número que identifica cada versão do seu projeto no repositório.
 - `HEAD`: É a revisão mais recente do repositório.
 - `trunk`: Onde está armazenado a versão estável mais recente do projeto.
 - `branches`: Onde é armazenado as versões de desenvolvimento paralelo ao trunk.
 É utilizado quando uma nova implementação pode comprometer o funcionamento do projeto,
 neste caso fazemos separado para não afetar o mesmo.
 - `tags`: São as etiquetas das revisões do trunk.
 - `Merge`: Quando vamos mesclar o desenvolvimento do trabalho paralelo ao principal.
 - `Switch`: Alteração do repositório utilizado por uma working copy. É realizada uma atualização ou mesclagem dos arquivos para assegurar que a working copy contenha exatamente o conteúdo do novo repositório mais quaisquer alterações locais.
 - `Relocate`: Quando vamos mudar o endereço de um repositório.

## Comandos

Agora que você já conhece o dicionário do SVN vamos começar a trabalhar com ele.
Para isso certifique-se de te-lo instalado na sua maquina.

### help
Sempre que você se encontrar em apuros, existe o help do SVN pra te salvar!
{% highlight bash %}
# lista todos os comandos disponiveis
svn help

# mostra o manual do comando co
svn help co
{% endhighlight %}

### import
Envia o projeto da maquina local para o repositório.
{% highlight bash %}
svn import caminho_dor_projeto
{% endhighlight %}

### checkout
Cria uma cópia do projeto do repositório na maquina local
{% highlight bash %}
svn checkout url_do_projeto_no_svn

# faz a mesma coisa que o comando acima
svn co url_do_projeto_no_svn
{% endhighlight %}

### update
Atualiza o projeto local ao do repositório
{% highlight bash %}
svn update url_do_projeto_no_svn

# faz a mesma coisa que o comando acima
svn up url_do_projeto_no_svn
{% endhighlight %}

### status
Lista os arquivos que foram alterados no projeto
{% highlight bash %}
svn update status

# faz a mesma coisa que o comando acima
svn st
{% endhighlight %}

### add
Adiciona um arquivo para ser adicionado ao repositório no proximo commit
{% highlight bash %}
# adiciona todos os arquivos modificados do projeto
svn update add .

# adiciona só o arquivo passado
svn add caminho_do_arquivo
{% endhighlight %}

### delete
Adiciona um arquivo para ser removido do repositório no proximo commit
{% highlight bash %}
svn delete caminho_do_arquivo

# faz a mesma coisa que o comando acima
svn del caminho_do_arquivo
{% endhighlight %}

### commit
Envia as alterações realizadas para o repositório
{% highlight bash %}
svn commit -m "mensagem do commit"

# faz a mesma coisa que o comando acima
svn ci -m "mensagem do commit"
{% endhighlight %}

## Finalizando

Bem gente, estes são os principais comandos que utilizamos, embora para ser sincera
eu não uso a maioria desses comandos pois utilizo o SVN pelo eclipse. Mas sempre
é bom saber o que cada uma faz, pois numa hora de apuros, tem o terminal pra salvar.
