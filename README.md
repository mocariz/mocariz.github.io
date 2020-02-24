# mocariz.github.io


Este projeto é um blog pessoal criado para compartilhar experiências e conhecimentos adquiridos no dia a dia.

O blog foi criado utilizando Jekyll e é hospedado usando o Github Pages, tudo isso você encontra no [curso](https://www.udemy.com/share/1000LeAkAbdF1aQX4=/) do Willian Justen.


# Basic Setup

Install: 
- [Ruby](https://www.ruby-lang.org/en/downloads/)
- [Jekyll](https://jekyllrb.com/docs/)
- [Node](https://nodejs.org/en/)


# Running the blog in local

Clone the repo in your machine and install the project dependencies:

``` bash
npm i -D

npm install gulp-cli -g

```

To run your project on local:

``` bash
npm run gulp
```

# Creating posts
You can use the initpost.sh to create your new posts. Just follow the command:

``` bash
./initpost.sh -c Post Title
```

The new file will be created at _posts with this format date-title.md.