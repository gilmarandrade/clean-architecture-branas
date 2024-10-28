import DatabaseConnection from "../database/DatabaseConnection"

// pertence a camada de use case
export default interface ProductDAO {
    list(): Promise<Product[]>
}

// Interface Adapters
export class ProductDAODatabase implements ProductDAO {

    constructor(readonly connection: DatabaseConnection) {

    }

    async list(): Promise<Product[]> {
        return await this.connection.query("select * from branas.product", [])
    }
    
}

export type Product = {
    product_id: number,
    description: string,
    price: string
}