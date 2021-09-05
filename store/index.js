export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch("news/FETCH_SYMBOL_NAMES");
  }
};
