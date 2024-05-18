<template>
  <a-select-option
    :class="className"
    :value="value"
    :title="label"
    :disabled="disabled"
  >
    <slot></slot>
  </a-select-option>
</template>

<script setup lang="ts">
  import type { SelectOptionItemProps } from '~/types/common/component-type'

  withDefaults(defineProps<SelectOptionItemProps>(), {
    disabled: false
  })
</script>

<style scoped></style>
