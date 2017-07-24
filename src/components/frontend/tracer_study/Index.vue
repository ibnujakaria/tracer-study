<template lang="html">
  <div>
    <h2>Tracer Study</h2>
    <div class="panel panel-default">
      <div class="panel-body">
        <form class="form" @submit.prevent="submit">
          <div class="form-group">
            <label>Masukkan NRP</label>
            <input class="form-control" type="text" name="nrp" placeholder="Masukkan nim">
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
  methods: {
    submit () {
      alert('enjek')
    }
  }
}
</script>

<style lang="css">
</style>
