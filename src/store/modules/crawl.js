export const crawl = {
  namspaced: true,

  state: {
    dialogFormVisible: false,
    addDataVisible: true,
    rowID: "",
    dataAPIEdit: {},
  },
  mutations: {
    showDialog(state, id) {
      state.dialogFormVisible = !state.dialogFormVisible;
      state.rowID = id;
    },
    showAddForm(state) {
      state.addDataVisible = !state.addDataVisible;
    },
    setData(state, data) {
      console.log(state.dataAPIEdit);
      state.dataAPIEdit = data;
    },
  },
  getters: {
    getDialogStatus: (state) => {
      return state.dialogFormVisible;
    },
    getAddDataVisible: (state) => {
      return state.addDataVisible;
    },
    getRowId: (state) => {
      return state.rowID;
    },
  },
  action: {
    //  async getData({getters,commit}) {
    //    let id = getters.getRowId
    //   await axios.get("http://localhost:3000/posts/" + `${id}`)
    //   .then(response => {
    //     commit('setData',response.data),
    //    console.log("success");
    //   })
    // }
  },
};
