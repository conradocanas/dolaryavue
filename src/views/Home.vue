<template>
  <v-container>
    <v-row>
      <v-col v-show="showCryptoDashboard">
        <DashBoard />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <DolarCards />
      </v-col>
    </v-row>
    <v-row>
      <v-col v-show="showCurrencyChart" cols="7">
        <CurrencyChart />
      </v-col>
      <v-col v-show="showCalculator" cols="5">
        <Calculator :calculatedItem="calculatedItem" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DolarCards from "@/components/DolarCards.vue";
import CurrencyChart from "@/components/CurrencyChart.vue";
import Calculator from "../components/Calculator.vue";
import DashBoard from "./Dashboard";

// @ is an alias to /src
export default {
  name: "Home",
  components: {
    DashBoard,
    Calculator,
    CurrencyChart,
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
        average: 0
      },
    };
  },
  mounted() {
    fetch("http://164.90.149.113:3200/api/dolares/grafico/oficial/7")
      .then((response) => response.json())
  },
};
</script>
