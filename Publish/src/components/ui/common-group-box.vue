<script setup lang="ts">
  import type { CommonProps } from '~/types/common/common-props'

  interface GroupBoxProps extends CommonProps {
    type: 'box-gray' | 'border' | 'no-border'
  }

  const props = defineProps<GroupBoxProps>()
</script>

<template>
  <div
    :class="`groupbox ${props.type}${props.className ? ' ' + props.className : ''}`"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
  @import '@/assets/styles/common/group-box.css';
</style>
