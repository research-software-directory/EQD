# EQD (European Quantum Directory)

The EQD is specific version of RSD (Research Software Directory) tailor made for this purpose.
**Please do not use this version for other applications than EQD. If you need customized version of RSD please contact RSD team at <rsd@esciencecenter.nl>**.

## How to build and run the EQD locally

The EQD uses all RSD basic services except frontend and nginx. The RSD services are defined in docker-compose.yml
The frontend of EQD is based on RSD frontend service which is adjusted to enable specific EQD functionality.
Mainly the homepage and community module are customized.

### Building from source code

1. Before installing the dependencies ensure that you have `docker` and `docker compose` V2 (see the [documentation of Docker Compose](https://docs.docker.com/compose/compose-v2/)) locally.
2. You will also need `make` to automate the configuration and installation process.
3. Set the required environment variables:
  Copy the file `.env.example` to `.env` file at the root of the project
  and fill the secrets and passwords. Check if the secrets are correct.
  The `Makefile` will take care about creating an appropriate `frontend/.env.local`
  from the `.env` file, needed only when developing the frontend.

### Running all services

```bash
# Start the containers via the make file
make start
# OR directly use docker compose
docker compose up
```

### Stopping all services

```bash
# Stop all services via the makefile
make stop
# OR directly use docker compose
docker compose down
```

### Developing the frontend

During development it is advised to run frontend directly outside the docker containers. You must have Node.js installed, see the `Dockerfile` in the frontend directory for the version in use. The .env.local file should be in the root of the frontend directory and have adjusted env variables in order for frontend to communicate with other RSD services while outside docker network. For exact changes in the .env.local file see Makefile section `frontend/.env.local`.

```bash
# start all services and generate demo data
make start
# copy .env to .env.local and adjust variables
make frontend/.env.local
# navigate to frontend folder
cd /frontend
# install dependencies
npm install
# start frontend in dev mode
npm run dev
# visit frontend on http://localhost:3000
```

You can also run frontend in development mode as a docker service (called frontend-dev) that enables hot reloading. By default this frontend-dev service will not be started automatically.

```bash
# Run frontend development using docker at http://localhost:3000
make frontend-dev
# OR use docker compose directly
docker compose -f docker-compose.yml -f docker-compose.dev.yml up
```

For more detailed instructions concerning the frontend development see [frontend/README.md](frontend/README.md).
