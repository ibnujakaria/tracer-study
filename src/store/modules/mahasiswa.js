import Vue from 'vue'
import listPekerjaan from '../const/list-pekerjaan'

export default {
  state: {
    form: {
      dataPribadi: {nim: null, nama: null, alamat: null, no_telepon: null},
      dataAkademik: {prodi: null, angkatan_wisuda: null, tanggal_lulus: null, nilai_ipk: null},
      dataFoto: {foto: null},
      dataPekerjaan: {status_pekerjaan: null, keterangan: {}}
    },
    pekerjaan: listPekerjaan
  },
  getters: {
    getPekerjaanByKey: (state) => (key) => {
      return state.pekerjaan.find(pekerjaan => pekerjaan.key === key)
    }
  },
  mutations: {
    setMahasiswaCreateForm (state, payload) {
      let keys = payload.key.split('.')
      state.form[keys[0]][keys[1]] = payload.value
    },
    resetMahasiswaCreateForm (state) {
      state.form = {
        dataPribadi: {nim: null, nama: null, alamat: null, no_telepon: null},
        dataAkademik: {prodi: null, angkatan_wisuda: null, tanggal_lulus: null, nilai_ipk: null},
        dataFoto: {foto: null}
      }
    }
  },
  actions: {
    insertMahasiswaPribadi (context) {
      let url = 'mahasiswa/pribadi?api_token=' + context.getters.token

      return Vue.http.post(url, context.state.form.dataPribadi).then(response => {
        return response
      }, response => {
        alert('something went wrong')
        return response
      })
    },
    insertMahasiswaAkademik (context) {
      let url = 'mahasiswa/akademik?api_token=' + context.getters.token
      let payload = JSON.parse(JSON.stringify(context.state.form.dataAkademik))
      payload.nim = context.state.form.dataPribadi.nim

      return Vue.http.post(url, payload).then(response => {
        return response
      }, response => {
        alert('something went wrong')
        return response
      })
    },
    insertMahasiswaPekerjaan (context) {
      let url = 'mahasiswa/pekerjaan?api_token=' + context.getters.token
      let payload = JSON.parse(JSON.stringify(context.state.form.dataPekerjaan))
      payload.nim = context.state.form.dataPribadi.nim

      return Vue.http.post(url, payload).then(response => {
        return response
      }, response => {
        alert('something went wrong')
        return response
      })
    },
    insertMahasiswaFoto (context) {
      let url = 'mahasiswa/foto?api_token=' + context.getters.token
      let payload = JSON.parse(JSON.stringify(context.state.form.dataFoto))
      payload.nim = context.state.form.dataPribadi.nim

      return Vue.http.post(url, payload).then(response => {
        return response
      }, response => {
        alert('something went wrong')
        return response
      })
    },
    createMahasiswa (context) {
      // pertama, insert mahasiswa pribadi. Terus kalau data sudah diinsert, baru masukkan yg akademik sama foto
      return context.dispatch('insertMahasiswaPribadi').then(response => {
        if (response.status !== 200) {
          return response
        }

        return context.dispatch('insertMahasiswaAkademik').then(response => {
          if (response.status !== 200) {
            return response
          }

          return context.dispatch('insertMahasiswaPekerjaan').then(response => {
            if (response.status !== 200) {
              return response
            }

            return context.dispatch('insertMahasiswaFoto').then(response => {
              if (response.status !== 200) {
                return response
              }

              context.commit('resetMahasiswaCreateForm')
              return response
            })
          })
        })
      })
    }
  }
}
