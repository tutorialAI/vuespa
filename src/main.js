import Vue from 'vue'
import bootstrap from 'bootstrap-css-only'
import App from './App.vue'
import AppCategoryList from './components/categoryList.vue'
import AppContents from './components/contents.vue'


Vue.component('AppCategoryList', AppCategoryList);
Vue.component('AppContents', AppContents);
new Vue({
  el: '#app',
  render: h => h(App)
})
