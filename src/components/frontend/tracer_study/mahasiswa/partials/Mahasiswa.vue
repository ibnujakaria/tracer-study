<template>
  <div class="mahasiswa">
    <div class="avatar" :class="{'avatar-loading': loading}">
      <img :src="mahasiswa.foto.foto_src" v-if="mahasiswa.foto">
      <img src="http://via.placeholder.com/350x350" v-else>
    </div>
    <div class="deskripsi">
      <h2 :class="{'row-loading': loading}">{{mahasiswa.nama}}</h2>
      <div>
        <p class="burem" :class="{'row-loading': loading}">{{mahasiswa.nim}}</p>
      </div>
      <p class="burem gede-ngarepe" :class="{'row-loading': loading}" v-if="mahasiswa.akademik">{{mahasiswa.akademik.prodi}}</p>
    </div>
    <div class="aksi">
      <button class="btn btn-default"><i class="fa fa-pencil"></i></button>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['mahasiswa', 'loading']
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

  .mahasiswa .row-loading, .avatar-loading {
    color: transparent;
    display: inline-block;
    margin-bottom: 2px;
    background: linear-gradient(90deg, 
      rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)
    );
    opacity: 0.3;
    border-radius: 2px;
    -webkit-animation: Gradient 2s ease infinite;
    -moz-animation: Gradient 2s ease infinite;
    animation: Gradient 2s ease infinite;
    background-size: 200% 100%;
  }

  .avatar-loading img {
    visibility: hidden;
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
</style>