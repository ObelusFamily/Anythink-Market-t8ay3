# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

* to reset your branch run `./start_quest.sh` (or `npm run init`)
* You'll need docker to run this project, so install it here: https://docs.docker.com/get-docker/
* to start docker compose run `docker-compose up` or `npm start`
* To verify backend is running, brows to  http://localhost:3000/api/ping
* If set, browse to  http://localhost:3001/register and register new user by giving name, password and email.
* to stop docker compose run `docker-compose up` or `npm stop`
* to examine backend container run `npm run logs-backend`