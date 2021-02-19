import axios from "axios";

export const crawl = {
    namspaced: true,

    state: {
        dialogFormVisible : false,
        addDataVisible: true,
        rowID: '',
        dataAPI : [],
    },
    mutations: {
        showDialog(state,id) {
          state.dialogFormVisible = !state.dialogFormVisible;
          state.rowID = id
        
        },
        showAddForm(state) {
          state.addDataVisible = !state.addDataVisible;
        },
        setData(state,data) {
          state.dataAPI = data  
        }
      },
      getters: {
        getDialogStatus: state => {
          return state.dialogFormVisible
        },
        getAddDataVisible: state => {
          return state.addDataVisible
        },
        getRowId: state => {
          
          return state.rowID
         
        }
      },
      action: {

         async getData({commit}) {
          await axios.get("http://localhost:3000/posts/" + `${this.state.rowID}`)
          .then(response => {
            commit('setData',response).data,
            commit('showDialog')
          })
        }
      } 
}