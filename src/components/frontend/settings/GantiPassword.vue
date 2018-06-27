<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10 col-sm-offset-1">
        <h2>Ganti Password</h2>
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
            <form @submit.prevent="submit">
              <div class="form-group">
                <label>Password Lama</label>
                <input class="form-control" type="password" placeholder="Masukkan password lama anda" v-model="form.old_password">
              </div>
              <div class="form-group">
                <label>Password</label>
                <input class="form-control" type="password" placeholder="Masukkan password" v-model="form.new_password">
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <!-- Tidak punya akun? <router-link to="/auth/register">Register</router-link> -->
                </div>
                <div class="col-sm-6">
                  <div class="text-right">
                    <button class="btn btn-primary" type="submit">Ganti</button>
                  </div>
                </div>
              </div>
            </form>
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
        form: {
          email: null,
          new_password: null,
          old_password: null
        },
        loading: false,
        error: null,
        success: null
      }
    },
    methods: {
      submit () {
        this.loadingStart()
        this.$store.dispatch('changePassword', this.form).then(response => {
          if (response.status !== 200) {
            this.error = response.body.message
          } else {
            this.form = {
              email: null, new_password: null, old_password: null
            }
            this.success = 'Password berhasil diganti :)'
            this.$router.push({
              name: 'tracer-study.mahasiswa.edit',
              params: {
                nim: this.$store.getters.user.nim
              }
            })
          }
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
