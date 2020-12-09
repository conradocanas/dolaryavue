<template>
  <v-card>
    <apexchart
      width="500"
      type="line"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </v-card>
</template>

<script>
import Vue from "vue";
import VueApexCharts from "vue-apexcharts";

Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

export default {
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
      series: [],
    };
  },
  mounted() {
    // "oficial tiene que ser dinámico"
     fetch("http://164.90.149.113:3200/api/dolares/grafico/blue/7")
      .then((res) => res.json())
      .then((data) => this.series = [{name: "Dolar Oficial", data: data}])
  },
};
</script>

<style lang="scss" scoped></style>
