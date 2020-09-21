<template>
  <div>
    <!--  privePerKiloWatt input-->
    <b-form-group
      label-cols-sm="4"
      label-cols-lg="3"
      label="Strompreis:"
      label-for="pricePerKiloWattInput"
    >
      <b-input-group append="Cent/kW">
        <b-form-input
          id="pricePerKiloWattInput"
          type="number"
          v-model="pricePerKiloWatt"
        />
      </b-input-group>
    </b-form-group>

    <!--  DAILY SHINING TIME INPUT-->
    <b-form-group
      label-cols-sm="4"
      label-cols-lg="3"
      label="Tägliche Beleuchtung:"
      label-for="shingingHoursPerDay"
    >
      <b-input-group append="h">
        <b-form-input
          id="shinigTimeInput"
          type="number"
          v-model="shingingHoursPerDay"
        />
      </b-input-group>
    </b-form-group>

    <!--  POWER CONSUMPTION LIGHT INPUT-->
    <b-form-group
      label-cols-sm="4"
      label-cols-lg="3"
      label="Leistung der Beleuchtung:"
      label-for="shiningPowerInput"
    >
      <b-input-group append="W">
        <b-form-input
          id="shiningPowerInput"
          type="number"
          v-model="shiningPowerInWatt"
        />
      </b-input-group>
    </b-form-group>

    <!--  POWER CONSUMPTION FILTER INPUT-->
    <b-form-group
      label-cols-sm="4"
      label-cols-lg="3"
      label="Leistung des Filters:"
      label-for="filterPowerInput"
    >
      <b-input-group append="W">
        <b-form-input
          id="filterPowerInput"
          type="number"
          v-model="filterPowerInWatt"
        />
      </b-input-group>
    </b-form-group>

    <hr />

    <!-- RESULT OUTPUT -->
    <b-form-group
      label-cols-sm="4"
      label-cols-lg="3"
      label="Dein Aquarium kostet:"
      label-for="costCalculationResultDay"
    >
      <b-input-group append="€/Tag">
        <b-form-input
          readonly
          id="costCalculationResultDay"
          type="number"
          v-bind:value="costsPerDay | roundTwoDigits"
        />
      </b-input-group>
    </b-form-group>

    <b-form-group label-cols-sm="4" label-cols-lg="3">
      <b-input-group append="€/Monat">
        <b-form-input
          readonly
          id="costCalculationResultMont"
          type="number"
          v-bind:value="costsPerDay | multipliedToMonth | roundTwoDigits"
        />
      </b-input-group>
    </b-form-group>
    <b-form-group label-cols-sm="4" label-cols-lg="3">
      <b-input-group append="€/Jahr">
        <b-form-input
          readonly
          id="costCalculationResultMont"
          type="number"
          v-bind:value="costsPerDay | multipliedToYear | roundTwoDigits"
        />
      </b-input-group>
    </b-form-group>
  </div>
</template>

<script lang="ts" src="./CostCalculator.ts"></script>

<style>
  .form-row {
    margin-right: 0px;
    margin-left: 0px;
  }
</style>
