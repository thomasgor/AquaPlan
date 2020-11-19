<template>
    <div>
        <b-form-group
      :key="measuringPoint.waterParameter.key"
      v-bind:label="measuringPoint.waterParameter.displayName"
      label-cols-sm="4"
      label-cols-lg="4"
      label-align-sm="left"
      label-align-lg="left"
    >
    
      <b-input-group v-bind:append="measuringPoint.waterParameter.unit.displayName">
        <b-form-input
          v-bind:id="measuringPoint.waterParameter.key"
          v-model.number="measuringPoint.value"
          type="number"
          placeholder="-"
        />
      </b-input-group>
    </b-form-group>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import WaterParameter from './WaterParameter';
import MeasuringPoint  from './Measuring'
export default Vue.extend({
    name: 'MeasuringPointInputField',
    
    props: {
        measuringPoint: {
            type: Object as () => MeasuringPoint,
            required: true
        }
    },
    data: () => {
        return  {};
    }
})
</script>