import blog from '@/apis/blog';
import _ from 'lodash';

const comments = {
  namespaced: true,
  state: {
    comments: [{}],
  },
  mutations: {
    fetchComments(state, data) {
      state.comments = { ...state.comments, ..._.mapKeys(data, 'id') };
    },
    fetchComment(state, data) {
      state.comments = { ...state.comments, [data.id]: data };
    },
    createComment(state, data) {
      state.comments = { ...state.comments, [data.id]: data };
    },
    editComment(state, data) {
      state.comments = { ...state.comments, [data.id]: data };
    },
    deleteComment(state, data) {
      _.omit(state.comments, data);
    },
  },
  actions: {
    async fetchComments({ commit }) {
      const response = await blog.get('/comments');
      commit('fetchComments', response);
    },
    async fetchComment({ commit }, id) {
      const response = await blog.get(`/comments/${id}`);
      commit('fetchComment', response);
    },
    async createComment({ commit }, formValues) {
      const response = await blog.post('/comments', { ...formValues });
      commit('createComment', response);
    },
    async editComment({ commit }, id, formValues) {
      const response = await blog.patch(`/comments/${id}`, formValues);
      commit('editComment', response);
    },
    async deleteComment({ commit }, id) {
      await blog.delete('/comments');
      commit('deleteComment', id);
    },
  },
};

export default comments;
