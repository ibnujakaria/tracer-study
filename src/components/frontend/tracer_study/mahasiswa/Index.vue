<template>
  <div>
    <div class="boxes-container">
      <div class="box no-padding" v-for="mahasiswa of mahasiswas">
        <router-link :to="{name: 'tracer-study.detail', params: {nim: mahasiswa.nim}}" class="mahasiswa">
          <div class="avatar">
            <img :src="mahasiswa.foto.foto_src">
          </div>
          <div class="deskripsi">
            <h2>{{mahasiswa.nama}}</h2>
            <p class="burem">{{mahasiswa.nim}}</p>
            <p class="burem gede-ngarepe">{{mahasiswa.akademik.prodi}}</p>
          </div>
          <div class="aksi">
            <button class="btn btn-default"><i class="fa fa-pencil"></i></button>
          </div>
        </router-link>
        <!-- <pre>{{mahasiswa}}</pre> -->
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        mahasiswas: [],
        currentPage: 1,
        lastPage: 1,
        total: 1
      }
    },
    mounted () {
      this.getListMahasiswa()
    },
    methods: {
      getListMahasiswa () {
        this.$store.dispatch('getMahasiswa').then(response => {
          this.currentPage = response.body.message.current_page
          this.lastPage = response.body.message.last_page
          this.total = response.body.message.total
          this.mahasiswas = response.body.message.data
        })
      }
    }
  }
</script>

<style type="text/css" scoped>
  .mahasiswa {
    position: relative;
    height: 150px;
    padding: 20px;
    transition: all 0.3s;
    display: block;
  }

  .mahasiswa h2 {
    color: rgba(0, 0, 0, 0.8);
  }

  .mahasiswa .avatar {
    width: 100px;
    height: 100px;
    position: absolute;
  }

  .mahasiswa .avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
  }

  .mahasiswa .deskripsi {
    position: absolute;
    right: 20px;
    left: 150px;
  }

  .mahasiswa .aksi {
    position: absolute;
    right: 20px;
    opacity: 0;
    transition: all 0.3s;
  }

  .mahasiswa:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  .mahasiswa:hover .aksi {
    opacity: 1;
  }
</style>