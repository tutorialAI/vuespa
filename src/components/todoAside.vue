<template lang="html">
  <div class="category">
    <span class="section_name">Список дел на</span>
    <li><a href="#" :class='active'>{{ today }}</a></li>
    <li v-for="(day,index) in completed_days"><a href="#" >{{ day }}</a></li>
  </div>
</template>

<script>
export default {
  data(){
    return{
      // completed_days: []
    }
  },
  computed:{
    today(){
      let date =  new Date();
      let month = (date.getMonth()+1).toString().length == 2 ? date.getMonth()+1 : '0'+(date.getMonth()+1);
      return `${date.getFullYear()}-${month}-${date.getDate()}`;
    },
    completed_days(){
      return this.$store.getters.getDays;
    },
    active(){
      return 'active'
    }
  }
}
</script>

<style lang="css" scoped>

</style>
