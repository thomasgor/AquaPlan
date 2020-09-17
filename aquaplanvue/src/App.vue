<template>
  <div id="app">
    <navigation-bar appTitle="Thomas is sooo cool"></navigation-bar>

    <img alt="Vue logo" src="./assets/logo.png" />

    <HelloWorld msg="Welcome to Your Vue.js App" />

    <cost-calculator msg="CostCalculation easy" subTitle="this is an subtitle" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import CostCalculator from "./components/CostCalculator";
import NavigationBar from "./components/navigationBar/NavigationBar";

export default {
  name: "App",
  components: {
    HelloWorld,
    CostCalculator,
    NavigationBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
