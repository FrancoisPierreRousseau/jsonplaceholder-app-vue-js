import blog from '@/apis/blog';
import _ from 'lodash';

const posts = {
  namespaced: true,
  state: {
    collection: [{}],
  },
  mutations: {
    fetchPosts(state, data) {
      state.collection = { ...state.collection, ..._.mapKeys(data, 'id') };
    },
    fetchPost(state, data) {
      state.collection = { ...state.collection, [data.id]: data };
    },
    createPost(state, data) {
      state.collection = { ...state.collection, [data.id]: data };
    },
    editPost(state, data) {
      state.collection = { ...state.collection, [data.id]: data };
    },
    deletePost(state, data) {
      _.omit(state.collection, data);
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const response = await blog.get('/posts');
      commit('fetchPosts', response);
    },
    async fetchPost({ commit }, id) {
      const response = await blog.get(`/posts/${id}`);
      commit('fetchPost', response);
    },
    async createPost({ commit }, formValues) {
      const response = await blog.post('/posts', { ...formValues });
      commit('createPost', response);
    },
    async editPost({ commit }, id, formValues) {
      const response = await blog.patch(`/posts/${id}`, formValues);
      commit('editPost', response);
    },
    async deletePost({ commit }, id) {
      await blog.delete('/posts');
      commit('deletePost', id);
    },
  },
};

export default posts;
