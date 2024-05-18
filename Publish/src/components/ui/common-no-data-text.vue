<script setup lang="ts">
  import { computed } from 'vue'
  import type { CommonProps } from '~/types/common/common-props'
  import { cn } from '~/utils/common-utils'

  const props = defineProps<CommonProps>()
  const className = computed(() =>
    cn('no-txt mt-3 text-center text-xs text-gray7', props.className)
  )
</script>

<template>
  <p :class="className">
    <slot></slot>
  </p>
</template>

<style scoped></style>
