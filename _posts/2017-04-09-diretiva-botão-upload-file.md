---
layout: "post"
title: "Customizando File Input Buttom"
date: "2017-04-09 22:00"
description: "Aprenda como personalizar seu botão de upload de maneira fácil e sem redundância!"
image: "/assets/img/posts/2017-04-09-diretiva-botão-upload-file.png"
main-class: "javascript"
tags:
- AngularJS
- JavaScript
- Front-end
- Tutorial
twitter_text: "Diretiva para file upload buttom"
introduction: "Aprenda como criar um diretiva para adicionar um botão personalizado de upload de arquivos"
---

## Apresentação

Boa noite galera, depois de muito tempo resolvi voltar a aparecer aqui hehe. E nesse tempo aprendi bastate coisas novas e pretendo recuperar o atraso nos próximos dias, por isso se preparem :3.

E se você está pensando em assistir algo, super apoio [Cheese in the Trap](http://boxasian.com/tv-series/cheese-in-the-trapce/) (que por sinal estou assistindo de novo =p).

## Introdução

Eu já falei sobre [diretivas](https://monicamota.com.br/entendendo-diretiva-angular/) por aqui, elas são muito úteis quando você tem tarefas repetitivas e precisa simplificar. Nas últimas semanas tenho tido bastante contato com elas uma vez que voltei a programar em AngularJS.

No assunto de hoje venho apresentar como criar um botão personalizado de File Upload.

## Problema
Imagine que você tenha no seu sistema um botão de upload de arquivo como o abaixo e você deseja alterar o nome do botão. Além disso você precisa
usar o mesmo em varias páginas, o que significa? Que você precisa criar uma diretiva!

![File Upload Button](/assets/img/posts/2017-04-09/file-upload.png)

## Solução

Como devem saber, existe muitos sites que ensinam como personalizar o botão de upload, mas a forma como fazem isso não
é muito recomendável, funciona? sim, mas não é correta. Normalmente dizem para você criar um botão, e colocar o de upload em cima, e esconder o mesmo com opacidade 0.

Eu não queria fazer assim, e não recomendo, por isso fui atrás de uma solução mais viável. Então tive a ideia de ao invéz de colocar um botão sobre o outro, ao clicar no meu  botão, acionar via JavaScript o evento
click bo botão file input.

A primeira coisa que fiz foi criar um diretiva com o html do botão, pois eu posso precisar em varias páginas e não quero ficar escrevendo sempre que precisar o código de novo.

{% highlight javascript %}
define([ 'MMOAPP' ], function(IFCAPP) {
    'use strict';

    MMOAPP.directive('fileUpload', function () {
        return {
            restrict: 'E',
            templateUrl : "/mocariz/js/directive/templates/FileUploadTemplate.html",
            link: function(scope, element, attrs) {
                /*
                * Adiciona o valor do botão a váriavel myFile
                */
                element.bind('change #importedFile', function (event) {
                    scope.$apply(function() {
                        var value = event.target.files[0];
                        scope.myFile = value;
                    })
                });

                /*
                * Chama o evento clique do botão importedFile sempre que clicarem
                * no botão customizado
                */
                element.bind('click.btnSelectFile', function () {
                    document.getElementById('importedFile').click();
                });
            }
        };
    });
});
{% endhighlight %}

Explicando sobre a diretiva, ela é bem simples, como não defini o escopo, ela compartilha o mesmo do controller da página
que for inserida, nesta só existe uma restrição, os dados do arquivo selecionado são adicionados a váriavel `myFile`.

A minha diretiva vai trabalhar com dois botões: `importedFile` é o botão padrão do tipo file e `btnSelectFile` é o meu botão customizado

Na directiva criei duas funções, a primeira é chamada sempre que o valor do botão importedFile muda. E faz exatamente como diz o comentário.

A segunda função é acionada sempre que clicamos no botão importedFile, e chama o evento clique do botão importedFile.
Este ponto é interessante, com está função evitamos ter que fazer aquela *gambiarra* de colocar um botão sobre o outro.

Depois você deve criar o HTML da diretiva, eu coloque no arquivo FileUploadTemplate.html
{% highlight html %}
    <!-- personalized button -->
    <button class="btn btnSelectFile">
        <a href="javascript: void(0)">Clique para selecionar um arquivo</a>
    </button>
    <span ng-bind-template="{{ myFile.name }}" title="{{ myFile.name }}"></span>

    <!-- default buttom -->
    <input type="file" id="importedFile" class="hide" />
{% endhighlight %}


## Conclusão

Com isso basta agora aplicar o css desejado sobre o nosso botão e na página adicionar a diretiva `<file-upload></file-upload>`.
Não entrarei em detalhes de personalização pois isso é pessoal, mas recomendo este [post](https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/).

Além disso é possivel acessar a váriavel `myFile` no controller  da página quanto no da diretiva sem problemas!

E com isso temos a nossa diretiva que adiciona um botão de upload de arquivo na página. Espero que tenham gostado.
