<template lang="html">
  <div>
    <div class="row">
      <div class="col-md-12">
        <h2>Tambah Mahasiswa</h2>
        <div class="form-wizard">        
          <div class="row">
            <div class="col-md-3">
              <div class="menu">
                <ul>
                  <li>
                    <a :class="{active: step === 1}">
                      Pribadi <i class="fa fa-chevron-right"></i>
                    </a>
                  </li>
                  <li>
                    <a :class="{active: step === 2}">
                      Akademik <i class="fa fa-chevron-right"></i>
                    </a>
                  </li>
                  <li>
                    <a :class="{active: step === 3}">
                      Pekerjaaan <i class="fa fa-chevron-right"></i>
                    </a>
                  </li>
                  <li>
                    <a :class="{active: step === 4}">
                      Foto <i class="fa fa-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-9">
              <div class="form-content">
                <div>
                  <input-data-pribadi v-if="step === 1" :form="form"></input-data-pribadi>
                  <input-data-akademik v-else-if="step === 2" :form="form"></input-data-akademik>
                  <input-data-pekerjaan v-else-if="step === 3" :form="form"></input-data-pekerjaan>
                </div>
                <div style="position: absolute; right: 35px; bottom: 20px">
                  <div class="btn-group">
                    <button class="btn btn-default" @click="previousStep">Back</button>
                    <button class="btn btn-primary" @click="nextStep">Next</button>
                  </div>
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
    components: {InputDataPribadi, InputDataAkademik, InputDataPekerjaan}
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

  .menu {
    margin-right: -30px;
    padding-top: 15px;
  }

  .menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .menu ul a {
    cursor: pointer;
    display: block;
    padding: 10px;
    padding-left: 20px;
  }

  .menu ul a.active {
    text-decoration: none;
    background-color: #337ab7;
    color: white;
  }

  .menu ul a:hover {
    text-decoration: none;
  }

  .menu ul a i.fa {
    float: right;
    color: rgb(140, 140, 140);
  }

  .menu a.active .fa {
    color: white;
  }

</style>
