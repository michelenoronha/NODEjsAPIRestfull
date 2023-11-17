# NODEjsAPIRestfull
                                             COMO CRIAR UMA API RESTFULL 

Criando uma API REST full no Node (aplicação que vai servir dados para o front-end que vai fazer conecção com o banco de dados.
Criar uma pasta server para o back-end.
Usar a extensão selim, fluentes ícones, Gitanas, omani teme, post css, linguagem suporte, Prisma para acesso do banco de dados, Symbol, tailwind CSS,
Instalar o node js
Abra o node: npm init -y 
Npm i typescript -D para criar dependência
Npm i @type/node -D para o typescript saber que está dentro de um projeto node
Para instalar o typescript e o TSX
Npx tsc – init para abrir e rodar o tsc dentro da pasta node_module ele vai criar a pasta tsconfig.ts
Npm i tsx -D ele automatiza o processo para converter o nosso código de typescript para o Javascript
Npx tsx src/server.ts
Entra no package.json dentro de scripts dentro de test ( muda para “dev” e copia ”tsx src/server.ts”)
Instalar o framework Fastify 
Npm i fastify
Npm install eslint -D          Eslint cria um padrão de escrita para o grupo
Npx eslint – init criar um arquivo dentro do server.ts  da raiz do projeto .eslintrc.json
Prisma e SQlite para trabalhar com a aplicação com o node
Npx prisma migrate dev
Npm i @prisma/cliente -D
Npx prisma studio para abrir a ferramenta integrada e ver o banco de dados que você criou
Npm i prisma -D
Npm prisma init --  datasource-provider SQLite
Npx prisma migrate dev  vai ler meu arquivo schema. Prisma e vai detectar automaticamente todas as alterações que eu fiz neste arquivo desde a ultima vez que eu executei este comando Agora dar um nome para minha migration
Npm i zod   
Npm i @fastify/cors

Simplificado:
Criar uma API RESTful no Node.js é uma tarefa bastante comum e relativamente simples, especialmente com o uso de frameworks como Express.js. Aqui estão os passos básicos para criar uma API RESTful:

1. **Configuração do Ambiente:**
   Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo no site oficial: https://nodejs.org/

2. **Inicialização do Projeto:**
   Crie uma pasta para o seu projeto e, no terminal, navegue até ela. Inicie um novo projeto Node.js utilizando `npm init` e siga as instruções para criar seu arquivo `package.json`.

3. **Instalação do Express:**
   Instale o framework Express.js, que facilita a criação de aplicativos web no Node.js, usando o seguinte comando no terminal:
   ```bash
   npm install express --save
   ```

4. **Criação do Servidor:**
   Crie um arquivo (por exemplo, `app.js`) para o seu servidor. Importe o Express e configure o servidor básico:
   ```javascript
   const express = require('express');
   const app = express();
   const port = 3000;

   app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
   });
   ```

5. **Criação de Rotas:**
   Defina rotas para sua API. Por exemplo, para criar uma rota que responde a requisições GET em '/api/hello':
   ```javascript
   app.get('/api/hello', (req, res) => {
     res.json({ message: 'Hello, World!' });
   });
   ```

6. **Testando a API:**
   Inicie o servidor com `node app.js` e teste sua API usando ferramentas como Postman ou simplesmente acessando as rotas no navegador.

Esses são passos básicos. Você pode expandir sua API adicionando middleware, configurando banco de dados, implementando autenticação, e muito mais, dependendo dos requisitos do seu projeto. Lembre-se de consultar a documentação do Express.js para explorar recursos adicionais. Já pensou em criar uma API RESTful no Node.js antes?


