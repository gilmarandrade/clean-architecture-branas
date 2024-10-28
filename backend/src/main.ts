import GetProducts from './application/GetProducts'
import { ProductDAODatabase } from './infra/dao/ProductDAO'
import { PgPromiseAdapter } from './infra/database/DatabaseConnection'
import { ExpressAdapter } from './infra/http/HttpServer'

async function main() {
    const httpServer = new ExpressAdapter()

    const databaseConnection = new PgPromiseAdapter()
    const productDAO = new ProductDAODatabase(databaseConnection)
    const getProducts = new GetProducts(productDAO)
    
    httpServer.register('get', '/products', async (params: any, body: any) => {
        console.log('/products')
        const output = await getProducts.execute()
        return output
    })

    httpServer.listen(3000)
    
    
}

main()