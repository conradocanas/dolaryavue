<template>
  <v-row v-if="currencies" class="d-flex justify-center">
    <transition name="slide-fade">
      <v-col
        v-show="dolarOficial"
        cols="12"
        lg="3"
        md="3"
        sm="6"
        xs="6"
        transition="scale-transition"
        origin="center center"
      >
        <v-card>
          <v-card-title
            class="justify-center secondaryBack py-2 currency-name"
          >
            <v-icon size="30" class="mr-2" color="green">mdi-cash</v-icon>
            {{ currencies[0].casa.nombre }}</v-card-title
          >
          <v-card-text class="d-flex align-center pa-2 primaryBack">
            <v-row>
              <v-col class="text-center">
                <h4>Compra</h4>
                <h4 class="currencyValue">$ {{ currencies[0].casa.compra }}</h4>
              </v-col>
              <v-col class="text-center">
                <h4>Venta</h4>
                <h4 class="currencyValue">$ {{ currencies[0].casa.venta }}</h4>
              </v-col>
            </v-row>
          </v-card-text>
          <div class="variationFooter secondaryBack py-2 px-4 d-flex">
            <variationText
              :variationText="currencies[0].casa.variacion"
            ></variationText>
            <v-spacer></v-spacer>
            <v-btn
              x-small
              class="elevation-1"
              color="primary"
              @click="
                $emit(selectCurrency(),
                  currencies[0].casa
                )
              "
              >Calcular</v-btn
            >
          </div>
        </v-card>
      </v-col>
    </transition>

    <transition name="slide-fade">
      <v-col v-show="dolarBlue" cols="12" lg="3" md="3" sm="6">
        <v-card>
          <v-card-title class="justify-center secondaryBack py-2 currency-name">
            <v-icon size="30" class="mr-2" color="blue">mdi-cash</v-icon>
            {{ currencies[1].casa.nombre }}</v-card-title
          >
          <v-card-text class="d-flex align-center pa-2 primaryBack">
            <v-row>
              <v-col class="text-center">
                <h4>Compra</h4>
                <h4 class="currencyValue">$ {{ currencies[1].casa.compra }}</h4>
              </v-col>
              <v-col class="text-center">
                <h4>Venta</h4>
                <h4 class="currencyValue">$ {{ currencies[1].casa.venta }}</h4>
              </v-col>
            </v-row>
          </v-card-text>
          <div class="variationFooter secondaryBack py-2 px-4 d-flex">
            <variationText
              :variationText="currencies[1].casa.variacion"
            ></variationText>
            <v-spacer></v-spacer>
            <v-btn
              x-small
              class="elevation-1"
              color="primary"
              @click="
                selectCurrency(
                  currencies[1].casa
                )
              "
              >Calcular</v-btn
            >
          </div>
        </v-card>
      </v-col>
    </transition>

    <transition name="slide-fade">
      <v-col v-show="dolarLiqui" cols="12" lg="3" md="3" sm="6">
        <v-card>
          <v-card-title class="justify-center secondaryBack py-2 currency-name">
            <v-icon size="30" class="mr-2" color="purple">mdi-cash</v-icon>
            Dolar Liqui
          </v-card-title>
          <v-card-text class="d-flex align-center pa-2 primaryBack">
            <v-row>
              <v-col class="text-center">
                <h4>Compra</h4>
                <h4 class="currencyValue">$ {{ currencies[3].casa.compra }}</h4>
              </v-col>
              <v-col class="text-center">
                <h4>Venta</h4>
                <h4 class="currencyValue">$ {{ currencies[3].casa.venta }}</h4>
              </v-col>
            </v-row>
          </v-card-text>
          <div class="variationFooter secondaryBack py-2 px-4 d-flex">
            <variationText
              :variationText="currencies[3].casa.variacion"
            ></variationText>
            <v-spacer></v-spacer>
            <v-btn x-small class="elevation-1" color="primary">Calcular</v-btn>
          </div>
        </v-card>
      </v-col>
    </transition>

    <transition name="slide-fade">
      <v-col v-show="dolarBolsa" cols="12" lg="3" md="3" sm="6">
        <v-card>
          <v-card-title class="justify-center secondaryBack py-2 currency-name">
            <v-icon size="30" class="mr-2" color="purple">mdi-cash</v-icon>
            {{ currencies[4].casa.nombre }}</v-card-title
          >
          <v-card-text class="d-flex align-center pa-2 primaryBack">
            <v-row>
              <v-col class="text-center">
                <h4>Compra</h4>
                <h4 class="currencyValue">$ {{ currencies[4].casa.compra }}</h4>
              </v-col>
              <v-col class="text-center">
                <h4>Venta</h4>
                <h4 class="currencyValue">$ {{ currencies[4].casa.venta }}</h4>
              </v-col>
            </v-row>
          </v-card-text>
          <div class="variationFooter secondaryBack py-2 px-4 d-flex">
            <variationText
              :variationText="currencies[4].casa.variacion"
            ></variationText>
            <v-spacer></v-spacer>
            <v-btn
              x-small
              class="elevation-1"
              color="primary"
              @click="
                selectCurrency(
                  currencies[4].casa
                )
              "
              >Calcular</v-btn
            >
          </div>
        </v-card>
      </v-col>
    </transition>

    <transition name="slide-fade">
      <v-col v-show="dolarBitcoin" cols="12" lg="3" md="3" sm="6">
        <v-card>
          <v-card-title
            class="justify-center secondaryBack py-2 currency-name"
          >
            <v-icon size="30" class="mr-2" color="yellow">mdi-bitcoin</v-icon>
            {{ currencies[5].casa.nombre }}</v-card-title
          >
          <v-card-text class="d-flex align-center pa-2 primaryBack">
            <v-row>
              <v-col class="text-center">
                <h4>Compra</h4>
                <h4 class="currencyValue">{{ currencies[5].casa.compra }}</h4>
              </v-col>
              <v-col class="text-center">
                <h4>Venta</h4>
                <h4 class="currencyValue">{{ currencies[5].casa.venta }}</h4>
              </v-col>
            </v-row>
          </v-card-text>
          <div class="variationFooter secondaryBack py-2 px-4 d-flex">
            <variationText
              :variationText="currencies[5].casa.variacion"
            ></variationText>
            <v-spacer></v-spacer>
            <!--               <v-btn x-small class="elevation-1" color="primary" @click="selectCurrency(currencies[5].casa.nombre, currencies[5].casa.compra, currencies[5].casa.venta)"
                >Calcular</v-btn
              > -->
          </div>
        </v-card>
      </v-col>
    </transition>

    <transition name="slide-fade">
      <v-col v-show="dolarSoja" cols="12" lg="3" md="3" sm="6">
        <v-card>
          <v-card-title class="justify-center text-uppercase dolar-soja py-2">{{
            currencies[2].casa.nombre
          }}</v-card-title>
          <v-card-text class="d-flex align-center pa-2">
            <v-row>
              <v-col
                v-if="currencies[2].casa.compra != 'No Cotiza'"
                class="text-center"
              >
                <h4>Compra</h4>
                <h4 class="currencyValue">{{ currencies[2].casa.compra }}</h4>
              </v-col>
              <v-col class="text-center">
                <h4>Venta</h4>
                <h4 class="currencyValue">$ {{ currencies[2].casa.venta }}</h4>
              </v-col>
            </v-row>
          </v-card-text>
          <div class="variationFooter pa-2 px-4 d-flex">
            <variationText
              :variationText="currencies[2].casa.variacion"
            ></variationText>
            <v-spacer></v-spacer>
            <v-btn x-small class="elevation-1" color="primary">Calcular</v-btn>
          </div>
        </v-card>
      </v-col>
    </transition>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import variationText from "@/components/variationText.vue";

