<template lang='pug'>
#home test login
</template>

<script lang='js'>
export default {
  name: 'LoginPage',
  components: {  },
  data: function () {
    return {  
        apiWrapper: null
      }
  },
  mounted: function () {
    this.apiWrapper = this.$store.getters.getApiWrapper;
   }
}
</script>

<style scoped lang='css'>
</style>
