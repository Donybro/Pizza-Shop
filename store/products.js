export const state = () => ({
  products: [],
});

export const actions = {
  setProduct({ commit }, payload) {
    commit('setProduct', payload);
  },
};

export const mutations = {
  setProduct(state, payload) {
    state.products.push(payload);
    console.log(state.products);
  },
};

export const getters = {
  getProducts(state) {
    return state.products;
  },
};
