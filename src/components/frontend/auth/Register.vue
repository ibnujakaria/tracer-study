<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10 col-sm-offset-1">
        <h2>Register</h2>
        <ol class="breadcrumb">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="#">Register</router-link></li>
        </ol>
        <div class="panel panel-default">
          <div class="panel-body">
            <form @submit.prevent="register">
              <div class="form-group">
                <label>Username</label>
                <input type="text" name="username" v-model="form.username" placeholder="Username" class="form-control">
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" v-model="form.email" placeholder="Email" class="form-control">
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="form.password" placeholder="Masukkan password" class="form-control">
              </div>
              <!-- <div class="form-group">
                <label>Password Konfirmasi</label>
                <input type="password" placeholder="Tulis ulang password" class="form-control">
              </div> -->
              <div class="row">
                <div class="col-sm-6">
                  Sudah punya akun? <router-link to="/auth/login">Login</router-link>
                </div>
                <div class="col-sm-6">
                  <div class="text-right">
                    <button class="btn btn-primary">Register</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        form: {username: null, email: null, password: null}
      }
    },
    methods: {
      register () {
        this.$http.post('register', this.form).then(response => {
          console.log(response)
          if (response.body.success) {
            return this.$router.push('/auth/login')
          }

          alert('gagal')
        })
      }
    }
  }
</script>
