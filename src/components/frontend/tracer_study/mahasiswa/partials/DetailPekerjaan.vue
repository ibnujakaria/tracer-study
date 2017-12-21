<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-body">
        <h3>Riwayat Pekerjaan</h3>
        <hr>
        <table class="table">
          <tr>
            <th>Pekerjaan</th>
            <td>{{pekerjaanPlaceholder.value}}</td>
          </tr>
          <tr v-for="properti of pekerjaanPlaceholder.keterangan">
            <th>{{properti.label}}</th>
            <td>{{student.pekerjaan.keterangan[properti.key]}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['student'],
    computed: {
      pekerjaanPlaceholder () {
        return this.$store.getters.getPekerjaanByKey(this.student.pekerjaan.status_pekerjaan)
      }
    }
  }
</script>