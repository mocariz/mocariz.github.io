---
layout: post
title: 'Gulp para Iniciantes'
date: 2017-01-16 20:30:00
image: '/assets/img/posts/gulp.jpg'
description: 'Aprenda a automatizar suas tarefas com Gulp.'
main-class: dev
home-style: size-2
box-style: "background: url('/assets/img/home/post-2017-01-16-2.png'); background-color: red;"
tags:
- CSS
- JS
- Gulp
- Front-end
- Task Runners
- Tutorial
categories:
twitter_text: 'Automatizando seu desenvolvimento front-end de forma fácil com gulp.'
introduction: 'Aprenda a automatizar seu ambiente de trabalho no desenvolvimento
frontend de uma forma bem fácil.'
---

## Introdução

Hi everyone =]

Espero que estejam bem, eu estou muito feliz que estou sendo capaz de cumprir com
meu objetivo de escrever toda semana. E está semana venho trazer pra vocês uma
tecnologia que mudou o meu mundo, sinceramente depois que conheci fui estudar
sobre e fiquei pensando `porque só descobri isso agora?`

## Você já ouviu falar do Gulp?

Tenho certeza que para muitos que estão lendo isto automatizador de tarefa é
algo novo na sua vida, e eu mesma devo afirmar que a alguns dias atrás era como você.

Se você programa front-end e:
- Escreve direto em css3.
- Usa F5 para atualizar a página.
- Sua página já quebrou porque não fechou uma tag.
- Seu js sangrou porque esqueceu uma }.
- Não valida seu código com um linter ou
- Roda os testes manualmente pra validar o código.

Se você se identifica em algumas das opções eu te direi o seu problema:
`Você não conhece o Gulp`. E diga que não conhece, pra não ficar feio.

