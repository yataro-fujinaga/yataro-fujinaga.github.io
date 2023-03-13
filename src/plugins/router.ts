import { createRouter, createWebHistory } from 'vue-router';
import Top from '@/views/top.vue';

const routes = [
  {
    path: '/',
    name: 'top',
    component: Top,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
