/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import iView from 'iview'
import locale from 'iview/dist/locale/id-ID'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(iView, { locale })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
