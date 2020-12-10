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
/* import { mapState } from "vuex"; */
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
      tipoMoneda: 'oficial'
    };
  },
  mounted() {
   this.fetchData(this.$store.state.calculatedItem.name)
  },
  methods: {
    fetchData(tipoMoneda){
      let moneda = tipoMoneda.replace("Dolar ", "").toLowerCase();
      fetch(`http://164.90.149.113:3200/api/dolares/grafico/${moneda}/7`)
        .then((res) => res.json())
        .then((data) => this.series = [{name: "Dolar Oficial", data: data}])
        .then(console.log`http://164.90.149.113:3200/api/dolares/grafico/${{moneda}}/7`)
    },
  },
  computed: {
    ...mapState([
      "calculatedItem"
    ])
  },
};
</script>

<style lang="scss" scoped></style>
