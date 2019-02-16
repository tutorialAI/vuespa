<template>
  <div class="row task_list">
    <div class="col-sm-12" v-for="(task,index) in this.$store.state.tasks">
        <div class="task_info" :style="task.color">
          <p class="task_name col-sm-10">{{task.name}}</p>
          <small class="text-muted col-sm-12" style="font-size: 12px">Дата начала: {{task.start}} / Дата завершения: {{ task.end }} {{ task.duration }}</small>
        </div>
        <div class="complete_line" v-if="task.complete"></div>
          <!-- <p>task_id {{task.task_id}}</p> -->

          <!-- <p>complete {{task.complete}};</p>
          <p>task_date {{task.duration}};</p> -->
        <div class="task_options">
          <a href="#" v-on:click.prevent="done(index)">C<i class="fa fa-check-circle-o" aria-hidden="true"></i></a>
          <a href="#" v-on:click.prevent="remove(index)">D<i class="fa fa-check-trash-o" aria-hidden="true"></i></a>
          <a href="#" v-on:click.prevent="upTask()">U<i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i></a>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data(){
    return {
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
      let task_status = this.$store.state.tasks[index].complete == true ? false : true;
      let data = {
        task_id: task_id,
        task_status: task_status,
        index: index
      };
      this.$store.dispatch('complete',data);
    }
  }
}
</script>
<style scoped>
</style>
