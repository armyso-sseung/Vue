<template>
  <li class="subtitle2 font-medium leading-8 text-gray7 hover:text-black">
    <NuxtLink :to="href">
      {{ menuName }}
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
  defineProps<{ href: string; menuName: string }>()
</script>

<style scoped></style>
