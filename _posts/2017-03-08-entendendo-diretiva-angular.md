---
layout: "post"
title: "Entendendo como funciona o Escopo nas diretivas do AngularJS"
date: "2017-03-08 21:30"
description: "Entenda como funciona a váriavel scope nas diretivas do angularJS"
image: ""
main-class: "javascript"
tags:
- AngularJS
- JavaScript
- Front-end
- Tutorial
twitter_text: "Como funciona o escopo na diretiva AngularJS"
introduction: "Entenda as configurações da variavel Escopo nas diretivas do
AngularJS"
---

# Atenção

Você está convidado a participar do [Workshop Django Girls](https://djangogirls.org/saojosedoscampos/apply/)
que vai acontecer em São José dos Campos no dia `20 de maio`!!!


## Introdução

A alguns dias atrás escrevi sobre como [Criar uma diretiva para gerar um modal](https://monicamota.com.br/criando-uma-diretiva-para-modal/), mas depois de
escrever sobre isso eu fiquei me perguntando sobre o quão longe pode ir os dados
que passamos pelo `scope`.

Pelo scope podemos conectar dados e funções entre directivas e/ou entre controllers.
É incrivel como podemos fazer diretivas trabalharem entre si tornando bem flexível.

## Você entende de herança no AngularJS?

Antes de entender como funciona o scope é importante entender como funciona o
sistema de herança dentro do AngularJS. Diferente de outros frameworks que utilizam
o padrão MVC o angular não tem classes ou funções para a criação de models. No AngularJS
você  utiliza metodos e propriedades customizadas para estender objetos JavaScript.

Sempre que queremos herdar um objeto no angular colocamos este dentro do scope. Escopos podem
ser herdados, variávies declaradas não. O scope pode ser passado entre directives, controllers e services.

No angular a primeira coisa que fazemos quando começamos é criar o rootScope onde
passamos as configurações e informações fundamentais que serão utilizadas no
projeto. Quando criamos um controller, directive ou services estes automáticamente
herdam do rootScope, isso significa que todo scope criado em qualquer um deles
são herdados do rootScope.

Quando criamos uma diretiva o scope pode assumir 3 caminhos diferentes:
- true
- false (padrão)
- isolate

### scope: true
Cria um novo scope, mas herda o scope do Controller, ou seja, seu scope pai
será o scope do Controller, não o rootScope.

{% highlight javascript %}
app.directive("example", function() {
    return {
      restrict: "E",
      replace: true,
      transclude: true,
      scope: true
    };
});
{% endhighlight %}

### scope: false
Configuração padrão do scope, onde o scope da diretiva herda o escope do rootScope.

{% highlight javascript %}
app.directive("example", function() {
    return {
      restrict: "E",
      replace: true,
      transclude: true,
      scope: false
    };
});
{% endhighlight %}

### scope isolate
Nesta forma você cria um scope isolado que por padrão não herda do scope pai, mas
você pode passar por configuração para acessar o scope pai.

Quando você faz isso o scope da diretiva faz uma ligação com o scope pai.
{% highlight javascript %}
app.directive("example", function() {
    return {
      restrict: "E",
      replace: true,
      transclude: true,
      scope: {
        classe: "="
      }
});
{% endhighlight %}

Falando de forma técnica:
> O scope isolado pega um objeto/hash que leva você às propriedades do scope pai e binda elas no scope local - nomadev

Os 3 caminhos possíveis são:

- @: pega o valor do scope pai, deve ser passado entre {}, como uma expressão
- =: pega um valor passado diretamente via atributo para directiva
- &: pega uma expressão ou método que será executada no scope da directiva, lembre-se
que quando usar na html da diretiva deve colocar  o ()

Para entender a diferença entre @ e = considere a diretiva abaixo.
{% highlight html %}
<exempla class="classe">
  <alert>Atenção!</alert>
</example>
{% endhighlight %}

No exemplo acima usamos o tipo `=`, assim a diretiva fica esperando o nome do model
para fazer o data-biding. Se usássemos o tipo `@` classe ficaria dentro de {} como
uma expressão do angular.

Bye Bye :3
