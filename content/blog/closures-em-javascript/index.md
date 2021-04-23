---
title: Closures em JavaScript
date: 2021-04-06
description: Neste artigo explicarei de forma simplificada o que é closure em JavaScript.
ogimage: "boxes.jpg"
---

Neste artigo explicarei de forma simples um que é _closure_ em JavaScript.

![Boxes](boxes.jpg)

Em português seria algo como "fechamento". Em linhas gerais _closure_ é uma característica do JavaScript de "fechar" o escopo de uma função. Este escopo é chamado de **Escopo Léxico**.

Por exemplo, no código abaixo temos dois escopos, um global e um local da função:

```js
const pizza = "Pepperoni"

function getPizza() {
  const pizza = "Margherita"

  console.log(pizza)
}

getPizza() // Margherita
```

Ao executar este código o resultado será `Margherita`. Isto aconte porque apesar de existir uma variável `pizza` no escopo global ao criar a função `getPizza`, o JavaScript fechou o escopo da função, ou seja, criou uma _closure_ onde a variável `pizza` existe localmente (dentro da função) ignorando a variável `pizza` do escopo global.

---

**✨ Você sabia?**: O fenômeno de uma variável local tomar prioridade sobre uma variável de escopo superior com o mesmo nome é conhecido como [Shadowing](https://en.wikipedia.org/wiki/Variable_shadowing).

---

Costuma-se dizer que o estado da função é "lembrado" pelo JavaScript com o processo de _closure_, razão pela qual ele "lembrou" que a variável `pizza` existia localmente ao escopo da função e a escolheu ainda que a execução de função `getPizza()` aconteça no escopo global.

### De baixo pra cima

Apesar do "fechamento" isso não significa que uma função não tem acesso ao escopo global. Veja o que acontece ao remover a variável `pizza` de dentro da função:

```js
const pizza = "Pepperoni"

function getPizza() {
  console.log(pizza)
}

getPizza() // Pepperoni
```

O resultado será `Pepperoni`. Isto se dá porque o processo de _closure_ tem acesso à variáveis locais e à variáveis de escopos a cima. E neste exemplo o escopo global está a cima do escopo local da função.

### Cada um no seu quadrado

Apesar de um escopo ser capaz de acessar outro escopo superior, escopos não tem acesso a outros escopos de mesmo nível:

```js
const pizza = "Pepperoni"

function getDrink() {
  const drink = "Iced Tea"
}

function getPizza() {
  console.log(pizza)
  console.log(drink)
}

getPizza() // Error: drink is not defined
```

No exemplo acima tentamos acessar a variável `drink` que está "fechada" ao escopo da função `getDrink()` dentro de um escopo de mesmo nível, o que retornou um erro de variável não definida, pois ela não existe localmente nem em escopos superiores.

### Escopos aninhados (nested)

Para exemplificar ainda mais a regra que escopos somente tem acesso e escopo superiores, podemos aninhar função dentro de função para ilustrar este comportamento:

```js
const pizza = "Pepperoni"

function getDrink() {
  const drink = "Iced Tea"

  function getPizza() {
    console.log(drink)
    console.log(pizza)
  }

  getPizza()
}

getDrink()

// Iced Tea
// Pepperoni
```

Aqui a função `getPizza()` tem acesso tanto ao escopo de função `getDrink` quando ao escopo global pois ambos estão em nível superior.

### Referências

- https://www.w3schools.com/js/js_function_closures.asp
- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures
