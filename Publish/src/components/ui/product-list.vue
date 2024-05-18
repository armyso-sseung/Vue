<template>
  <CommonClientOnly>
    <ul
      :class="
        type === 'card'
          ? 'flex flex-wrap gap-x-3 gap-y-5 pc:gap-x-6 pc:gap-y-10'
          : ''
      "
    >
      <li
        v-for="(item, index) in data"
        :key="`${index}_${item.goodsNo}`"
        :class="type === 'card' ? cardStyle : 'mb-3 w-full last:mb-0'"
      >
        <NuxtLink :href="'/goods/detail/' + item.goodsNo" class="w-full">
          <ProductItem
            :data="getProductUnit(item as ProductUnit, dataType)"
            :type="type"
            :image-width="GoodsUnitImageWidth[type][DEVICE.PC]"
            :show-like="showLike"
            :hide-brand="hideBrand"
            :hide-review="hideReview"
            :hide-review-star="hideReviewStar"
            :hide-icon="hideIcon"
            :like-callback="likeCallback"
            :inflow-info="inflowInfo"
            :show-cart="showCart"
            :show-index="showIndex"
            :show-rank="showRank"
          />
        </NuxtLink>
      </li>
    </ul>
  </CommonClientOnly>
</template>

<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import type { ProductListProps } from '~/types/common/product-item-types'
  import { getProductUnit } from '~/utils/product-unit-utils'
  import { GoodsUnitImageWidth } from '~/lib/common/ui/image-variables'
  import { DEVICE } from '~/constants/x2bee-constants'
  import ProductItem from '#components/ui/product-item.vue'
  import type { ProductUnit } from '@/utils/product-unit-utils'
  import { isMobile } from '#imports'

  const props = withDefaults(defineProps<ProductListProps>(), {
    type: 'card',
    cols: 4
  })

  const cardStyle = computed(() => {
    return isMobile()
      ? `flex flex-none flex-wrap w-[calc(50%-6px)]`
      : `flex flex-none flex-wrap w-[${(1200 - 24 * (props.cols - 1)) / props.cols}]`
  })
</script>

<style scoped></style>
