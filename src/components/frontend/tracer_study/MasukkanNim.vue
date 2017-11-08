<template lang="html">
  <div>
    <div class="title-header">
      <h3>Cari Mahasiswa</h3>
      <p>Lihat data studi mahasiswa dengan memasukkan nimnya.</p>
    </div>
    <hr>
    <form class="form" @submit.prevent="submit">
      <div class="form-group">
        <label>Masukkan Nim</label>
        <input v-model="nim" class="form-control" type="text" name="nrp" placeholder="Masukkan nim" autofocus>
      </div>
      <div class="text-right">
        <button class="btn btn-primary" type="submit">Lanjut</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nim: null
    }
  },
  methods: {
    submit () {
      this.$router.push({
        name: 'tracer-study.detail',
        params: {
          nim: this.nim
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
