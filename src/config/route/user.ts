import { Router } from 'express'
import { UserController }  from '../../infra/controller'


export class RouteUser {
    private endpoint = '/users'
    private userController = new UserController()
    private router = Router()

    getRoutes() {
        this.addRoutes()
        return this.router
    }

    private addRoutes() {
        this.router
            .route(this.endpoint)
            .get(this.userController.list)
            .post(this.userController.create)
        
        this.router
            .route(`${this.endpoint}/:id`)
            .get(this.userController.getById)
            .put(this.userController.update)
            .delete(this.userController.deleteById)        
    }
}
