import blog from '@/apis/blog';
import _ from 'lodash';

const albums = {
  namespaced: true,
  state: {
    collection: [{}],
  },
  mutations: {
    fetchAlbums(state, data) {
      state.collection = { ...state.collection, ..._.mapKeys(data, 'id') };
    },
    fetchAlbum(state, data) {
      state.collection = { ...state.collection, [data.id]: data };
    },
    createAlbum(state, data) {
      state.collection = { ...state.collection, [data.id]: data };
    },
    editAlbum(state, data) {
      state.collection = { ...state.collection, [data.id]: data };
    },
    deleteAlbum(state, data) {
      _.omit(state.collection, data);
    },
  },
  actions: {
    async fetchAlbums({ commit }) {
      const response = await blog.get('/albums');
      commit('fetchAlbums', response);
    },
    async fetchAlbum({ commit }, id) {
      const response = await blog.get(`/albums/${id}`);
      commit('fetchAlbum', response);
    },
    async createAlbum({ commit }, formValues) {
      const response = await blog.post('/albums', { ...formValues });
      commit('createAlbum', response);
    },
    async editAlbum({ commit }, id, formValues) {
      const response = await blog.patch(`/albums/${id}`, formValues);
      commit('editAlbum', response);
    },
    async deleteAlbum({ commit }, id) {
      await blog.delete('/albums');
      commit('deleteAlbum', id);
    },
  },
};

export default albums;
