import HomeView from '@/views/HomeView.vue';
import RegisterView from '@/views/RegisterView.vue';
import ConnectionView from '@/views/ConnectionView.vue';

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
}];

export default appRoutes;
