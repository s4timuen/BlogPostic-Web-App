<template lang='pug'>
#app
  Header
  router-view
  Footer
</template>

<script lang='js'>
import store from '@/store/store';

import Header from '@/views/components/header';
import Footer from '@/views/components/footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  mounted: function () {

    const cookies = document.cookie.split(';')
    cookies.forEach(cookie => {
      if(cookie.startsWith('jwt=')) {
        store.commit('setJwt', cookie.replace('jwt=', ''));
      }
    });
  }
}
</script>

<style lang='css'>
#app {
  --sky-blue: #89c2d9;
  --light-blue: #b1dae7;
  --columbia-blue: #c4e3ed;
  --alice-blue: #e6f3f7;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 5px;
  background-color: var(--alice-blue);
}
</style>
