<template lang="html">
  <div>
    <detail-placeholder v-if="loading"></detail-placeholder>
    <div v-else>
      <div class="panel panel-default">
        <div class="panel-body" v-if="student">
          <div style="overflow: hidden">
            <h3 style="float: left">
              {{student.nama}} <small>{{student.nim}}</small> 
              <router-link :to="{name: 'tracer-study.mahasiswa.edit', params: {nim: $route.params.nim}}" class="btn btn-small btn-default">
                <i class="fa fa-pencil"></i>
              </router-link>
            </h3>
            <div style="float: right">
              <div class="btn-group">
                <button class="btn btn-default"><i class="fa fa-file-pdf-o"></i> Print</button>
                <button class="btn btn-default"><i class="fa fa-file-excel-o"></i> Import Excel</button>
              </div>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-md-2">
              <img class="avatar" :src="student.foto.foto_src" :alt="student.nama" v-if="student.foto">
              <img class="avatar" src="http://via.placeholder.com/350x350" v-else>
            </div>
            <div class="col-md-10">
              <table class="table">
                <tr>
                  <th>Nim</th>
                  <td>{{student.nim}}</td>
                </tr>
                <tr>
                  <th>Nama</th>
                  <td>{{student.nama}}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td><a :href="'mailto:' + student.email">{{student.email}}</a></td>
                </tr>
                <tr>
                  <th>Fakultas</th>
                  <td>Fakultas Teknik</td>
                </tr>
                <tr>
                  <th>Program Studi</th>
                  <td>{{student.akademik.prodi}}</td>
                </tr>
                <tr>
                  <th>Tempat Tanggal Lahir</th>
                  <td>{{student.tempat_lahir}}, {{student.tanggal_lahir}}</td>
                </tr>
                <tr>
                  <th>Alamat</th>
                  <td>{{student.alamat}}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="panel-body" v-else>
          <h3>Data tidak ditemukan</h3>
          <router-link class="btn btn-primary" :to="'/tracer-study/create?nim=' + $route.params.nim">Masukkan Data</router-link>
        </div>
      </div>
      <div class="row" v-if="student">
        <div class="col-md-6">
          <div class="panel panel-default">
            <div class="panel-body">
              <h3>Data Akademik</h3>
              <hr>
              <table class="table">
                <tr>
                  <th>IPK</th>
                  <td>{{student.akademik.nilai_ipk}}</td>
                </tr>
                <tr>
                  <th>Tanggal Lulus</th>
                  <td>{{student.akademik.tanggal_lulus}}</td>
                </tr>
                <tr>
                  <th>Angkatan Wisuda</th>
                  <td>{{student.akademik.angkatan_wisuda}}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <detail-pekerjaan :student="student"></detail-pekerjaan>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailPlaceholder from './partials/DetailPlaceholder'
import DetailPekerjaan from './partials/DetailPekerjaan'

export default {
  data () {
    return {
      loading: true,
      student: null
    }
  },
  mounted () {
    this.getMahasiswa()
  },
  methods: {
    getMahasiswa () {
      this.loading = true
      this.$store.dispatch('cariMahasiswa', this.$route.params.nim).then(response => {
        if (response.status === 200) {
          this.student = response.body.message
          this.loading = false
        }
      })
    }
  },
  components: {DetailPlaceholder, DetailPekerjaan}
}
</script>

<style lang="css" scoped>
  img {
    width: 100%
  }

  tr {
  }

  tr td {
    padding: 5px;
  }
</style>
