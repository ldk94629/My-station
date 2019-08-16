//入口文件
import Vue from 'vue'
//1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由的包
Vue.use(VueRouter)
// 1.3导入自己的router.js路由模块
import router from './router.js'
import VueResource from 'vue-resource'                                                                    
Vue.use(VueResource)


// 导入 mui
import  './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 按需导入Mint-UI的组件
import {Header,Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import app from './App.vue'
var vm =new Vue({
  el:"#app",
 render:c=>c(app),
 router //1.4 挂载路由
})