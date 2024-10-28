import Checkout from "@/domain/Checkout";
import Product from "@/domain/Product";
import { describe, it, expect } from 'vitest'

describe('Ckeckout', () => {
    it("deve testar o fluxo de checkout", () => {
        const checkout = new Checkout()
        const products: Product[] = [
            { productId: 1, description: 'A', price: 100 },
            { productId: 2, description: 'B', price: 200 },
            { productId: 3, description: 'C', price: 400 },
        ]
        checkout.add(products[0])
        checkout.add(products[0])
        checkout.add(products[1])
        expect(checkout.getTotal(products)).toBe(400)
        
        checkout.incrementItem(1)
        expect(checkout.getTotal(products)).toBe(500)
        checkout.incrementItem(2)
        expect(checkout.getTotal(products)).toBe(700)
        
        checkout.decrementItem(1)
        expect(checkout.getTotal(products)).toBe(600)
        expect(checkout.items).toHaveLength(2)
        expect(checkout.items[0].quantity).toBe(2)
        expect(checkout.items[1].quantity).toBe(2)
    })
})