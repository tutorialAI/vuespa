<template lang="html">
  <div class="container">
    <!-- <button class="btn btn-prymary">Show all</button> -->
    <span class="section_name">
      Заголовок задачи
    </span>
    <div class="fm col-sm-8">
      <div class="border-top col-sm-12 row">
        <div class="input-group col-sm-10">
          <input type="text" class="form-control" ref="test" v-model="name" placeholder="Добавьте что-нибдь в список своих дел...">
          <div class="bpt">
          </div>
        </div>
        <div class="row">
        <div class="col-sm-2 event-buttons">
          <div class="add_post theme_btn btn btn-outline-primary" @click="addTask($event)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
          </div>
          <div class="dropdown_btn theme_btn btn btn-outline-primary">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 306 306" style="enable-background:new 0 0 306 306;" xml:space="preserve">
            	<g id="expand-more">
            		<polygon points="270.3,58.65 153,175.95 35.7,58.65 0,94.35 153,247.35 306,94.35   "/>
            	</g>
            </svg>
          </div>
        </div>
        </div>
        <div class="col-sm-12">
          <div class="full_options" style="height: 200px;margin-top:30px;">
            <div class="row">
              <div class="col-sm-4 theme_select">
                <label>Дата начала</label>
                <input ref="startDate" type="date">
              </div>
              <div class="col-sm-4 theme_select">
              <label class="">Дата Завершения</label>
                <input ref="lastDate" type="date">
              </div>
              <div class="col-sm-4 theme_select">
                <label for="">
                  Приоритет:
                </label>
                <select >
                  <option value="2" selected>Средний</option>
                  <option value="1">Низкий</option>
                  <option value="3">Высокий</option>
                </select>
              </div>
              <small class="form-text text-muted col-sm-12 information_text">We'll never share your email with anyone else.</small>
              <div class="col-sm-6 theme_select">
                <label for="">
                  Цвет:
                </label>
                <select v-model="selected">
                  <option value="yellow">Желтый</option>
                  <option value="blue">Синий</option>
                  <option value="red">Красный</option>
                  <option value="green">Зеленый</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 row task_list" v-for="task in tasks">
          <div class="border-bottom task_info" :style="task.priority">
            <p class="col-sm-10">{{task.name}}</p>
            <span class="col-sm-2"></span>
            <small class="text-muted col-sm-12" style="font-size: 12px">Дата начала: {{task.start}} / Дата завершения: {{ task.end }} {{task.duration}}</small>
          </div>
            <!-- <p>task_id {{task.task_id}}</p> -->

            <!-- <p>status {{task.status}}</p>
            <p>complate {{task.complate}}</p>
            <p>task_date {{task.task_date}}</p> -->
          <hr>
      </div>
      <div class="border-bottom clear sf">
        <div class="col-sm-2">
          <img class="rounded-circle" src="src/assets/img/avatar/avatar-dhg.png">
        </div>
        <div class="col-sm-8">
          <div class="bpb">
            <small class="acx axc">4 min</small>
            <h6>Dave Gamache</h6>
          </div>
          <p>
            Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import 'firebase/database';
import firebase from 'firebase/app';
export default {

  data: function() {
    return {
      startDate: '',
      lastDate: '',
      name: '',
      selected: 'yellow',
      task_id: 0,
      status: false,
      complate: 0,
      tasks: [],
      count: 0
    }
  },
  computed:{
    duration: function(){
      if(!(typeof this.startDate == 'string' || typeof this.lastDate == 'string')){
        let duration = (new Date(this.lastDate).getTime() - new Date(this.startDate).getTime())/1000/60/60/24;
        if(duration == 1){
          return '/ Длительность: '+ duration + ' день'
        }
        else if(duration > 1 && duration < 5){
          return '/ Длительность: ' + duration + ' дня';
        }
        else{
          return '/ Длительность: ' + duration + ' дней'
        }
      }else{
        return duration;
      }
    },
    color: function(){
      switch (this.selected) {
        case 'yellow':
            return' border-left: solid 15px #cad525';
          break;
        case 'red':
            return' border-left: solid 15px tomato';
          break;
        case 'green':
            return' border-left: solid 15px #8ee691';
          break;
        case 'blue':
            return' border-left: solid 15px #4da8d7';
          break;
        default:
          return ' border-left: solid 15px #aeaeeae';
      }
    }
  },
  methods:{
    addTask: function(e){
      console.log(this.startDate);
      this.tasks.length = 0;
      this.startDate = this.$refs.startDate.value == '' ? 'Не назначена' : this.$refs.startDate.value;
      this.lastDate =  this.$refs.lastDate.value == '' ? 'Не назначена' : this.$refs.lastDate.value;
      let _this = this.$refs.test;
      function warningSolid(){
        _this.style.border = '';
        _this.style.background = 'transparent';
      }
      if(this.name == ''){
        _this.style.border = 'solid #faaea0 2px';
        _this.style.background = '#faaea0';
        setTimeout(warningSolid,500);
        return false;
      }else{
      // firebase.database().ref('day-task').delete();
      this.count ++;
      let task_key = firebase.database().ref().push().key;
      this.tasks.push({task_id: task_key,name: this.name,status: this.status,complate: this.complate,duration: this.duration, start: this.startDate, end: this.lastDate, priority: this.color});


        firebase.database().ref(task_key).set({
          name: this.name,
          task_id: task_key,
          name: this.name,
          status: this.status,
          complate: this.complate,
          duration: this.duration,
          start: this.startDate,
          end: this.lastDate,
          priority: this.color
        });

      }
    }
  },
  beforeMount() {
    this.tasks.length = 0;
    this.$store.dispatch('loadTasks');
    this.tasks = this.$store.state.data;
  }
}
</script>

<style lang="css" scoped>
  .section_name{
    margin: 0px 0px 10px;
    display: block;
  }
  .sf{
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;

  }
  .border-top{
    border: solid 1px #aeaeae;
    padding: 25px;
    border-radius: 5px 5px 0 0;
  }
  .border-bottom{
    border: solid 1px #aeaeae;
    padding: 25px;
    border-radius: 0 0 5px 5px;
  }
  .event-buttons{
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
  }
  .theme_btn{
    height: 40px;
    width: 40px;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    cursor: pointer;
  }
  .theme_btn svg{
    width: 30px;
    fill: #007bff;
  }
  .theme_btn:hover svg{
    fill: #fff;
  }
  .full_options label{
    width: 100%;
  }
  .dropdown_btn{
    margin-left: 10px;
  }
  .task_info{
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .get_time{

  }
  .theme_select input,.theme_select select{
    border: 1px solid #ced4da;
    border-radius: 2px;
    text-align: center;
    padding: 10px 0;
    display: -webkit-flex;
    display: -ms-flex;
  }
  .theme_select select{
    padding: 12px 10px;
  }
  .information_text{
    margin: 10px 0;
  }
</style>
