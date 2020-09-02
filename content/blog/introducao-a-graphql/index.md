---
title: "GraphQL: O que é e como usar"
date: 2020-07-02
description: Introdução à GraphQL, o que significa e como implementar usando Apollo em um projeto real com React.js, Node.js e Banco de Dados MongoDB.
ogimage: "its-simple.jpg"
---

![it's simple](its-simple.jpg)

> Descreva seus dados <br />
> Peça o que quiser <br />
> Tenha resultados previsíveis <br />
> — [graphql.org](https://graphql.org/)

GraphQL significa **Graph Query Language**, como o nome sugere é uma linguagem de query assim como SQL (Structured Query Language) porém seu uso não envolve implementar banco de dados, mas sim, **definir dados** seja para API ou servidor.

## Graph

O [_Graph_](https://graphql.org/learn/thinking-in-graphs) em GraphQL é para **gráfico**. O time do Facebook responsável pela linguagem aposta num modelo mental gráfico como uma forma de definir os dados. Dessa forma, a linguagem oferece a habilidade de modelar dados usando schemas. O resultado disso é um paradigma muito parecido com o formato JSON. Por exemplo, para definir um dado que representa um usuário com _id_, _name_, _email_ e _bio_, teríamos o seguinte **schema**:

```graphql
type User {
  id: ID
  name: String
  email: String
  bio: String
}
```

## QL

A proposta do GraphQL, porém, não é apenas definir dados em schemas mas também fazer possível que consumidores desses dados disponham de uma forma padronizada de consumi-los. É aí que entra o [_QL_](https://graphql.org/learn/queries/) do termo, já que podemos usar uma **linguagem de query** para fazer chamadas e consumir tais dados. Dessa forma, para consumir dados usando o exemplo de usuário acima, podemos fazer **queries** como:

```graphql
query getUsers {
  users {
    name
    bio
  }
}
query getUserById {
  user(id: "123") {
    name
    bio
  }
}
```

Note que nas queries acima está descrito que apenas queremos os itens _name_ e _bio_ do usuário ignorando, assim, os itens _id_ e _email_. Como toda boa linguagem de query, GraphQL permite especificar apenas os campos desejados para uma determinado uso, isso aprimora performance quando temos um dado grande e queremos apenas parte dele.

Como resultado da query acima temos o **resultado** representado em JSON:

```json
{
  "name": "Maria",
  "bio": "Uma garota legal"
}
```

## Schema e Type

Para modelagem de dados em GraphQL usa-se tipos (type). Como o nome sugere é um tipo de dado. Esse tipo pode ser definido a partir de dominio de negócio, como por exemplo o tipo usuários definido acima. Os tipos são definidos no lado do servidor.

## Query e Mutation

Dados de um servidor GraphQL são consumidos através de queries feitas pelo cliente. Assim como query é usada para **bucar** dados, mutation é usada para **criar**, **alterar** ou **deletar** dados do banco de dados. Seguindo o exemplo da query de usuários definida acima, as mutations para usuários ficariam da seguinte maneira:

```graphql
mutation createUser(name: "João", email: "…", bio: "…") {
   id
   name
   email
   bio
}
mutation updateUser(id: "123", …) {
   id
   name
   email
   bio
}
mutation deleteUser(id: "123") {
   id
   name
   email
   bio
}
```

No bloco de cada schema é definido quais campos devem ser retornados após a operação concluir. É uma boa prática retornar o resultado da operação assim o cliente não precisa fazer uma chamada subsequente para re-capturar os dados alterados. Assim como as queries, mutations também retornam em formato JSON:

```json
{
  "id": "123",
  "name": "Maria",
  "email": "…",
  "bio": "…"
}
```

## Alternativa a REST

GraphQL está se tornando uma forte concorrente de REST e é uma alternativa que está conquistando cada vez mais o mercado ao passo que sua comunidade cresce.

Em uma API REST os dados são dispostos através de diferentes rotas. Desta forma, se quisermos disponibilizar um array de um usuários fazemos uma rota `GET /users`, se quisermos disponibilizar um usuário a partir de seu id fazemos mais uma rota `GET /users/:Id` e para criar, atualizar e deleter um usuário precisamos de uma rota para cada ação com seus respectivos método HTTP. E isso é só para um tipo de dado, para cada novo tipo de dado é necessário as definições de rotas para cada método HTTP novamente.

Além de rotas e métodos HTTP, a arquitetura REST tem mais exigências para contemplar os requisitos RESTful, como definição de códigos de status para diferentes respostas do servidor, versionamento etc.

Em contrapartida, com GraphQL, não há definições de rotas. Na verdade, **existe apenas uma rota**, e nela são feitas todas as requisições usando queries e mutations. Além disso, GraphQL também **elimina a necessidade de código de status** uma vez que e as mensagens de erro ou sucesso vêm anexadas ao corpo da resposta. **Versionamento também fica desnecessário** já que se pode adicionar novos campos e tipos sem alterar queries existentes.

## Especificação vs Implementação

GraphQL é uma [especificação](http://spec.graphql.org/) e não um produto final, dessa forma, é preciso que se tenha tecnologias que a implementem para que possa ser usada em alguma linguagem.

Em uma aplicação web, por exemplo, para fazer a comunicação do frontend para backend com GraphQL é necessário usar alguma tecnologia no frontend que possibilite fazer queries e mutations em GraphQL e alguma tecnologia no backend que possibilite configurar um servidor GraphQL para entedêlas.

Muitas linguagens já suportam GraphQL e já existem diversas tecnologias implementadas na comunidade web, seja bibliotecas para uso no frontend ou frameworks para uso em servidor. O site oficial do GraphQL mantem uma lista de algumas delas:

[graphql.org/code](https://graphql.org/code/)

## Resumo

- GraphQL é uma especificação para consumo de dados
- Graph é de gráfico pois os dados são modelados de forma visual com schemas
- QL é de linguagem de query pois podemos usar query para fazer chamadas para um servidor
- Schemas e types são usados para modelar os dados
- Queries e Mutations são usados para ler a alterar dados
- GraphQL é uma alternativa a REST com uma mudança de paradigma
- GraphQL precisa ser implementado para poder ser usado em linguagens de programação

Site oficial: [graphql.org](https://graphql.org/)

<div style="text-align: center;"><p>…</p></div>

## Usando GraphQL em uma aplicação

Para parte prática faremos uma aplicação web onde usaremos GraphQL no frontend e no backend.

Para fazer essa aplicação existem 2 tutoriais. Um para a API, e outro para o cliente.

O **primeiro tutorial é sobre o backend**. É onde será montado o servidor GraphQL, feita modelagem dos dados e conecção com banco de dados. No final do desenvolvimento dessa parte terá um playground onde é possível testar a API fazendo queries e mutations.

Terminado o backend, **a segundo parte é desenvolver uma UI em React.js** e usar as queries e mutations pra consumir a API.

### A proposta

A proposta é uma página web para gerenciar informações sobre frutas. A página terá uma lista de frutas com as suas propriedades nutricionais. A aplicação permitirá **listar** frutas, **adicionar** novas, **atualizar** e **deletar**.

### O stack

Para essa aplicação teremos a seguite estrutura:

#### Frontend

- Página web em [React.js](https://reactjs.org/)
- [Apollo client](https://www.apollographql.com/docs/react/) para comunicação com servidor com GraphQL

#### Backend

- Servidor GraphQl em [Node.js](https://nodejs.org/en/)
- [Apollo server](https://www.apollographql.com/docs/apollo-server/) para montar o servidor
- Banco de dados [MongoDB](https://www.mongodb.com/)

### Tutoriais

Aqui estão os tutoriais espero que goste!

Tutorial 1: <br />
[_Montando API GraphQL em Node.js com Apollo e MongoDB_](/blog/tutorial-api-graphql)

Tutorial 2: <br />
_Em breve publicarei a segunda parte do tutorial onde mostrarei como consumir essa API em **React.js** usando **Apollo client**._
