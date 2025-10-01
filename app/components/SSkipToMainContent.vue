<script setup lang="ts">
defineProps<{
  target?: string
}>()
</script>
<template>
  <a
    class="skip-to-content-link border-b-gray-600 border-r-gray-600 dark:border-b-gray-100 dark:border-r-gray-100"
    :href="target || '#main'"
  >
    {{ $t('skip_to_content') }}
  </a>
</template>
<style scoped>
.skip-to-content-link {
  background-color: var(--ui-color-primary-500);
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-right-style: solid;
  border-right-width: 3px;
  height: 0;
  width: 0;
  left: 0;
  opacity: 0;
  padding: 1rem;
  position: absolute;
  top: 0;
  transition: opacity 0.3s;
  z-index: 9999;
  clip: rect(1px, 1px, 1px, 1px);
}
.skip-to-content-link:focus {
  opacity: 1;
  height: auto;
  width: auto;
  clip: auto;
}

.skip-to-content-link:hover {
  text-decoration: underline;
}
</style>
