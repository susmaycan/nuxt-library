<script setup lang="ts">
defineProps<{
  icon?: string
  id?: string
  isDisabled?: boolean
  isLoading?: boolean
  label?: string
  placeholder?: string
  rows?: number
  type?: 'password'
  value?: string
}>()

const emits = defineEmits(['change', 'input', 'enter'])

const onChange = (newValue: string) => {
  emits('change', newValue)
}
const onInput = (newValue: string) => {
  emits('input', newValue)
}
const onEnter = () => {
  emits('enter')
}

const onClearInput = () => {
  onChange('')
  onInput('')
}
</script>
<template>
  <label v-if="label" class="font-bold" :for="id">{{ label }} </label>
  <u-textarea
    :id="id"
    :disabled="isLoading || isDisabled"
    :icon="icon"
    :loading="isLoading"
    :model-value="value"
    :placeholder="placeholder"
    size="lg"
    :rows="rows"
    :type="type"
    :ui="{ icon: { trailing: { pointer: '' } } }"
    @change="onChange"
    @keypress.enter="onEnter"
    @update:model-value="onInput"
  >
    <template #trailing>
      <u-button
        v-show="value"
        :disabled="isLoading || isDisabled"
        color="gray"
        icon="i-heroicons-x-mark-20-solid"
        variant="link"
        @click.stop="onClearInput"
      />
    </template>
  </u-textarea>
</template>
<style scoped></style>
