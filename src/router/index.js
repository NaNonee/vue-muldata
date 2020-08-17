import Vue from 'vue'
import Router from 'vue-router'
import CopClass from '@/components/EnterPage'
import Login from '@/views/login/login'
import NotFound from '@/views/errorPage/404'
import Forbidden from '@/views/errorPage/403'
// import Layout from '@/views/layout/index'
// import Home from '@/views/home/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/center/',
      name: '/CopName',
      component: CopClass
    }
  ]
})

/* 准备动态添加的路由 */
export const DynamicRoutes = [
  {
    path: '/403',
    component: Forbidden
  },
  {
    path: '*',
    component: NotFound
  }
]
