<template>
  <div
    :class="
      cn(
        'relative flex h-10 w-full overflow-hidden border-y border-gray4 bg-white',
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
  import type { CounterProps } from '~/types/common/component-type'

  defineProps<CounterProps>()
</script>

<style scoped></style>
