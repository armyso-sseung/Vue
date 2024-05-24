<template>
  <div
    :class="
      cn(
        'absolute inset-0 flex size-full flex-col items-center justify-center mo:px-5'
      )
    "
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { cn } from '~/utils/common-utils'
</script>

<style scoped></style>
