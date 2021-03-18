import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/HomePage/home'
import AgriculturalCenter from '@/components/agricultural/AgriculturalCenter'
import InternetClimate from '@/components/InternetClimate/InternetClimate'
import InternetImg from '@/components/InternetImg/InternetImgCenter'
import NewsCenter from '@/components/news/NewsCenter'
import UserLogin from '@/components/UserLogin'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path:'/home',
      component: home
    },
    {
      path: '/AgriculturalCenter',//农情宝
      component: AgriculturalCenter
    },
    {
      path: '/InternetClimate',//物联网气候
      component: InternetClimate
    },
    {
      path: '/InternetImg',//物联网图像
      component: InternetImg
    },
    {
      path: '/NewsCenter',//新闻中心
      component: NewsCenter
    },
    {
      name:'UserLogin',
      path: '/UserLogin',//用户登录
      component: UserLogin
    },
  ],
  mode:'history'
})
