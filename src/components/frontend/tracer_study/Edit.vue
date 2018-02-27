<template lang="html">
  <div class="">
    <div class="row">
      <div class="col-md-12">
        <div v-if="!success">
          <h2>Edit Mahasiswa</h2>
          <hr style="opacity: 0">
          <pre>{{student}}</pre>
          <div class="text-right" style="margin-bottom: 10px">
            <div class="btn-group">
              <button @click="downloadTemplate" class="btn btn-default">
                <i class="fa fa-download"></i> Download Template
              </button>
              <router-link class="btn btn-success" to="/tracer-study/import-excel">
                <i class="fa fa-file-excel-o"></i> Import Excel
              </router-link>
            </div>
          </div>
          <div class="form-wizard">        
            <div class="row" style="margin-bottom: 100px">
              <div class="col-md-3">
                <insert-step :step="step"></insert-step>
              </div>
              <div class="col-md-9">
                <div class="form-content">
                  <div>
                    <input-data-pribadi @inserted="nextStep" @previous="previousStep" v-if="step === 1"></input-data-pribadi>
                    <input-data-akademik @inserted="nextStep" @previous="previousStep" v-else-if="step === 2"></input-data-akademik>
                    <input-data-pekerjaan @inserted="nextStep" @previous="previousStep" v-else-if="step === 3"></input-data-pekerjaan>
                    <input-data-foto @inserted="submit" @previous="previousStep" v-else-if="step === 4"></input-data-foto>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center" v-else>
          <div style="margin: 50px; color: green">
            <i class="fa fa-check" style="font-size: 50pt"></i>
          </div>
          <h3>Data mahasiswa berhasil dimasukkan :)</h3>
          <router-link to="/tracer-study/mahasiswa">Kembali</router-link>
        </div>
      </div>
      <div class="loading" :class="{show: loading}"></div>
    </div>
  </div>
</template>

<script>
  import InputDataPribadi from './partials/InputDataPribadi'
  import InputDataAkademik from './partials/InputDataAkademik'
  import InputDataPekerjaan from './partials/InputDataPekerjaan'
  import InputDataFoto from './partials/InputDataFoto'
  import InsertStep from './partials/InsertStep'

  export default {
    data () {
      return {
        step: 1,
        loading: false,
        success: false,
        student: null
      }
    },
    mounted () {
      this.$store.commit('setMahasiswaCreateForm', {
        key: 'dataPribadi.nim',
        value: this.$route.params.nim
      })

      this.getMahasiswa()
    },
    methods: {
      changeStep (step) {
        this.step = step
      },
      nextStep () {
        if (this.step < 4) {
          this.step++
        }
      },
      previousStep () {
        if (this.step > 1) {
          this.step--
        }
      },
      getMahasiswa () {
        this.loading = true
        this.$store.dispatch('cariMahasiswa', this.$route.params.nim).then(response => {
          if (response.status === 200) {
            this.student = response.body.message
            this.loading = false

            this.setNewDataToTheForm()
          }
        })
      },
      setNewDataToTheForm () {
        // data pribadi
        for (let key of ['nama', 'alamat', 'email', 'no_telepon', 'tempat_lahir', 'tanggal_lahir']) {
          this.$store.commit('setMahasiswaCreateForm', {
            key: 'dataPribadi.' + key,
            value: this.student[key]
          })
        }

        // data akademik
        for (let key of ['prodi', 'angkatan_wisuda', 'tanggal_lulus', 'nilai_ipk']) {
          if (key === 'prodi') {
            this.$store.commit('setMahasiswaCreateForm', {
              key: 'dataAkademik.' + key,
              value: this.student.akademik[key].split(' ').join('-')
            })
            continue
          }

          this.$store.commit('setMahasiswaCreateForm', {
            key: 'dataAkademik.' + key,
            value: this.student.akademik[key]
          })
        }
      },
      submit () {
        this.loading = true
        this.$store.dispatch('createMahasiswa').then(response => {
          if (response.status !== 200) {
            alert('Error')
          } else {
            this.success = true
          }

          this.loading = false
        })
      },
      downloadTemplate () {
        window.open('/static/template-tracer-study.xlsx', '_blank')
      }
    },
    components: {InputDataPribadi, InputDataAkademik, InputDataPekerjaan, InputDataFoto, InsertStep}
  }
</script>

<style lang="css" scoped>
  .control-label {
    text-align: left;
  }

  .form-wizard {
    background-color: rgb(220, 220, 220);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .form-content {
    background-color: white;
    padding: 20px;
    border: 1px solid rgb(240, 240, 240);
    border-left: none;
    min-height: 500px;
    padding-bottom: 80px;
  }

</style>
