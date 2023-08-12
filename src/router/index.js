import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ListView from '@/views/ListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{title: "Главная"}
  },
  {
    path: '/list',
    name: 'list',
    component: ListView,
    meta:{title: "Список Подарков"}
  },
]

const router = createRouter({
  history: createWebHashHistory(),
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
