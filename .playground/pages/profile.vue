<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})
const { logout } = useAuth()
</script>

<template>
  <div>
    <s-title>{{ $t('profile') }}</s-title>
    <s-button @click="logout">{{ $t('logout') }}</s-button>
  </div>
</template>

<style scoped></style>
