import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
