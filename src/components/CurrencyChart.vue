<template>
  <v-card>
    <apexchart
      :width="chartWidth"
      :height="chartHeight"
      type="area"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </v-card>
</template>

<script>
import Vue from "vue"
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

export default {
  data() {
    return {
      // Line Chart Variables
      chartWidth: 500,
      chartHeight: 300,
      chartOptions: {
        chart: {
          id: "vuechart-example",
          type: "line",
        },
        xaxis: {
          type: "datetime",
          labels: {
            datetimeFormatter: {
              year: "yyyy",
              month: "MMM 'yy",
              day: "dd MMM",
              hour: "HH:mm",
            },
          },
        },
        tooltip: {
          theme: "dark",
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#267920", "#1F3F78", "#792050"],
        fill: {
          type: "gradient",
          gradient: {
            type: "vertical",
            shadeIntensity: 0.5,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 50, 100],
            colorStops: [],
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
