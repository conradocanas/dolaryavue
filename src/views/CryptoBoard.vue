<template>
  <v-row class="d-flex flex-wrap justify-space-between">
    <v-col class="card-block" v-for="(value, index) in currencies" :key="index">
      <CryptoCard class="card" :ticker="tickers[value.symbol] || {}" :info="value"></CryptoCard>
    </v-col>
  </v-row>
</template>
<script>
  import CryptoCard from '../components/CryptoCard.vue'
  import { mapState } from 'vuex'
  export default {
    name: 'CryptoBoard',
    components: {
      CryptoCard
    },
    computed: {
      ...mapState(['tickers', 'currencies'])
    }
  }
</script>

<style scoped>
</style>