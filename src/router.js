import Main from '@/pages/Main';
import { createRouter, createWebHistory } from 'vue-router';
import UserPage from '@/components/UserPage.vue';
import PaymentPage from '@/components/PaymentPage.vue';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/users',
    component: UserPage,
  },
  {
    path: '/payments',
    component: PaymentPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
