import express from 'express'
import cors from 'cors'
import GetProducts from './application/GetProducts'
import { ProductDAODatabase } from './infra/dao/ProductDAO'
import { PgPromiseAdapter } from './infra/database/DatabaseConnection'

async function main() {
    const app = express()
    app.use(cors())
    app.get('/', function (req, res) {
        console.log('ok')
        res.json('ok')
    })
    app.get('/products', async function (req, res) {
        const databaseConnection = new PgPromiseAdapter()
        const productDAO = new ProductDAODatabase(databaseConnection)
        const getProducts = new GetProducts(productDAO)
        const output = await getProducts.execute()
        await databaseConnection.close()
        console.log('/products')
        res.json(output)
    })
    app.listen(3000, () => console.log('listening on port 3000'))
}

main()