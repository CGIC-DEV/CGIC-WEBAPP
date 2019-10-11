import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import global_ from './Global.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.prototype.GLOBAL = global_
axios.defaults.baseURL = global_.BASE_URL

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
