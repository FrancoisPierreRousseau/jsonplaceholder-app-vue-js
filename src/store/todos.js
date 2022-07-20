import blog from '@/apis/blog';
import _ from 'lodash';

const todos = {
  namespaced: true,
  state: {
    collection: [{}],
  },
  mutations: {
    fetchTodos(state, data) {
      state.collection = { ...state.collection, ..._.mapKeys(data, 'id') };
    },
    fetchTodo(state, data) {
      state.collection = { ...state.collection, [data.id]: data };
    },
    createTodo(state, data) {
      state.collection = { ...state.collection, [data.id]: data };
    },
    editTodo(state, data) {
      state.collection = { ...state.collection, [data.id]: data };
    },
    deleteTodo(state, data) {
      _.omit(state.collection, data);
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await blog.get('/todos');
      commit('fetchTodos', response);
    },
    async fetchTodo({ commit }, id) {
      const response = await blog.get(`/todos/${id}`);
      commit('fetchTodo', response);
    },
    async createTodo({ commit }, formValues) {
      const response = await blog.post('/todos', { ...formValues });
      commit('createTodo', response);
    },
    async editTodo({ commit }, id, formValues) {
      const response = await blog.patch(`/todos/${id}`, formValues);
      commit('editTodo', response);
    },
    async deleteTodo({ commit }, id) {
      await blog.delete('/todos');
      commit('deleteTodo', id);
    },
  },
};

export default todos;
