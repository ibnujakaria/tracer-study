<template>
  <div>
    <div class="loading-container">
      <form class="form" id="tracer-study">
        <div class="form-group">
          <label>Nim</label>
          <input class="form-control" type="text" placeholder="Nim" v-model="form.nim">
        </div>
        <div class="form-group">
          <label>Nama</label>
          <input class="form-control" type="text" placeholder="Nama" v-model="form.nama">
        </div>
        <div class="form-group">
          <label>Nomor Telepon</label>
          <input class="form-control" type="text" placeholder="Nomor Telepon" v-model="form.no_telepon">
        </div>
        <div class="form-group">
          <label>Alamat Rumah</label>
          <textarea class="form-control" type="text" placeholder="Alamat Rumah" v-model="form.alamat"></textarea>
        </div>
      </form>
      <div class="loading" :class="{loading: show}"></div>
    </div>
    <div style="position: absolute; right: 35px; bottom: 20px">
      <div class="btn-group">
        <button class="btn btn-default" @click="previous">Kembali</button>
        <button class="btn btn-primary" @click="insert">Submit</button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['form'],
    data () {
      return {
        loading: false,
        form: {nim: null, nama: null, alamat: null, no_telepon: null}
      }
    },
    methods: {
      insert () {
        this.$store.dispatch('insertMahasiswaPribadi', this.form).then(response => {
          if (response.status !== 200) {
            return
          }

          this.$emit('inserted')
        })
      },
      previous () {
        this.$emit('previous')
      }
    }
  }
</script>