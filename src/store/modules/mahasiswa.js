import Vue from 'vue'

export default {
  state: {},
  actions: {
    insertMahasiswaPribadi (context, payload) {
      return Vue.http.post('mahasiswa/pribadi?api_token=' + context.getters.token, payload).then(response => {
        return response
      }, response => {
        alert('something went wrong')
        return response
      })
    }
  }
}
