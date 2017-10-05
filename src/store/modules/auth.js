import Vue from 'vue'
import Snackbar from 'snackbar-js'

let token = window.localStorage.getItem('token')
let isLoggedIn = window.localStorage.getItem('isLoggedIn') === 'true'

export default {
  state: {
    authenticatedUser: {},
    token: token || null,
    isLoggedIn: isLoggedIn
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
      state.isLoggedIn = true
      window.localStorage.setItem('token', payload.token)
      window.localStorage.setItem('isLoggedIn', state.isLoggedIn + '')
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
      window.localStorage.setItem('token', state.token)
      window.localStorage.setItem('isLoggedIn', state.isLoggedIn + '')
    }
  },
  actions: {
    LOGIN (context, payload) {
      return Vue.http.post('login', payload).then((response) => {
        console.log(response.body)
        // context.commit('LOGIN', {
        //   user: response.body.result.user,
        //   token: response.body.result.token
        // })
        return response
      }, (response) => {
        return response
      })
    },
    GET_AUTHENTICATED_USER (context) {
      return Vue.http.get('auth', {headers: {Authorization: 'Bearer ' + context.state.token}}).then((response) => {
        context.commit('SET_AUTHENTICATED_USER', response.body.result.user)
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
