import blog from '@/apis/blog';
import _ from 'lodash';
// eslint-disable-next-line import/no-cycle
import router from '@/router';

const users = {
  namespaced: true,
  state: {
    users: null,
  },
  mutations: {
    fetchUsers(state, data) {
      state.users = { ...state.users, ..._.mapKeys(data, 'id') };
    },
    fetchUser(state, data) {
      state.users = {
        ...state.users,
        [data.id]: data,
      };
    },
    createUser(state, data) {
      state.users = {
        ...state.users,
        [data.id]: data,
      };
    },
    editUser(state, data) {
      state.users = {
        ...state.users,
        [data.id]: data,
      };
    },
    deleteUser(state, data) {
      _.omit(state.users, data);
    },
  },
  getters: {
    userExist: (state) => (user) => _.some(state.users, { ...user }),
    findUser: (state) => (user) => _.find(state.users, { ...user }),
  },
  actions: {
    async fetchUsers({ commit }) {
      const response = await blog.get('/users');
      commit('fetchUsers', response.data);
    },
    async fetchUser({ commit }, id) {
      const response = await blog.get(`/users/${id}`);
      commit('fetchUser', response.data);
    },
    async createUser({ commit, getters }, formValues) {
      const { login, password } = formValues;

      if (getters.userExist({ login, password })) throw new Error('Cette utilisateur exist déja');

      const response = await blog.get('/users');
      const newUser = { ...formValues, id: response.data.length + 1 };
      commit('createUser', newUser);

      await router.push('/connect');
    },
    async editUser({ commit }, id, formValues) {
      const response = await blog.patch(`/users/${id}`, formValues);
      commit('editUser', response.data);
    },
    async deleteUser({ commit }, id) {
      await blog.delete('/users');
      commit('deleteUser', id);
    },
  },
};

export default users;
