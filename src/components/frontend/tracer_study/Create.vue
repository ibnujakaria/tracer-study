<template lang="html">
  <div>
    <div class="row">
      <div class="col-md-12">
        <h2>Tambah Mahasiswa</h2>
        <div class="form-wizard">        
          <div class="row">
            <div class="col-md-3">
              <insert-step :step="step"></insert-step>
            </div>
            <div class="col-md-9">
              <div class="form-content">
                <div>
                  <input-data-pribadi @inserted="nextStep" @previous="previousStep" v-if="step === 1" :form="form"></input-data-pribadi>
                  <input-data-akademik v-else-if="step === 2" :form="form"></input-data-akademik>
                  <input-data-pekerjaan v-else-if="step === 3" :form="form"></input-data-pekerjaan>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import InputDataPribadi from './partials/InputDataPribadi'
  import InputDataAkademik from './partials/InputDataAkademik'
  import InputDataPekerjaan from './partials/InputDataPekerjaan'
  import InsertStep from './partials/InsertStep'

  export default {
    data () {
      return {
        form: {
          nim: this.$route.query.nim || null,
          status_perkejaan: 'null'
        },
        step: 1
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
      }
    },
    components: {InputDataPribadi, InputDataAkademik, InputDataPekerjaan, InsertStep}
  }
</script>

<style lang="css" scoped>
  .control-label {
    text-align: left;
  }

  .form-wizard {
    background-color: rgb(240, 240, 240);
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
