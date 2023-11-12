import { Request, Response } from 'express'

export class UserController {
    async list(request: Request, response: Response) {
        response.send({ message: 'No get de todos' })
    }

    async getById(request: Request, response: Response) {
        response.send({ message: 'No get by id' })
    }

    async create(request: Request, response: Response) {
        response.send({ message: 'No create' })
    }

    async update(request: Request, response: Response) {
        response.send({ message: 'No update' })
    }

    async deleteById(request: Request, response: Response) {
        response.send({ message: 'No delete' })
    }
}