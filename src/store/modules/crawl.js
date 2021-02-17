export const crawl = {
    namspaced: true,

    state: {
        dialogFormVisible : false,
    },
    mutations: {
        showDialog(state) {
          state.dialogFormVisible = !state.dialogFormVisible;
        },
      },
      getters: {
        getDialogStatus: state => {
          return state.dialogFormVisible
        },
      },
      action: {
        
      }
}