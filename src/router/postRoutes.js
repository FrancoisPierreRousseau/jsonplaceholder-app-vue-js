import PostView from '@/views/PostView.vue';
import PostEdit from '@/components/posts/PostEdit.vue';
import PostCreate from '@/components/posts/PostCreate.vue';
import PostDelete from '@/components/posts/PostDelete.vue';

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
}, {
  path: '/posts/delete/:id',
  name: 'post-delete',
  component: PostDelete,
  meta: { requiresAuth: true },
}];

export default postRoutes;
