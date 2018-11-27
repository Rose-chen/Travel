import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'

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
      component: () => import('@/views/city/City')
    },
    {
      path: '/list',
      name: 'List',
      component: () => import('@/views/list/List')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/views/detail/Detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
