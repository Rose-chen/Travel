import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import City from '@/views/city/City'
import List from '@/views/list/List'
import Detail from '@/views/detail/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/default',
      name: 'Detail',
      component: Detail
    }
  ]
})
