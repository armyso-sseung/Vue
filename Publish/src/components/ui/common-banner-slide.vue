<template>
  <CommonClientOnly>
    <div :class="`swiper-type-${full ? 'full' : 'card'}`">
      <Swiper
        ref="swiperRef"
        :space-between="full ? 0 : !isMobile() ? 24 : 12"
        :slides-per-group="!isMobile() ? slideCount : 1"
        slides-per-view="auto"
        :pagination="{
          enabled: true,
          type: 'fraction',
          clickable: true
        }"
        :navigation="!isMobile()"
        :loop="props.loop"
        :autoplay="props.autoplay"
        :modules="[Pagination, Navigation, Autoplay]"
        :class="
          cn(
            SlideBannerVariants({
              type: props.type
            })
          )
        "
      >
        <slot></slot>
        <div
          v-if="full"
          class="absolute bottom-5 right-[72px] z-10 size-5 leading-5 pc:left-[calc(50%-38px)] pc:right-auto pc:-translate-x-1/2"
        >
          <button
            type="button"
            class="btn-play-control"
            @click="toggleAutoPlay"
          >
            <CommonImgMedia
              :src="isPlaying ? ICON_SWIPER_STOP_PATH : ICON_SWIPER_PLAY_PATH"
              alt="isPlaying ? 'Pause' : 'Play'"
            />
          </button>
        </div>
      </Swiper>
    </div>
  </CommonClientOnly>
</template>

<script setup lang="ts">
  import { Autoplay, Navigation, Pagination } from 'swiper/modules'
  import { Swiper } from 'swiper/vue'
  import { cn, isMobile, ref } from '#imports'
  import type { BannerSlideProps } from '~/types/common/component-type'
  import { SlideBannerVariants } from '~/lib/common/ui/components/swiper-variables'
  import {
    ICON_SWIPER_PLAY_PATH,
    ICON_SWIPER_STOP_PATH
  } from '~/constants/x2bee-constants'
  import CommonImgMedia from '#components/ui/common-img-media.vue'
  import 'swiper/css'
  import 'swiper/css/navigation'

  type PropsType = Pick<BannerSlideProps, 'type'> & {
    loop: boolean
    autoplay: boolean
  }
  const props = withDefaults(defineProps<PropsType>(), {
    type: 'card',
    loop: false,
    autoplay: false
  })

  const swiperRef = ref<any>(null)
  const isPlaying = ref(true)

  const full = props.type === 'full'
  const slideCount = full ? 1 : 3

  const toggleAutoPlay = () => {
    const swiperInstance = swiperRef.value.$el.swiper
    isPlaying.value
      ? swiperInstance.autoplay.stop()
      : swiperInstance.autoplay.start()
    isPlaying.value = !isPlaying.value
  }
</script>

<style scoped></style>
