<template lang='pug'>
#app
  Header
  router-view
  Footer
</template>

<script lang='js'>
import store from '@/store/store';
import router from '@/router/router';

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

    cookies.forEach(async cookie => {
      if(cookie.startsWith('jwt=')) {

        const jwt = cookie.replace('jwt=', '');
        store.getters.getApiWrapper.setJwt(jwt);
        const res = await store.getters.getApiWrapper.getMe();

        if (res.status === 'error') {
          store.commit('setJwt', '');
          router.push({ path: '/login' });
        }
        if(res.status === 'success') {
          store.commit('setJwt', jwt);
          store.commit('setUser', res.data.data);
        }
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
