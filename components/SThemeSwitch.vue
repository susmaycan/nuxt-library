<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const { t } = useTranslation()
</script>

<template>
  <u-button
    :aria-label="t('change_theme')"
    color="gray"
    :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
    variant="ghost"
    @click="isDark = !isDark"
  />
</template>
