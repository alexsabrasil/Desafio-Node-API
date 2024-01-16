# Desafio Data

## Índice

- [Desafio Data](#desafio-data)
  - [Índice](#índice)
  - [Resumo do projeto](#resumo-do-projeto)
  - [Objetivos de aprendizagem](#objetivos-de-aprendizagem)
  - [Orientações:](#orientações)
  - [Critérios de aceitação](#critérios-de-aceitação)
      - [Links utéis:](#links-utéis)
  - [Dicas](#dicas)

***

## Resumo do projeto

O que deve ser feito: 

- Nesse projeto você será responsável por criar uma API de login usando recursos do node como o Bcrypt para hash de senhas e o MongoDB como banco de dados.

#### Criar um endpoint para registrar um novo usuário na API.

Implementar um endpoint para autenticar:

Tarefas:
Registro de Novo Usuário

`Endpoint: /register`

#### Método: POST
Entradas:

Esquema de usuário definido usando Mongoose no seu código

~~~javascript
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
~~~

#### Ações:
Hash da senha usando Bcrypt.
Verificação se o nome de usuário já está em uso.
Criação de um novo documento de usuário no MongoDB.

#### Saída:

Status HTTP 201 (Created) se o registro for bem-sucedido.
Mensagem indicando sucesso ou falha.

##### Autenticação de Usuário

`Endpoint: /login`

##### Método: POST

Entradas:

username (String): Nome de usuário do usuário existente.
password (String): Senha do usuário existente.


#### Ações:

Verificação se o usuário existe no MongoDB.
Comparação da senha fornecida com a senha armazenada usando Bcrypt.
Geração de um token JWT se a autenticação for bem-sucedida.

#### Saída:

Status HTTP 200 (OK) com o token JWT se a autenticação for bem-sucedida.
Status HTTP 401 (Unauthorized) se as credenciais forem inválidas.
Mensagem indicando sucesso ou falha.

#### Recursos:

Utilize o modelo de usuário fornecido no exemplo.
Use o Bcrypt para o hash seguro de senhas.
Implemente estratégias de autenticação do Passport.js para o login.

#### Observações:

Documente seu código adequadamente.
Implemente medidas de segurança, como tratamento de erros e validação de entrada.

#### Teste seus endpoints usando ferramentas como Postman ou curl.

Ao completar esta atividade, você terá construído uma base sólida para a autenticação de usuários em uma API Node.js. 


## Objetivos de aprendizagem
  
- Variáveis e constantes 
- Uso de comandos de git: `git add` `git commit` `git pull` `git push`
- Gerenciamento de repositorios de GitHub (clone e fork)
- Compreensão do Bcrypt:
- Compreender o propósito e a importância do Bcrypt
- Hash e verificação de senhas
- Banco de dados NoSQL
- Implementar operações CRUD (Create, Read, Update, Delete) para usuários na API.
- Aprender a criar rotas usando o framework Express.



## Orientações:

- O trabalho pode ser feito em dupla ou individual.
- O projeto deverá ser entregue subindo o seu código no GitHub (commit/push) em seguida o link do repositório deverá ser enviado na atividade na plataforma da Campinho Digital. 

## Critérios de aceitação

- Os dados precisam ser exibidos por meio de uma interface gráfica. 


#### Hacker edition:

- Trabalho com Tokens JWT (JSON Web Tokens)
- Aprender a tratar erros e exceções de maneira apropriada em uma aplicação Node.js
- Segurança da API
- Aprender a usar bibliotecas de teste, como Mocha ou Jest.
- Aprender a documentar a API, descrevendo endpoints, métodos e requisitos de autenticação.
- Utilizar ferramentas como Swagger ou apidoc para gerar documentação automaticamente.Uso do Passport.js
- Uso do Passport.js

Gestão de Erros e Exceções:
#### Links utéis:
[Express](https://expressjs.com/)
[Login Api Mongo](https://medium.com/@developerom/login-page-with-node-js-and-mongodb-integration-bb1edeae906)
[JSON](https://www.google.com/search?q=o+que+%C3%A9+json&oq=O+QUE+%C3%89+JSON&aqs=chrome.0.69i59j0i512l6j69i60.1993j0j7&sourceid=chrome&ie=UTF-8)
[Como trabalhar com JSON?](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Objects/JSON)
[JWT?](https://www.alura.com.br/artigos/tipos-de-autenticacao?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conte%C3%BAdos&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=11384329873&hsa_grp=111087461203&hsa_ad=687448474447&hsa_src=g&hsa_tgt=dsa-843358956400&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiA75itBhA6EiwAkho9e8ZAojdzrfJv3Zf7WLgDE49gAIIKCReJ0w4-lI99XA0DjtEnThhoIxoCEvsQAvD_BwE)
[Organizando meu projeto](https://medium.com/@tanooshri24/scalable-project-structure-for-backend-applications-55636326ee37)
[Testes com JS](https://gabrieluizramos.com.br/anatomia-de-um-teste-em-javascript)
[Bycript](https://heynode.com/blog/2020-04/salt-and-hash-passwords-bcrypt/)
[ODM](https://www.freecodecamp.org/portuguese/news/introducao-ao-mongoose-para-mongodb/)
[Postam](https://jera.com.br/blog/5847/desenvolvimento/como-usar-o-postman)



## Dicas

- Certifique-se de estar com a sua maquina configurada de acordo com as aulas vistas anteriormente.
- Utilize um módulo ou arquivo separado para armazenar configurações como URI do MongoDB, chave secreta para JWT, etc.
- Organize o projeto em uma estrutura mais modular, separando rotas, modelos, controladores, etc. Isso facilita a escalabilidade e manutenção.
- Considere refatorar partes do código para torná-lo mais limpo e seguir boas práticas de codificação.
- Configure um ambiente de desenvolvimento usando ferramentas como nodemon para monitorar alterações no código e reiniciar automaticamente o servidor.
- Adicione uma configuração centralizada para a conexão com o MongoDB, facilitando possíveis mudanças futuras.
- Utilize variáveis de ambiente para configurar informações sensíveis, como chaves secretas e senhas.




