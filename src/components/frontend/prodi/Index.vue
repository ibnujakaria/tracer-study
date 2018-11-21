<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10 col-sm-offset-1">
        <h2>Prodi</h2>
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="#">Prodi</router-link></li>
        </ol>
        <div class="panel panel-default loading-container">
          <div class="panel-body">
            <div style="overflow: hidden">
              <div class="btn-group" style="margin-bottom: 20px; float: right">
                <router-link to="/prodi/create" class="btn btn-primary">
                  <i class="fa fa-plus"></i> Tambah Prodi
                </router-link>
              </div>
            </div>
            <table class="table table-row">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Prodi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(prodi, key) of prodis" :key="prodi.id">
                  <td>{{ key + 1 }}</td>
                  <td>{{ prodi.nama_prodi }}</td>
                </tr>

                <tr v-if="prodis.length < 1">
                  <td class="text-center" colspan="2">
                    Tidak ada prodi.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="loading" :class="{show: loading}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        loading: false,
        error: null,
        success: null
      }
    },
    computed: {
      prodis () {
        return this.$store.state.prodi.prodis
      }
    },
    mounted () {
      this.getProdi()
    },
    methods: {
      getProdi () {
        this.loadingStart()
        this.$store.dispatch('getProdi', this.form).then(response => {
          this.loadingStop()
        })
      },
      loadingStart () {
        this.loading = true
        this.error = null
        this.success = null
      },
      loadingStop () {
        this.loading = false
        window.scroll({
          top: 0,
          behavior: 'smooth'
        })
      }
    }
  }
</script>
