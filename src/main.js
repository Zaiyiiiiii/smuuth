import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import store from './store/store'
import Lightning from "lightning/src/Lightning"
import { touch } from './touch'
import eruda from "eruda"
// eruda.init()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
