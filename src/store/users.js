import blog from '@/apis/blog';
import _ from 'lodash';
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
    userExist: (state) => ({ login, password }) => _.some(state.users, { login, password }),
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
      const response = await blog.get('/users');
      const newUser = { ...formValues, id: response.data.length + 1 };

      if (getters.userExist(newUser)) throw new Error('Cette utilisateur exist déja');

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
