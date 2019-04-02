<template>
  <div id="app">
      <main class="container" v-if="authStatus">
        <div class="profile">
          <div class="profile-name">
            Ai
          </div>
          <div class="profile-pic">

          </div>
        </div>
        <span v-on:click="signOut()">Выход</span>
        <div class="content col-md-10" >
            <app-contents></app-contents>
        </div>
      </main>
      <auth v-on:singin="auth()" v-else></auth>
  </div>
  <!-- https://bootstrap-themes.github.io/dashboard/?ver=2 -->
</template>

<script>
export default {
  name: 'app',
  data () {
    return{
      // authStatus: false
    }
  },
  created() {
    this.$store.dispatch('getUserInfo');
    this.$store.dispatch('loadTasks');
    console.log(this.$store.state.userModule.authStatus);
  },
  methods: {
    newMethod() {
      this.$store.commit('increment');
    },
    signOut(){
      console.log('signOut');
      this.$store.dispatch('signOut');
    }
  },
  computed:{
    authStatus(){
      return this.$store.state.userModule.authStatus;
    }
  }
};
</script>

<style>
  body{
    background: url('./assets/img/guillermo-b-1392134-unsplash.jpg') no-repeat center center / cover;
    background-attachment: fixed;

  }
  input{
    outline: none;
  }
  @media (min-width: 1200px){
    .container{
      max-width: 1400px;
    }
  }
  .row{
    padding: 0;
  }
  a:hover{
    text-decoration: none;
  }
  #app,html,body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Roboto",sans-serif;
    /* font-size: 14px; */
    /* background-color: #363e49; */
  }
  #app{
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    flex-direction: column;
  }
  main{
    padding-top: 2%;
    margin-top: 5%;
    flex: 1 0 auto;
    /* border: solid green ; */
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
  footer,fer{
    flex: 0 0 auto;
    height: 50px;
  }
  li{
    list-style: none;
  }
  img{
    max-width: 100%;
    max-height: 100%;
  }
  main.container{
    background-color: #fff;
  }
  /* .content{
    height: 55px;
  } */

  .aside {
    /* border: solid red; */
  }
  span.section_name{
    text-transform: uppercase;
    color: #51586a;
    font-size: 12px;
  }
  .main_bg{
    background: #1997c6; /* Old browsers */
    background: -moz-linear-gradient(left, #1997c6 0%, #7db9e8 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #1997c6 0%,#7db9e8 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #1997c6 0%,#7db9e8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1997c6', endColorstr='#7db9e8',GradientType=1 ); /* IE6-9 */
    color: #fff;
  }
  .padding_rest{
    padding: 0;
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
  .category{
    border-bottom: solid #1997c1 1px;
    padding-bottom: 15px;
  }
  .category a{
    display: block;
    cursor: pointer;
    width: 100%;
    margin: 5px 0;
    border-radius: 5px;
    padding: 7px 0;
    color: #333;
    box-sizing: border-box;
    padding-left: 15px;
  }
  .category a.active{
    background: #1997c6; /* Old browsers */
    background: -moz-linear-gradient(left, #1997c6 0%, #7db9e8 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #1997c6 0%,#7db9e8 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #1997c6 0%,#7db9e8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1997c6', endColorstr='#7db9e8',GradientType=1 ); /* IE6-9 */
    color: #fff;
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
  .dropdown_btn{
    margin-left: 10px;
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
  .task_options{
    position: absolute;
    right: 15px;
    top: 25px;
  }
  .task_name{
    margin-top: 15px;
  }
  .complete_line{
    position: absolute;
    width: 100%;
    top: 50%;
    height: 1px;
    background-color: #a2a1a7;
    left: 0;
    border-radius: 5px 0 5px 0;
  }
  .auth_container-alert{
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .profile{
    position: absolute;
    top: -37px;
    border: solid 2px #52aad9;
    padding: 5px;
    background: #fff;
    border-radius: 50%;
    font-size: 26px;
    text-transform: uppercase;
    display: flex;
    width: 80px;
    justify-content: center;
    align-items: center;
    height: 80px;
    right: 0;
    cursor: pointer;
    color: #52aad9;
  }
</style>
