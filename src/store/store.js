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
    tasks: [],
    count: 0
  },
  getters:{
    getProducts(){
      return state.tasks;
    },
    getDays(state){
      if(state.tasks.length != 0){
        let days = [];
        for(let e = 0; e < state.tasks.length; e++){
          days.push(state.tasks[e].end);
        }
        return days;
      }
    }
  },
  actions:{
    loadTasks(context){
      let someArr = new Array();
      ref.on("value", function(snapshot) {
           let data = snapshot.val();
           let index = 0;
           for (let value in snapshot.val()) {
             if(someArr[index] != null){
               if(someArr[index].task_id == data[value].task_id){
                 continue;
               }
             }else{
               let baseData = {
                 name: data[value].name,
                 task_id: data[value].task_id,
                 complete: data[value].complete,
                 task_date: data[value].task_date,
                 start: data[value].start,
                 end: data[value].end,
                 duration: data[value].duration,
                 color: data[value].color,
                 priority: data[value].priority,
                 opacity: data[value].opacity,
               }
               someArr.push(baseData);
             }
             index++;
           }
         });
      context.commit('loadTasks',someArr);
    },
    remove(context, payload){
      context.commit('remove',payload.index);
      db.ref(payload.task_id).remove().then(function() {
        console.log('File deleted successfully');
      }).catch(function(error) {
        console.log('Uh-oh, an error occurred!');
      });
    },
    complete(context,payload){
      db.ref(payload.task_id+'/complete').set(payload.task_status);
      db.ref(payload.task_id+'/color').set(payload.color);
      db.ref(payload.task_id+'/opacity').set(payload.opacity);
      context.commit('complete',payload);
    },
    increment(context) {
      context.commit('increment',4);
    }
  },
  mutations:{
    loadTasks(state,payload){
        state.tasks = payload;
    },
    remove(context,index){
      context.tasks.splice(index,1);
    },
    complete(context,payload){
      context.tasks[payload.index].complete = payload.task_status;
      context.tasks[payload.index].opacity = payload.opacity;
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
