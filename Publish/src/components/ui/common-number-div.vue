<template>
  <div
    :class="
      cn(
        'min-w-22 w-full self-center text-center text-sm focus:outline-none',
        className
      )
    "
    v-bind="$attrs"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { cn } from '~/utils/common-utils.js'
  import type { NumberDivProps } from '~/types/common/component-type'

  defineProps<NumberDivProps>()
</script>

<style scoped></style>
