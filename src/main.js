// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)


Vue.use(VueLazyLoad, {
  error: 'http://hly.1000da.com.cn/assets/img/error.jpg',
  loading: 'http://hly.1000da.com.cn/assets/img/loading.gif'
});
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

import '@/assets/css/reset.css' // global css

import '@/assets/css/index.less' // global css
import '@/assets/css/common.less' // global css




FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
