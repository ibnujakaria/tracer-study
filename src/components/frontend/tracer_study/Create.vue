<template lang="html">
  <div>
    <div class="row">
      <div class="col-md-12">
        <div v-if="!success">
          <h2>Tambah Mahasiswa</h2>
          <!-- <pre>{{$store.state.mahasiswa.form}}</pre> -->
          <div class="form-wizard">        
            <div class="row">
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
          <router-link to="/tracer-study">Kembali</router-link>
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
        success: false
      }
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
  }

</style>