![Gulp](http://www.madureira.me/wp-content/uploads/2015/07/gulp_logo.png)

## Mas então o que é Gulp?

O [Gulp](http://gulpjs.com/) é um automatizador de tarefas (Task Runner) voltado
para o desenvolvimento Front-end. Atualmente existe outras tecnologias que trabalham
com o mesmo objetivo como o [Grunt](http://gruntjs.com/) por exemplo, mas nunca
utilizei então não vou estar abordando (não é o foco também =] )

Automatizadores de Tarefas são ferramentas interessantes, ainda me lembro que no
meu estágio eu tinha um caderno onde anotava todo o processo da rotina utilizada
toda vez que precisava validar o javascript, iniciar um novo projeto, entre outros.

Mas você leu até aqui e ainda está se perguntando, `pra que uso isso?` Bem vamos
levar em conta que você já conhece os linters (csslint, jshint, eslint, etc) e
utiliza (utilize!), mas você faz isso manualmente, ou seja, você escreve seu código
e roda os teste de sintaxe. O que o gulp faz nesse cenário? Ele tira de você a tarefa
de ter que rodar os testes, porque `ele fará isso para você!`

E vou te contar, parece simples? sabe porque? `por que é simples!` Gulp é facil
de usar, ajuda pra caramba e ajuda a utilizarmos melhor nosso tempo. Ele permite
que você desenvolva mais rápido, melhorando seu desempenho e a qualidade do seu
trabalho.

Bem acho que já te consegui te convencer a usar então vamos lá

## Instalação

Pra utilizar o gulp é necessário ter o node.js instalado na sua máquina. Neste
tutorial procurarei fazer passo a passo.

O primeiro passo é criar o projeto, para isso crie uma pasta chamada Gulp, será o
nosso projeto. Então digite no terminal o comando `npm init` para criar o
arquivo package.json, que conterá todas as dependencias do projeto. Após isso
vamos instalar o gulp, a instalação é bem simples.

{% highlight  bash %}
## faz a instalação e adiciona a dependencia ao arquivo package.json
npm install gulp gulp-cli --save-dev
{% endhighlight %}

Caso de erros de permissão (acontece em sistemas Unix) insira **sudo** no inicio

Após isso vamos instalar os plugins (ou modulos) que iremos utilizar. Um fator
muito atraente no gulp é que ele tem plugin para tudo que você pensar.

{% highlight  bash %}

## faz a instalação e adiciona a dependencia ao arquivo package.json
npm install gulp-jshint gulp-concat gulp-uglify browser-sync --save-dev

{% endhighlight %}

O que cada pacote faz?

[gulp-jshint](https://www.npmjs.com/package/gulp-jshint) :
Foi desenvolvido para assegurar a qualidade e sintaxe do código. Basicamente, este plugin aplica as diretrizes de javascript, assegurando que o código se encontra dentro das conformidades.

[gulp-uglify](https://www.npmjs.com/package/gulp-uglify) :
UglifyJS é utilizado para comprimir o javascript. Se você está se perguntando o que é comprimir, é gerar aqueles arquivos min.js

[gulp-concat](https://www.npmjs.com/package/gulp-concat) :
Utilizado para concatenar arquivos. Através dele você pode estar juntando todos seus arquivos de javascript num só, embora eu não recomendo.

[browser-sync](https://browsersync.io/) :
Recarrega a página automaticamente (live load).

Voltando, agora vamos criar uma pasta chamada static dentro do nosso projeto, nesta
pasta estaremos salvando nossos arquivos javascript, e dentro de static crie a
pasta dist (onde será salvo o min.js).

Após isso você deve criar um arquivo chamado `gulpfile.js` na raiz do
seu projeto, este arquivo irá conter todas as configurações do gulp. Estas serão:

{% highlight  js %}

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var jshint      = require('gulp-jshint');

// diretorio dos arquivos js
var files = "./static/*.js"

// Criamos a tarefa js que será responsavel por validar os arquivos js
gulp.task('jshint', function() {
  gulp.src(files)
    .pipe(jshint())
    .pipe(jshint.reporter('default')); // imprime no terminal os erros encontrados
});

// Criamos a tarefa js que será responsavel por minificar os arquivos js
gulp.task('js', function() {
  gulp.src(files) // acessa os arquivos
    .pipe(concat('main.min.js')) // une todos os js num arquivo chamado main.js
    .pipe(uglify()) // faz a minificação
    .pipe(gulp.dest('static/dist/')); // salva na pasta dist o arquivo main
});

// Criamos a tarefa que irá recarregar a página
gulp.task('browser-sync', function() {
  browserSync({
    server: {
	   baseDir: './'
    }
  });
});

// Essa tarefa irá ficar "escutando" os arquivos js que especificamos
// e toda vez que ele for salvo irá chamar as tarefas anteriores na ordem passada
gulp.task('watch', function () {
  gulp.watch(files, ['jshint', 'js', 'browser-sync']);
});

// tarefa padrão do gulp
// dizemos que deve rodar as tarefas listadas
gulp.task('default', ['jshint', 'js', 'browser-sync', 'watch']);

{% endhighlight %}

As configurações que escrevemos acima são bem simples certo? O gulp ficará escutando
os arquivos .js da pasta static e toda vez que algum arquivo for salvo ele vai
verificar com o JSHint, então vai minificar todo o javascript e por fim recarregar
a página. Tudo isso automaticamente.

Para rodar o gulp é bem simples. Se você não definir uma tarefa ele roda por
padrão a tarefa default.

{% highlight  bash %}

## irá rodar a tarefa padrão default
gulp

## roda somente a tarefa jshint
gulp jshint

{% endhighlight %}

## Conclusão

Bem, foi um tutorial bem simples, feito para iniciantes, espero que tenham gostado.
Como vimos o gulp é bem facil de entender e de utilizar. Após aprender sobre ele
adicionei em todos meus projetos e se tornou indispensável para mim.

Se você gostou ou o contrário não se esqueça de deixar um feedback =]

### Créditos

Além disso utilizei durante meu estudo sobre gulp os seguintes artigos:

[Gulp: O novo automatizador](https://tableless.com.br/gulp-o-novo-automatizador/)

[Gulp desenvolvimentoparaweb](http://desenvolvimentoparaweb.com/javascript/gulp/)

[Gulp](http://gulpjs.com/)

[Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/)

[Browser-sync, indispensável para desenvolver sites em vários dispositivos](http://blog.caelum.com.br/browser-sync-indispensavel-para-desenvolver-sites-em-varios-dispositivos/)

[Browsersync + Gulp.js](https://browsersync.io/docs/gulp)
