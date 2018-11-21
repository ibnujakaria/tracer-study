import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import mahasiswa from './modules/mahasiswa'
import prodi from './modules/prodi'

Vue.use(Vuex)

const STORE = new Vuex.Store({
  modules: {
    auth,
    mahasiswa,
    prodi
  },
  actions: {
    bootstrap (context) {
      // get authenticated user sekarang juga dipanggil dari router/index.js@beforeEach
      context.dispatch('GET_AUTHENTICATED_USER').then(response => {
        context.dispatch('getProdi')
      })
    }
  }
})

export default STORE
