# TaskList-Trybe-Blitz

# Contexto:

A empresa **Ebytr** está passando por problemas de produtividade/controle porque as pessoas colaboradoras vêm tendo dificuldade na organização de suas tarefas individuais. Por esse motivo, a diretora de produto Carolina Bigonha decidiu implantar uma nova forma de organizar as tarefas.  
Você foi a pessoa contratada para desenvolver um sistema capaz de auxiliar as pessoas colaboradoras a se organizar e ter mais produtividade.  
**Na Ebytr o time de desenvolvimento utiliza a Stack MySQL, Express, React e Node para criar suas aplicações.** Foi combinado com a **Ebytr** que você utilizará essa mesma Stack para resolver o problema de organização e produtividade da empresa.  
Abaixo estão (i) os requisitos técnicos, (ii) as funcionalidades, (iii) critérios de avaliação do desafio e (iv) algumas dicas importantes.

## Requisitos técnicos:

1.  Front-End em  **React**;
2.  Back-End em  **NodeJS**, com  **MySQL**;
3.  Arquitetura em  **camadas**;

## Funcionalidades:

1.  Visualizar a lista de tarefas; 
>Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status;
2.  Inserir uma nova tarefa na lista;
4.  Remover uma tarefa da lista;
5.  Atualizar uma tarefa da lista;
6.  A tarefa deve possuir um status editável: pendente, em andamento ou pronto;

## Passo a passo para instalar e executar o projeto:
#### Com Docker:

 - Baixe o arquivo com o Git
 > git clone git@github.com:MiguelNS101/TaskList-Trybe-Blitz.git
 - Entre na pasta Tasklist-Trybe-Blitz e rode o comando:
 > docker-compose up
- Abra a seguinte URL no navegador:
> http://localhost:3000
> 
#### Alternativa:

 - Baixe o arquivo com o Git
 > git clone git@github.com:MiguelNS101/TaskList-Trybe-Blitz.git
 - Suba o banco mySQL **DATABASE.SQL** na pasta Database/
 - Entre na pasta Backend e rode o comando:
 > npm install
 - crie um arquivo .env
>MYSQL_HOST=127.0.0.1
>MYSQL_USER=<seu_usuario>
>MYSQL_PASSWORD=<sua_senha>
>MYSQL_DATABASE=TaskData
>PORT=3002
 - rode o comando:
 > npm start
 - Entre na pasta frontend e rode o comando:
 > npm install
 > npm start
