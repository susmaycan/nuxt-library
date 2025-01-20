<script setup lang="ts">
const { localeOptions, selectedLocale, setLocale } = useTranslation()
</script>

<template>
  <s-select :options="localeOptions" :value="selectedLocale" @change="setLocale" />
</template>
