<script setup lang="ts">
const { t } = useTranslation()

const links = computed<ISidebarLink[]>(() => [
  { label: t('components'), to: '/components', authenticated: true, placement: 'center' },
  { label: 'Test link 1', to: '/test-link-1', authenticated: true, placement: 'center' },
  { label: 'Test link 2', to: '/test-link-2', authenticated: true, placement: 'center' },
  { label: t('login'), to: '/login', authenticated: false, placement: 'right' },
  { label: t('register'), to: '/register', authenticated: false, placement: 'right' },
  { label: t('profile'), to: '/profile', authenticated: true, placement: 'right' }
])

onBeforeMount(() => {
  const { initAuthentication } = useAuth()
  initAuthentication()
})
</script>
<template>
  <client-only>
    <page-layout>
      <template #header>
        <s-top-bar :links="links">
          <template #title>
            <h1>🎯 Playground</h1>
          </template>
        </s-top-bar>
      </template>
      <NuxtPage />
    </page-layout>
  </client-only>
</template>
