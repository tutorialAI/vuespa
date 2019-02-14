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
      let someArr = [];
      ref.on("value", function(snapshot) {
           //
           let data = snapshot.val();
           for (let value in snapshot.val()) {
             let baseData = {
               name: data[value].name,
               task_id: data[value].task_id,
               status: data[value].status,
               complate: data[value].complate,
               task_date: data[value].task_date,
               start: data[value].start,
               end: data[value].end,
               duration: data[value].duration,
               color: data[value].color,
               priority: data[value].priority
             };
             someArr.push(baseData);
           };

      }, function (error) {
         console.log("Error: " + error.code);
      });
      context.commit('loadTasks',someArr);

    },
    remove(context, id){

      // Delete the file
      db.ref(id).remove().then(function() {
        console.log('File deleted successfully');
      }).catch(function(error) {
        console.log('Uh-oh, an error occurred!');
      });
      // context.commit('deleteTodo',id);
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
