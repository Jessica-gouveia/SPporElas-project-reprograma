## São Paulo por: ELAS :rocket::purple_heart:

---
<p align = "center">
<a align href = "#Sobre">Sobre</a> │
<a align href = "#Contexto">Contexto</a> │
<a align href = "#Regras">Regras</a> │
<a align href = "#Arquitetura">Arquitetura</a> │
<a align href = "#Rotas">Rotas</a> │
<a align href = "#Tecnologias">Tecnologias</a> │
<a align href = "#Pacotes">Pacotes</a> │
<a align href = "#Pré-requisitos">Pré-requisitos</a> │
<a align href = "#Contribuição">Contribuição</a> │
<a align href = "#Autora">Autora</a>
</p>

---

### Sobre

Projeto de conclusão do bootcamp de Back-end da [{reprograma}]((https://reprograma.com.br/)) em parceria com a [Accenture](https://www.accenture.com/br-pt). O projeto São Paulo por: ELAS, tem por objetivo mostrar a história de São Paulo através do olhar das mulheres que vivem ou viveram aqui.

### Contexto

<img src="img/mulher.png" alt="mulheres juntas" width ="250" align="left" padding="250"/>

Uma mesma história pode ser contada de inúmeras maneiras, uma mesma cidade pode ser vivida e apreciada de infinitas formas. Todos os olhares importam, então , por que vemos sempre com os mesmos olhares? 

Somos a maioria da população de São Paulo, cerca de 51% segundo [SEADE]((https://www.seade.gov.br/seade-divulga-perfil-das-mulheres-no-estado-de-sao-paulo/#:~:text=De%20acordo%20com%20as%20informa%C3%A7%C3%B5es,seja%2C%2022%2C9%20milh%C3%B5es.)) , porém fazendo uma pesquisa rápida quando se digita mulher e São Paulo, os resultados são : feminicídio, abuso, desigualdade , dentre outros resultados lastimáveis. Somos representadas sempre por tristes estatísticas e foi pensando nisso que resolvi criar essa API. 

Seja muito bem vinde a API São Paulo por : ELAS :rocket:, essa API vai te apresentar a cidade de São Paulo sob o olhar de mulheres através do seu LEGADO. Sejam elas cis ou trans todas são celebradas com rotas culturais e gastronômicas que se conectam à história delas! Na rota cultural você conhecerá a história de uma mulher incrível  os museus, parque e teatro indicados segundo cada perfil, também será possível fazer a rota gastronômica baseado nessa mesma mulher. Cerca de 80% dos restaurantes escolhidos são de chefs e até mesmo a equipe toda só de mulheres.

### Regras

<p>As demandas do negócio são:

- [x] Somente pessoas com login e senha - podem criar ou excluir informações sobre os itinerários culturais;

- [x] Conseguir visualizar ambas as rotas através de IDs;

  ### Arquitetura

  

  ```
   📁 Projeto-final
     |
     |-  📁 src
     |    |
     |    |- 📁 data
     |         |- 📄 database.js
     |
     |    |- 📁 controllers
     |         |- 📄 culinariaController.js
     |         |- 📄 culturalController.js
     |         |- 📄 usuariaController.js
     |
     |    |- 📁 models
     |         |- 📄 culinaria.js
     |         |- 📄 cultural.js
     |         |- 📄 usuaria.js
     |
     |    |- 📁 routes
     |         |- 📄 culinariaRouter.js 
     |         |- 📄 culturalRouter.js
     |         |- 📄 index.js   
     |         |- 📄 usuariaRouter.js 
     |
     |
     |- 📄 .env
     |- 📄 .env.example
     |- 📄 .gitignore
     |- 📄 package
     |- 📄 procfile
     |- 📄 server.js
  
  ```

  ### Rotas

  <br>

  * ### Início 
  | Feature     | Autenticação | Método | Rota |
  | ----------- | ------------ | ------ | ---- |
  | Boas Vindas | :x:          | GET    | `/`  |

  <br>

  * ### Cultural
  | Feature                        | Autenticação       | Método | Rota                        |
  | ------------------------------ | ------------------ | ------ | --------------------------- |
  | Todos os itinerários culturais | :x:                | GET    | `/cultural/`                |
  | Escolher itinerário pelo ID    | :x:                | GET    | `/cultural/{:id}`           |
  | Atualizar informação de nome   | :x:                | PATCH  | `/cultural/{:id}`           |
  | Atualizar qualquer informação  | :x:                | PATCH  | `/cultural/atualizar/{:id}` |
  | Criar itinerário               | :heavy_check_mark: | POST   | `/cultural/cadastrar`       |
  | Deletar matéria                | :heavy_check_mark: | DELETE | `/cultural/{:id}`           |

  <br>

  * ### Culinária
  | Feature                       | Autenticação | Método | Rota                         |
  | ----------------------------- | ------------ | ------ | ---------------------------- |
  | Todos os restaurantes         | :x:          | GET    | `/culinaria/`                |
  | Restaurantes por ID           | :x:          | GET    | `/culinaria/{:id}`           |
  | Atualizar nome                | :x:          | PATCH  | `/culinaria/{:id}`           |
  | Atualizar qualquer informaçao | :x:          | PATCH  | `/culinaria/atualizar/{:id}` |
  | Criar matéria                 | :x:          | POST   | `/culinaria/cadastrar`       |
  | Deletar matéria               | :x:          | DELETE | `/culinaria/{:id}`           |

  <br>

  * ### Usuária
  | Feature      | Autenticação | Método | Rota              |
  | ------------ | ------------ | ------ | ----------------- |
  | Cria usuária | :x:          | POST   | `/usuaria/create` |
  | Fazer login  | :x:          | POST   | `/usuarias/login` |

  ## Tecnologias
  - [VsCode](https://code.visualstudio.com/download)

  - [Node.js](https://nodejs.org/en/download/)

  - [Postman](https://www.postman.com/downloads/)

  - [MongoDB](https://www.mongodb.com/try/download/community)

    

  ## Pacotes

  <a href="https://www.npmjs.com/"><img alt="npm version" src="https://img.shields.io/badge/npm-6.14.6-yellow"><a href="https://expressjs.com/pt-br/"><img alt="Express version" src="https://img.shields.io/badge/express-4.17.1-yellow"><a href="https://mongoosejs.com/"><img alt="Mongoose version" src="https://img.shields.io/badge/mongoose-5.10.17-yellow"><a href="https://www.npmjs.com/package/dotenv-safe"><img alt="Dotenv-safe version" src="https://img.shields.io/badge/dotenv-8.2.0-yellow"><a href="https://www.npmjs.com/package/bcryptjs"><img alt="Bcrypt version" src="https://img.shields.io/badge/bcrypt-5.0.0-yellow"><a href="https://www.npmjs.com/package/jsonwebtoken"><img alt="Jsonwebtoken version" src="https://img.shields.io/badge/jsonwebtoken-8.5.1-yellow"><a href="https://www.npmjs.com/package/nodemon"><img alt="Nodemon version" src="https://img.shields.io/badge/nodemon-2.0.6-yellow"></a> 



## Contribuição

- Faça um `fork` do projeto;

- Copie a url do _fork_ realizado e, no _prompt de comando_ da sua máquina, realize o clone do projeto através do `git clone <link_do_fork_do_repositorio>`;

- Crie uma _branch_ para realizar suas contribuições `git checkout -b feature/<sua_branch>`;

- Instale as dependências necessárias à execução da API através do comando `npm install`;

- No raiz do projeto, renomeie `.env.example` para `.env` e adicione os valores das variáveis `PORT` (porta sugerida `8080`), `MONGODB_URL` (string de conexão com o banco de dados) e `SECRET` (chave RSA). Elas são necessárias para a execução da API em sua máquina;

- Para executar a API, utilize o comando `npm start` no seu terminal;

- Após suas contribuições no projeto, realize o _commit_ com o comando `git commit -m 'sua mensagem'`;

- Para subir o projeto no seu GitHub, basta executar o comando `git push origin feature/<sua_branch>`;

- E finalize criando um novo _Pull Request_ com as contribuições para o projeto original.

  

## Autora
Made with :purple_heart: by [Jéssica Gouveia](https://www.linkedin.com/in/jessicas-gouveia/)

