---
layout: "post"
title: "Entendendo como funciona o Escopo nas diretivas do AngularJS"
date: "2017-03-08 21:30"
description: "Entenda as configurações o scope dentro das diretivas do
AngularJS"
image: "/assets/img/posts/2017-03-08-entendendo-diretiva-angular.png"
main-class: "javascript"
tags:
- AngularJS
- JavaScript
- Front-end
- Tutorial
twitter_text: "Como funciona o escopo na diretiva AngularJS"
introduction: "Entenda as configurações o scope dentro das diretivas do
AngularJS"
---

# Atenção

Você está convidado a participar do [Workshop Django Girls](https://djangogirls.org/saojosedoscampos/apply/)
que vai acontecer em São José dos Campos no dia `20 de maio de 2017`!!!


## Introdução

A alguns dias atrás escrevi sobre como [Criar uma diretiva para gerar um modal](https://monicamota.com.br/criando-uma-diretiva-para-modal/), mas depois de
escrever sobre isso eu fiquei me perguntando sobre o quão longe pode ir os dados
que passamos no `scope`.

Pelo scope e podemos conectar dados e funções entre directivas e/ou entre controllers.
É incrivel como podemos fazer diretivas trabalharem entre si tornando bem flexível.

## Você entende como funciona herança no AngularJS?

Antes de entender como funciona o scope é importante entender como funciona o
sistema de herança dentro do AngularJS para poder ter uma clara visão sobre o scope.

No angular uma das primeiras coisas que fazemos é definir no $rootScope as funções
e configurações da aplicação. Quando criamos uma directive, controller ou service
acaba que sempre acabamos herdando as configurações do $rootScope.

Sempre que queremos herdar um objeto no angular colocamos este dentro do scope. Escopos podem
ser herdados, variávies declaradas não. O scope pode ser passado entre directives, controllers e services.

![Piramide de herança no angular](/assets/img/posts/angular-heranca.png)

Quando criamos uma diretiva o scope pode assumir 3 caminhos diferentes:
- true
- false (padrão)
- isolate

### scope: true
Cria um novo scope, mas herda o scope do Controller, ou seja, seu scope pai
será o scope do Controller, não o rootScope, mas como o scope do controller
pode herdar do $rootScope acaba que ele também tem acesso =p.

Quando usamos scope como true significa que o mesmo scope é usado na diretiva, ou seja,
o controller da diretiva e o controller da página vão compartilhar o mesmo scope.
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
Configuração padrão do scope, onde o scope da diretiva herda o escope do rootScope,
e não tem acesso direto ao scope do controller da página.

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
você pode passar atravéz de variaveis informações e métodos do scope pai para a
diretiva.
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
- =: pega um valor passado diretamente via atributo para a directiva
- &: pega uma expressão ou método que será executada no scope da directiva.

obs: Se usar o tipo `&` para enviar uma função, lembre-se que ao usar a mesma no
html da diretiva não pode esquecer dos ().

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
