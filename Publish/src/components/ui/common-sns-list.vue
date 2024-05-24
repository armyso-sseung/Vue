<template>
  <ul class="grap flex flex-row justify-between">
    <li v-for="(sns, idx) in snsData" :key="idx">
      <NuxtLink :to="sns.snsLink" class="w-full">
        <CommonSnsItem :sns-data="sns" />
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import type { SnsListProps } from '~/types/common/component-type'
  import CommonSnsItem from '#components/ui/common-sns-item.vue'

  defineProps<SnsListProps>()
</script>

<style scoped></style>
