<template>
  <div class="mahasiswa">
    <div class="avatar" :class="{'avatar-loading': loading}">
      <router-link :to="{name: 'tracer-study.detail', params: {nim: mahasiswa.nim}}">
        <img :src="mahasiswa.foto.foto_src" v-if="mahasiswa.foto">
        <img src="http://via.placeholder.com/350x350" v-else>
      </router-link>
    </div>
    <div class="deskripsi">
      <h2 :class="{'row-loading': loading}">
        <router-link :class="{'row-loading': loading}" :to="{name: 'tracer-study.detail', params: {nim: mahasiswa.nim}}">
          {{ mahasiswa.nama }}
        </router-link>
      </h2>
      <div>
        <p class="burem" :class="{'row-loading': loading}">{{mahasiswa.nim}}</p>
      </div>
      <p class="burem gede-ngarepe" :class="{'row-loading': loading}" v-if="mahasiswa.akademik">{{mahasiswa.akademik.prodi}} - Lulus <span style="text-transform: lowercase">di tahun {{mahasiswa.akademik.angkatan_wisuda}}</span></p>
    </div>
    <div class="aksi" v-if="canEdit || canDelete">
      <div class="dropdown">
        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <!-- Dropdown -->
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li>
            <router-link :to="{name: 'tracer-study.mahasiswa.edit', params: {nim: mahasiswa.nim}}">
              Edit
            </router-link>
          </li>
          <li v-if="canDelete">
            <a href="javascript:void(0)" @click="openDeleteModal()">Delete</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['mahasiswa', 'loading'],
    computed: {
      canEdit () {
        if (this.$store.getters.auth) {
          if (this.$store.state.auth.role === 'mahasiswa') {
            return this.$store.getters.user.nim === this.mahasiswa.nim
          }

          return true
        }

        return false
      },
      canDelete () {
        return this.$store.getters.auth && this.$store.state.auth.role === 'admin'
      }
    },
    methods: {
      openDeleteModal () {
        if (confirm('Apakah anda yakin akan menghapus mahasiswa ini?')) {
          this.deleteMahasiswa()
        }
      },
      async deleteMahasiswa () {
        this.$store.dispatch('deleteMahasiswa', this.mahasiswa).then(r => {
          this.$emit('deleted')
        }, r => {
          this.$emit('deleted')
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
    object-fit: contain;
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
    color: transparent !important;
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