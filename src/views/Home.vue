<template>
    <v-container>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="12" v-show="showCryptoDashboard">
          <DashBoard />
        </v-col>
        <v-col cols="12">
          <DolarCards @select-currency="selectCurrency" />
        </v-col>
      </v-row>
<!--       <v-row>
        <v-col v-show="showCurrencyChart" lg="7" sm="12">
          <CurrencyChart :key="graphSeries.name" :graphSeries="graphSeries" />
        </v-col>
        <v-col v-show="showCalculator" lg="5" sm="12">
          <Calculator :calculatedItem="calculatedItem" />
        </v-col>
      </v-row> -->
    </v-container>
</template>

<script>
import DolarCards from "@/components/DolarCards.vue";
/* import CurrencyChart from "@/components/CurrencyChart.vue"; */
/* import Calculator from "../components/Calculator.vue"; */
import DashBoard from "./Dashboard";

// @ is an alias to /src
export default {
  name: "Home",
  components: {
    DashBoard,
/*     Calculator, */
/*     CurrencyChart, */
    DolarCards,
  },
  data() {
    return {
      showCalculator: true,
      showCurrencyChart: true,
      showCryptoDashboard: true,
      calculatedItem: {
        name: "",
        buy: 0,
        sell: 0,
        average: 0,
      },
      graphSeries: [
        {
          data: [],
        },
      ],
    };
  },
  mounted() {},
  methods: {
    selectCurrency(item) {
      fetch(
        `http://164.90.149.113:3200/api/dolares/grafico/${this.$store.state.calculatedItem.name
          .replace("Dolar ", "")
          .toLowerCase()}/7`
      )
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          console.log("Le pegamos a la api y: ", response)
          this.graphSeries[0].name = this.$store.state.calculatedItem.name;
          this.graphSeries[0].data = response;
          console.log(this.graphSeries, item);
        });
    },
  },
};
</script>

<style scoped>
.home-body {
  height: 100vh;
}
</style>