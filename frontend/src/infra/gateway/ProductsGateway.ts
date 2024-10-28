export default interface ProductsGateway {
    getProducts(): Promise<Output[]>   
}

export class ProductsGatewayHttp implements ProductsGateway {
    async getProducts(): Promise<Output[]> {
        const response = await fetch('http://localhost:3000/products')
        return response.json()
    }
    
}

type Output = {
    productId: number,
    description: string,
    price: number
}