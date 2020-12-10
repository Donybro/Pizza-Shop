export const state = () => ({
  products: [],
});

export const actions = {
  setProduct({ commit }, payload) {
    commit('setProduct', payload);
  },
  changeProduct({ commit }, payload) {
    commit('changeProduct', payload);
  },
  deleteProduct({ commit }, payload) {
    commit('deleteProduct', payload);
  },
};

export const mutations = {
  setProduct(state, payload) {
    state.products.push(payload);
  },
  changeProduct(state, payload) {
    state.products = state.products.map((prod) => {
      if (prod.productName === payload.productName) {
        return payload;
      } else return prod;
    });
  },
  deleteProduct(state, payload) {
    state.products = state.products.filter((prod) => {
      if (prod.productName !== payload.productName) {
        return true;
      }
    });
  },
};

export const getters = {
  getProducts(state) {
    return [...state.products];
  },
};
