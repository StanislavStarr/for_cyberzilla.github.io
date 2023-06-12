import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue';
import UserPage from './components/UserPage.vue';
import PaymentPage from './components/PaymentPage.vue';

const routes = [
  { path: '/users', component: UserPage },
  { path: '/payments', component: PaymentPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
