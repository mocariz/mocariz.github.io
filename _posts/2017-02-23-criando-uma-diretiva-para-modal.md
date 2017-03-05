---
layout: "post"
title: "Como criar uma Diretiva em AngularJS para geração de um Modal"
date: "2017-02-23 21:30"
description: "Aprenda a escrever uma diretiva para a criação dinâmica de um modal
e remova a redundância de cógido usando Angular.js e Bootstrap!"
image: '/assets/img/posts/diretiva-modal-angular.png'
main-class: javascript
color:
tags:
- AngularJS
- JavaScript
- Bootstrap
- HTML5
- Front-end
- Tutorial
twitter_text: "Crie em poucos minutos um modal usando bootstrap e angular.js"
introduction: "Aprenda a escrever uma diretiva para a criação dinâmica de um modal
e remova a redundância de cógido usando Angular.js e Bootstrap!"
---

## Introdução

Hi everyone!

Hoje é uma quinta-feira e com a barriga cheia de pizza (comi DEMAIS) venho
escrever pra vocês e dessa vez estou assistindo [Tomorrow with You](http://kissasian.com/Drama/Tomorrow-With-You),
engraçado neh, como você está escrevendo e assistindo série? é gente sou assim mesmo.

## Quem nunca teve que escrever o mesmo código duas vezes em lugares diferentes?

Não existe alguem que nunca tenha passado por isso! Mesmo que seja no inicio, a gente
passa por essa situação e sempre chegamos ao mesmo ponto: Como fazer para não precisar
sempre escrever a mesma coisa? Como fazer para tornar isso dinâmico? O assunto
hoje é nesta linha de pensamento.

### Problema

Imagine que você tem um site, onde em várias páginas utiliza um modal. Você precisa
escrever aquela estrutura do modal 1, 2, 5 vezes. Como fazer para não precisar escrever o mesmo
html tantas vezes?

O objetivo é construir uma diretiva em Angular.js para a criação de um Modal
utilizando Bootstrap. No final deste post você poderá gerar um modal como o mostrado
abaixo através da diretiva que desenvolveremos:
![Modal Bootstrap](/assets/img/posts/modal.png)
## Lets Start

O primeiro passo é criar o diretiva, irei levar em conta que você já possui conhecimento
prévio em Angular.js então não entrarei em detalhes. Na diretiva escreveremos:

{% highlight  bash %}
app.directive("dinamicModal", function() {
    return {
      restrict: "E",
      replace: true,
      transclude: true,
      template: "", // adicione o template do modal aqui
      scope: {
        title: "@",
        buttonText: "@"
      }
    };
});
{% endhighlight %}

Na primeira linha criamos a diretiva `dinamicModal`.

Na terceira linha definimos como do tipo `E`, ou seja, sempre que formos chama-la
no template será através de uma tag html `dinamic-modal`.

Como definimos replace como True na quarta linha, tudo que for colocado no dentro da tag
será adicionado a primeira linha do html do modal.

Além disso na quinta linha definimos transclude como True, isso significa que todo o
conteudo escrido dentro da tag `<dinamic-modal></dinamic-modal>` vai ser colocado
dentro da div que conter a tag do angular `ng-transclude`.

No template definimos o template que contém o html da estrutura do modal. E no scope
podemos definir variaveis do controller que desejarmos passar para o modal.

Após entender o que a diretiva que escrevemos faz, devemos criar o template com a
estrutura do modal. Neste passo a passo usaremos o Bootstrap para criar um modal.
{% highlight html %}
<!-- Modal -->
<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">{{ title }}</h4>
      </div>
      <div class="modal-body" ng-transclude>
        <!-- todo html escrito dentro da tag da diretiva será colocado aqui-->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">{{ buttonText }}</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

Após isso sempre que quiser adicionar um modal, basta chamar a diretiva **dinamic-modal**
como uma tag html, todo html escrito dentro dela será inserido dentro da div
modal-body. Como por exemplo o código abaixo:

{% highlight html %}
<dinamic-modal id="modal" title="modaltitle" buttonText="buttonmodal">
  <div class="alert alert-info alert-dismissible">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
    <h4><i class="icon fa fa-info"></i> Alert!</h4>
    Info alert preview. This alert is dismissable.
  </div>
</dinamic-modal>
{% endhighlight %}

Ao inserir o código acima no seu html o resultado final será:

{% highlight html %}
<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" id="modal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Modal Titulo</h4>
      </div>
      <div class="modal-body">
        <div class="alert alert-info alert-dismissible">
          <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
          <h4><i class="icon fa fa-info"></i> Alert!</h4>
          Info alert preview. This alert is dismissable.
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

Legal neh? Após isso se precisar mudar algo na estrutura do modal, você precisa mudar
em um só lugar e sempre que quiser criar um modal será bem mais simples.

Até semana que vem :3
