import Vuex from 'vuex';

const store = new Vuex.Store({
  state() {
    return {
      user: null,
      headerTitle: null,
    }
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user);
    },
    saveHeaderTitle({ commit }, headerTitle) {
      commit('setHeaderTitle', headerTitle);
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setHeaderTitle(state, headerTitle) {
      state.headerTitle = headerTitle;
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.user !== null;
    },
    getUser(state) {
      return state.user;
    },
    getHeaderTitle(state) {
      return state.headerTitle;
    }
  }
});

export default store;
