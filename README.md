# NLW Return: Server

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# TS: init (caso não tenha o tsconfig.json)
$ npx ts init

# Prisma: dev dependency
$ npm i prisma -D

# Prisma: prod
$ npm i @prisma/client

# Prisma init
$ npx prisma init

# Prisma studio
$ npx prisma studio
```

### Project
This Project is actually an API that works with the Front [nwl-return-web](https://github.com/miguelCassimiro99/nlw-return-web) repo.

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
