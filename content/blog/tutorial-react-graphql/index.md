---
title: Consumindo API GraphQL em React.js com Apollo client
date: 2020-09-01
description: Tutorial montando uma aplicação frontend em React.js para consumir dados de uma API em GraphQL.
---

![fruits](fruits.jpg)

Essa é a segunda e última parte da série de como montar uma aplicação completa em GraphQL. Aqui vamos construir uma aplicação frontend para interagir com o backend criado no primeiro tutorial.

Para seguir com esse tutorial, é necessário noções de GraphQL, além de React.js. Para se familiarizar com GraphQL, veja o seguinte artigo:

📝 [_GraphQL: O que é e como usar_](/blog/introducao-a-graphql)

Se quiser ver o primeiro tutorial de como montar uma API GraphQL, veja o seguinte artigo:

📝 [_Montando API GraphQL em Node.js com Apollo e MongoDB_](/blog/tutorial-api-graphql/)

Você pode acompanhar o tutorial passo-a-passo ou clonar o repositório completo do GitHub.<br />
Além disso eu disponibilizei uma versão online (sem mutations para que não haja mudança nos dados online) a título de exemplo do resultado final da API. Links abaixo:

## A proposta

A proposta é um website sobre frutas onde podemos gerenciar os dados fazendo as operações **CRUD**. O site será feito em React.js e o servidor será em Node.js. Nesse tutorial desenvolveremos a **API em GraphQL**.

## O stack

No frontend, teremos:

- Framework [React.js](https://reactjs.org/) para construir a aplicação
- [Apollo Client for React.js](https://www.apollographql.com/docs/react/) para consumir dados da API GraphQL em React.js

## Inciando App React.js

Aqui devemos continuar dentro da pasta `fruits` de onde começamos no tutorial anterior. Dentro dela, execute o seguinte comando para [iniciar um projeto react](https://create-react-app.dev/docs/getting-started/):

```bash
npx create-react-app frontend
```

Quando terminado o processo, uma pasta `frontend` terá sido criada com a aplicação inicial React.js:

```
📦fruits
┣ 📂backend
┣ 📂frontend
```

Abra um terminal de comandos e navegue para a pasta `fruits/frontend`. Verifique que funcionou executando:

```bash
npm i
npm start
```

Deverá abrir a tela inicial do gerada com create-react-app na porta 3000:

[http://localhost:3000](http://localhost:3000/)

![create react app inicial screen](create-react-app.jpg)

Aplicação iniciada!

Antes de começarmos, a ferramenta create-react-app cria alguns arquivos que não serão necessários aqui como arquivos de teste e configuração de service worker. Apague todos esses arquivos, até ficar com a seguinte estrutura:

```
📂frontend
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┣ 📂src
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.js
 ┃ ┣ 📜index.css
 ┃ ┣ 📜index.js
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
```
