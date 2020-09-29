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

html,
body {
  height: 100%;
  background-color: #f9fafd;
}

h3 {
  text-align: left;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #6c757d;
  text-align: left;
}
</style>
