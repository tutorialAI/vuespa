<template>
  <div id="app">
      <header>
        <div class="container">

          <!-- header -->
          <button class="btn btn-info" @click="newMethod()">
            Добавить пост
          </button>
          <ul>
            <li v-for="location in locations">
              {{location.name}}
            </li>
          </ul>
        </div>
      </header>
      <main class="container">
        <aside class="aside col-md-2">
          <div class="">
            <app-category-list>

            </app-category-list>
            <span class="section_name">
              more
            </span>
          </div>
        </aside>
        <div class="content col-md-10" >

            <app-contents>

            </app-contents>
        </div>
      </main>
      <footer>
        <div class="container">
          <!-- footer -->
        </div>
      </footer>
  </div>
  <!-- https://bootstrap-themes.github.io/dashboard/?ver=2 -->
</template>

<script>
export default {
  name: 'app',
  data () {
    return{
      locations: []
    }
  },
  // firestore(){
  //   return {
  //     locations: firebase.database()
  //   }
  // },
  methods: {
    newMethod() {
      this.$store.commit('increment');
    }
  }
};
</script>

<style>
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
    flex: 1 0 auto;
    /* border: solid green ; */
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    flex-wrap: wrap;
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
  .content{
    /* border: solid #333; */
    height: 55px;
  }

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
</style>
