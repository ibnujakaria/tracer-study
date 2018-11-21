import Vue from 'vue'

export default {
  state: {
    prodis: []
  },
  getters: {
  },
  mutations: {
    SET_PRODIS (state, prodis) {
      prodis.map(prodi => {
        prodi.slug = prodi.nama_prodi.split(' ')
        prodi.slug.pop()
        prodi.slug = prodi.slug.join('-').toLowerCase()
        return prodi
      })
      state.prodis = prodis
    }
  },
  actions: {
    getProdi (context) {
      return Vue.http.get(`prodi?api_token=${context.getters.token}`).then(response => {
        context.commit('SET_PRODIS', response.data.message)
        return response
      }, response => {
        alert('something went wrong')
        return response
      })
    },
    storeProdi (context, namaProdi) {
      let url = 'prodi?api_token=' + context.getters.token

      return Vue.http.post(url, { nama_prodi: namaProdi }).then(response => {
        context.dispatch('getProdi')
        return response
      }, response => {
        alert('something went wrong')
        return response
      })
    }
  }
}
