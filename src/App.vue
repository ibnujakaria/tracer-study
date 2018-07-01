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
  body {
    background-color: rgb(240, 240, 240);
  }

  html, body {
    font-family: 'Roboto', sans-serif;
    padding: 0px;
    margin: 0px;
  }

  h1, h2, h3,  h4, h5, h6 {
    margin-top: 0;
  }

  .burem {
    color: rgba(0, 0, 0, 0.5);
  }

  .gede-kabeh {
    text-transform: uppercase;
  }

  .gede-ngarepe {
    text-transform: capitalize;
  }

  .box {
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    padding: 10px;
  }

  .boxes-container .box {
    border-radius: 0px;
  }

  .boxes-container .box:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .boxes-container .box:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
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

  .no-padding {
    padding: 0px !important;
  }
</style>
