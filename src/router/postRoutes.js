import PostView from '@/views/PostView.vue';
import PostEdit from '@/components/posts/PostEdit.vue';
import PostCreate from '@/components/posts/PostCreate.vue';

const postRoutes = [{
  path: '/posts/:id',
  name: 'postView',
  component: PostView,
}, {
  path: '/posts/edit/:id',
  name: 'post-edit',
  component: PostEdit,
  meta: { requiresAuth: true },
}, {
  path: '/posts/new',
  name: 'post-new',
  component: PostCreate,
  meta: { requiresAuth: true },
}];

export default postRoutes;
