import { createStore } from 'vuex';
import albums from '@/store/albums';
import comments from '@/store/comments';
import photos from '@/store/photos';
// eslint-disable-next-line import/no-cycle
import posts from '@/store/posts';
import todos from '@/store/todos';
// eslint-disable-next-line import/no-cycle
import auth from '@/store/auth';
// eslint-disable-next-line import/no-cycle
import users from '@/store/users';
import thematic from '@/store/thematic';

export default createStore({
  modules: {
    albums,
    comments,
    photos,
    posts,
    todos,
    auth,
    users,
    thematic,
  },
});
