import Vue from 'vue'
import Router from 'vue-router'
import {route as homeRoute} from './components/home'

Vue.use(Router)

export default new Router({
  routes: [
    homeRoute
  ]
})
