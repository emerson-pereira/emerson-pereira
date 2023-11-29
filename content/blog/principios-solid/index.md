---
title: Princípios SOLID
date: 2023-11-10
description: Os 5 princípios SOLID com alguns exemplos em JavaScript.
---

Os 5 princípios SOLID com exemplos em JavaScript.

## Princípio da responsabilidade única

_**S**: Single Responsability Principle_

> Só porque você pode não significa que você deveria.

Entidades devem ter apenas uma responsabilidade.

🚌💥 Excesso de responsabilidade:

```js
function dirigirOnibusECobrarPassagem() {
  // Atropelar pedestre
  // Passar troco errado
}
```

✨ Responsabilidade única:

```js
function dirigirOnibus() {
  // Dirigir com atenção
}

function cobrarPassagem() {
  // Cobrar com calma
}
```

## Princípio do aberto-fechado

_**O**: Open-Closed Principle_

> Em time que tá ganhando não se mexe.

Entidades devem estar abertas para extensões mas fechadas para modificações.

### 🚌

```js
class Motorista {
  dirigirOnibus() {
    // dirigir ônibus
  }
}
```

🚛 🔥🚌🔥 Fechado para modificações:

```js
class Motorista() {
    dirigirCaminhao() {
        // dirigir caminhão
    }
}
```

🚌 🚛 Aberto para extensões:

```js
class Motorista() {
    dirigirOnibus() {
        // dirigir ônibus
    }
    dirigirCaminhao() {
        // dirigir caminhão
    }
}
```

## Princípio da substituição de Liskov

_**L**: Liskov Substitution Principle_

> Tem que voltar pra base ★.

Subclasses devem ser substituíveis pelas classes base das quais foram derivadas.

Classe base:

```js
class Motorista {
  dirigir() {}
}
```

🚌💥 Não substituível:

```js
class Cobrador extends Motorista {
  cobrar() {}
}
```

🚛 Substituível:

```js
class MotoristaDeCaminhao extends Motorista {
  estacionar() {}
}
```

`Cobrador` não é substituível pela classe base `Motorista` pois o cobrador não poderia dirigir e o motorista não poderia cobrar.

`MotoristaDeCaminhao` é substituível pela classe base `Motorista` pois o motorista de caminhão poderia dirigir e o motorista poderia estacionar.

## Princípio de segregação de interface

_**I**: Interface Segregation Principle_

> Dividir para conquistar.

Classes não devem ser forçadas a depender de métodos que não usam.

🤔 Forçou a barra:

```ts
interface Funcionario {
  dirigirOnibus: () => {}
  cobrarPassagem: () => {}
}

class Motorista implements Funcionario {
  dirigirOnibus() {
    // dirigir ônibus
  }
  cobrarPassagem() {
    throw new Error("Motorista não cobra passagem.")
  }
}

class Cobrador implements Funcionario {
  dirigirOnibus() {
    throw new Error("Cobrador não dirige.")
  }
  cobrarPassagem() {
    // Cobrar passagem
  }
}
```

🤗 Quem divide multiplica:

```ts
interface Funcionario {}

interface FuncionarioMotorista extends Funcionario {
  dirigirOnibus: () => {}
}

interface FuncionarioCobrador extends Funcionario {
  cobrarPassagem: () => {}
}

class Motorista implements FuncionarioMotorista {
  dirigirOnibus() {
    // dirigir ônibus
  }
}

class Cobrador implements FuncionarioCobrador {
  cobrarPassagem() {
    // Cobrar passagem
  }
}
```

## Princípio de inversão de dependência

_**D**: Dependency Inversion Principle_

> Sem rabo preso com ninguém.

Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender da abstração.

Abstrações não devem depender de detalhes. Os detalhes devem depender das abstrações.

🔒 Rabo preso com MySQL:

```js
class ConectarBancoDeDados {
  conexao

  constructor() {
    this.conexao = new MySQLConnection()
  }
}

const bancoDeDados = new ConectarBancoDeDados()
// bancoDeDados.conexao
```

✌️ Rabo preso com ninguém:

```ts
interface IConexaoBancoDeDados {
  conectar: () => {}
}

class ConexaoMySQL implements IConexaoBancoDeDados {
  conectar() {
    return new MySQLConnection()
  }
}

class ConexaoOracle implements IConexaoBancoDeDados {
  conectar() {
    return new OracleConnection()
  }
}

class ConectarBancoDeDados {
  conexao: IConexaoBancoDeDados

  constructor(conexaoBancoDeDados: IConexaoBancoDeDados) {
    this.conexao = conexaoBancoDeDados
  }
}

// MySQL
const conexaoMySQL = new ConexaoMySQL()
const bancoDeDados = new ConectarBancoDeDados(
  conexaoMySQL.conectar(),
)
// bancoDeDados.conexao

// Oracle
const conexaoOracle = new ConexaoOracle()
const bancoDeDados = new ConectarBancoDeDados(
  conexaoOracle.conectar(),
)
// bancoDeDados.conexao
```
