import { createRouter, createWebHistory } from '@ionic/vue-router';
import tab1 from '../views/Tab1.vue'; 

const routes = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tab1',
    component: tab1
  },
  {
    path: '/tab2',
    component: () => import('@/views/Tab2.vue')
  },
  {
    path: '/tab3',
    component: () => import('@/views/Tab3.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
