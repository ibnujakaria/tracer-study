<template>
  <div>
    <div class="loading-container">
      <h3>Pribadi</h3>
      <hr>
      <div class="form-group">
        <label>Nim</label>
        <input class="form-control" type="text" placeholder="Nim" v-model="nim">
      </div>
      <div class="form-group">
        <label>Nama</label>
        <input class="form-control" type="text" placeholder="Nama" v-model="nama">
      </div>
      <div class="form-group">
        <label>Nomor Telepon</label>
        <input class="form-control" type="text" placeholder="Nomor Telepon" v-model="noTelepon">
      </div>
      <div class="form-group">
        <label>Tempat Lahir</label>
        <input class="form-control" type="text" placeholder="Tempat Lahir" v-model="tempatLahir">
      </div>
      <div class="form-group">
        <label>Tempat Lahir</label>
        <datepicker input-class="form-control" placeholder="Tanggal Lahir" v-model="tanggalLahir"></datepicker>
      </div>
      <div class="form-group">
        <label>Alamat Rumah</label>
        <textarea class="form-control" type="text" placeholder="Alamat Rumah" v-model="alamat"></textarea>
      </div>
    </div>
    <div style="position: absolute; right: 35px; bottom: 20px">
      <div class="btn-group">
        <button class="btn btn-default" @click="previous">Kembali</button>
        <button class="btn btn-primary" :class="{disabled: !bisaNext}" @click="next">Lanjut</button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Datepicker from 'vuejs-datepicker'
  export default {
    data () {
      return {
        loading: false
      }
    },
    computed: {
      noTelepon: {
        get () {
          return this.$store.state.mahasiswa.form.dataPribadi.no_telepon
        },
        set (value) {
          this.$store.commit('setMahasiswaCreateForm', {key: 'dataPribadi.no_telepon', value})
        }
      },
      nim: {
        get () {
          return this.$store.state.mahasiswa.form.dataPribadi.nim
        },
        set (value) {
          this.$store.commit('setMahasiswaCreateForm', {key: 'dataPribadi.nim', value})
        }
      },
      nama: {
        get () {
          return this.$store.state.mahasiswa.form.dataPribadi.nama
        },
        set (value) {
          this.$store.commit('setMahasiswaCreateForm', {key: 'dataPribadi.nama', value})
        }
      },
      alamat: {
        get () {
          return this.$store.state.mahasiswa.form.dataPribadi.alamat
        },
        set (value) {
          this.$store.commit('setMahasiswaCreateForm', {key: 'dataPribadi.alamat', value})
        }
      },
      tempatLahir: {
        get () {
          return this.$store.state.mahasiswa.form.dataPribadi.tempat_lahir
        },
        set (value) {
          this.$store.commit('setMahasiswaCreateForm', {key: 'dataPribadi.tempat_lahir', value})
        }
      },
      tanggalLahir: {
        get () {
          return this.$store.state.mahasiswa.form.dataPribadi.tanggal_lahir
        },
        set (value) {
          this.$store.commit('setMahasiswaCreateForm', {key: 'dataPribadi.tanggal_lahir', value})
        }
      },
      bisaNext () {
        return this.nim && this.nama && this.alamat && this.noTelepon
      }
    },
    methods: {
      next () {
        if (!this.bisaNext) {
          return
        }

        this.$emit('inserted')
      },
      previous () {
        this.$emit('previous')
      }
    },
    components: {Datepicker}
  }
</script>