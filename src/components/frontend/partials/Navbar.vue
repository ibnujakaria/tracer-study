<template lang="html">
  <div>
    <nav class="navbar navbar-inverse" style="border-radius: 0">
    <div class="container">
      <div class="row">
        <div class="col-sm-10 col-sm-offset-1">
          <div class="navbar-header">
            <router-link class="navbar-brand" to="/">Tracer Study</router-link>
          </div>
          <ul class="nav navbar-nav">
            <li><router-link to="/tracer-study">Cari Mahasiswa</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li v-if="!$store.getters.auth">
              <router-link to="/auth/login"><span class="glyphicon glyphicon-log-in"></span> Login</router-link>
            </li>
            <template v-else>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  <span class="fa fa-plus"></span>
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li><router-link to="/tracer-study/create">Tambah Mahasiswa</router-link></li>
                  <li><router-link to="/tracer-study/import-excel">Import Mahasiswa (Excel)</router-link></li>
                </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">{{$store.getters.user.username}}
                <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><router-link to="/auth/logout">Log out</router-link></li>
                </ul>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </nav> 
</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
