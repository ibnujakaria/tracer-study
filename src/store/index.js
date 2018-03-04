import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import mahasiswa from './modules/mahasiswa'

Vue.use(Vuex)

const STORE = new Vuex.Store({
  modules: {
    auth,
    mahasiswa
  },
  actions: {
    bootstrap (context) {
      // get authenticated user sekarang juga dipanggil dari router/index.js@beforeEach
      context.dispatch('GET_AUTHENTICATED_USER')
    }
  }
})

export default STORE
