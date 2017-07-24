<template lang="html">
  <form class="form" @submit.prevent="submit">
    <div class="form-group">
      <label>Masukkan NRP</label>
      <input v-model="nim" class="form-control" type="text" name="nrp" placeholder="Masukkan nim">
    </div>
    <div class="text-right">
      <button class="btn btn-primary" type="submit">Lanjut</button>
    </div>
  </form>
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
