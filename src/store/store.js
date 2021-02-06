import Vue from 'vue'
import Vuex from 'vuex'
import  navigation  from "../store/modules/navigation";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        navigation,
    },
});