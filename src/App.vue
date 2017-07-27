<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/frontend/partials/Navbar'
import Snackbar from 'snackbar-js'

export default {
  name: 'app',
  mounted () {
    Snackbar.create().setStyle('center').setText('Selamat datang! :)').show()
  },
  components: {Navbar}
}
</script>

<style>
</style>
