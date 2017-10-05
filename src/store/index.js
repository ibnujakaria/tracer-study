import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'

Vue.use(Vuex)

const STORE = new Vuex.Store({
  modules: {
    auth
  }
})

export default STORE
