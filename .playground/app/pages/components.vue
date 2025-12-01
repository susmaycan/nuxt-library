<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})

const inputValue = ref('')
const textAreaValue = ref('')
const selectValue = ref('')
const radioValue = ref('')
const toggleValue = ref(false)
</script>
<template>
  <div>
    <s-title>{{ $t('components') }}</s-title>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div class="flex flex-col gap-1">
        <s-subtitle>Buttons</s-subtitle>
        <s-button @click="console.log('click works')">Clicky!</s-button>
        <s-button variant="ghost">Clicky ghost!</s-button>
      </div>
      <div class="flex flex-col gap-1">
        <s-subtitle>Image</s-subtitle>
        <s-image
          url="https://picsum.photos/200"
          alt="Random image from picsum"
          :width="200"
          :height="200"
        />
      </div>
      <div class="flex flex-col gap-1">
        <s-subtitle>Pagination</s-subtitle>
        <s-pagination :page="1" total="30" />
      </div>
      <div class="flex flex-col gap-1">
        <s-subtitle>Input</s-subtitle>
        <p>Current value: {{ inputValue }}</p>
        <s-input
          :value="inputValue"
          label="Text Input"
          placeholder="Type something..."
          @input="inputValue = $event"
        />
      </div>
      <div class="flex flex-col gap-1">
        <s-subtitle>Textarea</s-subtitle>
        <p>Current value: {{ textAreaValue }}</p>
        <s-text-area label="Textarea" :value="textAreaValue" placeholder="Type something..."
        variant="ghost" @input="textAreaValue = $event" "/>
      </div>
      <div class="flex flex-col gap-1">
        <s-subtitle>Select</s-subtitle>
        <p>Selected value: {{ selectValue }}</p>
        <s-select
          label="Choose an option"
          :options="[
            { name: 'Option 1', value: '1' },
            { name: 'Option 2', value: '2' },
            { name: 'Option 3', value: '3' }
          ]"
          placeholder="Select an option"
          :value="selectValue"
          @change="selectValue = $event"
        />
      </div>
      <div class="flex flex-col gap-1">
        <s-subtitle>Radio input</s-subtitle>
        <p>Selected value: {{ radioValue }}</p>
        <s-radio-input
          label="Choose an option"
          :options="[
            { name: 'Option A', value: 'A' },
            {
              name: 'Option B',
              value: 'B'
            },
            { name: 'Option C', value: 'C' }
          ]"
          :value="radioValue"
          @input="radioValue = $event"
        />
      </div>
    </div>
    <div class="flex flex-col gap-1">
      <s-subtitle>Toggle input</s-subtitle>
      <p>Selected value: {{ toggleValue }}</p>
      <s-radio-input
        label="Choose an option"
        :options="[
          { name: 'Option A', value: 'A' },
          {
            name: 'Option B',
            value: 'B'
          },
          { name: 'Option C', value: 'C' }
        ]"
        :value="radioValue"
        @input="radioValue = $event"
      />
    </div>
  </div>
</template>

<style scoped></style>
