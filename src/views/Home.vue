<template>
  <v-container>
    <DashBoard></DashBoard>
  </v-container>
</template>

<script>
import DashBoard from "./Dashboard"

// @ is an alias to /src
export default {
  name: "Home",
  components: {
    DashBoard
  },
  data() {
    return {
      series: [],
    }
  },
  mounted() {
    fetch("http://164.90.149.113:3200/api/dolares/grafico/oficial/7")
    .then(response => response.json())
    .then(data => {
      console.log(data)
    });
  }
}
</script>
