<template>
  <div id="app">
    <navbar></navbar>
    <div class="container-fluid">
      <!-- <ol class="breadcrumb">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/tracer-study">Tracer Study</router-link></li>
        <li><router-link :to="'/tracer-study/detail/' + $route.params.nim">{{$route.params.nim}}</router-link></li>
      </ol> -->
      <div class="row">
        <div class="col-md-3">
          <div class="list-group">
            <a href="#/tracer-study" class="list-group-item">Cari Mahasiswa</a>
            <a href="#/tracer-study/create" class="list-group-item">Masukkan Data</a>
          </div>
        </div>
        <div class="col-md-9">
          <router-view></router-view>
        </div>
      </div>
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
