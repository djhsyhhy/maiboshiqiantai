// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'animate.css'
import animated from 'animate.css'
import { ButtonGroup,Button,Submenu,Menu,MenuItem,Select,Input,Divider,CarouselItem,Carousel,Collapse,CollapseItem,Checkbox } from 'element-ui';
import { Dropdown,DropdownItem,DropdownMenu } from 'element-ui'
import router from './router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false;

Vue.use(VueResource);
// 在路由的请求中如此设置
Vue.http.options.emulateJSON = true;

Vue.use(animated);
Vue.use(Button);
Vue.use(Submenu);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Select);
Vue.use(Input);
Vue.use(Divider);
Vue.use(CarouselItem);
Vue.use(Carousel);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(ButtonGroup);
Vue.use(Checkbox);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')


