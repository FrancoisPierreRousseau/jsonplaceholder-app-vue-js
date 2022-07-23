import HomeView from '@/views/HomeView.vue';
import RegisterView from '@/views/RegisterView.vue';
import ConnectionView from '@/views/ConnectionView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import AdminView from '@/views/AdminView.vue';

const appRoutes = [{
  path: '/',
  name: 'home',
  component: HomeView,
},
{
  path: '/register',
  name: 'register',
  component: RegisterView,
},
{
  path: '/connect',
  name: 'connect',
  component: ConnectionView,
},
{
  path: '/page-not-found',
  component: NotFoundView,
  name: 'page-not-found',
},
{
  path: '/admin',
  component: AdminView,
  name: 'admin',
  meta: { requiresAuth: true },
}];

export default appRoutes;
