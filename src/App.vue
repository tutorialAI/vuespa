<template>
  <div id="app">
      <header>
        <div class="container">

          <!-- header -->
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
          <div class="container">
            <span class="section_name">
              DASHBOARDS
            </span>
          </div>
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
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
@media (min-width: 1200px){
  .container{
    max-width: 1400px;
  }
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
  footer,header{
    flex: 0 0 auto;
    height: 50px;
  }
  li{
    list-style: none;
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
</style>
