<template>
  <SwiperSlide :style="{ ...slideSize }">
    <slot></slot>
  </SwiperSlide>
</template>

<script setup lang="ts">
  import { SwiperSlide } from 'swiper/vue'
  import type { BannerSlideProps } from '~/types/common/component-type'
  import {
    cardSize,
    fullSize
  } from '~/lib/common/ui/components/swiper-variables'
  import { isMobile } from '~/utils/device-utils'
  import { computed } from '#imports'

  const { type } = withDefaults(defineProps<BannerSlideProps>(), {
    type: 'card'
  })

  const full = type === 'full'

  const slideSize = computed(() => {
    return {
      width: full
        ? '100%'
        : !isMobile()
          ? cardSize.pc.width
          : cardSize.mo.width,
      height: full
        ? !isMobile()
          ? fullSize.pc.height
          : fullSize.mo.height
        : !isMobile()
          ? cardSize.pc.height
          : cardSize.mo.height
    }
  })
</script>
<script lang="ts">
  export default {
    name: 'SwiperSlide'
  }
</script>

<style scoped></style>
