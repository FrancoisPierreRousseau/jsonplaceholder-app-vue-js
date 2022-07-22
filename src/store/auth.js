import router from '@/router';

const auth = {
  namespaced: true,
  state: {
    user: {
      userId: null,
      isSigned: false,
    },
  },
  mutations: {
    signIn(state, data) {
      state.user = { ...state.user, isSigned: true, userId: data };
    },
    signOut(state) {
      state.user = { ...state.user, isSigned: false, userId: null };
    },
  },
  actions: {
    async signIn({ rootGetters, commit }, formValues) {
      if (!rootGetters['users/userExist'](formValues)) {
        throw new Error('Login ou mot de passe incorrecte');
      }
      commit('signIn', formValues);
      await router.push('/');
    },

    async signOut({ commit }) {
      commit('signOut');
      await router.push('/');
    },
  },
};

export default auth;
