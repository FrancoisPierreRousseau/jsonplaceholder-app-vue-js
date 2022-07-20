import blog from '@/apis/blog';
import _ from 'lodash';

const photos = {
  namespaced: true,
  state: {
    collection: [{}],
  },
  mutations: {
    fetchPhotos(state, data) {
      state.collection = { ...state.collection, ..._.mapKeys(data, 'id') };
    },
    fetchPhoto(state, data) {
      state.collection = { ...state.collection, [data.id]: data };
    },
    createPhoto(state, data) {
      state.collection = { ...state.collection, [data.id]: data };
    },
    editPhoto(state, data) {
      state.collection = { ...state.collection, [data.id]: data };
    },
    deletePhoto(state, data) {
      _.omit(state.collection, data);
    },
  },
  actions: {
    async fetchPhotos({ commit }) {
      const response = await blog.get('/photos');
      commit('fetchPhotos', response);
    },
    async fetchPhoto({ commit }, id) {
      const response = await blog.get(`/photos/${id}`);
      commit('fetchPhoto', response);
    },
    async createPhoto({ commit }, formValues) {
      const response = await blog.post('/photos', { ...formValues });
      commit('createPhoto', response);
    },
    async editPhoto({ commit }, id, formValues) {
      const response = await blog.patch(`/photos/${id}`, formValues);
      commit('editPhoto', response);
    },
    async deletePhoto({ commit }, id) {
      await blog.delete('/photos');
      commit('deletePhoto', id);
    },
  },
};

export default photos;
