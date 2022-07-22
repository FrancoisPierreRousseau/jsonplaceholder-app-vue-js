import unsplash from '@/apis/unsplash';

const thematic = {
  namespaced: true,
  state: {
    term: 'programming',
    pictures: null,
  },
  mutations: {
    fetchPictures(state, data) {
      state.pictures = data;
    },
    setTerm(state, term) {
      state.term = term;
    },
  },
  actions: {
    async fetchPictures({ commit, state }) {
      const response = await unsplash.get('/search/photos', {
        params: { query: state.term },
      });
      commit('fetchPictures', response.data.results);
    },
    setTerm({ commit }, term) {
      commit('setTerm', term);
    },
  },
};

export default thematic;
