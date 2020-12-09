export const state = () => ({
  productNames: [],
  productPrices: 0,
});
export const actions = {
  setProduct({ commit }, prod) {
    commit('setProduct', prod);
  },
  clearProduct({ commit }, payload) {
    commit('clearProduct', payload);
  },
  clearAllProducts({ commit }) {
    commit('clearAllProducts');
  },
};
export const mutations = {
  clearAllProducts(state) {
    state.productNames = [];
    state.productPrices = 0;

  },
  setProduct(state, prod) {
    if (state.productNames.includes(prod.label)) {
      state.productNames = [];
      state.productPrices = 0;
    }
    state.productNames.unshift(prod.label);
    state.productPrices += prod.price;
  },
  clearProduct(state, { label, price }) {
    const index = state.productNames.indexOf(label);
    state.productNames.splice(index, 1);
    state.productPrices = state.productPrices - price;
  },
};
export const getters = {
  getPrice(state) {
    return state.productPrices;
  },
  getNames(state) {
    return state.productNames;
  },
};
