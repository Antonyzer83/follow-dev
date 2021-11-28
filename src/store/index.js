import Vuex from 'vuex';

const store = new Vuex.Store({
  state() {
    return {
      user: null
    }
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user);
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.user !== null;
    },
    getUser(state) {
      return state.user;
    }
  }
});

export default store;
