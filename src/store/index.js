import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations: {
		Xiangqing(state,data){
      state.listText=data
    },
    Name(state,data){
      state.name=data

    }
  },
  state:{
    listText:"111",
    name:""
  },
  
  
  getters:{ 
    Xiangqing(state) {
        return state.listText
    },
    Name(state) {
      return state.name
    }
  },
  actions: {
  },
  modules: {
  }
})
