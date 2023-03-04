<template lang='pug'>
#app
  Header
  router-view
  Footer
</template>

<script lang='js'>
import Header from '@/views/components/header';
import Footer from '@/views/components/footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style lang='css'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
