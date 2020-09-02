---
title: var, let, const resumido
date: 2020-05-18
description: As diferenças de cada uma de forma resumida e pontuada.
---

![three balloons](./3-balloons.jpg)

## Diferenças

### `var`

- Pode ser redeclarada
- Pode ser reatribuída a outro valor
- Não é escopada por block
- É escopada por função

### `let`

- Não pode ser redeclarada
- Pode ser reatribuída a outro valor
- É escopada por block (e função)

### `const`

- Não pode ser redeclarada
- Não pode ser reatribuída a outro valor
- É escopada por block (e função)

|         | Pode ser redeclarada | Pode ser reatribuida | É escopada em bloco |
| ------- | -------------------- | -------------------- | ------------------- |
| `var`   | ✅                   | ✅                   | ❌                  |
| `let`   | ❌                   | ✅                   | ✅                  |
| `const` | ❌                   | ❌                   | ✅                  |

`let` e `const` são escopadas em bloco logo também são escopadas em função.

## Exemplos de escopos de variáveis

Para escopar uma variável usando `let` ou `const` basta ela estar dentro de blocos (`{}`):

```js
{
  const x = 1
}
console.log(x) // x is not defined
```

Para escopar uma variável usando `var` pode-se usar [IIFE](http://benalman.com/news/2010/11/immediately-invoked-function-expression/) (_Immediately Invoked Function Expression_) já que `var` só pode ser escopada por função:

```js
;(function () {
  var x = 1
})()
console.log(x) // x is not defined
```

## Temporal Dead Zone

É possível acessar varáveis em `var` antes de ela serem declaras. Porém, não é possível acessar variáveis em `let` ou `const` antes de as mesmas serem declaradas devido a algo chamado [Temporal Dead Zone](https://wesbos.com/temporal-dead-zone).

Acessar uma variável em `var` antes de ela estar declarada retorna `undefined`:

```js
console.log(x)
var x = 1
// undefined
```

Acessar uma variável em `let` ou `const` antes de ela ser declarada resulta em erro:

```js
console.log(x)
const x = 1
// ReferenceError
```

## let vs const

A escolha de qual tipo de variável usar é de opinião e não tem uma resposta definitiva. É recomendado escolher uma convenção ao iniciar um projeto levando em conta prós e contras de cada uma.

Veja [Dan Abramov falar](https://overreacted.io/on-let-vs-const/) um pouco sobre prós e contras de cada uma.

## Relevância do var

Apesar de `let` e `const` terem se tornado mais populares `var` ainda é relevante. A preferência por `var` também é de opinião e tem seus benefícios e malefícios.

Veja [Wes Bos mostrar](https://wesbos.com/is-var-dead) alguns exemplos de pessoas que preferem um ou outro e seus motivos.
