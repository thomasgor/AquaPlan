<template>
  <div id="app">
    <NavigationBar appTitle="AquaPlan" />
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <CostCalculator />
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  // import HelloWorld from "./components/HelloWorld.vue";
  import NavigationBar from "./components/NaviagationBar.vue";
  import CostCalculator from "./components/CostCalculator.vue";

  export default Vue.extend({
    name: "App",
    components: {
      // HelloWorld,
      NavigationBar,
      CostCalculator,
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
    /* margin-top: 60px; */
  }
</style>
