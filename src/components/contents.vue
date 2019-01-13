<template lang="html">
  <div class="container">
    <span class="section_name">
      Заголовок задачи
    </span>
    <div class="fm col-sm-8">
      <div class="border-top col-sm-12 row">
        <div class="input-group col-sm-10">
          <input type="text" class="form-control" v-model="name" placeholder="Добавьте что-нибдь в список своих дел...">
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
          <div class="border full_options" style="height: 150px;margin-top:15px;">
            <div class="row">
              <div class="col-sm-6">
                <label>Дата начала</label>
                <input type="date" v-model="message">
              </div>
              <div class="col-sm-6">
              <label class="">Дата начала</label>
                <input type="date" v-model="">
              </div>
            </div>
            <small class="form-text text-muted">We'll never share your email with anyone else.</small>
            <div class="row">
              <div class="col-sm-6">
                <label for="">
                  Приоритет:
                </label>
                <select >
                  <option value="2" selected>Средний</option>
                  <option value="1">Низкий</option>
                  <option value="3">Высокий</option>
                </select>
              </div>
              <div class="col-sm-6">
                <label for="">
                  Цвет:
                </label>
                <select >
                  <option value="yellow" selected>Желтый</option>
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
          <div class="border-bottom task_info" style="width: 100%;">
            <p class="col-sm-10">{{task.name}}</p>
            <span class="col-sm-2">{{task.duration}}</span>
            <smal class="text-muted col-sm-12" style="font-size: 12px">Дата начала: 13.08.2014</smal>
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
export default {
  data: function() {
    return {
      name: '',
      task_id: 0,
      date: 0,
      status: false,
      complate: 0,
      task_date: '',
      tasks: []
    }
  },
  computed:{
    getDate: function(){
      this.date = new Date();
      return this.date.getHourse();
    }
  },
  methods:{
    addTask: function(e){
      this.task_id += 1;
      this.task_date =  new Date();
      // this.tasks[0].name =  "convertin";
      // console.log(this.tasks);
      this.tasks.push({task_id: this.task_id,name: this.name,status: this.status,complate: this.complate,task_date: this.task_date})
    }
  }
}
</script>

<style lang="css" scoped>
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
    border-left: solid 15px #cad525;
  }
</style>
