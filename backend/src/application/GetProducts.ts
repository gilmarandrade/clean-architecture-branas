import ProductDAO, { Product } from "../infra/dao/ProductDAO"

// use case
export default class GetProducts {

    constructor(readonly productDAO: ProductDAO) {

    }

    async execute(): Promise<Output[]> {
        const products = await this.productDAO.list()
        return products.map((product: Product) => ({
            productId: product.product_id,
            description: product.description,
            price: parseFloat(product.price)
        }))
    }
}

type Output = {
    productId: number,
    description: string,
    price: number
}