<template>
  <div>
    <!--  privePerKiloWatt input-->
    <b-row class="my-1">
      <b-col sm="2">
        <label for="pricePerKiloWattInput">Strompreis:</label>
      </b-col>
      <b-col sm="2">
        <b-input-group append="Cent/kW">
          <b-form-input
            id="pricePerKiloWattInput"
            type="number"
            v-model="pricePerKiloWatt"
          />
        </b-input-group>
      </b-col>
    </b-row>

    <!--  DAILY SHINING TIME INPUT-->
    <b-row class="my-1">
      <b-col sm="2">
        <label for="shinigTimeInput">Tägliche Beleuchtung:</label>
      </b-col>
      <b-col sm="2">
        <b-input-group append="h">
          <b-form-input
            id="shinigTimeInput"
            type="number"
            v-model="shingingHoursPerDay"
          />
        </b-input-group>
      </b-col>
    </b-row>

    <!--  POWER CONSUMPTION LIGHT INPUT-->
    <b-row class="my-1">
      <b-col sm="2">
        <label for="shinginPowerInput">Leistung Beleuchtung:</label>
      </b-col>
      <b-col sm="2">
        <b-input-group append="W">
          <b-form-input
            id="shiningPowerInput"
            type="number"
            v-model="shiningPowerInWatt"
          />
        </b-input-group>
      </b-col>
    </b-row>

    <!--  POWER CONSUMPTION FILTER INPUT-->
    <b-row class="my-1">
      <b-col sm="2">
        <label for="filterPowerInput">Leistung Filter:</label>
      </b-col>
      <b-col sm="2">
        <b-input-group append="W">
          <b-form-input
            id="filterPowerInput"
            type="number"
            v-model="filterPowerInWatt"
          />
        </b-input-group>
      </b-col>
    </b-row>

    <!-- RESULT OUTPUT -->
    <b-row class="my-1">
      <b-col sm="2">
        Dein Aquarium kostet:
      </b-col>
      <b-col sm="2">
        <b-input-group append="€/Tag">
          <b-form-input
            readonly
            id="costCalculationResultDay"
            type="number"
            v-bind:value="costsPerDay | roundTwoDigits"
          />
        </b-input-group>

        <b-input-group append="€/Monat">
          <b-form-input
            readonly
            id="costCalculationResultMont"
            type="number"
            v-bind:value="costsPerDay | multipliedToMonth | roundTwoDigits"
          />
        </b-input-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: "CostCalculator",
    data: () => {
      return {
        shingingHoursPerDay: 9,
        shiningPowerInWatt: 36,
        filterPowerInWatt: 6,
        pricePerKiloWatt: 26.7,
      };
    },

    computed: {
      costsPerDay: function() {
        const filterWattPerDay = 24 * this.filterPowerInWatt;
        const shingWattPerDay =
          this.shingingHoursPerDay * this.shiningPowerInWatt;

        const wattPerDay = shingWattPerDay + filterWattPerDay;
        const kiloWattPerDay = wattPerDay / 1000;
        const pricePerKiloWattEuro = this.pricePerKiloWatt / 100;
        const pricePerDayEuro = kiloWattPerDay * pricePerKiloWattEuro;

        return pricePerDayEuro;
      },
    },

    filters: {
      multipliedToMonth: function(value) {
        const averageCostsPerMonth = (value * 365) / 12;
        return averageCostsPerMonth;
      },

      roundTwoDigits: function(value) {
        return Math.ceil(100 * value) / 100;
      },
    },
  };
</script>

<style></style>
