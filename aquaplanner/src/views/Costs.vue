<template>
  <b-row align-h="center">
    <b-col lg="8" xl="6" sm="12" xs="12"> <CostCalculator /></b-col>
  </b-row>
</template>

<script>
  import CostCalculator from "../components/CostCalculator.vue";

  export default {
    name: "Costs",
    components: {
      CostCalculator,
    },
  };
</script>

<style></style>