export default {
  components: {
    variationText,
  },
  data() {
    return {
      currencies: null,
    };
  },
  created() {
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
      .then((response) => response.json())
      .then((data) => {
        this.currencies = data;
      });
  },
  computed: mapState([
    "dolarOficial",
    "dolarBlue",
    "dolarTurista",
    "dolarBolsa",
    "dolarLiqui",
    "dolarSoja",
    "dolarBitcoin",
    "calculatedItem"
  ]),
  methods: {
/*     selectCurrency(item) {
      fetch(
        `http://164.90.149.113:3200/api/dolares/grafico/${item.nombre.replace("Dolar ", "").toLowerCase()}/7`
      )
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          let graphData = response
          this.$emit("graphSeries", graphData)
        });
      console.log(name, buy, sell)
      this.calculatedItem.name = name;
      this.calculatedItem.buy = buy;
      this.calculatedItem.sell = sell;
      let average = (parseFloat(buy) + parseFloat(sell)) / 2;
      if (transaction == "sell") {
        this.selectedArsCurrency = sell;
      } else if (transaction == "buy") {
        this.selectedArsCurrency = buy;
      } else {
        this.selectedArsCurrency = average;
      } 
    },*/
  },
};
</script>

<style lang="scss" scoped>
.dolar-oficial {
  color: #fff;
  background: #1e3c72; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #40982a,
    #21721e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #40982a,
    #21721e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.dolar-blue {
  color: #fff;
  background: #1e3c72; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2a5298,
    #1e3c72
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2a5298,
    #1e3c72
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.dolar-soja {
  color: #fff;
  background: #1e3c72; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #986c2a,
    #72631e
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #986c2a,
    #72631e
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.dolar-liqui {
  color: #fff;
  background: #1e3c72; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #982a45,
    #721e52
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #982a45,
    #721e52
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.dolar-bitcoin {
  color: #fff;
  background: #ff9900;
  background: -webkit-linear-gradient(
    to right,
    #ff9900,
    #b36e07
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ff9900,
    #b36e07
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.currencyValue {
  padding-top: 0.5rem;
  font-size: 1.2rem;
  color: var(--v-primaryColor-base)!important;
}
.variationFooter {
  text-align: center !important;
  font-size: 14px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}
.currency-name {
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
