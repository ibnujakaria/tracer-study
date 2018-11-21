<template>
  <div>
    <div class="text-center">
      <h4>
        PROFIL ALUMNI <br>
        FAKULTAS TEKNIK <br>
        UNIVERSITAS TRUNOJOYO MADURA <br>
        PERIODE .............................. <br>
        TAHUN {{ year }}
      </h4>
    </div>
    <div v-if="!student">
      Loading...
    </div>
    <div v-else>
      <table>
        <tr>
          <td colspan="2">A. Data Pribadi</td>
        </tr>
        <tr>
          <td>NAMA</td>
          <td>{{ student.nama }}</td>
        </tr>
        <tr>
          <td>NIM</td>
          <td>{{ student.nim }}</td>
        </tr>
        <tr>
          <td>FAKULTAS</td>
          <td>Fakultas Teknik</td>
        </tr>
        <tr>
          <td>PROGRAM STUDI</td>
          <td style="text-transform: uppercase">{{ student.akademik ? student.akademik.prodi : '' }}</td>
        </tr>
        <tr>
          <td>TEMPAT, TANGGAL LAHIR</td>
          <td>{{ student.tempat_lahir }}, {{ student.tanggal_lahir }}</td>
        </tr>
        <tr>
          <td>NO TELEPON</td>
          <td>{{ student.no_telepon }}</td>
        </tr>
        <tr>
          <td>EMAIL</td>
          <td>{{ student.email }}</td>
        </tr>
        <tr>
          <td colspan="2">B. DATA AKADEMIK</td>
        </tr>
        <tr>
          <td>IPK</td>
          <td>{{ student.akademik ? student.akademik.nilai_ipk : '' }}</td>
        </tr>
        <tr>
          <td>ANGKATAN WISUDA</td>
          <td>{{ student.akademik ? student.akademik.angkatan_wisuda : '' }}</td>
        </tr>
        <tr>
          <td>TANGGAL LULUS</td>
          <td>{{ student.akademik ? student.akademik.tanggal_lulus : '' }}</td>
        </tr>
        <tr>
          <td style="vertical-align: top">PENGALAMAN KERJA</td>
          <td v-html="pekerjaan"></td>
        </tr>
        <tr>
          <td>Foto</td>
          <td>
            <img class="avatar" :src="student.foto.foto_src" :alt="student.nama" v-if="student.foto">
            <img class="avatar" src="http://via.placeholder.com/350x350" v-else>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      student: null
    }
  },
  computed: {
    year () {
      return new Date().getFullYear()
    },
    pekerjaan () {
      if (this.student) {
        let pekerjaan = this.student.pekerjaan
        let statusPekerjaan = pekerjaan.status_pekerjaan

        switch (statusPekerjaan) {
          case 'pns':
            return `PNS, jabatan ${pekerjaan.keterangan.jabatan}`
          case 'tni':
            return `TNI, jabatan ${pekerjaan.keterangan.jabatan}`
          case 'instansi':
            return `Bekerja di ${pekerjaan.keterangan.perusahaan} sebagai ${pekerjaan.keterangan.sebagai}`
          case 'pengusaha':
            return `Pengusaha di sektor ${pekerjaan.keterangan.sektor_usaha} <br> Nama usaha: ${pekerjaan.keterangan.nama_usaha}`
          case 'lanjut-studi':
            return `Lanjut studi ${pekerjaan.keterangan.jenjang.toUpperCase()} di ${pekerjaan.keterangan.universitas} prodi ${pekerjaan.keterangan.prodi}`
          case 'belum-bekerja':
            return 'Belum bekerja'
          default:
            return 'Tidak ada'
        }
      }

      return 'Tidak ada'
    }
  },
  mounted () {
    this.getMahasiswa()
  },
  methods: {
    getMahasiswa () {
      this.loading = true
      this.$store.dispatch('cariMahasiswa', this.$route.params.nim).then(response => {
        if (response.status === 200) {
          this.student = response.body.message
          this.loading = false

          setTimeout(() => {
            window.print()
          }, 1000)
        }
      })
    }
  }
  // components: {DetailPlaceholder, DetailPekerjaan}
}
</script>

<style type="text/css">
  table {
    /*text-transform: uppercase;*/
  }

  td {
    padding: 5px;
  }

  table tr td:first-child {
    padding-right: 35px;
    font-weight: bolder;
    vertical-align: top;
  }

  img {
    width: 150px;
    height: 200px;
    margin-bottom: 30px;
    object-fit: contain;
    object-position: left top;
  }
</style>