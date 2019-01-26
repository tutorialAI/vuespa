import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // baseData: [],
    count: 0
  },
  // getters:{
  //   getProducts: state => state.baseData
  // },
  // actions:{
  //   loadTasks(context,baseData){
  //     context.commit('loadTasks',baseData)
  //   }
  // },
  mutations:{
    // loadTasks(state, payload){
    //   state.baseData = payload
    // }
    increment(state){
      state.count++
    }
  }
});
