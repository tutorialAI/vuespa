<template lang="html">
  <div class="container">
    <div class="row">
    <div class="col-sm-4">
      <todo-aside></todo-aside>
    </div>
    <div class="col-sm-8">
      <span class="section_name">
        Заголовок задачи
      </span>
      <todo-add></todo-add>
      <todo-item></todo-item>
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

    }
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
</style>
