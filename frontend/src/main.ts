import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { ProductsGatewayHttp } from './infra/gateway/ProductsGateway'

const app = createApp(App)
const productsGateway = new ProductsGatewayHttp()
app.provide('productsGateway', productsGateway)
app.mount('#app')
