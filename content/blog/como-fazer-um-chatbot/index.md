---
title: Como fazer um chatbot em poucos minutos
date: 2019-05-18
description: Eu sempre achei chatbot era de extrema complexidade mas, na verdade, é algo bem simples e divertido de implementar.
---

Eu sempre achei que montar um chatbot era de extrema complexidade, eu me deixei tomar pelo medo antecipado e nunca de fato tinha posto a mão na massa e feito um "Hello World" com um chatbot, ou melhor, um "Hello, I'm a chatbot".

![Woman using a phone](./woman-using-phone.jpg)

Acontece que montar um chatbot é incrivelmente simples e rápido. E ainda digo mais: Dependendo da aplicação requer 0 código.

Vamos por a mão na massa! — Mas antes — Chatbots tem conceitos que precisamos entender antes de começar a trabalhar. Esses são:

- Intenções
- Entidades
- Diálogos

Imagine um chatbot que oferece ajuda a usuários de um site de vendas de bicicletas.

Em termos simples, imagine que:

**Intenção** é a vontade capturada em uma mensagem do usuário.
Exemplo: “Olá, eu quero saber os tipos de bikes”
A intenção é **listar bicicletas**.

**Entidade** é um objeto que combinado a intenção, forma uma especificidade.
Exemplo: “Olá, eu quero saber os tipos de bikes pra trilha”
A entidade é **tipo de bicicleta** combinada com a intenção **Listar catálogos**.

**Diálogo** é onde controlamos o fluxo e ordem das conversas, o que responder de acordo com a intenção e entidade identificados, tipos de resposta etc.

Ebah! Isso posto, agora você tem uma visão geral do que é um chatbot e como funciona. Agora sim, vamos por a mão na massa.

## Preparativos

Vamos montar um chatbot usando o serviço da **IBM Cloud** chamado **Watson Assistant**, o serviço que possibilita a criação de chatbots.

### Passo 1: Criar uma conta gratuita no IBM Cloud

[Crie uma conta em IBM Cloud](https://cloud.ibm.com/) (se já não tem uma).

_Atenção: Isso pode ou não pedir o cadastro de um cartão de crédito. Caso peça e você queira cadastrar, todos os serviços que vamos usar aqui são gratuitos e o IBM Cloud não fará nenhuma cobrança independente do uso que se faça. Então a menos que você esteja a fim de criar um chatbot realmente parrudo pra um projeto grande escolhendo as opções pagas, pode ficar tranquilo que não terá nenhum gasto ou cobrança de cartão._

### Passo 2: Determinar um espaço pra esse projeto

Espaços no IBM Cloud são formas de organizar seus serviços. Normalmente se separa os espaços por projeto, então vamos criar um espaço chamado "projeto-loja-de-bike".

### Passo 3: Criar um serviço do Watson Assistant

Clique em "catálogo" e procure por "Watson Assistant". Crie um serviço lite (gratuito).

### Passo 4: Entrar no serviço

Uma vez criado clique em "Launch tool" e isso te levará para o espaço do seu serviço de Watson Assistant onde você já pode criar seu chatbot.

### Passo 5: Criar uma nova "skill"

Entenda skill como uma habilidade de diálogo. No nosso caso a habilidade será conversar com o usuário do site de bicicletas e tirar suas dúvidas. Dê o nome de "bike-expert".

Sucesso!

A gente já tem um chatbot criado, agora só falta criar as intenções, entidades os diálogos.

## Criando entidades, intenções e o diálogo

Então bora começar.

### Passo 1: Criar intenção

Vá na aba "intentions" e crie uma entidade chamada "listar-bicicletas".
Adicione a frase "Quero ver as bicicletas". Você pode por mais frases de sinônimo: "Quais modelos de bikes você tem?", "Posso ver o catálogo de bikes"…

Quanto mais casos mais assertivo seu chatbot fica em identificar a intenção do usuário.

### Passo 2: Criar entidade

Vá na aba "entities" e crie uma entidade chamada "tipo-de-bicicleta". Adicione alguns tipos: "Trilha", "Speed", "Trial", "BMX", "Urbana" etc.

### Passo 3: Criar o diálogo

Você vai perceber que por default já existe um diálogo chamado "Welcome" e outro chamado "Anything else". O "Welcome" manda uma mensagem de boas vindas quando se abre chatbot e "Anything else" é acionado quando não é identificado nenhuma intenção ou entidade. Vamos manter ambos.

Você pode modificar as mensagens de reposta com uma mensagem personalizada. No nó de boas vindas coloque "Olá mundo, eu sou um chatbot. Me faça perguntas sobre bikes."

Embaixo do "Welcome" crie um nó (node) chamado "Listar catalogo".

Procure pela intenção criada (listar-bicicletas).

Depois responda com uma mensagem tipo texto:
"Temos todos os tipos de bicicletas. As principais são bicicletas Super Max de trilha, Super Fast Speed e Hot Trick BMX. Para uma lista completa vá no menu do site e clique em modelos."

Você já pode testar seu chatbot na janela de teste do Watson Assistant clicando em "Try it". Teste o seu chatbot pedindo pelos modelos de bikes e veja se ele atende a sua intenção.

Você pode sempre treinar o seu chatbot adicionando mais intenções, sinônimos de frases, termos, criar mais entidades e identificar mais cenários de pergunta / resposta.

Agora basta identificar a entidade "tipo-de-bike" e criar uma resposta personalizada pra os tipos de bikes.

Em cima do nó que acabou de criar, crie um nó que espere a intenção "listar-bicicleta", combine com a entidade "tipo-de-bicicleta", identifique o tipo "trila" com "@tipo-de-bicicleta:(Trilha)" e responda com:

"Nossas bikes de trilhas são:<br />
\- Super Mountain <br />
\- Fire Tire <br />
\- Pro Mountain Max"

Você pode fazer o mesmo para todas as outras entidades acionando a modalidade "Multiple response" na aba de configuração do nó.

## Testando o chatbot

Aeh! Teste o chatbot. Faça modificações, adicione entidades, intenções e quando estiver pronto, vamos finalizar criando um assistente.

## Criando um assistente e preparando para integrações

Vá na aba "assistant" e crie um assistente chamado "Bike Expert".

Criado o assistente, você verá na aba "integrations" as integrações que seu chatbot tem, por _default_ já tem um chamado "Preview link" onde você testar numa janela de dialogo criado pelo IBM Cloud. Você pode criar integração com website, slack, facebook messenger, aplicações customizadas etc.

Pronto!

Parabéns você criou o seu primeiro chatbot e já pode integrar com sua aplicação desejada.

## Bonus

Se você tem um site em Wordpress e quer integrar o seu chatbot a ele, existe um [plugin chamado **IBM Watson Assistant**](https://br.wordpress.org/plugins/conversation-watson/), feito pelo time do Cognitive Class justamente pra isso. A integração é bem fácil e requer apenas alguns cliques pra funcionar. Eu recomendo o [tutorial do Antonio Cangiano](https://medium.com/ibm-watson/add-watson-assistant-to-your-wordpress-site-6f30d537b9e5) pra te ajudar nessa tarefa.

## Referências

Pra um curso completo e mais detalhado eu recomendo o [curso Build Your Own Chatbot](https://cognitiveclass.ai/courses/how-to-build-a-chatbot/) do Cognitive Class que mostra inclusive a integração com Wordpress.

Obrigado pela leitura, espero ter te ajudado a entender um pouco sobre chatbots.
