<template>
  <div
    id="container"
    :class="`container relative w-full max-w-full flex-auto bg-white mo:pb-12 pc:pb-24 ${btnFloating ? ' btn-fixed' : ''}`"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import type { ContainerProps } from '~/types/common/component-type'

  defineProps<ContainerProps>()
</script>

<style scoped></style>
