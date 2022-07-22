import { createStore } from 'vuex';
import albums from '@/store/albums';
import comments from '@/store/comments';
import photos from '@/store/photos';
import posts from '@/store/posts';
import todos from '@/store/todos';
import auth from '@/store/auth';
import users from '@/store/users';

export default createStore({
  modules: {
    albums,
    comments,
    photos,
    posts,
    todos,
    auth,
    users,
  },
});
