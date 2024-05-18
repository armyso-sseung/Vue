<template>
  <div
    v-if="rank"
    class="body2 pc:body1 absolute right-0 top-0 z-10 flex size-7 items-center justify-center bg-black font-bold text-white pc:size-9"
  >
    {{ rank }}
  </div>
</template>

<script setup lang="ts">
  const { rank } = defineProps<{ rank?: number }>()
</script>

<style scoped></style>
