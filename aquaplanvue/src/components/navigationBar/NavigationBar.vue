<template src='./NavigationBar.html'></template>

<style scoped src="./NavigationBar.css">
</style>

<script>
export default {
  name: "NavigationBar",
  props: {
    appTitle: String,
  },

  data: function () {
    return { count: 0 };
  },

  methods: {
    incrementCounter: function () {
      this.count += 1;
    },
  },
};
</script>