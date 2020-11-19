<template>
  <div>
      
      <MeasuringPointInputForm v-bind:waterParameters="waterParameters"/>
      <MeasuringList/>
      </div>
</template>

<script lang="ts">
import Vue from 'vue'
import  MeasuringPointInputForm from "../components/watervalues/MeasuringPointInputForm.vue";
import WaterParameter from '@/components/watervalues/WaterParameter';
import MeasuringList from '@/components/watervalues/MeasuringList.vue';
export default Vue.extend({

    name:'WaterValues',
    components: {MeasuringPointInputForm, MeasuringList},

    data: () => {
        return {
            waterParameters:[
                WaterParameter.PH,
                WaterParameter.KH,
                WaterParameter.GH,
                WaterParameter.NO2,
                WaterParameter.NO3,
                WaterParameter.NH4,
                WaterParameter.FE,
                WaterParameter.TEMPERATURE,
            ]
        };
    }
});
</script>

<style>

</style>