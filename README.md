# Proffy

![Project license](https://img.shields.io/github/license/pedrosancao/nlw-proffy)
![Code size](https://img.shields.io/github/languages/code-size/pedrosancao/nlw-proffy)
![Node.js](https://img.shields.io/badge/Node.js-server-default?logo=node.js&logoColor=fff&color=339933)
![React](https://img.shields.io/badge/React-frontend-blue?logo=react&logoColor=fff)
![PostgreeSQL](https://img.shields.io/badge/PostgreeSQL-database-default?logo=PostgreSQL&logoColor=fff&color=336791)

[_Read in English_](./README-en.md)

Projeto do evento da Rocketseat "Next Level Week" conectando pessoas que querem assistir e apresentar aulas.

Foi criado com Node, React, Express e PostgreeSQL.

## Vidas negras importam

**Esse repositório não tem "_master_"**. Leia mais:
[GitHub troca termo "master" para evitar referências à escravidão][master-replace]
e [_GitHub abandons 'master' term to avoid slavery row_][master-replace-en]

[master-replace]: https://sempreupdate.com.br/github-troca-termo-master-para-evitar-referencias-a-escravidao/
[master-replace-en]: https://www.bbc.com/news/technology-53050955

## Requisitos

- NodeJs Stable (v10 or v12).
- Yarn
- Expo
- Docker

## Executando o projeto localmente

Após clonar o repositório, siga os passos para iniciar a aplicação.

Para servir a API:

```bash
# navegar para o diretório server
cd server/
# copiar arquivo de variáveis de ambiente
cp .env.example .env
# instalar dependências do node (apenas na primeira execução)
yarn install
# iniciar banco PostgreSQL no docker
docker run --name nlw -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Agora conecte no contêiner utilizando as credenciais no `.env` para criar o banco de dados:

```sql
CREATE DATABASE proffy;
```

Continue no terminal com os seguintes comandos:

```bash
# criar tabelas no banco de dados (apenas na primeira execução)
yarn migrate
# iniciar servidor de desenvolvimento
yarn dev
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

- [ ] Layout extendido da aplicação
- [x] Autenticação de usuários com JWT (parcial - apenas no _back-end_)
- [ ] Recuperação de senhas
- [ ] Perfil do proffy
- [ ] Splash Screen no React Native com Expo
- [ ] Paginação na listagem de "proffys"
- [ ] Exibição de horários disponíveis dos "proffys"
- [ ] Salvar "proffys" favoritos
- [ ] Logout da aplicação
- [x] [Deploy da aplicação](https://www.notion.so/Deploy-NLW-56f2a980c20e41d6b1dd22a4d1348e6e)

Descrição completa no [_Notion_][proffy-v2].

## Licence

Esse software foi publicado sob a licença do MIT, veja [LICENSE](./LICENSE).

[proffy-v2]: https://www.notion.so/Vers-o-2-0-Proffy-eefca1b981694cd0a895613bc6235970
