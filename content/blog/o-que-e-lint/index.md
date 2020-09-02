---
title: Lint. O que é isso afinal?
date: 2019-06-02
description: Nesse artigo tentarei explicar o que é lint (ou linter) em programação e como se usa.
ogimage: "flower-lint.jpeg"
---

_Aviso: Esse artigo é sobre Lint em **programação**._

Se você já ouviu _"Mas, esse código aí tá lintado?"_ ou _"A gente tem que implementar um linter nesse repo!"_ e não sabe o que é esse tal de lint, nesse artigo tentarei explicar o que é lint (ou linter) e como se usa.

Além do conceito da coisa, vou falar também um pouco sobre história do termo, como é usado nos dias atuais e dar exemplos de aplicações e ferramentas de lint.

## A palavra

Qual a definição literal da palavra "lint"? É um verbo? Um substantivo? Adjetivo?

![flower lint](flower-lint.jpeg)

Eu me deparei com vários diferentes uso da palavra "lint" em programação: Como substantivo, verbo e até mesmo variações como "linter", "linting". Então pra evitar qualquer tipo de confusão, vamos a definição da palavra.

Lint é um substantivo, podemos traduzir como "Fiapo". Normalmente é associado a algo negativo porque adora aparecer em tecidos e outras superfícies nos forçando a removê-los se quisermos mantê-los limpos.
São os famosos "pelinhos" que podem aparecer em alguns tecidos e nos força a comprar algum tipo de removedor de pelos e fiapos se quisermos nos livrar dele. <br />
Pra reforçar o significado do termo, em inglês os aparelhos removedores de fiapos são conhecidos como [Lint Removers](https://en.wikipedia.org/wiki/Lint_remover).

Agora, sabendo a definição literal da palavra, espero que fique mais fácil a compreensão do conceito em programação e que isso não te cause nenhuma confusão.

## História

O termo "lint" surgiu em programação da necessidade de implementar algum tipo de checagem automática pra previnir e/ou solucionar erros enquanto escrevemos códigos.

![book](book.jpeg)

É fácil esquecer de um “;” fazer typo ou até mesmo declarar uma variável e não usá-la depois. Pra previnir erros como esses, surgiu a necessidade de um "programa" que execute checagens como essa, aponte os erros e até mesmo, em alguns casos, concerte de forma automática essas “falhas” na escrita do código.

Tudo começou com um funcionário da Bell Labs chamado Stephen Johnson. Ele cunhou o termo em 1978 ao criar [Lint](http://tack.sourceforge.net/olddocs/lint.pdf), um checador de programas em C. <br />
Assim como os removedores de fiapos performam uma limpeza nos tecidos, Lint performa análise programática e estilística no código escrito e concerta ou aponta possíveis erros.

## Conceitos

![dictionary on phone](dictionary-on-phone.jpg)

Vamos ver algumas definições de diferentes fontes sobre lint.

> Lint, or a linter, is a tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs.
>
> — [Wikipedia](<https://en.wikipedia.org/wiki/Lint_(software)>)

> Linting is the process of running a program that will analyse code for potential errors.
>
> — Oded Coster no [Stack Overflow](https://stackoverflow.com/questions/8503559/what-is-linting)

> Originally, lint was a tool for scanning .c code for additional, stricter warnings. By statically analyzing the code itself before compilation, programmers could maintain a higher level of code discipline, increasing the reliability of the code in multiple compilers and environments.
>
> — Andrew no [projeto linter no GitHub](https://github.com/mcandre/linters)

<div style="text-align: center;"><p>…</p></div>

Pra resumir, lint é um programa que executa [checagem de código estático](https://en.wikipedia.org/wiki/Static_program_analysis) em procura de erros programáticos e estilísticos. Alguns exemplos de erros erros programáticos são:

- Falta de ";" quando requerido
- Variáveis declaradas e não usadas
- Uso de variáveis antes de declaradas
- Execução de código depois de declarado retorno em funções
- Uso de imports descontinuados ou não seguros
- Loops infinitos

Erros de estilo podem ser:

- Espaçamento indevido
- Falta de indentação
- Ultrapassagem de limites de caracteres por linha
- Uso misto de tipos de aspas (dupla e simples)

Isso posto, agora vamos a alguns exemplos de ferramentas e programas de linting.

## Exemplos

![tools wall](tools-wall.jpg)

### [JSHint](https://jshint.com/)

JSHint surgiu como a principal ferramenta pra identificar erros e potencial problemas com JavaScript.
Faça um teste na [página do JSHint](https://jshint.com/) escrevendo escrevendo `console.log('testando')` depois da linha que declara o `return`.

### [ESLint](https://eslint.org/)

Assim como JSHint, o ESLint também é usado pra checar JavaSript. O que diferencia esse projeto, entre outros, é o fato de ele ser plugável. No site do ESLint existe uma série de [regras](https://eslint.org/docs/rules/) que podem ser definidas (e plugadas) na criação do projeto em adição de algumas regras que já vem por padrão.

[Saiba mais](https://eslint.org/docs/about/).

### [PHPLint](http://www.icosaedro.it/phplint/)

Este valida programas em PHP 5 e PHP 7 é escrito na própria linguagem que é usado.

### [TSLint](https://palantir.github.io/tslint/)

TSLint é um linter de TypeScript que vem na forma de extensão e é suportado por vários editores e build systems.

Outros exemplos de programas de lint são:

- [CSS Lint](http://csslint.net/about.html) Lint pra CSS
- [stylelint](http://csslint.net/about.html) Outro lint pra CSS
- [Pylint](http://csslint.net/about.html) Lint pra programas em Python
- [StyleCop](http://csslint.net/about.html) Analisa códigos fontes em C#
- [Android Lint](https://plugins.jenkins.io/android-lint) Scanea projetos Android e reporta bugs

Os exemplos de linters vão ao infinito. Tem até um [repo](https://github.com/mcandre/linters) que lista uma variedade imensa deles. <br />
E uma [lista](https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis) de ferramentas de análise de código estático na Wikipedia.

Guarde essas listas como referência e espero que implemente lint no seu próximo projeto ou algum projeto existente.

## Implementação

![person coding](person-coding.jpg)

A implementação de lint em projetos pode ser tão simples como instalar um plugin de lint na loja de plugins do seu editor; implementado no processo de build da sua aplicação como acontece muito com páginas em Vue.JS, React etc, ou direto no seu projeto de uma linguagem específica como Node.JS e PHP.

Existem diferentes cenários e diferentes usos, eu recomendo que teste diferentes maneiras, diferentes linters e adote o que mais supra sua necessidade. Há [muitos](https://medium.com/dailyjs/adding-eslint-to-your-project-7bd4feca35a8) [guides](https://travishorn.com/setting-up-eslint-on-vs-code-with-airbnb-javascript-style-guide-6eb78a535ba6) [de](https://medium.com/the-node-js-collection/why-and-how-to-use-eslint-in-your-project-742d0bc61ed7) [implementação](https://codeburst.io/setting-up-eslint-and-editorconfig-in-react-native-projects-31b4d9ddd0f6) [de](https://felipelinsmachado.com/eslint-react/) [lint](https://blog.gojekengineering.com/eslint-prettier-for-a-consistent-react-codebase-eaa673debb1d) na internet pra além da [documentação](https://eslint.org/docs/user-guide/configuring) dos próprios linters. Vá em frente e descubra a melhor solução pro seu caso!

## Conclusão

![idea-postit](idea-postit.jpg)

Como pode perceber, desde o primeiro programa de lint feito em 1978 essa prática veio se difundindo e novas ferramentas com diferentes funcionalidades veio e continua surgindo pra ajudar a manter seu projeto em ordem, seja qual for a linguagem que você usa.

Alguns benefícios notáveis da implementação de linter em projetos é unificação do estilo de escrita e convenções usadas quando se trabalha em time, assim não há conflitos de estilos diferentes uma vez que as regras são definidas previamente; prevenção de erros e potenciais bugs com dicas e auto-fixes programáticos e, um dos pontos fortes de usar linter, é que se aprende a escrever de maneira mais preventiva já que aprendemos com nossos erros.

Você pode ou não sofrer um primeiro impacto ao começar a usar lint em suas aplicações. O lint será bem "chato" em apontar todas as discrepâncias às regras e potenciais bugs no seu código e se você for iniciante isso pode causar certa frustração. Mas apesar disso, eu asseguro que linting é ótima prática e, ainda adicionaria, altamente viciante uma vez que se aprende a lidar.

Lint é uma prática utilizada na maioria dos grandes projetos e é uma prática que acrescenta conhecimento ao desenvolvedor, facilita o processo de desenvolvimento, previne erros, promove consistência, e traz valor para o time de desenvolvedores.

Isso posto, eu espero ter te ajudado a entender o que é lint e tirado as dúvidas ou confusões que o termo pode ter te causado e recomendo que implemente um lint pro seu projeto!

Valeu pela leitura e até a próxima.
