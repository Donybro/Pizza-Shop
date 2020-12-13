export const state = () => ({
  isAuthorized: false,
});
export const mutations = {
  setIsAuth(state, payload) {
    state.isAuthorized = payload;
  },
};
export const getters = {
  getIsAuth(state) {
    return state.isAuthorized;
  },
};
export const actions = {
  async login({ commit }, { email, password }) {
    try {
      await this.$fire.auth.signInWithEmailAndPassword(email, password);
      commit('setIsAuth', true);
      return true;
    } catch (e) {
      alert(e);
      return false;
    }
  },
  async logout({ commit }) {
    await this.$fire.auth.signOut();
    commit('setIsAuth', false);
  },
  async getUId() {
    const user = await this.$fire.auth.currentUser;
    return user.uid ? user.uid : null;
  },
  async registration({ dispatch, commit }, { email, password, name, phone }) {
    await this.$fire.auth.createUserWithEmailAndPassword(email, password);
    const uid = await dispatch('getUId');
    try {
      await this.$fire.database.ref(`pizza/${uid}/info`).set({
        name,
        phone,
      });
      commit('setIsAuth', true);
      return true;
    } catch (e) {
      alert(e);
      return false;
    }
  },
};


