// eslint-disable-next-line import/no-cycle
import router from '@/router';

const auth = {
  namespaced: true,
  state: {
    auth: {
      userId: null,
      isSigned: false,
    },
  },
  mutations: {
    signIn(state, data) {
      state.auth = { ...state.auth, isSigned: true, userId: data };
    },
    signOut(state) {
      state.auth = { ...state.auth, isSigned: false, userId: null };
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
