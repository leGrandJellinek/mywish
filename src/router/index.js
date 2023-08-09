import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ListView from '@/views/ListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list',
    name: 'list',
    component: ListView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
