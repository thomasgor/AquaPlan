import Vue from "vue";

export default Vue.extend({
  name: "CostCalculator" as string,
  data: () => {
    return {
      shingingHoursPerDay: 9 as number,
      shiningPowerInWatt: 36 as number,
      filterPowerInWatt: 6 as number,
      pricePerKiloWatt: 26.7 as number,
    };
  },

  computed: {
    costsPerDay: function(): number {
      const filterWattPerDay: number = 24 * this.filterPowerInWatt;
      const shingWattPerDay: number =
        this.shingingHoursPerDay * this.shiningPowerInWatt;

      const wattPerDay: number = shingWattPerDay + filterWattPerDay;
      const kiloWattPerDay: number = wattPerDay / 1000;
      const pricePerKiloWattEuro: number = this.pricePerKiloWatt / 100;
      const pricePerDayEuro: number = kiloWattPerDay * pricePerKiloWattEuro;

      return pricePerDayEuro;
    },
  },

  filters: {
    multipliedToMonth: function(value: number): number {
      const averageCostsPerMonth = (value * 365) / 12;
      return averageCostsPerMonth;
    },

    multipliedToYear: function(value: number): number {
      const averageCostsPerMonth = value * 365;
      return averageCostsPerMonth;
    },

    roundTwoDigits: function(value: number): number {
      return Math.ceil(100 * value) / 100;
    },
  },
});
