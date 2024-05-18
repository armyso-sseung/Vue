<script setup lang="ts">
  import { cn } from '@/utils/common-utils'
  import type { CommonProps } from '~/types/common/common-props'

  const { className } = withDefaults(defineProps<CommonProps>(), {
    className: ''
  })
</script>

<template>
  <div :class="cn('caution', className)">
    <slot></slot>
  </div>
</template>
