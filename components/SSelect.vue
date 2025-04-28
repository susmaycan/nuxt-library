<script setup lang="ts">
defineProps<{
  options: ISelectOption[]
  value: string
}>()

const emit = defineEmits(['change'])

const onChange = (newValue: string) => {
  emit('change', newValue)
}
</script>

<template>
  <u-input-menu
    :model-value="value"
    :options="options"
    option-attribute="name"
    value-attribute="value"
    @change="onChange"
  />
</template>
