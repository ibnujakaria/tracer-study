<template>
  <div>
    <div>
      <h3>Pekerjaan</h3>
      <hr>
      <pre>{{$store.state.mahasiswa.form.dataPekerjaan}}</pre>
      <!-- <pre>{{selectedPekerjaan}}</pre> -->
      <div class="form-group">
        <label>Status Pekerjaan</label>
        <select @change="pekerjaanChanged" class="form-control" v-model="statusPekerjaan">
          <option value="null">Status Pekerjaan</option>
          <option :value="pekerjaan.key" v-for="pekerjaan of listPekerjaan">
            {{pekerjaan.value}}
          </option>
        </select>
      </div>
    </div>
    <template v-if="selectedPekerjaan">
      <div class="form-group" v-for="ket of selectedPekerjaan.keterangan">
        <label>{{ket.label}}</label>
        <input v-if="ket.type !== 'select'" class="form-control" type="text" :name="ket.key" :placeholder="ket.label" v-model="keterangan[ket.key]">
        <select class="form-control" v-else v-model="keterangan[ket.key]">
          <option :value="undefined">{{ket.label}}</option>
          <option :value="opt.key" v-for="opt of ket.options">{{opt.label}}</option>
        </select>
      </div>
    </template>
    <div style="position: absolute; right: 35px; bottom: 20px">
      <div class="btn-group">
        <button class="btn btn-default" @click="previous">Kembali</button>
        <button class="btn btn-primary" @click="next">Lanjut</button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    computed: {
      listPekerjaan () {
        return this.$store.state.mahasiswa.pekerjaan
      },
      selectedPekerjaan () {
        return this.$store.getters.getPekerjaanByKey(this.statusPekerjaan)
      },
      statusPekerjaan: {
        get () {
          return this.$store.state.mahasiswa.form.dataPekerjaan.status_pekerjaan
        },
        set (value) {
          this.$store.commit('setMahasiswaCreateForm', {key: 'dataPekerjaan.status_pekerjaan', value})
        }
      },
      keterangan: {
        get () {
          return this.$store.state.mahasiswa.form.dataPekerjaan.keterangan
        },
        set (value) {
          this.$store.commit('setMahasiswaCreateForm', {key: 'dataPekerjaan.keterangan', value})
        }
      }
    },
    methods: {
      pekerjaanChanged () {
        this.keterangan = {}
      },
      next () {
        this.$emit('inserted')
      },
      previous () {
        this.$emit('previous')
      }
    }
  }
</script>