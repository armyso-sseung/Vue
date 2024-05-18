<template>
  <div :class="`steps-custom${className ? ' ' + className : ''}`">
    <a-steps
      :items="items"
      :progress-dot="progressDot"
      :current="current"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup lang="ts">
  import type { CommonStepsProps } from '~/types/common/component-type'

  withDefaults(defineProps<CommonStepsProps>(), {
    items: () => [
      {
        title: '주문상세'
      },
      {
        title: '상품준비중'
      },
      {
        title: '배송중'
      },
      {
        title: '배송완료'
      }
    ],
    progressDot: true
  })
</script>

<style scoped></style>
