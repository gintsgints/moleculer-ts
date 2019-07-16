[![Moleculer](https://badgen.net/badge/Powered%20by/Moleculer/0e83cd)](https://moleculer.services)

# moleculer-ts

## To start

For start you should start nats messaging to begin work on:

```bash
docker-compose up -d nats
```

## NPM scripts

- `yarn start:dev` - Start development mode (load all services locally with hot-reload & REPL)
- `yarn build`- Uses typescript to transpile service to javascript
- `yarn start` - Start production mode (set `SERVICES` env variable to load certain services) (previous build needed)
- `yarn cli`: Start a CLI and connect to production. Don't forget to set production namespace with `--ns` argument in script
- `yarn lint` - Run TSLint
- `yarn ci` - Run continuous test mode with watching
- `yarn test` - Run tests & generate coverage report
- `yarn dc:up`: Start the stack with Docker Compose
- `yarn dc:down`: Stop the stack with Docker Compose
