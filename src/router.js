import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Unit1 from './views/Unit1Page.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Unit1',
      name: 'Unit1',
      component: Unit1
    }
  ]
})
