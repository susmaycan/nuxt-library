<script setup lang="ts">
defineProps<{
  alt: string
  height?: number
  url: string
  width?: number
}>()
</script>
<template>
  <img :alt="alt" :height="height || 200" :src="url" :width="width || 200" />
</template>
