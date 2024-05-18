<script setup lang="ts">
  import type { CommonProps } from '~/types/common/common-props'

  interface FormProps extends CommonProps {}

  const props = defineProps<FormProps>()
</script>

<template>
  <div :class="`form-row${props.className ? ' ' + props.className : ''}`">
    <slot></slot>
  </div>
</template>

<style scoped></style>
