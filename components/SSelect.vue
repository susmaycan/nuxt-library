<script setup lang="ts">
defineProps<{
  ariaLabel?: string
  isDisabled?: boolean
  isLoading?: boolean
  label?: string
  name?: string
  options: ISelectOption[]
  placeholder?: string
  value: string
}>()

const emit = defineEmits(['change'])

const onChange = (newValue: string) => {
  emit('change', newValue)
}
</script>

<template>
  <div class="flex flex-col">
    <label v-if="label" class="label" :for="name">{{ label }}</label>
    <u-input-menu
      :id="name"
      :aria-label="ariaLabel || label"
      :disabled="isDisabled || isLoading"
      :loading="isLoading"
      :model-value="value"
      :placeholder="placeholder"
      :options="options"
      option-attribute="name"
      value-attribute="value"
      @change="onChange"
    />
  </div>
</template>
<style scoped>
.label {
  font-size: 0.9rem;
  font-weight: 600;
}
</style>
