<script setup lang="ts">
const { localeOptions, selectedLocale, setLocale, t, locales } = useTranslation()
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
