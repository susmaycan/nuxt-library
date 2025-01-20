<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})
</script>
<template>
  <div>
    <s-title>{{ $t('hello_world') }}</s-title>
  </div>
</template>

<style scoped></style>
