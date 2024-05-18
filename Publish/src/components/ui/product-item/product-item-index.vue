<template>
  <div v-if="index" class="body1 mb-3">상품{{ index }}</div>
</template>

<script setup lang="ts">
  const { index } = defineProps<{ index?: number }>()
</script>

<style scoped></style>
