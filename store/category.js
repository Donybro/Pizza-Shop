export const state = () => ({
  categoryName: 'pizzas',
});
export const actions = {
  setCategory({ commit }, payload) {
    commit('setCategory', payload);
  },
};

export const mutations = {
  setCategory(state, payload) {
    state.categoryName = payload;
  },
};

export const getters = {
  getCategory(state) {
    return state.categoryName;
  },
};
