import HomeView from '@/views/HomeView.vue';
import RegisterView from '@/views/RegisterView.vue';
import ConnectionView from '@/views/ConnectionView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

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
}];

export default appRoutes;
