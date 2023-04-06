import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllProductsView from '../views/AllProductsView.vue'
import ProductView from '../views/ProductView.vue'
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/all-products',
      name: 'about',
      component: AllProductsView
    },
    { path: '/products/:id', name: 'product', component: ProductView },
    { path: '/register', name: 'register', component: RegisterView }
  ]
})

export default router
