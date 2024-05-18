<template>
  <button
    :class="
      cn(
        `flex size-10 shrink-0 items-center justify-center border-x border-gray4 font-bold text-black ${disabled ? 'pointer-events-none opacity-40' : ''}`,
        className
      )
    "
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
  import { cn } from '~/utils/common-utils.js'
  import type { CounterButtonProps } from '~/types/common/component-type'

  withDefaults(defineProps<CounterButtonProps>(), {
    disabled: false
  })
</script>

<style scoped></style>
