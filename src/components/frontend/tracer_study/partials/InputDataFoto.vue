<template>
  <div>
    <div>
      <h3>Foto</h3>
      <hr>
      <div class="row">
        <div class="col-sm-7">
          <img src="http://via.placeholder.com/350x350" style="width: 100%" ref="preview" v-if="!foto">
          <img :src="foto" style="width: 100%" ref="preview" v-else>
        </div>
        <div class="col-sm-5">
          <input @change="fileLoaded" accept="image/*" type="file" ref="input" style="display: none">
          <button class="btn btn-block btn-default" @click="browseFile">
           <i class="fa fa-image"></i> Pilih Gambar
          </button>
        </div>
      </div>
    </div>
    <div style="position: absolute; right: 35px; bottom: 20px">
      <div class="btn-group">
        <button class="btn btn-default" @click="previous">Kembali</button>
        <button class="btn btn-primary" :class="{disabled: !bisaNext}" @click="next">Submit</button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        bisaNext: false
      }
    },
    computed: {
      foto: {
        get () {
          return this.$store.state.mahasiswa.form.dataFoto.foto
        },
        set (value) {
          this.$store.commit('setMahasiswaCreateForm', {key: 'dataFoto.foto', value})
        }
      }
    },
    mounted () {
      this.bisaNext = this.foto
    },
    methods: {
      fileLoaded () {
        let reader = new FileReader()
        let file = this.$refs['input'].files[0]
        let image = this.$refs['preview']

        reader.onload = () => {
          image.setAttribute('src', reader.result)
          this.foto = reader.result
          this.bisaNext = true
        }
        reader.readAsDataURL(file)
      },
      browseFile () {
        this.$refs['input'].click()
      },
      next () {
        if (!this.bisaNext) {
          return
        }

        this.$emit('inserted')
      },
      previous () {
        this.$emit('previous')
      }
    }
  }
</script>