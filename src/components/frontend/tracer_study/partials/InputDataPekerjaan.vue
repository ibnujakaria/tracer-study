<template>
  <div>
    <div>
      <h3>Pekerjaan</h3>
      <hr>
      <div class="alert alert-danger">
        <strong>Info</strong> <br>
        Ini belum dibikinkan API-nya
      </div>
      <div class="form-group">
        <label>Status Pekerjaan</label>
        <select class="form-control">
          <option value="null">Status Pekerjaan</option>
          <option value="instansi">Bekerja di Instansi/Perusahaan</option>
          <option value="pengusaha">Pengusaha</option>
          <option value="studi">Lanjut Studi (S2/S3)</option>
          <option value="belum-bekerja">Belum Bekerja</option>
        </select>
      </div>
      <div class="form-group">
        <label>Nama Perusahaan/Instansi</label>
        <input class="form-control" type="text" placeholder="Nama Perusahaan/Instansi">
      </div>
    </div>
    <div style="position: absolute; right: 35px; bottom: 20px">
      <div class="btn-group">
        <button class="btn btn-default" @click="previous">Kembali</button>
        <button class="btn btn-primary" @click="next">Lanjut</button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    methods: {
      next () {
        this.$emit('inserted')
      },
      previous () {
        this.$emit('previous')
      }
    }
  }
</script>