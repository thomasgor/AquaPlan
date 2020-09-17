<template>
  <div class="costCalculator">
    <h1>{{ msg }}</h1>
    <h4>{{ subTitle }}</h4>
  </div>
</template>


<script>
export default {
  name: "CostCalculator",
  props: {
    msg: String,
    subTitle: String,
  },
};
</script>