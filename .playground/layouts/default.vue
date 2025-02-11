<script setup lang="ts">
const { t } = useTranslation()

const links = computed<ISidebarLink[]>(() => [
  { label: t('home'), to: '/', authenticated: true, placement: 'left' },
  { label: t('login'), to: '/login', authenticated: false, placement: 'left' },
  { label: t('register'), to: '/register', authenticated: false, placement: 'left' },
  { label: t('profile'), to: '/profile', authenticated: true, placement: 'right' }
])
</script>
<template>
  <div>
    <s-top-bar :links="links">
      <template #title>
        <h1>Playground</h1>
      </template>
    </s-top-bar>
    <slot />
  </div>
</template>
