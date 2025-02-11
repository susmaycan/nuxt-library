<script setup lang="ts">
const { isAuthenticated } = useAuth()
const { isMobile } = useMobile()
const props = defineProps<{
  links: ISidebarLink[]
}>()

const generalLinks = computed(() => {
  const leftLinks = props.links
    .filter((link) => link.placement === 'left')
    .filter((link) => link.authenticated === isAuthenticated.value)
  const rightLinks = props.links
    .filter((link) => link.placement === 'right')
    .filter((link) => link.authenticated === isAuthenticated.value)

  return [leftLinks, rightLinks]
})

const isOpen = ref(false)
const toggleSidebar = () => (isOpen.value = !isOpen.value)
</script>

<template>
  <div v-if="!isMobile" class="flex justify-center items-center mb-5">
    <u-horizontal-navigation
      :links="generalLinks"
      :ui="{
        active: 'text-xl py-3',
        inactive: 'text-xl py-3',
        avatar: {
          size: 'md'
        }
      }"
    />
    <div class="flex items-center ml-auto">
      <slot name="right">
        <s-theme-switch />
        <s-lang-switcher />
      </slot>
    </div>
  </div>
  <div v-else class="flex items-center justify-between mb-5 text-center">
    <s-button
      color="gray"
      icon="i-heroicons-bars-3"
      :variant="EButtonVariant.ghost"
      @click="toggleSidebar"
    />
    <slot name="title" />
    <div class="flex items-center">
      <slot name="right" />
    </div>

    <u-slideover v-model="isOpen" :overlay="false" side="left">
      <div class="p-4 flex-1">
        <div class="flex items-center justify-between pb-2">
          <s-button
            color="gray"
            icon="i-heroicons-bars-3"
            :variant="EButtonVariant.ghost"
            @click="toggleSidebar"
          />
          <slot name="title" />
          <s-button
            color="gray"
            icon="i-heroicons-x-mark-20-solid"
            :variant="EButtonVariant.ghost"
            @click="isOpen = false"
          />
        </div>

        <u-vertical-navigation
          :links="links"
          :ui="{
            active: 'text-xl py-3',
            inactive: 'text-xl py-3',
            avatar: {
              size: 'md'
            }
          }"
          @click="isOpen = false"
        />
        <slot name="bottom" />
      </div>
    </u-slideover>
  </div>
</template>
