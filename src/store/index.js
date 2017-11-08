import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'

Vue.use(Vuex)

const STORE = new Vuex.Store({
  modules: {
    auth
  },
  actions: {
    bootstrap (context) {
      context.dispatch('GET_AUTHENTICATED_USER')
    }
  }
})

export default STORE
