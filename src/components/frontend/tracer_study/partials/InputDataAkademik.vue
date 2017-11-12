<template>
  <div>
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
</template>

<script type="text/javascript">
  export default {
    props: ['form']
  }
</script>