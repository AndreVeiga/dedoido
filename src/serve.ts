import express, { Express, Router } from 'express'

export interface ConfigServer {
    port: number,
}

export class Server {
    server: Express = express();

    constructor(
        private config: ConfigServer,
        private router: Router,
    ) {}

    private configure() {
        this.server.use(express.json())
        this.server.use(this.router)
    }

    async start() {
        this.configure();
        this.server.listen(
            this.config.port,
            () => console.log(`Server running in ${this.config.port}`)
        )
    }

    async stop() {
        this.server.removeAllListeners()
    }
}
