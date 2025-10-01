<script setup lang="ts">
defineProps<{
  color?: 'error' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'neutral'
  icon?: string
  isDisabled?: boolean
  isLoading?: boolean
  isSubmitButton?: boolean
  variant?: IButtonVariant
}>()

const emits = defineEmits(['click'])
</script>

<template>
  <u-button
    class="text-base"
    :color="color"
    :disabled="isDisabled"
    :icon="icon"
    :loading="isLoading"
    :type="isSubmitButton ? 'submit' : undefined"
    :variant="variant || 'solid'"
    @click="emits('click')"
    :ui="{ base: 'cursor-pointer' }"
  >
    <slot />
  </u-button>
</template>

<style scoped></style>
