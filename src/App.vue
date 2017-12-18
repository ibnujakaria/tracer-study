<template>
  <div id="app">
    <navbar></navbar>
    <my-header v-if="$route.path === '/'"></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/frontend/partials/Navbar'
import Menubar from '@/components/frontend/partials/Menu'
import MyHeader from '@/components/frontend/partials/MyHeader'
import Snackbar from 'snackbar-js'

export default {
  name: 'app',
  mounted () {
    Snackbar.create().setStyle('center').setText('Selamat datang! :)').show()
  },
  components: {Navbar, Menubar, MyHeader}
}
</script>

<style>
  html, body {
    font-family: 'Roboto', sans-serif;
  }
  h1, h2, h3,  h4, h5, h6 {
    margin-top: 0;
  }

  .header-title p {
    font-size: 14px;
    color: #586069;
    -webkit-box-flex: 1;
    flex: 1 100%;
  }

  .loading-container {
    position: relative;
  }

  .loading {
    position: absolute;
    background-color: rgb(255, 255, 255);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    visibility: hidden;
    opacity: 0;
    transform-style: visibility opacity;
    transition-duration: 0.3s;
    z-index: 99;
  }

  .loading.show {
    visibility: visible;
    opacity: 0.5;
  }
</style>
