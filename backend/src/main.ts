import express from 'express'
import cors from 'cors'

async function main() {
    const app = express()
    app.use(cors())
    app.get('/', function (req, res) {
        console.log('ok')
        res.json('ok')
    })
    app.get('/products', function (req, res) {
        console.log('/products')
        res.json([
            { productId: 1, description: 'A', price: 100 },
            { productId: 2, description: 'B', price: 200 },
            { productId: 3, description: 'C', price: 400 },
        ])
    })
    app.listen(3000, () => console.log('listening on port 3000'))
}

main()