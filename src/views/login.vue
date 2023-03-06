<template lang='pug'>
#home test login
</template>

<script lang='js'>
import store from '@/store/store';

export default {
  name: 'LoginPage',
  components: { },
  data: function () {
    return {  
        apiWrapper: null
      }
  },
  mounted: function () {
    this.apiWrapper = store.getters.getApiWrapper;
    // TODO: set user data & jwt for requests after login
    // TODO: set jwt to apiWrapper for requests 
   }
}
</script>

<style lang='css'>
</style>
