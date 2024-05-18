<script setup lang="ts">
  import { computed } from 'vue'
  import type { CommonProps } from '~/types/common/common-props'
  import { cn } from '~/utils/common-utils'

  const props = defineProps<CommonProps>()
  const className = computed(() =>
    cn('nodata my-10 text-center pc:my-28', props.className)
  )
</script>

<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<style scoped></style>
