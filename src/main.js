import Vue from 'vue'
import App from './App.vue'

import VueQriously from 'vue-qriously'
Vue.use(VueQriously)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
