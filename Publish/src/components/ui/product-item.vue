<template>
  <div
    :class="type === 'list' ? 'relative flex pc:max-w-full' : 'relative w-full'"
  >
    <!--상품랭킹번호-->
    <ProductItemRank v-if="showRank" :rank="rank" />
    <!-- 상품 순번 -->
    <ProductItemIndex v-if="showIndex" :index="index" />
    <!-- 상품이미지 -->
    <ProductItemImage :data="data" :type="type" :image-width="imageWidth" />
    <div class="relative flex flex-auto flex-col items-start">
      <div class="w-full">
        <!-- 상품 좋아요 -->
        <ProductItemControl
          :show-like="showLike"
          :show-cart="showCart"
          :goods-no="data.goodsNo"
        />
        <!-- 상품 브랜드 -->
        <ProductItemBrand v-if="!hideBrand" :brand-nm="data.brandNm" />
        <!-- 상품명 -->
        <p class="body1">{{ data.goodsNm }}</p>
      </div>
      <!-- 상품 가격 정보 -->
      <ProductItemPrice
        :aply-prc="data.aplyPrc"
        :dc-rate="data.dcRate || 0"
        :rcnt-sale-prc="data.rcntSalePrc"
      />
      <!-- 상품 리뷰 정보 -->
      <ProductItemReview
        v-if="!hideReview"
        :goods-rev-cnt="Number(data.goodsRevCnt) || 0"
        :goods-rev-starscr-avg-val="data.goodsRevStarscrAvgVal || 0"
        :hide-review-star="hideReviewStar"
      />
      <!-- 상품 아이콘 정보 -->
      <CommonIconList v-if="!hideIcon" :icon-list="data.iconList || []" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ProductItemProps } from '~/types/common/product-item-types'
  import ProductItemImage from '~/components/ui/product-item/product-item-image.vue'
  import ProductItemRank from '#components/ui/product-item/product-item-rank.vue'
  import ProductItemIndex from '#components/ui/product-item/product-item-index.vue'
  import ProductItemBrand from '#components/ui/product-item/product-item-brand.vue'
  import ProductItemPrice from '#components/ui/product-item/product-item-price.vue'
  import ProductItemReview from '#components/ui/product-item/product-item-review.vue'
  import CommonIconList from '#components/ui/common-icon-list.vue'
  import ProductItemControl from '#components/ui/product-item/product-item-control.vue'

  const {
    data,
    type,
    imageWidth,
    rank,
    index,
    showLike,
    hideBrand,
    hideReview,
    hideReviewStar,
    hideIcon,
    showCart,
    showRank,
    showIndex
  } = defineProps<ProductItemProps>()
</script>

<style scoped></style>
