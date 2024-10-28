import express, { Request, Response } from 'express'
import cors from 'cors'

export default interface HttpServer {
    register(method: string, url: string, callback: Function): void
    listen(port: number): void
}

// frameworks and drivers
export class ExpressAdapter implements HttpServer {
    app: any

    constructor() {
        this.app = express()
        this.app.use(cors())
    }

    register(method: string, url: string, callback: Function): void {
        this.app[method](url, async function(req: Request, res: Response) {
            const output = await callback(req.params, req.body)
            res.json(output) 
        })
    }

    listen(port: number): void {
        this.app.listen(port)
    }
    
}