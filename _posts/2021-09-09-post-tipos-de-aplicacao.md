---
layout: post
title: "Tipos de Aplicação"
date: 2021-09-09 20:57:23
image: '/assets/img/posts/2021-09-09-post-tipos-de-aplicacao.jpg'
description: "Entenda a diferença entre SSR, SPA E SSG e quando melhor usar"
box-style: "background: url('/assets/img/posts/2021-09-09-post-tipos-de-aplicacao.jpg'); background-color: #fff; background-repeat: no-repeat; background-size: contain; background-position: center;"
color: "#333"
main-class: dev
tags:
- ssr
- spa
- ssg
- Front-end
twitter_text: "Entenda a diferença entre SSR, SPA E SSG e quando melhor usar"
introduction:
---

### Boa noite =]

Hoje depois de muito tempo, eu decidi voltar a mexer no blog, e escrever de vez em quando. Como eu fiz algumas vezes antes, o tema de assunto é livre, e hoje decidi escrever sobre algo que eu li recentemente, e nada melhor que fazer suas anotações para gravar melhor.
Pra me acompanhar hoje vou estar ouvindo a rádio do [Jang Keun-suk](https://open.spotify.com/playlist/37i9dQZF1E4mz83Dqk2uLw?si=8b091601d146429c) no spotify.

E caso você esteja procurando algo para ler, também quero deixar uma recomendação. Recentemente finalizei [A cidade murada](https://www.amazon.com.br/cidade-murada-Ryan-Graudin-ebook/dp/B00XQ3Z814/ref=sr_1_1?adgrpid=79540434685&gclid=Cj0KCQjw4eaJBhDMARIsANhrQAC71sKpvvFlJ_ps3MGgzMgSFP50fS0iTxn39q8Hc-BABKVXywW5y1oaAj_CEALw_wcB&hvadid=425982500761&hvdev=c&hvlocphy=1001772&hvnetw=g&hvqmt=e&hvrand=3755098264321281830&hvtargid=kwd-489795841156&hydadcr=5625_11235137&keywords=a+cidade+murada&qid=1631232527&sr=8-1), um livro muito bom, sobre drama/ação.

# Tipos de Aplicação

Hoje vamos entender a diferença entre 3 tipos de Aplicações web, elas são:

- SSG (Static site generation)
- SPA (single page application)
- SSR (server side rendering)

## SSG (Static Site Generation)

> Tecnologias: GatsbyJS, Hexo, NextJs

No modelo SSG como o nome diz, é um site estático com um conteúdo fixo. As páginas são geradas já com o conteúdo que será exibido durante o build do projeto, fazendo assim que o carregamento seja mais rápido. Esse modelo de página não é recomendado quando se deseja tem um conteúdo dinâmico.

Abaixo segue um video exemplificando:

<iframe width="560" height="515" src="https://www.youtube.com/embed/1zhT23VDVDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## SPA (Single Page Application)

> Create React App, NextJs

No modelo SPA, o carregamento dos dados acontece do lado do cliente, o que isso significa? Que quando o usuário acessa a página, o navegador bate na CDN que vai carregar os arquivos estáticos, como index.html, app.js etc. Após carregar os arquivos base da aplicação, ele vai fazer as chamadas para as APIS REST para pegar os dados e popular a página. Durante esse momento, fica aquele famoso loading na tela, que é o momento que os dados estão sendo carregados.

Embora possua esse carregamento dos dados, para o usuário final a navegação é fluída, pois os arquivos base da aplicação já estão carregados.

<iframe width="560" height="515" src="https://www.youtube.com/embed/4-Lel1oaV7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## SSR (Server Side Rendering)

> NextJs

Neste modelo acontece a grande mudança, aqui tudo é renderizado do lado do servidor, tornando o carregamento da página mais rápido.

Neste modelo, ao acessar uma página, o navegador bate no servidor, que então identifica quais APIS precisam ser chamadas, faz a chamada, recebe os dados, cria o html com os dados e só então retorna para o navegador. Tirando assim a necessidade do loading.
Neste caso é bem semelhante ao SSG, tirando o fato que os dados são dinâmicos.

<iframe width="560" height="515" src="https://www.youtube.com/embed/0bvo6UKkNDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A utilização de cadas um vai da necessidade do produto, cada modelo tem suas vantagens e desvantagens.

## Vantagens:
<table style="width:90%;">
<thead>
  <tr>
    <th>SSG</th>
    <th>SPA</th>
    <th>SSR</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>
      <ul>
        <li>Melhor performance</li>
        <li>Uso quase nulo do servidor</li>
        <li>Pode ser servidor numa CDN (cache melhor)</li>
        <li>Flexibilidade para usar qualquer servidor</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>
          Permite páginas ricas em interações sem recarregar (Pode ocasionar “alívio” ao servidor da aplicação já que não há a necessidade de ficar recarregando os aquivos)
        </li>
        <li>Site rápido após o load inicial</li>
        <li>Ótimo para aplicações web</li>
        <li>Possui diversas bibliotecas (Angular, React, Vue)</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>É ótimo em SEO</li>
        <li>Melhor performance para o usuário (pode ser visto mais rápido)</li>
        <li>Menor processamento no lado do usuário</li>
        <li>Código compartilhado com o backend em Node</li>
      </ul>
    </td>
  </tr>
</tbody>
</table>

## Desvantagens:

<table style="width:90%;">
<thead>
  <tr>
    <th>SSG</th>
    <th>SPA</th>
    <th>SSR</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>
      <ul>
        <li>Alto tempo de building</li>
        <li>Dificuldade para escalar grandes aplicações</li>
        <li>Dificuldade para fazer atualizações constantes</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Load inicial pode ser muito grande</li>
        <li>Performance imprevisível</li>
        <li>Dificuldade no SEO</li>
        <li>A maioria não é indexado</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>TTFB(Time to first byte) maior, o servidor vai preparar todo o conteúdo para entregar</li>
        <li>HTML maior</li>
        <li>Reload completo nas mudanças de rotas (ele precisa recarregar a cada rota passada)</li>
      </ul>
    </td>
  </tr>
</tbody>
</table>

## Mas quando usar um ou usar o outro?

Essa é uma pergunta que varia de acordo com o objetivo a ser alcançado, e os recursos disponíveis.

### SSG é uma boa opção caso:
- Aplicação pequenas, sem muitas páginas
- Quando o conteúdo muda pouco
- Páginas simples, sem muita interação com o usuário
- Quando performance é um ponto chave
- Quando apenas 1 pessoa atua na atualização de conteúdo

**ex:** blog, lading page, portfólios

### SPA é uma boa opção caso:
- Não a tanta necessidade de SEO
- Páginas com bastante interações com o usuário
- Quando o conteúdo é dinamico, e sempre está mudando.

**ex:** facebook, twitter

### SSR é uma boa opção quando:
- Quando existir a necessidade da fluidez do SPA, porém, com loading mais rápido
- Quando a aplicação tem muitas páginas
- Quando SEO é um ponto chave

**ex:** ecommerce, sites de noticias


### Artigos de referencia:

- [SPA e SSR: quais as diferenças?](https://www.treinaweb.com.br/blog/spa-e-ssr-quais-as-diferencas)
- [Tipos de aplicações](https://dev.to/andresdosantos/tipos-de-aplicacoes-1ali)
- [NextJS - O que é? Qual diferença entre SSG, SPA, SSR? Quando usar?
](https://www.youtube.com/watch?v=X3W-YFe2_io)
