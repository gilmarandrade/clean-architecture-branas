export default interface ProductsGateway {
    getProducts(): Promise<Output[]>   
}

export class ProductsGatewayHttp implements ProductsGateway {
    async getProducts(): Promise<Output[]> {
        const response = await fetch('http://localhost:3000/products')
        return response.json()
    }
    
}

export class ProductsGatewayFake implements ProductsGateway {
    async getProducts(): Promise<Output[]> {
        return [
            { productId: 1, description: 'A', price: 100 },
            { productId: 2, description: 'B', price: 200 },
            { productId: 3, description: 'C', price: 400 }
        ]
    }
    
}

type Output = {
    productId: number,
    description: string,
    price: number
}