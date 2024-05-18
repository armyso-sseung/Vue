<template>
  <div :class="cn('tab-menu flex', className)">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import type { TabsListProps } from '~/types/common/component-type'
  import { cn } from '~/utils/common-utils'

  defineProps<TabsListProps>()
</script>

<style scoped></style>
