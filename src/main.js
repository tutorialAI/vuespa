import Vue from 'vue'
import bootstrap from 'bootstrap-css-only'
import store from './store/store'
import 'font-awesome/css/font-awesome.css'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'

import App from './App.vue'
import TodoItem from './components/todoItem.vue'
import TodoAside from './components/todoAside.vue'
import AppContents from './components/contents.vue'
import AppCategory from './components/category.vue'
import TodoAdd from './components/todoAdd.vue'
import TodoComplete from './components/todoComplete.vue'
import Auth from './components/auth.vue'


Vue.component('TodoAside', TodoAside);
Vue.component('AppContents', AppContents);
Vue.component('AppCategory', AppCategory);
Vue.component('TodoItem', TodoItem);
Vue.component('TodoAdd', TodoAdd);
Vue.component('TodoComplete', TodoComplete);
Vue.component('Auth', Auth);

new Vue({
  store,
  el: '#app',
  render: h => h(App)
});
