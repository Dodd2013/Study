// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import promise from 'es6-promise'
import Vue from 'vue'
import { component as app } from './components/app'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// polyfill Promise for IE
promise.polyfill()

Vue.config.productionTip = false
// Use ElementUI
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<app/>',
  components: {app}
})
