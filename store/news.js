import symbolNames from "~/static/symbol-names";

export const state = () => ({
  currentNewsSearch: '',
  currentNewsTag: 'all',
  symbolNames: [],
});

export const getters = {
  GET_SEARCH(state) {
    return state.search || ''
  },
  GET_TAG(state) {
    return state.tag || 'all'
  }
}

export const mutations = {
  SET_SYMBOL_NAMES(state, symbolNames) {
    state.symbolNames = symbolNames;
  }
};
export const actions = {
  FETCH_SYMBOL_NAMES({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit("SET_SYMBOL_NAMES", symbolNames);
        resolve()
      }, 100);
    });
  }
};
