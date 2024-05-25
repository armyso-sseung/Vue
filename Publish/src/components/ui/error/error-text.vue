<template>
  <p :class="cn('body1 mt-3 whitespace-pre text-center ', className)">
    <slot></slot>
  </p>
</template>

<script setup lang="ts">
  import type { ErrorTextProps } from '~/types/common/component-type'
  import { cn } from '~/utils/common-utils'

  defineProps<ErrorTextProps>()
</script>

<style scoped></style>
