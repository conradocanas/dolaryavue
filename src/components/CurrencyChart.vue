<template>
  <v-card>
    <apexchart
      width="500"
      type="line"
      :options="chartOptions"
      :series="graphSeries"
      :key="graphSeries.name"
    ></apexchart>
  </v-card>
</template>

<script>
import Vue from "vue";
import VueApexCharts from "vue-apexcharts";

Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

export default {
  props: ["graphSeries"],
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: "Histórico",
        },
        title: {
          text: 'Historico Dolar Oficial',
          align: 'left'
        },
        xaxis: {
          categories: [],
        },
        
      },
    };
  },
  mounted() {
    console.log(this.graphSeries)
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped></style>
