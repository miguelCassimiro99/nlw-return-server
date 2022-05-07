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