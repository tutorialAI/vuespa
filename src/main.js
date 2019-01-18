import Vue from 'vue'
import bootstrap from 'bootstrap-css-only'
import { FontAwesomeIcon } from '@fortawesome/fontawesome-common-types'

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
