<template>
  <div class="row task_list">
    <transition-group name="next-task">
    <div class="col-sm-12" v-for="(task,index) in this.$store.state.tasks" v-bind:key="index">
        <div class="task_info" :style="task.color+';opacity:'+task.opacity">
          <p class="task_name col-sm-10">{{task.name}}</p>
          <small class="text-muted col-sm-12" style="font-size: 12px">Дата начала: {{task.start}} / Дата завершения: {{ task.end }} {{ task.duration }}</small>
        </div>
        <div class="complete_line" v-if="task.complete"></div>
        <div class="task_options">
          <a href="#" v-on:click.prevent="done(index)"><i class="fa fa-check-circle-o" aria-hidden="true"></i></a>
          <a href="#" v-on:click.prevent="remove(index)"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
          <!-- <a href="#" v-on:click.prevent="upTask()"><i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i></a> -->
        </div>
    </div>
  </transition-group>
  </div>
</template>
<script>
export default {
  name: "",
  data(){
    return{

    }
  },
  methods: {
    remove(index){
      let task_id = this.$store.state.tasks[index].task_id;
      let data = {
        task_id: task_id,
        index: index
      };
      this.$store.dispatch('remove',data);
    },
    done(index){
      let task_id = this.$store.state.tasks[index].task_id;
      let color = this.$store.state.tasks[index].color;
      let opacity = 1;
      let task_status = true;

      if(this.$store.state.tasks[index].complete){
        task_status = false;
        opacity = 1;
      }else{
        task_status = true;
        opacity = 0.5;
      }

      let data = {
        task_id: task_id,
        task_status: task_status,
        index: index,
        color: color,
        opacity: opacity
      };
      this.$store.dispatch('complete',data);
    }
  }
}
</script>
<style>
  .task_info{
    transition: 0.4s;
  }
  .next-task-enter-active {
    transition: all .3s ease;
  }
  .next-task-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .next-task-enter, .next-task-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
  .task_list span{
    display: inline-block;
    width: 100%;
  }
  .task_options{
    position: absolute;
    right: 15px;
    top: 10px;
    opacity: .8;
  }
  .task_options a{
    margin-left: 5px;
    font-size: 18px;
  }
  .task_info{
    position: relative;
    border-bottom: solid 1px #eee;
    border-top: solid 1px #eee;
    margin: 15px -15px 0;
  }
  .task_list div:first-child{
    margin-top: 15px;
  }
  .task_name{
    margin-top: 15px;
  }
</style>
