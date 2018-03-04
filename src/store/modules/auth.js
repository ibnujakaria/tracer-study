import Vue from 'vue'
import Snackbar from 'snackbar-js'

let token = window.localStorage.getItem('token')
let isLoggedIn = window.localStorage.getItem('isLoggedIn') === 'true'
let role = window.localStorage.getItem('role')

export default {
  state: {
    authenticatedUser: {},
    token: token || null,
    isLoggedIn: isLoggedIn,
    role: role
  },
  getters: {
    auth: state => state.isLoggedIn,
    user: state => state.authenticatedUser,
    token: state => state.token
  },
  mutations: {
    LOGIN (state, payload) {
      state.token = payload.token
      state.authenticatedUser = payload.user
      state.role = payload.role
      state.isLoggedIn = true

      window.localStorage.setItem('token', payload.token)
      window.localStorage.setItem('isLoggedIn', state.isLoggedIn + '')
      window.localStorage.setItem('role', state.role)
    },
    SET_AUTHENTICATED_USER (state, payload) {
      state.authenticatedUser = payload
    },
    LOGOUT (state) {
      if (state.authenticatedUser.name) {
        Snackbar.create().setText('See you soon, ' + state.authenticatedUser.name + '!').setStyle('center').show()
      }
      state.token = null
      state.authenticatedUser = {}
      state.isLoggedIn = false
      state.role = null

      window.localStorage.setItem('token', state.token)
      window.localStorage.setItem('isLoggedIn', state.isLoggedIn + '')
      window.localStorage.setItem('role', null)
    }
  },
  actions: {
    LOGIN (context, payload) {
      return Vue.http.post('login', payload).then((response) => {
        console.log(response.body)
        context.commit('LOGIN', {
          user: response.body.message,
          token: response.body.api_token,
          role: 'admin'
        })
        context.dispatch('GET_AUTHENTICATED_USER')
        return response
      }, (response) => {
        // kalau gagal, dicoba loginnya login mahasiswa, hehe
        payload.nim = payload.email
        delete payload.email

        return Vue.http.post('mahasiswa/akun/login', payload).then(response => {
          console.log(response.body)
          context.commit('LOGIN', {
            user: response.body.message,
            token: response.body.api_token_mhs,
            role: 'mahasiswa'
          })
          context.dispatch('GET_AUTHENTICATED_USER')
          return response
        }, response => {
          return response
        })
      })
    },
    GET_AUTHENTICATED_USER (context) {
      if (context.state.role !== 'mahasiswa') {
        let params = {params: {api_token: context.state.token}}
        return Vue.http.get('user/logged_in/' + context.state.token, params).then((response) => {
          context.commit('SET_AUTHENTICATED_USER', response.body.message)
          return response
        }, (response) => {
          // if gagal?
          return response
        })
      }

      let params = {params: {api_token_mhs: context.state.token}}
      return Vue.http.get('mahasiswa/akun/detail', params).then((response) => {
        let mahasiswa = response.body.message

        mahasiswa.username = mahasiswa.nim

        context.commit('SET_AUTHENTICATED_USER', mahasiswa)
        return response
      }, (response) => {
        // if gagal?
        return response
      })
    },
    AUTH_BOOTSTRAP (context) {
      // if there is old token and the loggedIn is true?
      if (context.state.token && context.state.isLoggedIn) {
        context.dispatch('GET_AUTHENTICATED_USER')
      }
    }
  }
}
