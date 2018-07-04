# Prescare

[![CircleCI](https://circleci.com/gh/aceleradora-TW/prescare.svg?style=svg)](https://circleci.com/gh/aceleradora-TW/prescare)


Pré-requisitos minimos para contribuir
Ubuntu 12.04;
Node.js 4;
Docker CE;
NPM

Certifique-se de possuir o Git instalado no seu Ubuntu. Caso não possua, insira os comandos a seguir no terminal:

sudo apt-get update
sudo apt-get install git

Instalando o Node.js:
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get update
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential

Instalando e iniciando Docker

https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce-1


Abra o terminal e cole o seguinte comando para obter uma cópia do repositório:

git clone https://github.com/aceleradora-TW/prescare.git


Instalando as dependências:

cd prescare/
npm install
npm run db:start
npm run db:create
npm start
**

Inserindo URL nas variáveis de ambiente
Para logar no banco, é necessário que insira a URL como variável de ambiente:

echo 'export DATABASELOGIN="localhost:27017/conhecimento-livre-dev"' >> ~/.bashrc
Após exportar a variável de ambiente, faça logoff para que o sistema atualize as variáveis.

Populando o banco local
É necessário adicionar o primeiro curso ao projeto. No diretório /conhecimento-livre digite:

mongoimport --db conhecimento-livre-dev --collection authors --drop --file authors.json
mongoimport --db conhecimento-livre-dev --collection admins --drop --file admins.json
Você pode gerenciar seus cursos no painel de admin. Login padrão: Usuario:admin Senha:password

Iniciando o servidor
Para iniciar o servidor, execute o seguinte comando, dentro do diretório /conhecimento-livre:

npm start


Acessando a pagina
Acessar localmente o projeto:

http://localhost:3000

Nossa URL:



URL Staging:

https://prescare-staging.herokuapp.com/