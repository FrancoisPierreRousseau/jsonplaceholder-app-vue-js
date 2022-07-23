// eslint-disable-next-line import/no-cycle
import router from '@/router';
import _ from 'lodash';

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
      const { login, password } = formValues;
      const userAuth = rootGetters['users/findUser']({ password, login });

      if (_.isEmpty(userAuth)) {
        throw new Error('Login ou mot de passe incorrecte');
      }
      commit('signIn', userAuth.id);
      await router.push('/');
    },

    async signOut({ commit }) {
      commit('signOut');
      await router.push('/');
    },
  },
};

export default auth;
