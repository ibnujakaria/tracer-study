<template>
  <p>Logging out..</p>
</template>

<script type="text/javascript">
  export default {
    mounted () {
      this.$store.commit('LOGOUT')
      this.$router.push('/auth/login')
    }
  }
</script>