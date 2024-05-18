<template>
  <p v-if="brandNm" class="body2 ellipsis-2 font-bold">{{ brandNm }}</p>
</template>

<script setup lang="ts">
  const { brandNm } = defineProps<{ brandNm?: string }>()
</script>

<style scoped></style>
