# Proffy

![Project license](https://img.shields.io/github/license/pedrosancao/nlw-proffy)
![Code size](https://img.shields.io/github/languages/code-size/pedrosancao/nlw-proffy)
![Node.js](https://img.shields.io/badge/Node.js-server-default?logo=node.js&logoColor=fff&color=339933)
![React](https://img.shields.io/badge/React-frontend-blue?logo=react&logoColor=fff)
![PostgreeSQL](https://img.shields.io/badge/PostgreeSQL-database-default?logo=PostgreSQL&logoColor=fff&color=336791)

Project from Rocketseat "Next Level Week" bootcamp to connect people
looking for and giving classes.

It is created with Node, React, Express and PostgreeSQL.

## Requirements

- NodeJs Stable (v10 or v12).
- Yarn
- Expo
- Docker

## Running the project

After cloning the repository start API server:

```bash
# navigate to server folder
cd server/
# copy environment variables file
cp .env.example .env
# install node dependencies (only on first run)
yarn install
# run PostgreSQL container on docker
docker run --name nlw -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Now connect to container using credentials on `.env` to create the database:

```sql
CREATE DATABASE proffy;
```

Back to terminal execute these commands:

```bash
# create tables on database (only on first run)
yarn migrate
# start dev server
yarn dev
```

On another terminal run the React server for web:

```bash
# navigate to web folder
cd web/
# install node dependencies (only on first run)
yarn install
# start dev server
yarn start
```

"Proffy" will open on a new browser window.

## Rocketseat challenge: "Proffy" Version 2 

Bootcamp participants were challenged to implement the following requirements:

- [ ] Extended layout
- [ ] User auth
- [ ] Password recovery
- [ ] Teacher profile
- [ ] Splash screen
- [ ] Pagination of classes result
- [ ] Show teacher schedule hours
- [ ] Save favorite teachers
- [ ] User logout
- [ ] Deploy

Full description on [Notion][proffy-v2] (in Portuguese).

## Licence

This software is released under MIT License, check [LICENSE](./LICENSE).

[proffy-v2]: https://www.notion.so/Vers-o-2-0-Proffy-eefca1b981694cd0a895613bc6235970
