import express from 'express'
import db from './config/dbConnect'
import { Connection } from 'mongoose'
import router from './routes'

export class App{
    public server: express.Application
    public db: Connection

    constructor() {
        this.db = db
        this.db.on("error", console.log.bind(console, 'Erro de conexão'))
        this.db.once("open", () =>{
            console.log('conexão com o banco feita com sucesso')
        })
        this.server = express()
        this.middleware()
        this.router()
    }

    private middleware() {
        this.server.use(express.json())
    }

    private router() {
        router(this.server)
    }
}