import blog from '@/apis/blog';
import _ from 'lodash';

const comments = {
  namespaced: true,
  state: {
    comments: null,
    hasFetch: false,
  },
  mutations: {
    fetchComments(state, data) {
      state.comments = { ...state.comments, ..._.mapKeys(data, 'id') };
    },
    fetchComment(state, data) {
      state.comments = {
        ...state.comments,
        [data.id]: data,
      };
    },
    createComment(state, data) {
      state.comments = {
        ...state.comments,
        [data.id]: data,
      };
    },
    editComment(state, data) {
      state.comments = {
        ...state.comments,
        [data.id]: data,
      };
    },
    deleteComment(state, data) {
      _.omit(state.comments, data);
    },
    hasFetch(state, data) {
      state.hasFetch = data;
    },
  },
  getters: {
    reversComments: (state) => _.reverse(_.toArray(state.comments)),
    filterByPostId: (state) => (postId) => _.filter(state.comments, ['postId', postId]),
  },
  actions: {
    async fetchComments({ commit }, params) {
      const response = await blog.get('/comments', {
        params,
      });
      commit('fetchComments', response.data);
    },
    async fetchComment({ commit }, id) {
      const response = await blog.get(`/comments/${id}`);
      commit('fetchComment', response.data);
    },
    async createComment({
      commit,
      state,
    }, formValues) {
      const createCommentFetch = async () => {
        const response = await blog.post('/comments', formValues);
        commit('hasFetch', true);
        return response;
      };

      const response = !state.hasFetch
        ? await createCommentFetch()
        : {
          data: {
            ...formValues,
            id: _.last(_.toArray(state.comments)).id + 1,
          },
        };
      commit('createComment', response.data);
    },
    async editComment({ commit }, id, formValues) {
      const response = await blog.patch(`/comments/${id}`, formValues);
      commit('editComment', response.data);
    },
    async deleteComment({ commit }, id) {
      await blog.delete('/comments');
      commit('deleteComment', id);
    },
  },
};

export default comments;
