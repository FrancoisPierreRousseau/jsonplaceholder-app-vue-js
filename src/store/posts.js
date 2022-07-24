import blog from '@/apis/blog';
import _ from 'lodash';
// eslint-disable-next-line import/no-cycle
import router from '@/router';

const posts = {
  namespaced: true,
  state: {
    posts: null,
    hasFetch: false,
  },
  mutations: {
    fetchPosts(state, data) {
      state.posts = { ...state.posts, ..._.mapKeys(data, 'id') };
    },
    fetchPost(state, data) {
      state.posts = {
        ...state.posts,
        [data.id]: data,
      };
    },
    createPost(state, data) {
      state.posts = {
        ...state.posts,
        [data.id]: data,
      };
    },
    editPost(state, data) {
      state.posts = {
        ...state.posts,
        [data.id]: data,
      };
    },
    deletePost(state, data) {
      state.posts = _.omit(state.posts, data);
    },
  },
  getters: {
    filterByUserId: (state) => (userId) => _.filter(state.posts, ['userId', userId]),
    postsIsEmpty: (state) => _.isEmpty(state.posts),
    reversPosts: (state) => _.reverse(_.toArray(state.posts)),
  },
  actions: {
    async fetchPosts({ commit }, params = null) {
      const response = await blog.get('/posts', {
        params,
      });
      commit('fetchPosts', response.data);
    },
    async fetchPost({ commit }, id) {
      const response = await blog.get(`/posts/${id}`);
      commit('fetchPost', response.data);
    },
    async createPost({
      commit,
      rootState,
      state,
    }, formValues) {
      const postToPost = {
        ...formValues,
        userId: rootState.auth.auth.userId,
      };

      const createUserFetch = async () => {
        const response = await blog.post('/posts', postToPost);
        state.hasFetch = true;
        return response;
      };

      const response = !state.hasFetch
        ? await createUserFetch()
        : {
          data: {
            ...postToPost,
            id: _.last(_.toArray(state.posts)).id + 1,
          },
        };
      commit('createPost', response.data);
      await router.push({ path: '/admin' });
    },
    async editPost({ commit }, { id, formValues }) {
      const response = await blog.patch(`/posts/${id}`, formValues);
      console.log(response.data);
      if (_.isEmpty(response.data)) {
        response.data = { ...formValues, id: _.toNumber(id) };
      }
      commit('editPost', response.data);
      await router.push({ path: '/admin' });
    },
    async deletePost({ commit }, id) {
      commit('deletePost', id);
      await router.push('/admin');
    },
  },
};

export default posts;
