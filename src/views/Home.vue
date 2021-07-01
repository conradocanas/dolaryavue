<template>
  <div class="content">
    <v-container>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="12" class="pb-0" v-show="showCryptoDashboard">
          <div class="text-start">
            <h2 class="category-title">Criptomonedas</h2>
            <v-divider></v-divider>
          </div>
          <DashBoard />
        </v-col>
        <v-col cols="12">
          <div class="text-start">
            <h2 class="category-title">Mercado Dolar Argentina</h2>
            <v-divider></v-divider>
          </div>
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
  </div>
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
    DolarCards
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
        average: 0
      },
      graphSeries: [
        {
          data: []
        }
      ]
    };
  },
  mounted() {},
  methods: {
    selectCurrency() {
      fetch(
        `http://164.90.149.113:3200/api/dolares/grafico/${this.$store.state.calculatedItem.name
          .replace("Dolar ", "")
          .toLowerCase()}/7`
      )
        .then(res => {
          return res.json();
        })
        .then(response => {
          this.graphSeries[0].name = this.$store.state.calculatedItem.name;
          this.graphSeries[0].data = response;
        });
    }
  }
};
</script>

<style>
.content {
  min-height: 80vh;
  display: flex;
  align-items: center;
}
.container {
  max-width: 1200px;
}
.category-title {
  color: white;
  font-size: 1rem;
  margin-bottom: 0.2rem;
  margin-top: 1rem;
}
</style>
