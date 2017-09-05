<template lang="html">
  <div>
    <ol class="breadcrumb">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="#">Tracer Study</router-link></li>
    </ol>
    <div class="panel panel-default">
      <div class="panel-body">
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
    </div>
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
