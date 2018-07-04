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
        <div v-for="krisar of listKrisar">
          <div class="panel panel-default loading-container">
            <div class="panel-body">
              <div class="row">
                <div class="col-md-1">
                  <img :src="krisar.mahasiswa.foto.foto_src" v-if="krisar.mahasiswa.foto">
                  <img src="http://via.placeholder.com/350x350" v-else>
                </div>
                <div class="col-md-11">
                  <h4>
                    {{ krisar.mahasiswa.nama }} 
                    <small class="text-muted">{{ krisar.mahasiswa.nim }}</small>
                  </h4>
                  <small style="float: right" class="text-muted">{{ krisar.created_at_for_humans }}</small>
                  <div>
                    <p>{{ krisar.isi_krisar }}</p>
                  </div>
                </div>
              </div>
            </div>
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
      listKrisar: []
    }
  },
  mounted () {
    if (this.$store.state.auth.role !== 'admin') {
      this.$router.push('/404')
    }

    this.getSemuaKritikDanSaran()
  },
  methods: {
    async getSemuaKritikDanSaran () {
      let token = this.$store.getters.token

      try {
        let { data } = await this.$http.get(`mahasiswa/krisar?api_token=${token}`)
        this.listKrisar = data.message
      } catch (error) {
        alert('Oops. Something error occured')
      }
    }
  }
}
</script>

<style scoped>
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
  }
</style>