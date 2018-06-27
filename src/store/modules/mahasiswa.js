import Vue from 'vue'
import listPekerjaan from '../const/list-pekerjaan'

export default {
  state: {
    form: {
      dataPribadi: {nim: null, nama: null, email: null, alamat: null, no_telepon: null, tempat_lahir: null, tanggal_lahir: null},
      dataAkademik: {prodi: null, angkatan_wisuda: null, tanggal_lulus: null, nilai_ipk: null},
      dataFoto: {foto: null},
      dataPekerjaan: {status_pekerjaan: null, keterangan: {}},
      edit: false
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
        dataPribadi: {nim: null, nama: null, email: null, alamat: null, no_telepon: null},
        dataAkademik: {prodi: null, angkatan_wisuda: null, tanggal_lulus: null, nilai_ipk: null},
        dataFoto: {foto: null},
        dataPekerjaan: {status_pekerjaan: null, keterangan: {}},
        edit: false
      }
    },
    setFormMahasiswaMode (state, mode) {
      state.form.edit = mode === 'edit'
    }
  },
  actions: {
    cariMahasiswa (context, nim) {
      let url = 'mahasiswa/detail/' + nim
      return Vue.http.get(url).then(response => {
        return response
      }, response => {
        alert('something went wrong')
        return response
      })
    },
    getMahasiswa (context, payload) {
      let url = 'mahasiswa'
      let params = payload
      params.api_token = context.getters.token

      return Vue.http.get(url, {params}).then(response => {
        return response
      }, response => {
        alert('something went wrong')
        return response
      })
    },
    exportSemuaMahasiswa (context, payload) {
      let url = 'http://api.tracer-study.jagongoding.com/api/v1/mahasiswa?export=excel&api_token=' + context.getters.token
      window.open(url, '_blank')
    },
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
    createMahasiswa (context, fotoSrc) {
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

            // ini jika edit, dan fotonya tetep tidak diganti, maka langsung skip
            if (fotoSrc && fotoSrc === context.state.form.dataFoto.foto) {
              context.commit('resetMahasiswaCreateForm')
              return {status: 200}
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
    },
    editMahasiswaPribadiItself (context) {
      let url = 'mahasiswa/akun/pribadi?api_token_mhs=' + context.getters.token

      return Vue.http.put(url, context.state.form.dataPribadi).then(response => {
        return response
      }, response => {
        alert('something went wrong')
        return response
      })
    },
    editMahasiswaAkademikItself (context) {
      let url = 'mahasiswa/akun/akademik?api_token_mhs=' + context.getters.token
      let payload = JSON.parse(JSON.stringify(context.state.form.dataAkademik))
      payload.nim = context.state.form.dataPribadi.nim

      return Vue.http.put(url, payload).then(response => {
        return response
      }, response => {
        alert('something went wrong')
        return response
      })
    },
    editMahasiswaPekerjaanItself (context) {
      let url = 'mahasiswa/akun/pekerjaan?api_token_mhs=' + context.getters.token
      let payload = JSON.parse(JSON.stringify(context.state.form.dataPekerjaan))
      payload.nim = context.state.form.dataPribadi.nim

      return Vue.http.put(url, payload).then(response => {
        return response
      }, response => {
        alert('something went wrong')
        return response
      })
    },
    editMahasiswaFotoItself (context) {
      let url = 'mahasiswa/akun/foto?api_token_mhs=' + context.getters.token
      let payload = JSON.parse(JSON.stringify(context.state.form.dataFoto))
      payload.nim = context.state.form.dataPribadi.nim

      return Vue.http.post(url, payload).then(response => {
        return response
      }, response => {
        alert('something went wrong')
        return response
      })
    },
    editMahasiswaItself (context, fotoSrc) {
      // pertama, insert mahasiswa pribadi. Terus kalau data sudah diinsert, baru masukkan yg akademik sama foto
      return context.dispatch('editMahasiswaPribadiItself').then(response => {
        if (response.status !== 200) {
          return response
        }

        return context.dispatch('editMahasiswaAkademikItself').then(response => {
          if (response.status !== 200) {
            return response
          }

          return context.dispatch('editMahasiswaPekerjaanItself').then(response => {
            if (response.status !== 200) {
              return response
            }

            // ini jika edit, dan fotonya tetep tidak diganti, maka langsung skip
            if (fotoSrc && fotoSrc === context.state.form.dataFoto.foto) {
              context.commit('resetMahasiswaCreateForm')
              return {status: 200}
            }

            return context.dispatch('editMahasiswaFotoItself').then(response => {
              if (response.status !== 200) {
                return response
              }

              context.commit('resetMahasiswaCreateForm')
              return response
            })
          })
        })
      })
    },
    changePassword (context, payload) {
      return Vue.http.put('mahasiswa/akun/password?api_token_mhs=' + context.getters.token, payload).then(response => {
        return context.dispatch('GET_AUTHENTICATED_USER')
      }, response => {
        return response
      })
    }
  }
}
