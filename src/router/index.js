import { createRouter, createWebHashHistory } from 'vue-router';
import postRoutes from '@/router/postRoutes';
import appRoutes from './appRoutes';

const routes = [
  ...appRoutes,
  ...postRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
