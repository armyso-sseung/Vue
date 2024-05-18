<template>
  <div :class="cn(TimeLineContainerVariants({}), className)" v-bind="$attrs">
    <CommonDivider />
    <div class="time-line-container-title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import type { TimeLineContainerProps } from '~/types/common/component-type'
  import { TimeLineContainerVariants } from '~/lib/common/ui/components/time-line-variables'
  import { cn } from '~/utils/common-utils'
  import CommonDivider from '#components/ui/common-divider.vue'
  import '@/assets/styles/common/time-line.css'

  defineProps<TimeLineContainerProps>()
</script>

<style scoped></style>
