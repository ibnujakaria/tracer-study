<template>
  <div>
    <div class="boxes-container">
      <h2>Daftar Mahasiswa</h2>
      <hr>
      <div class="filter-block">
        <div style="overflow: hidden">
          <h4 style="float: left">Filter Data</h4>
          <div class="btn-group" style="margin-bottom: 20px; float: right">
            <!-- <button class="btn btn-default"><i class="fa fa-print"></i> Print</button> -->
            <button class="btn btn-default" @click="exportSemuaMahasiswa" v-if="$store.getters.auth && $store.state.auth.role === 'admin'">
              <i class="fa fa-file-excel-o"></i> Export Data
            </button>
            <router-link to="/tracer-study/create" class="btn btn-primary" v-if="$store.getters.auth && $store.state.auth.role === 'admin'">
              <i class="fa fa-plus"></i> Tambah Data
            </router-link>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <input v-model="form.q" class="form-control" placeholder="Cari berdasarkan nama/nim">
          </div>
          <div class="col-md-4">
            <select class="form-control" v-model="form.prodi">
              <option :value="null">Semua Prodi</option>
              <option :value="prodi.slug" v-for="prodi of prodis" :key="prodi.id">{{ prodi.nama_prodi }}</option>
            </select>
          </div>
          <div class="col-md-4">
            <select class="form-control" v-model="form.angkatan_wisuda" style="width: 200px; margin-right: 20px; display: inline-block">
              <option :value="null">Semua Angkatan</option>
              <option :value="value" v-for="value of angkatan">{{value}}</option>
            </select>
            <button class="btn btn-primary" @click="firstLoadAgain()">Filter</button>
          </div>
        </div>
      </div>
      <div class="box no-padding" v-for="mahasiswa of mahasiswas" v-if="!loading && !firstLoad">
        <mahasiswa :mahasiswa="mahasiswa" @deleted="getListMahasiswa()"></mahasiswa>
      </div>
      <div class="box no-padding" v-if="loading && firstLoad" v-for="i of [1, 2, 3, 4]">
        <mahasiswa :mahasiswa="mahasiswaPlaceholder" :loading="true"></mahasiswa>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Mahasiswa from './partials/Mahasiswa'
  export default {
    data () {
      return {
        mahasiswas: [],
        currentPage: 1,
        lastPage: 1,
        total: 1,
        firstLoad: true,
        loading: true,
        form: {
          q: null,
          prodi: null,
          angkatan_wisuda: null
        },
        mahasiswaPlaceholder: {
          nim: '123456789101212312313',
          nama: '123123123124123122',
          foto: {},
          akademik: {prodi: 'Loading.........'}
        }
      }
    },
    computed: {
      angkatan () {
        let angkatan = []
        for (let i = 2018; i > 2000; i--) {
          angkatan.push(i)
        }

        return angkatan
      },
      prodis () {
        return this.$store.state.prodi.prodis
      }
    },
    mounted () {
      setTimeout(() => this.getListMahasiswa(), 1000)
    },
    methods: {
      firstLoadAgain () {
        this.firstLoad = true
        this.getListMahasiswa()
      },
      getListMahasiswa () {
        this.loading = true
        this.$store.dispatch('getMahasiswa', this.form).then(response => {
          this.currentPage = response.body.message.current_page
          this.lastPage = response.body.message.last_page
          this.total = response.body.message.total
          this.mahasiswas = response.body.message.data
          this.loading = false
          if (this.firstLoad) {
            this.firstLoad = false
          }
        })
      },
      exportSemuaMahasiswa () {
        this.$store.dispatch('exportSemuaMahasiswa')
      }
    },
    components: {Mahasiswa}
  }
</script>

<style type="text/css" scoped>
  .filter-block {
    background-color: rgba(0, 0, 0, 0.02);
    /*margin-bottom: 20px;*/
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.04);
    border-bottom: none;
  }
</style>