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
          <v-btn
            small
            class="primary mr-2"
            @click="
              selectCurrency(
                calculatedItem.name,
                calculatedItem.buy,
                calculatedItem.sell,
                'buy'
              )
            "
            >Compra</v-btn
          >
          <v-btn
            small
            class="primary mr-2"
            @click="
              selectCurrency(
                calculatedItem.name,
                calculatedItem.buy,
                calculatedItem.sell,
                'average'
              )
            "
            >Promedio</v-btn
          >
          <v-btn
            small
            class="primary"
            @click="
              selectCurrency(
                calculatedItem.name,
                calculatedItem.buy,
                calculatedItem.sell,
                'sell'
              )
            "
            >Venta</v-btn
          >
        </v-col>
      </v-row>
      <div class="pa-4">
        <v-text-field
          dense
          label="Dolares (USD)"
          outlined
          v-model="selectedUsdCurrency"
        ></v-text-field>
        <v-text-field
          dense
          label="Pesos Argentinos (ARS)"
          outlined
          v-model="selectedArsCurrency"
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
import axios from "axios";
export default {
  name: "calculatorComponent",
  data() {
    return {
      calculatedItem: {
        name: "",
        buy: 0,
        sell: 0,
        average: 0
      },
      selectedArsCurrency: 1,
      selectedUsdCurrency: 1,
      selectedTransaction: "sell"
    };
  },
  mounted: function() {
    this.readDataFromAPI();
  },
  methods: {
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
    calcInput_1: function(e, rate) {
      this.firstInputSelected = true;
      this.calculate(e, rate);
    },
    calcInput_2: function(e, rate) {
      this.firstInputSelected = false;
      this.calculate(e, rate);
    },
    updateInputs: function() {
      var selected;
      this.APIvalues.forEach((elem) => {
        if (this.selected == elem.name) {
          selected = elem;
        }
      });
      this.countryRate = selected.last;

      var input2 = parseFloat(document.getElementById("currencyInput").value);
      if (isNaN(input2)) {
        this.calc2 = "";
        this.calc1 = "";
        return;
      }
      this.calc1 = (input2 * this.countryRate).toFixed(2);
    },
    calculate: function(e, value) {
      value = parseFloat(e.target.value);
      if (isNaN(value)) {
        this.calc2 = "";
        this.calc1 = "";
        return;
      }

      if (this.firstInputSelected) {
        this.calc2 = value;
        this.calc1 = (value * this.countryRate).toFixed(2);
      } else {
        this.calc1 = value;
        this.calc2 = (value / this.countryRate).toFixed(5);
      }
    },
  },
};
</script>
