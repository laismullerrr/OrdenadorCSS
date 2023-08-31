# 🛠️Ferramenta de Ordenação de Propriedades CSS 
Projeto Individual realizado no Módulo 03 do curso de Desenvolvedor Full Stack Resília, turma Códigos do Amanhã.


## 📌Objetivo:
Criação de uma ferramenta simples e eficiente que recebe propriedades CSS e as ordena por ordem alfabética com visualização no terminal.


## 🌐Tecnologias:
Este projeto foi desenvolvido utilizando:

- [Node.js](https://nodejs.org/en/) (versão 18.17.1)
- [VSCode](https://code.visualstudio.com/)
- [Readline-Sync](https://www.npmjs.com/package/readline-sync)


## 💻Utilização:
-Primeiramente, Certifique-se de ter o [Node.js](https://nodejs.org/pt-br/download) instalado em sua máquina.

-Em seguida, faça o download do zip do projeto, ou clone-o em sua máquina utilizando git bash com o comando a seguir:
```bash
  git clone https://github.com/laismullerrr/OrdenadorCSS.git
```
-Entre no diretório do projeto, com o comando:
```bash
  cd app.js
```
-Abra em seu VS Code:
```bash
  cd code .
```
-Instale as dependências necessárias para funcionamento:
```bash
  npm install
```
-Inicie a ferramenta:
```bash
  npm start
```

## 🦾Sobre a API:
Abaixo, você verá exemplos de como utilizar nossa ferramenta e os resultados que deve esperar como retorno:


### 📥Entrada de Dados (válida):
-Recebe as propriedades CSS uma por vez, pressionando [enter] para enviar:

*Por favor, digite uma propriedade CSS ou "SAIR" para encerrar:*
```bash
 flex-direction  
```

*Por favor, digite uma propriedade CSS ou "SAIR" para encerrar:*
```bash
border-radius
```

*Por favor, digite uma propriedade CSS ou "SAIR" para encerrar:*
```bash
padding
```

*Por favor, digite uma propriedade CSS ou "SAIR" para encerrar:*
```bash
sair
```


### 📤Saída:
```bash
Aqui estão suas propriedades ordenadas:

- border radius
- flex-direction
- padding
Agradeçemos por utilizar nosso sistema!
```

### ❌Entrada de Dados (inválida):
Ao inserir uma entrada inválida, como números ou uma entrada vazia, você vai se deparar com a seguinte resposta no terminal:

```
Por favor, digite uma propriedade CSS ou "SAIR" para encerrar:

Ops, parece que essa entrada é inválida. Por favor, insira uma propriedade CSS ou digite "SAIR" para encerrar.
```


## 🔍Referências:
-[Documentação do NodeJS](https://nodejs.org/en/docs) 
-[Documentação do Readline-sync](https://www.npmjs.com/package/readline-sync)


## 🤝🏻Equipe:
- Laís Müller

Agradeço a todos os envolvidos por contribuírem para o andamento desse projeto <3