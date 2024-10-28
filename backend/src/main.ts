import express from 'express'
import cors from 'cors'
import pgp from 'pg-promise'

async function main() {
    const app = express()
    app.use(cors())
    app.get('/', function (req, res) {
        console.log('ok')
        res.json('ok')
    })
    app.get('/products', async function (req, res) {
        const connection = pgp()("postgres://postgres:123456@localhost:5432/app")
        const products = await connection.query("select * from branas.product", [])
        console.log('/products', products)
        await connection.$pool.end()
        res.json(products.map((product: any) => ({
            productId: product.product_id,
            description: product.description,
            price: parseFloat(product.price)
        })))
    })
    app.listen(3000, () => console.log('listening on port 3000'))
}

main()