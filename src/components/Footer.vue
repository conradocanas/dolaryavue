<template>
    <v-footer
    fixed
    padless
    >
        <v-card-text class="primaryBack py-1">
          <span class="footer-text">
              Esta aplicación es meramente informativa. Los creadores no se hacen responsables por la utilización o falla en la información que se muestra.
            </span> 
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="secondaryBack py-2">
          <strong class="codecave-text">Creador por codeCave</strong>
        </v-card-text>
    </v-footer>
</template>

<script>
    export default {
        
    }
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