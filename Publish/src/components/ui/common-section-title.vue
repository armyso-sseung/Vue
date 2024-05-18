<template>
  <div
    :class="cn('section-title subtitle1 pc:heading2 mb-2.5 pc:mb-9', className)"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { cn } from '#imports'

  interface SectionTitleProps {
    className?: string
  }
  const { className } = defineProps<SectionTitleProps>()
</script>

<style scoped></style>
