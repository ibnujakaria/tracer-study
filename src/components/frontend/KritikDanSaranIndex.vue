<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10 col-sm-offset-1">
        <h2>Kritik dan Saran</h2>
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="#">Settings</router-link></li>
          <li><router-link to="#">Ganti Password</router-link></li>
        </ol>
        <div class="panel panel-default loading-container">
          <div class="panel-body">
            <div class="alert alert-danger" v-if="error">
              <strong>Gagal</strong> <br>
              {{error}}
            </div>
            <div class="alert alert-success" v-if="success">
              <strong>Sukses</strong> <br>
              {{success}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  mounted () {
    if (this.$store.state.auth.role !== 'admin') {
      this.$router.push('/404')
    }

    this.getSemuaKritikDanSaran()
  },
  methods: {
    getSemuaKritikDanSaran () {}
  }
}
</script>