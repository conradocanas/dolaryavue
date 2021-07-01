<template>
    <v-footer fixed padless>
      <v-divider></v-divider>

      <v-card-text class="secondaryBack codecave-text py-2">
        <strong>Creador por codeCave</strong> -
        <v-tooltip top color="black">
          <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on">Terminos y condiciones</span>
          </template>
          <span>Esta aplicación es meramente informativa. Los creadores no se hacen
        responsables por la utilización o falla en la información que se
        muestra.</span>
        </v-tooltip>
      </v-card-text>
    </v-footer>
</template>

<script>
export default {};
</script>

<style scoped>
.codecave-text {
  color: var(--v-primaryBack-base);
  font-size: 12px;
  letter-spacing: 0px;
}
.footer-text {
  color: var(--v-secondaryBack-base);
  font-size: 11px;
  letter-spacing: 0px;
  opacity: 0.8;
}
</style>
