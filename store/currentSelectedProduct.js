export const state = () => ({
  doughType: '',
  pizzaSize: '',
});
export const actions = {
  setDoughType({ commit }, prod) {
    commit('setDoughType', prod);
  },
  setPizzaSize({ commit }, prod) {
    commit('setPizzaSize', prod);
  },
};
export const mutations = {
  setDoughType(state, payload) {
    state.doughType = payload;
  },
  setPizzaSize(state, payload) {
    state.pizzaSize = payload;
  },
};
export const getters = {
  getDoughType(state) {
    return state.doughType;
  },
  getPizzaSize(state) {
    return state.pizzaSize;
  },
};
