<template>
<div>
    <MeasuringListItem 
        v-for="measuring in measurings"
        v-bind:key="measuring.id"/>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Measuring from './Measuring'
export default Vue.extend({
    name:"MeasuringPointList",


    props:{
        measurings: Object as () => Measuring[],  
    },
    data: () => {
        return {};
    }

})
</script>

<style>

</style>