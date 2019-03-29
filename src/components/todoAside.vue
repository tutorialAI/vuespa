<template lang="html">
  <span>
  <div class="category">
    <span class="section_name">Список дел на</span>
    <!-- <li><a href="#" :class='active'>{{ today }}</a></li> -->
    <li v-for="(day,index) in completed_days" :class="{active:index == selected}"><a href="#" @click.prevent="nextDay(index)">{{ day }}</a></li>
  </div>
  </span>
</template>

<script>
export default {
  data(){
    return{
      tasks: [],
      selected: 5
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
    }
  },
  methods:{
    nextDay(index){
      this.selected = index;
      let day = this.completed_days[index];
      this.$store.commit('getDayTasks',day);
    }
  }
}
</script>

<style lang="css" scoped>
.active{
  background: #1997c6; /* Old browsers */
  border-radius: 5px;
  background: -moz-linear-gradient(left, #1997c6 0%, #7db9e8 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #1997c6 0%,#7db9e8 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #1997c6 0%,#7db9e8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1997c6', endColorstr='#7db9e8',GradientType=1 ); /* IE6-9 */
}
.active a{
  color: #fff;
}
</style>
