<template>
  <div id="app">
    <header-app></header-app>
    <router-view></router-view>
    <footer-app></footer-app>
  </div>
</template>

<script>
import header from './components/header.vue';
import home from './components/home.vue';
import footer from './components/footer.vue';

export default {
  components:{
    'home': home,
    'header-app': header,
    'footer-app': footer
  }
}
</script>


<style>
#app {
  font-family: tahoma;
  overflow-x: hidden;
}

</style>
