<template>
  <div id="app">
    <NavigationBar appTitle="AquaPlan"></NavigationBar>
    <router-view id="router-view" />
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import NavigationBar from "./components/NaviagationBar.vue";

  export default Vue.extend({
    name: "App",
    components: {
      NavigationBar,
    },
  });
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #router-view {
    padding: 10px;
  }
</style>
