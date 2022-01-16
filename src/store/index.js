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
    },
    Xiangqingzhuan(state,data){
      state.img3=data
    }
  },
  state:{
    listText:"111",
    name:"",
    img3:[]
  },
  
  
  getters:{ 
    Xiangqing(state) {
        return state.listText
    },
    Name(state) {
      return state.name
    },
    Xiangqingzhuan(state) {
      return state.img3
    }
  },
  actions: {
  },
  modules: {
  }
})
