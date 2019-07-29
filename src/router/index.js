//引入vue和路由
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Messages'

Vue.use(VueRouter)
//1)定义路由组件
export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/about' //如果访问根路径则调整至about
    },
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'news',
          component:News
        },{
          path:'messages',
          component:Message
        },{
          path:'',//默认地址、
          redirect:'/home/news'
        }
      ]
    }

  ]
})
