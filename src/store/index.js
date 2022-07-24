import { createStore } from 'vuex';
import comments from '@/store/comments';
// eslint-disable-next-line import/no-cycle
import posts from '@/store/posts';
// eslint-disable-next-line import/no-cycle
import auth from '@/store/auth';
// eslint-disable-next-line import/no-cycle
import users from '@/store/users';
import thematic from '@/store/thematic';

export default createStore({
  modules: {
    comments,
    posts,
    auth,
    users,
    thematic,
  },
});
