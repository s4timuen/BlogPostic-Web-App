<template lang='pug'>
#home test home
</template>

<script lang='js'>
import store from '@/store/store';

export default {
  name: 'HomePage',
  components: {  },
  data: function () {
    return {
      apiWrapper: null
    }
  },
  mounted: function () {
    this.apiWrapper = store.getters.getApiWrapper;
  }
}
</script>

<style scoped lang='css'>
</style>
