import Vue from 'vue'
import bootstrap from 'bootstrap-css-only'
import App from './App.vue'
import AppCategoryList from './components/categoryList.vue'


Vue.component('AppCategoryList', AppCategoryList);
new Vue({
  el: '#app',
  render: h => h(App)
})
