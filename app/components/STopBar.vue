<script setup lang="ts">
const { isAuthenticated } = useAuth()
const { isMobile } = useMobile()
const props = defineProps<{
  links: ISidebarLink[]
}>()

const centerLinks = computed(() =>
  props.links
    .filter((link) => link.placement === 'center')
    .filter((link) => link.authenticated === isAuthenticated.value)
)
const leftLinks = computed(() =>
  props.links
    .filter((link) => link.placement === 'left')
    .filter((link) => link.authenticated === isAuthenticated.value)
)

const rightLinks = computed(() =>
  props.links
    .filter((link) => link.placement === 'right')
    .filter((link) => link.authenticated === isAuthenticated.value)
)

const isOpen = ref(false)
const toggleSidebar = () => (isOpen.value = !isOpen.value)
</script>

<template>
  <client-only>
    <div v-if="!isMobile" class="flex justify-between items-center mb-5">
      <div class="flex items-center mr-auto gap-1">
        <slot name="title" />
        <u-navigation-menu :items="leftLinks" />
        <slot name="left" />
      </div>
      <u-navigation-menu :items="centerLinks" />
      <slot name="center" />
      <div class="flex items-center ml-auto">
        <u-navigation-menu :items="rightLinks" />
        <slot name="right">
          <s-theme-switch />
          <s-lang-switcher />
        </slot>
      </div>
    </div>
    <div v-else>
      <u-slideover
        v-model:open="isOpen"
        :overlay="false"
        side="left"
        aria-describedby="sidebar menu mobile"
      >
        <div class="flex items-center gap-1 sidebar-activator">
          <s-button
            color="neutral"
            icon="i-heroicons-bars-3"
            class="menu-button"
            :variant="EButtonVariant.link"
          />
          <slot name="title" />
        </div>
        <template #title> <slot name="title" /> </template>
        <template #body>
          <u-navigation-menu :items="centerLinks" orientation="vertical" @click="toggleSidebar" />
          <slot name="center" />
          <u-navigation-menu :items="rightLinks" orientation="vertical" @click="toggleSidebar" />
        </template>
        <template #footer>
          <slot name="right">
            <s-theme-switch />
            <s-lang-switcher />
          </slot>
        </template>
      </u-slideover>
    </div>
  </client-only>
</template>
<style>
.sidebar-activator > button {
  padding-left: 0 !important;
}
</style>
