import Vue from "vue";
import Vuex from "vuex";
import defaultPair from "@/assets/defaultpair.json";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    /* activeCurrencies: 'oficial', */
    currencies: defaultPair,
    tickers: {},
    chartData: {
      data: [],
    },
    DolarOficial: {
      status: true,
      required: true
    },
    DolarBlue: {
      status: true,
      required: true
    },
    DolarTurista: {
      status: false,
      required: false
    },
    DolarBolsa: {
      status: false,
      required: false
    },
    DolarLiqui: {
      status: true,
      required: false
    },
    DolarBitcoin: {
      status: false,
      required: false
    },
    calculatedItem: {
      name: "oficial",
      buy: 0,
      sell: 0,
      average: 0
    },
  },
  getters: {
    getSymbolById: (state) => (symbol) => {
      return state.currencies.find((s) => s.symbol === symbol);
    },
    getTickerById: (state) => (symbol) => {
      return state.tickers[symbol];
    },
  },
  actions: {
    GET_BOOKS: (state) => {
      fetch(
        `http://164.90.149.113:3200/api/dolares/grafico/${state.calculatedItem.name.replace("Dolar ", "").toLowerCase()}/7`
      )
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          let graphData = response
          state.commit("SET_GRAPH_DATA", graphData)
        });
    },
    UPDATE_DOLAR_BOLSA({commit}, payload){
      commit("DOLAR_BOLSA", payload)
    },
    UPDATE_DASHBOARD_ITEM({commit}, payload){
      commit("DASHBOARD_ITEM", payload)
    }
  },
  mutations: {
    SET_GRAPH_DATA: (state, payload) => {
      state.chartData.name = state.calculatedItem.name
      state.chartData.data = payload
      console.log(state.chartData)
    },
    SET_SELECTED_ITEM: (state, payload) => {
      state.calculatedItem.name = payload.nombre
      state.calculatedItem.buy = payload.compra
      state.calculatedItem.sell = payload.venta
      state.calculatedItem.transaction = payload.transaction
    },
    UPDATE_TICKER: (state, payload) => {
      const tick = state.tickers[payload.symbol];
      payload.pchg = tick ? (payload.price > tick.price ? 1 : -1) : 1;
      Vue.set(state.tickers, payload.symbol, payload);
    },
    ADD_COIN_PAIR: (state, payload) => {
      if (!state.tickers[payload.symbol]) {
        state.currencies.push(payload);
        localStorage.setItem(
          "vue-crypto-currencies-new",
          JSON.stringify(state.currencies)
        );
      }
      Vue.set(state.tickers, payload.symbol, { pchg: 1 });
    },
    REMOVE_COIN_PAIR: (state, symbol) => {
      Vue.delete(state.tickers, symbol);
      state.currencies.splice(
        state.currencies.findIndex((s) => s.symbol === symbol),
        1
      );
      localStorage.setItem(
        "vue-crypto-currencies-new",
        JSON.stringify(state.currencies)
      );
    },
    DASHBOARD_ITEM(state, payload){
      console.log(payload.name.replace(/\s/g, ''), payload.status)
      state[payload.name.replace(/\s/g, '')].status = payload.status
    }
  },
});
