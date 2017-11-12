<template>
  <div>
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
</template>

<script type="text/javascript">
  export default {
    props: ['form']
  }
</script>