// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import '@/assets/css/reset.css' // global css
import App from './App'
import router from './router'
import '@/assets/css/index.less' // global css
import '@/assets/css/common.less' // global css



FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
