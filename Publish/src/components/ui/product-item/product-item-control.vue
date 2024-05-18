<template>
  <div
    v-if="showLike || showCart"
    class="my-1 flex justify-end space-x-2 pc:mt-0"
  >
    <CommonLikeButton
      v-if="showLike"
      :wish-no="goodsNo"
      type="product"
      :callback="likeCallback"
      class-name="size-5"
      :wish-yn="isLike ?? 'N'"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import CommonLikeButton from '#components/ui/common-like-button.vue'
  import { useGoodsLikeStore } from '~/stores/common/use-goods-like-store'

  const { goodsNo, showLike, likeCallback } = defineProps<{
    goodsNo: string
    showLike?: boolean
    likeCallback?: () => {}
    showCart?: boolean
  }>()
  const goodsLikeStore = useGoodsLikeStore()
  const isLike = ref(goodsLikeStore.goodsLikes[goodsNo] ? 'Y' : 'N' || 'N')

  watch(goodsLikeStore.$state, (state) => {
    isLike.value = state.goodsLikes[goodsNo] ? 'Y' : 'N'
  })
</script>

<style scoped></style>
