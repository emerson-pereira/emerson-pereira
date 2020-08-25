---
title: Entenda a diferença entre Actions e Mutations em Vuex
date: 2019-05-26
description: Aprendendo sobre Vuex e quer saber como usar Actions e Mutations? Entenda a diferença entre os dois.
---

Aprendendo sobre Vuex e quer saber como usar Actions e Mutations? A diferença entre os dois?<br />
Esse é um artigo introdutório pra apresentar como usar os dois e as principais diferenças entre eles.

![Men coding in computer](./man-coding.png)

Mas antes, se você tá se perguntando o que são actions e mutations, saiba que: Actions e mutations são conceitos embutidos no Vuex que é uma maneira de gerenciar estado de aplicações em Vue.js (conceitos originalmente da implementação Flux do time do Facebook). Veja abaixo um trecho de um artigo do [Vue.js Brasil](http://vuejs-brasil.com.br/) sobre o assunto. Recomendo a leitura se você não sabe o que é Vuex e se você sabe também. É sempre bom reforçar os conceitos que já sabemos.

> Há algumas vantagens ao se adotar esta abordagem:
>
> 1. Você tem um local centralizado para adicionar/modificar seus dados; <br />
> 1. Está disponível para todos os componentes; <br />
> 1. Nenhum componente modifica a informação diretamente, garantindo a consistência dos dados; <br />
> 1. Ferramentas adicionais fazem do desenvolvimento uma experiência melhor.
>
> ― Trecho de [Artigo sobre Vuex do Vue.js Brazil](http://vuejs-brasil.com.br/vuex/)

Actions e mutations são, os dois, formas de alterar o estado da sua aplicação. A diferença é o momento que cada uma delas é usada e o papel de cada uma.

Imagine que você tá trabalhando numa aplicação que lista bicicletas e ao selecionar um tipo de bicicleta você tem que chamar uma API externa e atualizar a página que lista as bicicletas com os dados obtidos da API. Nesse cenário temos o seguinte fluxo:

1. Ao clique do usuário num tipo de bicicleta acionamos uma **action** mandando junto da chamada o tipo de bicicleta pedida pelo usuário.
1. A action por sua vez vai manejar esse request e chamar a API externa esperando de retorno as bikes daquele tipo específico. Mas a action não altera o estado.
1. Uma vez que a API retorna os dados, daí então chega a hora da atuação da **mutation**. A action passa pra mutation os dados recebidos da API e a mutation, sim, tem a "autonomia" de alterar o estado. Então o estado é atualizado pela mutation e o resultado deve ser visto na página reativamente.
1. O usuário está feliz vendo as bicicletas do tipo que ele acabou de selecionar.

Então temos o seguinte flow:

1. Componente que lista bicicletas tem um estado inicial com algumas bicicletas listadas.
1. Ao clique do usuário no menu de tipos de bicicletas acionamos a mudança de estado com uma **action**.
1. Action captura os dados da API e manda pra **mutation**.
1. Mutation altera o estado.
1. Resultado é refletido na página.

Como pode perceber, actions e mutations trabalham em conjunto. Uma passa bola pra outra e tudo funciona harmonicamente. Mas nesse ponto você deve estar se perguntando:

**Mas 🤔 por que eu não faço uma chamada direto pra mutation? Ela poderia pegar os dados da API e já atualizar o estado de uma vez só!**

Essa seria uma pergunta muito válida e tem motivos pra essa separação de papel:

- Actions podem fazer **chamadas assíncronas**.
- Actions **podem ter ações colaterais** tais como habilitar o loading antes de chamar a API e desabilitá-lo depois de obter os dados.
- Mutations devem ser **funções puras**, assim não podem ter ações colaterais tais como chamar outras funções ou executar outras lógicas.
- Mutations **não** podem fazer **chamadas assíncronas**.
- Mutations tem o papel único de alterar **atualizar o estado**.

Alguns dirão que isso é muito boilerplate pra gerenciar mudança de estados, outros irão advogar sobre os benefícios de ter separação de papel bem definida.

O fato é que essa implementação vem funcionando bem desde a implementação do Vuex e isso é bom suficiente pra aplicações de pequeno e grande e porte. Mas isso não significa que o que é bom não pode ficar melhor. O Evan You, criador do Vue.js fala um pouco sobre uma possível **fusão de actions e mutations**.

> We could further simplify the concepts by just getting rid of mutations and merging the two concepts.
>
> ― [Evan You na VueJS Amsterdam 2019](https://youtu.be/zB3HOejXqwk)

Espero ter te ajudado a entender melhor a diferença entre actions e mutations.

## Referências

Se você manja da lingua dos anglo-saxão eu recomendo a leitura desse [artigo do Michael Gallagher](https://blog.logrocket.com/vuex-showdown-mutations-vs-actions-f48f2f7df54b/) onde ele destrincha bem cada conceito, dá exemplos, monta cenários e mostra vantagens e desvantagens em diferentes usos.

E, como sempre deve ser feito, não deixe de consultar a documentação oficial do Vue.js sobre o tópico:

- [What is Vuex](https://vuex.vuejs.org/)
- [Actions](https://vuex.vuejs.org/guide/actions.html)
- [Mutations](https://vuex.vuejs.org/guide/mutations.html)

Valeu pela leitura, espero ter ajudado.
