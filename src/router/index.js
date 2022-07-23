import { createRouter, createWebHashHistory } from 'vue-router';
import postRoutes from '@/router/postRoutes';
// eslint-disable-next-line import/no-cycle
import store from '@/store';
import appRoutes from './appRoutes';

const routes = [
  ...appRoutes,
  ...postRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// eslint-disable-next-line consistent-return
router.beforeEach(async (to) => {
  if (!to.name) {
    return { name: 'page-not-found' };
  }
  if (to.meta.requiresAuth && !store.state.auth.auth.isSigned) {
    return { name: 'connect' };
  }
});

export default router;
