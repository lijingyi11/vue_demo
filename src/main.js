import Vue from 'vue'
import App from './App'
//引入路由
import router from './router'


//固定样式
new Vue({
  el:"#app",
  components:{App},
  template:"<App/>",
  //2)注册路由
  router
})
