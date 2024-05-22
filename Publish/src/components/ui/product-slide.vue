<template>
  <CommonClientOnly>
    <div class="swiper-product">
      <Swiper
        :space-between="isMobile() ? 12 : 24"
        :slides-per-view="isMobile() ? 1 : props.slidesPerView"
        :slides-per-group="isMobile() ? 1 : props.cols"
        :navigation="true"
        :modules="[Pagination, Navigation]"
      >
        <SwiperSlide
          v-for="(item, index) in props.data"
          :key="index"
          :style="{
            width: isMobile()
              ? '162px'
              : `calc((100% - ${(props.cols - 1) * 24}px) / ${props.cols})`
          }"
        >
          <NuxtLink :href="'/goods/detail/' + item.goodsNo">
            <ProductItem
              :data="getProductUnit(item as ProductUnit, dataType)"
              :image-width="
                isMobile()
                  ? GoodsUnitImageWidth.slide.mo
                  : GoodsUnitImageWidth.slide.pc
              "
              :show-like="props.showLike"
              :hide-brand="props.hideBrand"
              :hide-review="props.hideReview"
              :hide-review-star="props.hideReviewStar"
              :hide-icon="props.hideIcon"
              :rank="props.showRank ? index + 1 : undefined"
            />
          </NuxtLink>
        </SwiperSlide>
      </Swiper>
    </div>
  </CommonClientOnly>
</template>

<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import type { ProductListProps } from '@/types/common/product-item-types'
  import { getProductUnit } from '@/utils/product-unit-utils'
  import { GoodsUnitImageWidth } from '~/lib/common/ui/image-variables'
  import ProductItem from '@/components/ui/product-item.vue'
  import type { SwiperProps } from '~/types/common/component-type'
  import type { ProductUnit } from '@/utils/product-unit-utils'
  import { isMobile } from '#imports'

  interface ProductSlideListProps
    extends Omit<SwiperProps, 'type'>,
      ProductListProps {
    slidesPerView?: number
  }

  const props = withDefaults(defineProps<ProductSlideListProps>(), {
    slidesPerView: 4,
    cols: 4
  })
</script>

<style scoped></style>
