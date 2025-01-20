<script setup lang="ts">
const props = defineProps<{
  options: ISelectOption[]
  value: string
}>()

const emit = defineEmits(['change'])

const onChange = (newValue: string) => {
  emit('change', newValue)
}
</script>

<template>
  <u-inputMenu
    :model-value="value"
    :options="options"
    @change="onChange"
    option-attribute="name"
    value-attribute="value"
  />
</template>
