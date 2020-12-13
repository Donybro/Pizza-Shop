export const state = () => ({
  info: {},
});
export const getters = {
  getUserInfo(state) {
    return state.info;
  },
};

export const mutations = {
  setUserInfo(state, payload) {
    state.info = payload;
  },
  clearUserInfo(state) {
    state.info = {};
  },
};

export const actions = {
  setUserInfo({ commit }, payload) {
    return commit('setUserInfo', payload);
  },
  async fetchUserInfo({ commit }) {
    const user = await this.$fire.auth.currentUser;
    const info = (
      await this.$fire
        .database
        .ref(`/pizza/${user.uid}/info`)
        .once('value')
    ).val();
    commit('setUserInfo', info);
  },
  async updateUserInfo({ dispatch, commit, getters }, updatedValue) {
    try {
      const user = await this.$fire.auth.currentUser;
      const updatedData = { ...getters.getUserInfo, ...updatedValue };
      await this.$fire
        .database
        .ref(`pizza/${user.uid}/info`)
        .update(updatedData);
      commit('setUserInfo', updatedData);
    } catch (e) {
      dispatch('setCurrentError', e.code);
      throw e;
    }
  },
  clearUserInfo({ commit }) {
    commit('clearUserInfo');
  },
};
