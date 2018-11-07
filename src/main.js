// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store/index'

Vue.use(VueResource)

Vue.config.productionTip = true
Vue.http.options.root = 'http://api.tracer-study.jagongoding.com/api/v1'
// Vue.http.options.root = 'http://localhost:8000/api/v1'

store.dispatch('bootstrap')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
