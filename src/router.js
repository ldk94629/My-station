import VueRouter from 'vue-router'
// 导入路由组件
import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Search from './components/tabbar/Search.vue'
import ShopCart from './components/tabbar/ShopCart.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/home',component:Home},
    {path:'/member',component:Member},
    {path:'/shopcar',component:ShopCart},
    {path:'/search',component:Search}

    
  ],
  linkActiveClass:'mui-active' //覆盖默认路由高亮得类
})

// 把路由对象暴露出去
export default router