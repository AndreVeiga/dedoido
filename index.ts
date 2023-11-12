import { Server } from './src/serve'
import express from 'express'
import { Routes } from './src/config/route'
const router = express.Router()

new Routes(router)

const config = {
    port: 5000,
}

const server = new Server(config, router)
server.start()