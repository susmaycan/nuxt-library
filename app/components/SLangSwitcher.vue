<script setup lang="ts">
const { localeOptions, selectedLocale, setLocale, t, locales } = useTranslation()
console.log('🚀 ~ locales:', locales.value)
console.log('🚀 ~ localeOptions:', localeOptions.value)
</script>

<template>
  <s-select
    :aria-label="t('language')"
    :options="localeOptions"
    :value="selectedLocale"
    name="language-selector"
    @change="setLocale"
  />
</template>
