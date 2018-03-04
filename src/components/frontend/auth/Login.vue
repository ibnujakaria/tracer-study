<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10 col-sm-offset-1">
        <h2>Login</h2>
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="#">Login</router-link></li>
        </ol>
        <div class="panel panel-default loading-container">
          <div class="panel-body">
            <div class="alert alert-danger" v-if="error">
              <strong>Login gagal</strong> <br>
              {{error}}
            </div>
            <form @submit.prevent="login" v-if="!loadingGetMahasiswa">
              <div class="form-group">
                <label>Email atau Nim</label>
                <input class="form-control" name="email" placeholder="Masukkan email atau nim" v-model="form.email">
              </div>
              <div class="form-group">
                <label>Password</label>
                <input class="form-control" type="password" placeholder="Masukkan password" v-model="form.password">
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <!-- Tidak punya akun? <router-link to="/auth/register">Register</router-link> -->
                </div>
                <div class="col-sm-6">
                  <div class="text-right">
                    <button class="btn btn-primary" type="submit">Login</button>
                  </div>
                </div>
              </div>
            </form>
            <div v-else>
              <p>Tunggu sebentar...</p>
            </div>
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
          password: null
        },
        loading: false,
        error: null,
        loadingGetMahasiswa: false
      }
    },
    methods: {
      login () {
        this.loadingStart()
        this.$store.dispatch('LOGIN', this.form).then(result => {
          if (result.status === 200) {
            if (this.$store.state.auth.role === 'mahasiswa') {
              this.loadingGetMahasiswa = true
            }

            this.$router.push('/')
            this.form = {email: null, password: null}
          } else if (result.status === 401) {
            this.error = 'Password atau email salah'
          }

          this.loadingStop()
        })
      },
      loadingStart () {
        this.loading = true
        this.error = null
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
