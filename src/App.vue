<template>
  <div id="app">
    <main-header v-if="loginOk"></main-header>
    <router-view v-on:login="toggleOn"></router-view>
  </div>
</template>

<script>
import router from './routes'
import MainHeader from './components/MainHeader.vue'

export default {
  data: function() {
    return {
      loginOk: false
    }
  },
  methods: {
    toggleOn: function() {
      this.loginOk = true;
    },
  },
  router,
  components: {
    'MainHeader' : MainHeader,
  }
}
</script>

<style global>
  @import '../src/assets/css/reset.css';

  html, body, #app {
        width: 100%;
        height: 100%;
  }
</style>