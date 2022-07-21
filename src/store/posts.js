import blog from '@/apis/blog';
import _ from 'lodash';

const posts = {
  namespaced: true,
  state: {
    posts: null,
  },
  mutations: {
    fetchPosts(state, data) {
      state.posts = { ...state.posts, ..._.mapKeys(data, 'id') };
    },
    fetchPost(state, data) {
      state.posts = { ...state.posts, [data.id]: data };
    },
    createPost(state, data) {
      state.posts = { ...state.posts, [data.id]: data };
    },
    editPost(state, data) {
      state.posts = { ...state.posts, [data.id]: data };
    },
    deletePost(state, data) {
      _.omit(state.posts, data);
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const response = await blog.get('/posts');
      commit('fetchPosts', response.data);
    },
    async fetchPost({ commit }, id) {
      const response = await blog.get(`/posts/${id}`);
      commit('fetchPost', response.data);
    },
    async createPost({ commit }, formValues) {
      const response = await blog.post('/posts', { ...formValues });
      commit('createPost', response.data);
    },
    async editPost({ commit }, id, formValues) {
      const response = await blog.patch(`/posts/${id}`, formValues);
      commit('editPost', response.data);
    },
    async deletePost({ commit }, id) {
      await blog.delete('/posts');
      commit('deletePost', id);
    },
  },
};

export default posts;
