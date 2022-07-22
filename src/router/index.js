import { createRouter, createWebHashHistory } from 'vue-router';
import postRoutes from '@/router/postRoutes';
import _ from 'lodash';
import appRoutes from './appRoutes';

const routes = [
  ...appRoutes,
  ...postRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// eslint-disable-next-line no-unused-vars
router.beforeEach(async (to, from, next) => {
  if (!_.some(routes, { name: to.name })) {
    next({ name: 'page-not-found' });
  }
  next();
});

export default router;
