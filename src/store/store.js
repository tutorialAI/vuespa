import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/database'

var config = {
  apiKey: "AIzaSyB9Oh4l0to1MNOV1I8ilu8DkxLibple0gk",
  authDomain: "day-task.firebaseapp.com",
  databaseURL: "https://day-task.firebaseio.com",
  projectId: "day-task",
  storageBucket: "day-task.appspot.com",
  messagingSenderId: "575426806335"
};
let app = firebase.initializeApp(config);
let db = app.database();
var ref = firebase.database().ref();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    count: 0
  },
  // getters:{
  //   getProducts: state => state.baseData
  // },
  actions:{
    loadTasks(context){

      let baseData = [];

      ref.on("value", function(snapshot) {
         baseData.push(snapshot.val());
      }, function (error) {
         console.log("Error: " + error.code);
      });
      // console.log(baseData);
      context.commit('loadTasks',baseData);

    },
    increment(context) {
      context.commit('increment',4);
    }
  },
  mutations:{
    loadTasks(state,payload){
        state.data = payload;
    },
    increment(context,payload){
      context.count = payload > context.count ? context.count = payload : context.count;
      context.count++
    }
  }
});

new Vue({
  data:{
    firebase: db
  }
});
