## Feedwiget - Web + Server

This project was developed during the Next Level Week’Return powered by Rocketseat.
Along the event, it was possible to use React with Tailwind and the interesting part was be able to develop the backend too.
- [Web repo](https://github.com/miguelCassimiro99/nlw-return-web)
- [Server repo](https://github.com/miguelCassimiro99/nlw-return-server)

How does it works 🔍

- The process is very simple but with a lot of awesome features: you can create a feedback about something on the page or system.
- A button on bottom of the page open a popover that includes three types of feedbacks: bugs, ideas, others. After choose one, you can describe a message, attach a print of screen and send it.
- The print feature was developed on the front too, so its cool because you don’t need to open other programs or quit of the page.
- On backend side, the message will be received and treated and trigger an e-mail to the system’s providers alerting him about a new feedback.
- These e-mail includes the type, message and the print too.
- On the server, beyond the Node, Prisma and testing with jest, we used the DDD (Domain Driven Development) and concepts of Clean Architecture.
- To trigger the e-mail, it was used Mail trap.

**Web**

🌐 [React](https://pt-br.reactjs.org/)

🌐 [Tailwind](https://tailwindcss.com/)

🌐 [Headless UI](https://headlessui.com/)

🌐 [Vite](https://vitejs.dev/)

🌐 [Typescript](https://www.typescriptlang.org/)

**Server**

🌐 [Node](https://nodejs.org/en/)

🌐 [Prisma](https://www.prisma.io/)

🌐 [Jest](https://jestjs.io/pt-BR/)

---

## Setup 🏗️

```bash
npm install
```

```bash
npm run dev
```

## Features 📜

- [x]  Front Widget
- [x]  Printscreen
- [x]  Communication with API
- [x]  DDD
- [x]  Unit Tests
- [x]  Sending e-mail with MailTrap
- [x]  Prisma ORM
- [x]  Postgres DB

---

### Some dependences explanation
@types/node: tipagem específica do ecossystema node
ts-node-dev: semelhante ao nodemon, irá restartar o server a cada save de alteração

### tsconfig.json
- Necessário adicionar o rootDir e o sourceDir
- Especificar a versão do ES que será utilizado

### Express and Nodemailer
- Ficar atento pois muitos pacotes precisarão da instalação de um @types/nome_do_pacote
- Isso para que não de problemas de tipagem por conta do TS.

### Prisma: creating table
```bash

# Create migration dev
$ npx prisma migrate dev

# Create migration prod
$ npx prisma migrate deploy

```
- Depois desse comando, basta nomear a ação que você precisa que seja realizada no banco


# Solid
SOLID

1. Single Responsability Principle
2. Open/Closed Principle
3. Liskov Substitution Principle
4. Interface Segregation Principle
5. Dependency Inversion Principle

## 1. Cada classe/função não deve ter mais de uma responsabilidade da nossa regra de negócio
### quando detectar: "essa função faz isso 'E' ..."

## 2. Classes devem ser abertas para extensão e fechadas para modificação

## 3. Nós devemos poder poder substituir uma classe pai por uma herança dela e tudo continuar funcionando;

## 4. Trabalhar com interfaces
### Relacionado a tipagem

5. Inverter dependências da classe
Passar dependencias da classe de forma inversa.
A ideia é o contexto externo mostrar para a classe o que ela precisa.

## Repositories Dist
- É uma maneira de organizar o código utilizando o Repositories Pattern
- Data Map Pattern
- A separação de funcionalidades externas ao código ou de estruturas que o funcionamento afeta o código, mas que o código não controla o funcionamento
### Funcional explanado
- A ideia é criar contratos (interfaces) que dizem o que pode ser feito
- E criar classes que implementam este contrato
- Então uma função para adicionar um dado no banco, precisa estar dentro do contrato
- Mas o contrato não à aciona. Apenas a classe que faz uso deste contrato


### Deploy
- É possível utilizar como ferramenta o Railway onde é possível subir junto com o back-end já um banco em postgres para ser utilizado junto com a aplicação.
