<template>
  <div>
    <div class="box text-center" v-if="rows.length">
      <p>
        <i class="fa fa-check" style="color: green; font-size: 50pt"></i>
      </p>
      <p style="font-size: 20pt">
        {{rows.length}} Mahasiswa berhasil ditambahkan
      </p>
      <button class="btn btn-default" @click="reset">Kembali</button>
    </div>
    <div class="upload-container box" :class="{kesorot, 'upload-ijo': loading}" @dragenter="onDragEnter" @dragleave="onDragLeave" @dragover.prevent="onDragover" @drop.prevent="onDropped" v-else>
      <div class="upload-inner">
        <div class="upload-center">
          <template v-if="loading">
            <i class="fa fa-upload" style="font-size: 50pt"></i>
            <p class="gede">Mengunggah..</p>
          </template>
          <template v-else>
            <p class="gede">Geser file excel di sini</p>
            <p>atau</p>
            <div>
              <input type="file" style="display: none" ref="input-el">
              <button class="btn btn-default" @click="browseFile">Pilih File</button>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        kesorot: false,
        loading: false,
        rows: []
      }
    },
    methods: {
      onDragover () {
        if (!this.kesorot) {
          this.kesorot = true
        }
      },
      onDropped (event) {
        this.kesorot = false

        this.updloadData(event.dataTransfer.files[0])
      },
      onDragEnter () {
        this.kesorot = true
      },
      onDragLeave () {
        this.kesorot = false
      },
      browseFile () {
        this.$refs['input-el'].click()
      },
      readFile () {
        let file = this.$refs['input-el'].files[0]
        let reader = new FileReader()

        reader.onload = () => {
          this.updloadData(reader.result)
        }

        reader.readAsDataURL(file)
      },
      updloadData (file) {
        let data = new FormData()
        data.append('mahasiswa', file)

        this.loading = true
        this.$http.post('mahasiswa/import-excel?api_token=' + this.$store.getters.token, data).then(response => {
          this.loading = false
          this.rows = response.body.rows
        }, response => {
          this.loading = false
        })
      },
      reset () {
        this.kesorot = false
        this.loading = false
        this.rows = []
      }
    }
  }
</script>

<style type="text/css" scoped>
  .upload-container {
    text-align: center;
    transition: background-color 0.5s;
  }

  .upload-inner {
    border-style: dashed;
    border-width: 5px;
    border-color: rgba(0, 0, 0, 0.1);
    height: 450px;
    color: rgba(0, 0, 0, 0.3);
    position: relative;
    transition: all 0.5s;
  }

  .upload-center {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }

  .upload-center .gede {
    font-size: 20pt;
  }

  .upload-container.kesorot {
    background-color: rgba(0, 0, 255, 0.5);
  }

  .upload-container.kesorot .upload-inner {
    color: white;
  }

  .upload-container.upload-ijo .upload-inner {
    border-color: rgba(0, 200, 0, 0.5);
  }
</style>