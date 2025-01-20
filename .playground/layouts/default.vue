<script setup lang="ts">
const { t } = useTranslation()

const guestLinks = computed(() => [
  { label: t('home'), to: '/' },
  { label: t('login'), to: '/login' },
  { label: t('register'), to: '/register' }
])
const authenticatedLinks = computed(() => [{ label: t('profile'), to: '/profile' }])
</script>
<template>
  <div>
    <s-top-bar :guest-links="guestLinks" :authenticated-links="authenticatedLinks" />
    <slot />
  </div>
</template>
