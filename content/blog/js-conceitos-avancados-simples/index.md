---
title: "Conceitos avançados (porém simples) de JavaScript"
date: 2021-03-16
description: Entenda alguns dos conceitos mais avançados da linguagem JavaScript e veja que não é nada tão complicado.
ogimage: "study.jpg"
---

Esse pequeno texto tem o objetivo de expor alguns conceitos básicos, porém considerados avançados, em JavaScript. Espero que ao fim da leitura, consiga consolidar seus conhecimentos na linguagem e firmar sua expertise, ou quem sabe, estar super preparado para aquelas perguntas chave de entrevistas de emprego.

![men coding in computer](computer-code.jpg)

Ao se aprofundar em temas mais profundos da linguagem JavaScript podemos nos assustar com terminologias e termos novos. Mas depois de entender melhor o que cada conceito é logo se perde o medo e percebemos que não era nada tão complexo como poderíamos ter imaginado.

Vamos começar entendo o que é:

### Hoisting

![Helicopter lifting people](hoisting.jpg)

Hoisting é um comportamento que acontece por de trás dos panos em JavaScript. Tem a ver com como o código que você escreveu é interpretado.

Mais específicamente, trata-se da **ordem** que determinados pedaços do código são lidas.

A palavra **hoist** em inglês, significa:
- "levantar"
- "elevar"
- "subir"
...

O que faz perfeito sentido pois:

> Hoisting é o comportamento padrão do JavaScriptde mover as declarações para o topo. <br />
— [W3School](https://www.w3schools.com/js/js_hoisting.asp)

Resumidamente, JavaScript irá "escanear" o código e indentificar as variáveis nele declaradas, então iniciará todas as variáveis antes de rodar o código. <br />

Isso siginifica que qualquer variável declarada naquele escopo / função ira ficar disponível em qualquer parte do código, inclusive antes da linha que ela é declarada:

```js
pizza = 'Marguerita';
var pizza;

console.log(pizza); // Marguerita
```

**Mentira: Nada é movido para o topo de nada!**

Falando assim até parece que as variáveis são fisicamente movidas das linhas que elas estavam para as linhas do topo do código.

Mas não é assim.

Na verdade, as variáveis vão continuar onde elas foram escritas e há todo uma rotina de alocação de memória para que elas fiquem disponível desde o topo do código.

Então podemos dizer que esse termo **hoisting** é uma grande figura de linguagem só pra nos fazermos entender de forma didática o conceito mas que existe uma bela explicação mais aprofundada de como tudo isso funciona nas engine de JavaScript.

**Opah, você usa `let` e `const`? Então, esquece tudo que eu falei...**

Bom, mais ou menos.

Sim, esse comportamento é associado ao uso de varíaveis declaradas com `var`.

E para variáveis declaradas com `let` ou `const`, o **hoisting** ainda acontece, porém somente para inicializar as variáveis e **não se pode** usar as variáveis antes das linhas que foram declardas:

```js
pizza = 'Marguerita';
let pizza;

console.log(pizza); // ReferenceError
```

### Referências

- https://www.w3schools.com/js/js_hoisting.asp
- https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting

### PS:

"hoisting" não uma palavra esquisito só em inglês pois a tradução para português é **"Içamento"**.

"Içamento"? Ok...
