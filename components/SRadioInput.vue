<script setup lang="ts">
defineProps<{
  icon?: string
  id?: string
  isDisabled?: boolean
  isLoading?: boolean
  options: ISelectOption[]
  label?: string
  orientation?: 'horizontal' | 'vertical'
  placeholder?: string
  value?: string
}>()

const emits = defineEmits(['change', 'input', 'enter'])

const onChange = (newValue: string) => {
  emits('change', newValue)
}
const onInput = (newValue: string) => {
  emits('input', newValue)
}
</script>
<template>
  <label v-if="label" class="font-bold" :for="id">{{ label }} </label>
  <u-radio-group
    :id="id"
    :disabled="isLoading || isDisabled"
    :icon="icon"
    :loading="isLoading"
    :model-value="value"
    :placeholder="placeholder"
    :options="options"
    option-attribute="name"
    :orientation="orientation || 'horizontal '"
    size="lg"
    @change="onChange"
    @update:model-value="onInput"
  />
</template>
<style scoped></style>
