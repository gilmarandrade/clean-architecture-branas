<script setup lang="ts">
import { inject, ref } from 'vue';
import type ProductsGateway from './infra/gateway/ProductsGateway';

  const products = ref<any>([])
  const items = ref<any>([])

  const productsGateway = inject('productsGateway') as ProductsGateway

  async function loadProducts() {
    const output = await productsGateway.getProducts()
    products.value.push(...output)
  }

  function add(product: any) {
    const item = items.value.find((item: any) => item.productId === product.productId)
    if(item) {
      item.quantity++
    } else {
      items.value.push({ productId: product.productId, description: product.description, quantity: 1 })
    }
  }

  function decrementItem(productId: any) {
    const item = items.value.find((item: any) => item.productId === productId)
    if(item && item.quantity > 1) {
      item.quantity--
    } else {
      items.value.splice(items.value.indexOf(item), 1)
    }
  }

  function incrementItem(productId: any) {
    const item = items.value.find((item: any) => item.productId === productId)
    item.quantity++
  }

  function getTotal() {
    let total = 0
    for(const item of items.value) {
      const product = products.value.find((product: any) => product.productId === item.productId)
      if(!product) throw new Error()
      total += product.price * item.quantity
    }
    return total
  }

  loadProducts()
</script>

<template>
  <div>
    <div class="label-total">{{getTotal()}}</div>
    <div v-for="item in items">
      <div class="label-cart-item-description">{{ item.description }}</div>
      <div class="label-cart-item-quantity">{{ item.quantity }}</div>
      <button class="button-cart-item-decrement" @click="decrementItem(item.productId)">-</button>
      <button class="button-cart-item-increment" @click="incrementItem(item.productId)">+</button>
    </div>
    <hr/>
    <div v-for="product in products">
      <div class="label-product-description">{{ product.description }}</div>
      <div class="label-product-price">{{ product.price }}</div>
      <button class="button-add-product" @click="add(product)" >add</button>
    </div>
  </div>
</template>

<style scoped>

</style>
