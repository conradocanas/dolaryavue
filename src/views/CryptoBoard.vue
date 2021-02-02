<template>
  <div class="d-flex flex-wrap justify-space-between">
    <div class="card-block" v-for="(value, index) in currencies" :key="index">
      <CryptoCard :ticker="tickers[value.symbol] || {}" :info="value"></CryptoCard>
    </div>
  </div>
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