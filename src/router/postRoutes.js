import PostView from '@/views/PostView.vue';

const postRoutes = [{
  path: '/posts/:id',
  name: 'postView',
  component: PostView,
}];

export default postRoutes;
