import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

//引入路由
import router from './router'
// 引用axios，并设置基础URL为后端服务api地址
//var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8001/'
// 将API方法绑定到全局
Vue.prototype.$axios = axios
Vue.config.productionTip = false

//固定样式
new Vue({
  el:"#app",
  components:{App},
  template:"<App/>",
  //2)注册路由
  router
})
