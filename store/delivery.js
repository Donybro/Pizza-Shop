export const state = () => ({
  delivery: {
    type: 'pickup',
    adress: 'ул. Буюк Ипак Йули, 123',
    deliveryTime: '',
  },

});
export const getters = {
  getDeliveryInfo(state) {
    return state.delivery;
  },
};

export const mutations = {
  setDeliveryInfo(state, payload) {
    state.delivery = { ...state.delivery, ...payload };
  },
};

export const actions = {
  setDeliveryInfo({ commit }, payload) {
    commit('setDeliveryInfo', payload);
  },
};
