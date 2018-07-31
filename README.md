# Prescare

[![CircleCI](https://circleci.com/gh/aceleradora-TW/prescare.svg?style=svg)](https://circleci.com/gh/aceleradora-TW/prescare)

Prescrição eletrônica para gerenciamento de medicamentos e cuidados feita para a casa Menino Jesus de Praga, com o objetivo de atender com excelência os acolhidos que lá residem. 

## Pré-requisitos mínimos para contribuir
- Ubuntu 12.04;
- Node.js 8;
- Docker CE;
- NPM

### Certifique-se de possuir o Git instalado no seu Ubuntu. Caso não possua, insira os comandos a seguir no terminal:
```
sudo apt-get update
sudo apt-get install git
```
## Instalando o Node.js:
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get update
sudo apt-get install -y nodejs
```

## Instalando e iniciando Docker

Siga o passo-a-passo:

https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-docker-ce


## Clonando o repositório 
Abra o terminal e cole o seguinte comando para obter uma cópia do repositório:
```
git clone https://github.com/aceleradora-TW/prescare.git
```

## Instalando as dependências:
```
cd prescare/
npm install
npm run db:start
npm run db:create
```

## Populando o banco local
```
npm run db:seed
```
## Iniciando o servidor
Para iniciar o servidor, execute o seguinte comando, dentro do diretório /prescare:
```
npm start

```
ou

```
npm run dev

```

## Acessando a página
### Acessar localmente o projeto:

http://localhost:3000

### Heroku Staging:

https://prescare-staging.herokuapp.com/


## Padrão de commits do projeto

- emoji do tipo de alteração feita
- nome de usuário pessoas que trabalharam no código (entre <>, iniciadas por @, separadas por vírgula)
- mensagem do commit (máximo 50 caracteres, início no imperativo)
- número da história de usuário do github

## resumindo
emoji < @username1, @username2, @username3 > frase do commit (imperativo - até 50 caracteres) #número da história

### Exemplo:

```
:memo: <@marcos012, @ClaudiaStrm> cria padrão de commits #0
``` 

## Tabela de emojis
Emoji | Código | Tipo de commit
------------ | ------------- | -------------
:rocket: | `:rocket:` | funcionalidades
:memo: | `:memo:` | documentação
:art: | `:art:` | refatoração
:bug: | `:bug:` | consertar (bugs)
:construction: | `:construction:` | trabalho em andamento 
:see_no_evil: | `:see_no_evil:` | gambiarra
:fire: | `:fire:` | remover códigos/arquivos  
:wrench: | `:wrench:` | configuração de ambiente 
