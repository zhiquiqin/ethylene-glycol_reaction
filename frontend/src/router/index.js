import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'zhuye',
      component: Home
    },
    
    {
      path: '/egrn',
      name: 'egrn',
      component: Home
    }
  ]
})
