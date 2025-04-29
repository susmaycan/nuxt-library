<script setup lang="ts">
defineProps<{
  label?: string
  ariaLabel?: string
  name?: string
  options: ISelectOption[]
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
      :model-value="value"
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
