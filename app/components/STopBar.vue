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
        <u-navigation-menu
          :items="leftLinks"
          :ui="{
            active: 'text-xl py-3',
            inactive: 'text-xl py-3',
            avatar: {
              size: 'md'
            }
          }"
        />
        <slot name="left" />
      </div>
      <u-navigation-menu
        :items="centerLinks"
        :ui="{
          active: 'text-xl py-3',
          inactive: 'text-xl py-3',
          avatar: {
            size: 'md'
          }
        }"
      />
      <div class="flex items-center ml-auto">
        <u-navigation-menu
          :items="rightLinks"
          :ui="{
            active: 'text-xl py-3',
            inactive: 'text-xl py-3',
            avatar: {
              size: 'md'
            }
          }"
        />
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

      <!-- <u-slideover v-model="isOpen" :overlay="false" side="left">
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

          <u-navigation-menu
            :items="generalLinks"
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
      </u-slideover> -->
    </div>
  </client-only>
</template>
