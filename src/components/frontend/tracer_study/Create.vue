<template lang="html">
  <div>
    <div class="row">
      <div class="col-md-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Data Mahasiswa</h4>
          </div>
          <div class="panel-body">
            <form class="form" id="tracer-study">
              <div class="form-group">
                <label>Nim</label>
                <input class="form-control" type="text" placeholder="Nim" v-model="form.nim">
              </div>
              <div class="form-group">
                <label>Nama</label>
                <input class="form-control" type="text" placeholder="Nama" v-model="form.nama">
              </div>
              <div class="form-group">
                <label>Nomor Telepon</label>
                <input class="form-control" type="text" placeholder="Nomor Telepon">
              </div>
              <div class="form-group">
                <label>Alamat Rumah</label>
                <textarea class="form-control" type="text" placeholder="Alamat Rumah"></textarea>
              </div>
              <div class="form-group">
                <label>Nomor Telepon</label>
                <input class="form-control" type="text" placeholder="Nomor Telepon">
              </div>
            </form>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Data Pekerjaan</h4>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label>Status Pekerjaan</label>
              <select class="form-control" v-model="form.status_perkejaan" form="tracer-study">
                <option value="null">Status Pekerjaan</option>
                <option value="instansi">Bekerja di Instansi/Perusahaan</option>
                <option value="pengusaha">Pengusaha</option>
                <option value="studi">Lanjut Studi (S2/S3)</option>
                <option value="belum-bekerja">Belum Bekerja</option>
              </select>
            </div>
            <div class="form-group" v-if="form.status_perkejaan === 'instansi'">
              <label>Nama Perusahaan/Instansi</label>
              <input class="form-control" type="text" placeholder="Nama Perusahaan/Instansi">
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Data Akademik</h4>
          </div>
          <div class="panel-body">
            <div class="form-group">
              <label>Program Studi</label>
              <select class="form-control" form="tracer-study">
                <option value="null">Pilih Program Studi</option>
                <option value="teknik-informatika">Teknik Informatika</option>
                <option value="teknik-industri">Teknik Industri</option>
                <option value="teknik-elektro">Teknik Elektro</option>
              </select>
            </div>
            <div class="form-group">
              <label>Angkatan Wisuda</label>
              <select class="form-control" form="tracer-study">
                <option value="null">Angkatan</option>
              </select>
            </div>
            <div class="form-group">
              <label>Tanggal Lulus</label>
              <input class="form-control" type="text" placeholder="Tanggal Lulus" form="tracer-study">
            </div>
            <div class="form-group">
              <label>Nilai IPK</label>
              <input class="form-control" type="number" step="0.01" min="0" max="4" placeholder="Nilai IPK" form="tracer-study">
            </div>
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
        form: {
          nim: this.$route.query.nim || null,
          status_perkejaan: 'null'
        }
      }
    }
  }
</script>

<style lang="css" scoped>
  .control-label {
    text-align: left;
  }
</style>
