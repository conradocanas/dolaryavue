<template>
<span>
    <span class="mr-1">Variación:</span>
    <span v-if="textToNumber(variationText) > 0" class="success--text">{{ variationText }}% <v-icon size="14" color="success">mdi-arrow-up</v-icon></span>
    <span v-else-if="textToNumber(variationText) == 0">{{ variationText }}%</span>
    <span v-else-if="textToNumber(variationText) < 0" class="error--text">{{ variationText }}% <v-icon size="14" color="error">mdi-arrow-down</v-icon></span>
</span>

</template>

<script>
export default {
    props: ["variationText"],
    methods: {
        textToNumber(item) {
            return parseFloat(item.replace(',','.').replace(' ',''))
        }
    }
}
</script>

<style lang="scss" scoped>
.successText {
    color: var(--v-success-base);
}
</style>
