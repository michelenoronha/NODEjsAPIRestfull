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

