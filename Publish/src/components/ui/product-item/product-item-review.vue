<template>
  <div v-if="goodsRevCnt > 0" class="body2 mt-2 flex items-center gap-1">
    <NuxtImg
      v-if="!hideReviewStar"
      src="/images/icons/ico_star.svg"
      alt="평점"
    />
    <span class="font-bold">{{ goodsRevStarscrAvgVal }}</span>
    <span class="text-gray7">{{ goodsRevCnt.toLocaleString() }}건</span>
  </div>
</template>

<script setup lang="ts">
  const { goodsRevStarscrAvgVal, goodsRevCnt, hideReviewStar } = defineProps<{
    goodsRevStarscrAvgVal: number
    goodsRevCnt: number
    hideReviewStar?: boolean
  }>()
</script>

<style scoped></style>
