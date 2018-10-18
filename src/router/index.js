import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import member from '@/components/member'
import shopCar from '@/components/shopCar'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'index',
  //     alias:'/home',
  //     component: index,
  //     children:[
  //       {path:'/member',component:member},
  //       {path:'/shopCar',component:shopCar},
  //       {path:'/search',component:search},
  //     ]
  //   }
  // ]
  routes: [
    {
      path: '/',
      name: 'index',
      alias:'/home',
      component: index,
    },
    {
      path: '/member',
      name: 'member',
      component: member,
    },
    {
      path: '/shopCar',
      name: 'shopCar',
      component: shopCar,
    },
    {
      path: '/search',
      name: 'search',
      component: search,
    }
  ]
})
