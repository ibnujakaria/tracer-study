<template lang="html">
  <div>
    <div class="panel panel-default">
      <div class="panel-body" v-if="student">
        <h3>{{student.nama}} <small>{{student.nim}}</small> <button class="btn btn-small btn-default"><i class="fa fa-pencil"></i></button></h3>
        <hr>
        <div class="row">
          <div class="col-md-2">
            <img class="avatar" :src="student.avatar" :alt="student.nama">
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
                <td>{{student.fakultas}}</td>
              </tr>
              <tr>
                <th>Program Studi</th>
                <td>{{student.prodi}}</td>
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
                <td>{{student.ipk}}</td>
              </tr>
              <tr>
                <th>Lama Studi</th>
                <td>{{student.lama_studi}}</td>
              </tr>
              <tr>
                <th>Tanggal Wisuda</th>
                <td>{{student.tanggal_wisuda}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel panel-default">
          <div class="panel-body">
            <h3>Riwayat Pekerjaan</h3>
            <hr>
            <table class="table">
              <tr>
                <th>Pekerjaan</th>
                <td>Aksamedia</td>
              </tr>
              <tr>
                <th>Posisi</th>
                <td>Backend Programmer</td>
              </tr>
              <tr>
                <th>Lama Bekerja</th>
                <td>2014-sekarang</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      students: [
        {
          nim: 140411100069,
          nama: 'Nurul Huda',
          tanggal_lahir: '05 September 1996',
          asal: 'Bangkalan',
          avatar: 'https://dti2gc0g5oj0i.cloudfront.net/production/dmj-recruitment/images/placeholder-user-2fd431be4f65604f4d5638411ab25c99.png',
          fakultas: 'Fakultas Teknik',
          prodi: 'Teknik Informatika',
          alamat: 'Perumahan Mentari Bumi Sejahtera, Blok AQ-35 RT/RW 03/05, Kali Pecabean, Kecamatan Candi, Sidoarjo',
          email: '140411100069@student.runojoyo.ac.id',
          ipk: 37.5,
          lama_studi: '7 Semester',
          tanggal_wisuda: '8 Agustus 2018'
        }
      ]
    }
  },
  mounted () {
  },
  computed: {
    student () {
      for (let student of this.students) {
        if (student.nim.toString() === this.$route.params.nim) return student
      }

      return null
    }
  }
}
</script>

<style lang="css" scoped>
  img {
    width: 100%
  }
</style>
