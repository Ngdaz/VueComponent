export const navigation = {
  namspaced: true,

  state: {
    isCollapse: false,
  },
  mutations: {
    menuCollapse(state) {
      state.isCollapse = !state.isCollapse;
    },
  },
  getters: {
    getCollapseValue: state => {
      return state.isCollapse
    },
  },
  action: {
    
  }
};
