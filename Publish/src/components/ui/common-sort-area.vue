<template>
  <div
    :class="`sort-area flex items-center justify-between ${className ? ' ' + className : ''}`"
    v-bind="$attrs"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import type { SortAreaProps } from '~/types/common/component-type'

  defineProps<SortAreaProps>()
</script>

<style scoped></style>
