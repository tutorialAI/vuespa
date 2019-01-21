import Vue from 'vue'
import bootstrap from 'bootstrap-css-only'
// import fontawesome from '@fortawesome/fontawesome-common-types'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'

var config = {
  apiKey: "AIzaSyB9Oh4l0to1MNOV1I8ilu8DkxLibple0gk",
  authDomain: "day-task.firebaseapp.com",
  databaseURL: "https://day-task.firebaseio.com",
  projectId: "day-task",
  storageBucket: "day-task.appspot.com",
  messagingSenderId: "575426806335"
};
firebase.initializeApp(config);
// console.log(firebase.firestore().collection('fjtu9yQ8qrwiOwelFX7c'));
var ref = firebase.database().ref('day-task');
// ref.set("465");

import App from './App.vue'
import AppCategoryList from './components/categoryList.vue'
import AppContents from './components/contents.vue'
import AppCategory from './components/category.vue'
import AppAddPost from './components/addPost.vue'


Vue.component('AppCategoryList', AppCategoryList);
Vue.component('AppContents', AppContents);
Vue.component('AppCategory', AppCategory);
Vue.component('AppCategory', AppAddPost);
new Vue({
  el: '#app',
  render: h => h(App)
})
