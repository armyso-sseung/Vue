<template>
  <div class="mt-1 flex w-full flex-wrap items-center">
    <span v-if="dcRate > 0" class="body2 block w-full text-gray7 line-through">
      {{ rcntSalePrc.toLocaleString() }}
    </span>
    <span v-if="dcRate > 0" class="body1 mr-1 font-bold text-primary">
      {{ dcRate }}%
    </span>
    <span class="body1 font-bold">
      {{ aplyPrc.toLocaleString() }}
      <span class="body2 font-default">원</span>
    </span>
  </div>
</template>

<script setup lang="ts">
  const { rcntSalePrc, dcRate, aplyPrc } = defineProps<{
    rcntSalePrc: number | string
    dcRate: number
    aplyPrc: number
  }>()
</script>

<style scoped></style>
