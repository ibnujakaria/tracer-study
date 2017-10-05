<template>
  <div>
    <h2>Login</h2>
    <ol class="breadcrumb">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="#">Login</router-link></li>
    </ol>
    <div class="panel panel-default">
      <div class="panel-body">
        <form @submit.prevent="register">
          <div class="form-group">
            <label>Email</label>
            <input class="form-control" type="email" name="email" placeholder="Masukkan email" v-model="form.email">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input class="form-control" type="password" placeholder="Masukkan password" v-model="form.password">
          </div>
          <div class="row">
            <div class="col-sm-6">
              Tidak punya akun? <a href="">Register</a>
            </div>
            <div class="col-sm-6">
              <div class="text-right">
                <button class="btn btn-primary" type="submit">Login</button>
              </div>
            </div>
          </div>
        </form>
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
        }
      }
    },
    methods: {
      register () {
        this.$store.dispatch('LOGIN', this.form)
      }
    }
  }
</script>
