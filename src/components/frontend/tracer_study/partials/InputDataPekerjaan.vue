<template>
  <div>
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
</template>

<script type="text/javascript">
  export default {
    props: ['form']
  }
</script>