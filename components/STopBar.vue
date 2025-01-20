<script setup lang="ts">
import type { HorizontalNavigationLink } from '#ui/types/horizontal-navigation'

const { isAuthenticated } = useAuth()

const props = defineProps<{
  guestLinks: HorizontalNavigationLink[]
  authenticatedLinks: HorizontalNavigationLink[]
}>()

const links = computed(() => {
  if (!isAuthenticated.value) return props.guestLinks
  else return [props.guestLinks, props.authenticatedLinks]
})
</script>

<template>
  <div class="flex justify-center items-center mb-5">
    <p class="text-2xl font-bold"></p>
    <u-horizontal-navigation
      :links="links"
      :ui="{
        active: 'text-xl py-3',
        inactive: 'text-xl py-3',
        avatar: {
          size: 'md'
        }
      }"
    />
    <slot name="theme-switch">
      <div class="ml-auto">
        <s-theme-switch />
      </div>
    </slot>
  </div>
</template>
