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

function getUnique(array){
  var object  = {};
  for (var i = 0; i < array.length; i++) {
    var str = array[i];
    object[str] = true;
  }
  return Object.keys(object);
};

export default new Vuex.Store({
  state: {
    tasks: [],
    count: 0,
    days: []
  },
  getters:{
    getProducts(){
      return state.tasks;
    },
    getDays(state){
      if(state.days.length != 0){
        let daysList = [];
        ref.orderByChild('end').on('value',function(snapshot){
          snapshot.forEach(function(value){
            daysList.push(value.val().end);
          });
        });
        daysList.push("Показать все задачи","Задачи без дат");
        return getUnique(daysList);
      }
    }
  },
  actions:{
    loadTasks(context){
      let someArr = [];
      let daysArray = [];
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
               daysArray.push(data[value].end);
               someArr.push(baseData);
             }
             index++;
           }
         });
      context.commit('loadTasks',someArr);
      context.commit('daysCreate',daysArray);
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
    daysCreate(context,payload){
      context.days = payload;
    },
    getDayTasks(context,payload){
        var tasksInDay = [];

        if(payload == 'Показать все задачи'){
          ref.orderByChild("end").on("value", function(snapshot){
            snapshot.forEach(function(value,index){
              tasksInDay.push(value.val());
            })
          });
        }else{
          ref.orderByChild("end").equalTo(payload).on("value", function(snapshot){
            snapshot.forEach(function(value,index){
              tasksInDay.push(value.val());
            })
          });
        }
        console.log(payload);
        context.tasks = tasksInDay;
      // }
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
