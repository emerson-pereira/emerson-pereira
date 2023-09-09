---
title: "Hoisting em JavaScript"
date: 2021-03-16
description: Entenda o que é Hoisting em JavaScript e perceba como é um conceito avançado, bem simples.
ogimage: "study.jpg"
---

Entenda o que é Hoisting em JavaScript e perceba como é um conceito avançado, bem simples.

![Hoist](crane.jpg)

Hoisting é um comportamento que acontece por de trás dos panos em JavaScript. Tem a ver com como o código que você escreveu é interpretado.

Mais específicamente, trata-se da **ordem** que determinados pedaços do código são lidas.

A palavra **hoist** em inglês, significa:

- "levantar"
- "elevar"
- "subir" ...

O que faz perfeito sentido pois:

> Hoisting é o comportamento padrão do JavaScript de mover as declarações para o topo. <br />
> — [W3School](https://www.w3schools.com/js/js_hoisting.asp)

Resumidamente, em tempo de execução (ao rodar o código), seja no navegador ou em um servidor em Node.js por exemplo, JavaScript irá "escanear" o código e indentificar as variáveis nele declaradas, então iniciará todas as variáveis antes de rodar o código.

Por isso entende-se que independente de onde foram declaradas as variáveis, elas serão "subidas" ao topo do escopo / função do código de maneira a estar disponível desde o começo.

Isso siginifica que qualquer variável declarada naquele escopo / função ira ficar disponível em qualquer parte do código, inclusive antes da linha que ela é declarada.

Neste exemplo se pode ver que é possível atribuir um valor a variável `pizza` antes da linha que ela é declarada:

```js
pizza = "Marguerita"
var pizza

console.log(pizza) // Marguerita
```

### Mentira! Nada é movido para o topo de nada 😑

Falando assim até parece que as variáveis são fisicamente movidas das linhas que elas estavam para as linhas do topo do código em tempo de execução.

Mas, não é assim.

Na verdade, as variáveis vão continuar onde elas foram escritas, e ao invés de serem "subidas", há todo uma rotina de alocação de memória para que elas fiquem disponíveis desde o topo do código e assim poderem ser usadas em qualquer parte do código, inclusive antes das linhas que foram declaradas.

Então podemos dizer que esse termo **hoisting** é uma grande figura de linguagem só pra nos fazermos entender de forma didática o conceito mas que existe uma bela explicação mais aprofundada de como tudo isso funciona nas engines de JavaScript.

### Opah, você usa `let` e `const`? Então, esquece tudo que eu falei...

Bom, mais ou menos.

Sim, esse comportamento é associado ao uso de varíaveis declaradas com `var`, como pode ver no exemplo anterior.

E para variáveis declaradas com `let` ou `const`, apesar de o **hoisting** ainda acontecer, ele serve somente para inicializar as variáveis e **não se pode** usar as variáveis antes das linhas que elas foram declaradas como aconteceria usando `var`.

Neste exemplo se pode ver que ao tentar atribuir um valor a uma variável `let` antes de ela ser declarada, o código não funciona e retorna um `ReferenceError`:

```js
pizza = "Marguerita"
let pizza

console.log(pizza) // ReferenceError
```

### Fun fact

"hoisting" não uma palavra esquisita só em inglês pois a tradução para português é **"Içamento"**.

"Içamento"!

### Referências

- https://www.w3schools.com/js/js_hoisting.asp
- https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting
