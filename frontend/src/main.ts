import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { ProductsGatewayHttp } from './infra/gateway/ProductsGateway'
import { FetchAdapter } from './infra/http/HttpClient'

const app = createApp(App)
const httpClient = new FetchAdapter()
const productsGateway = new ProductsGatewayHttp(httpClient)
app.provide('productsGateway', productsGateway)
app.mount('#app')
