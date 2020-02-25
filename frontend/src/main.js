// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

/* element-ui */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

/* vue router */
import router from './router'

/* vuex */
import store from './store'

/* eslint-disable no-new */
Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router: router,
  store: store,
  components: { App },
  template: '<App/>'
})
