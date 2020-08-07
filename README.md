# Proffy

![Project license](https://img.shields.io/github/license/pedrosancao/nlw-proffy)
![Code size](https://img.shields.io/github/languages/code-size/pedrosancao/nlw-proffy)
![Node.js](https://img.shields.io/badge/Node.js-server-default?logo=node.js&logoColor=fff&color=339933)
![React](https://img.shields.io/badge/React-frontend-blue?logo=react&logoColor=fff)
![SQLite](https://img.shields.io/badge/SQLite-databse-default?logo=SQLite&logoColor=fff&color=003B57)

Projeto do evento da Rocketseat "Next Level Week" conectando pessoas que querem assistir e apresentar aulas.

Foi criado com Node, React, Express e SQLite.

## Requisitos

- NodeJs Stable (v10 or v12).
- Yarn

## Running the project

Após clonar o repositório, siga os passos para iniciar a aplicação.

PAra servir a API:

```bash
# navegar para o diretório server
cd server/
# instalar dependências do node (apenas na primeira execução)
yarn install
# criar tabelas no banco de dados (apenas na primeira execução)
yarn migrate
# iniciar servidor de desenvolvimento
yarn start
```

Em outro terminal execute o servidor do _React_ para web:

```bash
# navegar para o diretório web
cd web/
# instalar dependências do node (apenas na primeira execução)
yarn install
# iniciar servidor de desenvolvimento
yarn start
```

"Proffy" irá abrir numa janela do navegador.

## Desafio Rocketseat: "Proffy" Versão 2 

Ao final do evento os participantes foram desafiados a implementar as seguintes funcionalidades:

-  [ ] Layout extendido da aplicação
-  [ ] Autenticação de usuários
-  [ ] Recuperação de senhas
-  [ ] Perfil do proffy
-  [ ] Splash Screen no React Native com Expo
-  [ ] Paginação na listagem de "proffys"
-  [ ] Exibição de horários disponíveis dos "proffys"
-  [ ] Salvar "proffys" favoritos
-  [ ] Logout da aplicação
-  [ ] Deploy da aplicação

Descrição completa no [_Notion_][proffy-v2].

## Licence

Esse software foi publicado sob a licença do MIT, veja [LICENSE](./LICENSE).

[proffy-v2]: https://www.notion.so/Vers-o-2-0-Proffy-eefca1b981694cd0a895613bc6235970
