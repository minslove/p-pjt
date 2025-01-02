import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import StatementView from '../views/StatementView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', name: 'test', component: AboutView },
    { path: '/statement', name: '명세서', component: StatementView },
  ],
})

export default router
