<template lang="html">
  <div>
    <detail-placeholder v-if="loading"></detail-placeholder>
    <div v-else>
      <div class="panel panel-default">
        <div class="panel-body" v-if="student">
          <h3>{{student.nama}} <small>{{student.nim}}</small> <button class="btn btn-small btn-default"><i class="fa fa-pencil"></i></button></h3>
          <hr>
          <div class="row">
            <div class="col-md-2">
              <img class="avatar" :src="student.foto.foto_src" :alt="student.nama">
            </div>
            <div class="col-md-10">
              <table class="table">
                <tr>
                  <th>Nama</th>
                  <td>{{student.nama}}</td>
                </tr>
                <tr>
                  <th>Nim</th>
                  <td>{{student.nim}}</td>
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
                  <td>{{student.asal}}, {{student.tanggal_lahir}}</td>
                </tr>
                <tr>
                  <th>Alamat</th>
                  <td>{{student.alamat}}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td><a :href="'mailto:' + student.email">{{student.email}}</a></td>
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
                  <th>Lama Studi</th>
                  <td>-</td>
                </tr>
                <tr>
                  <th>Tanggal Wisuda</th>
                  <td>{{student.akademik.tanggal_lulus}}</td>
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
</style>
