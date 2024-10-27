<script setup lang="ts">
import { ref } from 'vue';

  const products = ref<any>([])
  const items = ref<any>([])
  const total = ref(0)

  async function loadProducts() {
    const response = await fetch('http://localhost:3000/products')
    const output = await response.json()
    products.value.push(...output)
  }

  function add(product: any) {
    const item = items.value.find((item: any) => item.productId === product.productId)
    if(item) {
      item.quantity++
    } else {
      items.value.push({ productId: product.productId, description: product.description, quantity: 1 })
    }
    total.value += product.price
  }

  loadProducts()
</script>

<template>
  <div>
    <div class="label-total">{{total}}</div>
    <div v-for="item in items">
      <div class="label-cart-item-description">{{ item.description }}</div>
      <div class="label-cart-item-quantity">{{ item.quantity }}</div>
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
