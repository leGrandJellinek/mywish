import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import InDevelope from "@/views/InDevelope";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{title: "Главная"}
  },
  {
    path: '/indevelope',
    name: 'indevelope',
    component: InDevelope,
    meta:{title: "В разработке"}
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'Mywish' // title по default
  }
})

export default router
