<template>
  <div>
    <div class="loading-container">
      <h3>Akademik</h3>
      <hr>
      <div class="form-group">
        <label>Program Studi</label>
        <select class="form-control" v-model="prodi">
          <option value="null">Pilih Program Studi</option>
          <option :value="p.slug" v-for="p of prodis" :key="p.id">{{ p.nama_prodi }}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Angkatan Wisuda</label>
        <select class="form-control" v-model="angkatanWisuda">
          <option value="null">Angkatan</option>
          <option v-for="year of years">{{year}}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Tanggal Lulus</label>
        <!-- <pre>{{tanggalLulus}}</pre> -->
        <!-- <input class="form-control" type="text" placeholder="Tanggal Lulus" v-model="tanggalLulus"> -->
        <datepicker input-class="form-control" placeholder="Tanggal Lahir" v-model="tanggalLulus"></datepicker>
      </div>
      <div class="form-group">
        <label>Nilai IPK</label>
        <input class="form-control" type="number" step="0.01" min="0" max="4" placeholder="Nilai IPK" v-model="nilaiIpk">
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
    computed: {
      prodi: {
        get () {
          return this.$store.state.mahasiswa.form.dataAkademik.prodi
        },
        set (value) {
          this.$store.commit('setMahasiswaCreateForm', {key: 'dataAkademik.prodi', value})
        }
      },
      angkatanWisuda: {
        get () {
          return this.$store.state.mahasiswa.form.dataAkademik.angkatan_wisuda
        },
        set (value) {
          this.$store.commit('setMahasiswaCreateForm', {key: 'dataAkademik.angkatan_wisuda', value})
        }
      },
      tanggalLulus: {
        get () {
          return this.$store.state.mahasiswa.form.dataAkademik.tanggal_lulus
        },
        set (value) {
          this.$store.commit('setMahasiswaCreateForm', {key: 'dataAkademik.tanggal_lulus', value})
        }
      },
      nilaiIpk: {
        get () {
          return this.$store.state.mahasiswa.form.dataAkademik.nilai_ipk
        },
        set (value) {
          this.$store.commit('setMahasiswaCreateForm', {key: 'dataAkademik.nilai_ipk', value})
        }
      },
      prodis () {
        return this.$store.state.prodi.prodis
      },
      years () {
        let years = []

        for (let i = 2000; i <= 2018; i++) {
          years.push(i)
        }

        return years.reverse()
      },
      bisaNext () {
        return this.prodi && this.angkatanWisuda && this.tanggalLulus && this.nilaiIpk
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