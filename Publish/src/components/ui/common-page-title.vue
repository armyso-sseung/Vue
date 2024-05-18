<template>
  <h1
    :class="
      cn(
        'page-title subtitle1 pc:heading1 text-center pc:mb-10 pc:w-full',
        className
      )
    "
  >
    <slot></slot>
  </h1>
</template>

<script setup lang="ts">
  import { cn } from '~/utils/common-utils'

  const { className } = defineProps<{ className: string }>()
</script>

<style scoped></style>
