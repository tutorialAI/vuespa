<template lang="html">
  <div class="border-top row">
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
      <div @click="showFullOptions()" class="dropdown_btn theme_btn btn btn-outline-primary">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 306 306" style="enable-background:new 0 0 306 306;" xml:space="preserve">
          <g id="expand-more">
            <polygon points="270.3,58.65 153,175.95 35.7,58.65 0,94.35 153,247.35 306,94.35   "/>
          </g>
        </svg>
      </div>
    </div>
    </div>
    <div class="col-sm-12">
      <transition name="dropdown">
        <div v-show="show" class="full_options">
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
                Цвет:
              </label>
              <select v-model="selected">
                <option value="yellow">Желтый</option>
                <option value="blue">Синий</option>
                <option value="red">Красный</option>
                <option value="green">Зеленый</option>
              </select>
            </div>
            <small class="form-text text-muted col-sm-12 information_text"></small>
            <div class="col-sm-6 theme_select">
              <label for="priority">
                Приоритет: {{ priority_text }}
                <input type="range" id="start" name="priority" min="0" max="10" step="1" value="0" v-on:change="priorityM($event)">
              </label>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import 'firebase/database';
import firebase from 'firebase/app';
export default {
  data(){
    return{
      startDate: '',
      lastDate: '',
      name: '',
      selected: 'yellow',
      task_id: 0,
      complete: 0,
      priority: 0,
      count: 0,
      show: false
    }
  },
  computed:{
    duration: function(){
        if(this.$refs.lastDate.value){
          let duration = Math.round((new Date(this.lastDate).getTime() - new Date(this.startDate).getTime())/1000/60/60/24);

          if(duration == 1){
            return '/ Длительность: '+ duration + ' день';
          }
          else if(duration > 1 && duration < 5){
            return '/ Длительность: ' + duration + ' дня';
          }
          else{
            return '/ Длительность: ' + duration + ' дней';
          }
        }
        else{
          return '';
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
    },
    priority_text: function(){
      if(this.priority > 3 && this.priority < 8){
        return 'Средний';
      }
      else if (this.priority <= 3 && this.priority < 8) {
        return 'Низкий';
      }
      else {
        return 'Высокий';
      }
    }
  },
  methods:{
    priorityM: function(e){
      this.priority = e.target.value;
    },
    addTask: function(e){
      let user = this.$store.state.userModule.user.uid;
      let date = new Date();
      this.startDate = this.$refs.startDate.value == '' ? `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}` : this.$refs.startDate.value;
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
      this.count ++;
      let task_key = firebase.database().ref().push().key;
      this.$store.state.tasks.push({task_id: task_key,name: this.name,complete: this.complete,duration: this.duration, start: this.startDate, end: this.lastDate, color: this.color});
        firebase.database().ref(user+'/'+task_key).set({
          name: this.name,
          task_id: task_key,
          name: this.name,
          complete: this.complete,
          duration: this.duration,
          start: this.startDate,
          end: this.lastDate,
          color: this.color,
          opacity: 1
        });
      }
      this.name = ''
    },
    showFullOptions(){
      this.show = this.show == true ? false : true;
    }
  }
}
</script>

<style>
  .full_options{
    height: 200px;
    margin-top:30px
  }
  .dropdown-enter-active,.dropdown-leave-active{
    transition:  opacity 0.2s;
    transition: all 0.5s;
  }
  .dropdown-enter,.dropdown-leave-to{
    height: 0;
    opacity: 0;
    margin-top: 0;
  }
</style>
