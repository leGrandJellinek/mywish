import { createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("@/views/RegLog.vue")
  },
  {
    path: "/search",
    name:"Search",
    component:() => import("@/views/FinderView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
