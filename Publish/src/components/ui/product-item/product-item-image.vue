<template>
  <div
    :class="
      cn(
        type === 'list' ? listStyle : defaultStyle,
        data.saleStatCd === SOLD_OUT_SALE_STAT_CD ? 'img_soldout' : ''
      )
    "
  >
    <CommonImgMedia
      :src="data.goodsRepImgPathNm"
      :alt="data.goodsNm"
      :width="imageWidth ?? GoodsUnitImageWidth.default.pc"
      class-name="absolute size-full object-contain"
    />
  </div>
</template>

<script setup lang="ts">
  import { cn } from '~/utils/common-utils'
  import type { ProductItemProps } from '~/types/common/product-item-types'
  import { GoodsUnitImageWidth } from '~/lib/common/ui/image-variables'
  import CommonImgMedia from '#components/ui/common-img-media.vue'

  const { data, type, imageWidth } = defineProps<ProductItemProps>()

  const SOLD_OUT_SALE_STAT_CD = '20'

  const listStyle = 'relative mr-2.5 size-[80px] shrink-0 pc:size-[100px]'
  const defaultStyle =
    'relative mb-1.5 h-0 w-full shrink-0 mo:pb-[100%] pc:mb-3 pc:size-[282px]'
</script>

<style scoped></style>
