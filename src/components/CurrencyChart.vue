<template>
  <v-card>
    <apexchart
      width="500"
      type="line"
      :options="chartOptions"
      :series="[$store.state.chartData]"
      :key="$store.state.chartData.name"
    ></apexchart>
  </v-card>
</template>

<script>
import Vue from "vue";
import VueApexCharts from "vue-apexcharts";
import { mapState } from 'vuex';

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
/*    this.fetchData(this.$store.state.calculatedItem.name.replace("Dolar ", "").toLowerCase()) */
  },
  methods: {
/*     fetchData(){
      fetch(`http://164.90.149.113:3200/api/dolares/grafico/${this.$store.state.calculatedItem.name.replace("Dolar ", "").toLowerCase()}/7`)
        .then((res) => res.json())
        .then((data) => this.$store.commit("SET_GRAPH_DATA", data))
    }, */
  },
  computed: mapState([
    "chartData"
  ]),
};
</script>

<style lang="scss" scoped></style>
