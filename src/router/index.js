import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/products',
    name: 'products',
    component: function () {
      return import('../views/ProductsView.vue')
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: function () {
      return import('../views/AdminView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
