<template>
<div>

    {{measuring.date}}
    {{measuring.id}}
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Measuring from './Measuring';
export default Vue.extend({
    name:"MeasuringListItem",

    props:{
        measuring: {
            type:  Object as () => Measuring, 
            required: true,
        }
    },
    
    data: () => {
        return {};
    }

})
</script>

<style>

</style>