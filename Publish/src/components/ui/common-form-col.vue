<script setup lang="ts">
  import type { CommonProps } from '~/types/common/common-props'

  interface FormColProps extends CommonProps {
    gap?: 'small' | 'medium' | 'large' | '0'
    wrap?: boolean
  }

  const props = withDefaults(defineProps<FormColProps>(), {
    gap: 'small'
  })
</script>

<template>
  <div
    :class="`form-col gap-${props.gap}${props.wrap ? ' wrap' : ''}${props.className ? ' ' + props.className : ''}`"
  >
    <slot></slot>
  </div>
</template>

<style scoped></style>
