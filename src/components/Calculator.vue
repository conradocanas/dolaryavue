<template>
  <v-card height="380px">
    <v-card-title
      v-if="calculatedItem.name != ''"
      class="justify-center text-uppercase secondaryBack py-2"
    >
      Calculando {{ calculatedItem.name }}</v-card-title
    >
    <v-card-title
      v-else
      class="justify-center text-uppercase secondaryBack py-2"
    >
      Calculadora de monedas</v-card-title
    >
    <v-card-text v-if="calculatedItem.name != ''">
      <v-row>
        <v-col cols="4" class="text-center">
          <h4>Compra</h4>
          <h4 class="currencyValue">$ {{ calculatedItem.buy }}</h4>
        </v-col>
        <v-col cols="4" class="text-center">
          <h4>Promedio</h4>
          <h4 class="currencyValue">
            $
            {{
              (parseFloat(calculatedItem.buy) +
                parseFloat(calculatedItem.sell)) /
                2
            }}
          </h4>
        </v-col>
        <v-col cols="4" class="text-center">
          <h4>Venta</h4>
          <h4 class="currencyValue">$ {{ calculatedItem.sell }}</h4>
        </v-col>
      </v-row>
      <v-divider class="mb-2"></v-divider>
      <v-row>
        <v-col cols="12" class="text-center ma-0"
          >Seleccioná el tipo de transacción:</v-col
        >
        <v-col cols="12" class="d-flex justify-center pt-0">
          <v-btn small class="primary mr-2" @click="activeCurrencies = 'compra'"
            >Compra</v-btn
          >
          <v-btn
            small
            class="primary mr-2"
            @click="activeCurrencies = 'promedio'"
            >Promedio</v-btn
          >
          <v-btn small class="primary" @click="activeCurrencies = 'venta'"
            >Venta</v-btn
          >
        </v-col>
      </v-row>
      <div class="pa-4">
        <v-text-field
          dense
          label="Pesos Argentinos (ARS)"
          @keyup="totalUsd(activeCurrencies)"
          outlined
          v-model="selectedArsCurrency"
        ></v-text-field>
        <v-text-field
          dense
          label="Dolares (USD)"
          outlined
          @keyup="totalArs(activeCurrencies)"
          v-model="selectedUsdCurrency"
        ></v-text-field>
      </div>
    </v-card-text>
    <v-card-text
      class="d-flex align-center text-center"
      style="height: 100%;"
      v-else
    >
      Usa el boton "Calcular" en la tarjeta de cada moneda para calcular los
      valores que necesites.
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "calculatorComponent",
  data() {
    return {
      selectedArsCurrency: 1,
      selectedUsdCurrency: 1,
      selectedTransaction: "sell",
      promedio: 1,
      firstInputSelected: true,
      activeCurrencies: "",
    };
  },
  mounted: function() {
    this.readDataFromAPI();
  },
  watch: {
    activeCurrencies: function() {
      console.log(this.activeCurrencies);
      this.totalArs(this.activeCurrencies);
      this.totalUsd(this.activeCurrencies);
    },
  },
  methods: {
    floatParse(elem) {
      return parseFloat(elem.replace(",", ".").replace(" ", ""));
    },
    //Reading data from API BlockChain.info
    readDataFromAPI() {
      this.loading = true;
      axios.get("https://blockchain.info/ticker").then((response) => {
        //Then injecting the result to datatable parameters.
        this.loading = false;
        this.APIvalues = Object.values(response.data);
        this.APIkeys = Object.keys(response.data);
        // Adding the prop "name" with the currency name
        for (let i = 0; i < this.APIkeys.length; i++) {
          this.APIvalues[i].name = this.APIkeys[i];
        }
      });
    },
    totalArs: function(transactType) {
      console.log(transactType);
      if (this.selectedUsdCurrency == "" || this.selectedUsdCurrency == 0) {
        this.selectedArsCurrency = 0;
      } else {
        if (transactType === "promedio") {
          let average =
            (this.floatParse(this.$store.state.calculatedItem.buy) +
              this.floatParse(this.$store.state.calculatedItem.sell)) /
            2;
          this.selectedArsCurrency = (
            parseFloat(this.selectedUsdCurrency) * average
          ).toFixed(2);
        }
        if (transactType === "compra") {
          this.selectedArsCurrency = (
            this.floatParse(this.selectedUsdCurrency) *
            this.floatParse(this.$store.state.calculatedItem.buy)
          ).toFixed(2);
        }
        if (transactType === "venta") {
          this.selectedArsCurrency = (
            this.floatParse(this.selectedUsdCurrency) *
            this.floatParse(this.$store.state.calculatedItem.sell)
          ).toFixed(2);
        }
      }
    },
    totalUsd: function(transactType) {
      console.log(this.activeCurrencies);
      if (this.selectedArsCurrency == "" || this.selectedArsCurrency == 0) {
        this.selectedUsdCurrency = 0;
      } else {
        if (transactType == "promedio") {
          let average =
            (this.floatParse(this.$store.state.calculatedItem.buy) +
              this.floatParse(this.$store.state.calculatedItem.sell)) /
            2;
          this.selectedUsdCurrency = (
            parseFloat(this.selectedArsCurrency) / average
          ).toFixed(2);
        }
        if (transactType == "compra") {
          this.selectedUsdCurrency = (
            this.floatParse(this.selectedArsCurrency) /
            this.floatParse(this.$store.state.calculatedItem.buy)
          ).toFixed(2);
        }
        if (transactType == "venta") {
          this.selectedUsdCurrency = (
            this.floatParse(this.selectedArsCurrency) /
            this.floatParse(this.$store.state.calculatedItem.sell)
          ).toFixed(2);
        }
      }
    },
  },
  computed: mapState(["calculatedItem"]),
};
</script>
