import { Router } from 'express'
import { RouteUser } from './user'

export class Routes {
    constructor(private router: Router) {
        this.addRoutes()
    }

    private addRoutes() {
        this.router.use(new RouteUser().getRoutes())
    }
}