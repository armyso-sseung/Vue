<template>
  <div :class="`swiper-thumbnail-type${className ? ' ' + className : ''}`">
    <Swiper
      :loop="true"
      :space-between="0"
      :slides-per-view="1"
      :pagination="{
        enabled: true,
        type: 'fraction',
        clickable: true
      }"
      :zoom="zoom"
      :thumbs="thumbs"
      :modules="modules"
      class="main-thumb"
    >
      <SwiperSlide
        v-for="(thumbnail, idx) in thumbnailData"
        :key="idx"
        class="w-full pc:w-[486px]"
      >
        <div
          v-if="thumbnail.type === 'video'"
          :class="`thumb-container ${zoom ? 'swiper-zoom-container' : ''}`"
        >
          <CommonVideoPlayer
            :source="s3Image({ src: thumbnail.thumbnailUrl })"
            video-class-name="thumb-item"
          />
        </div>

        <div
          v-else
          :class="`thumb-container ${zoom ? 'swiper-zoom-container' : ''}`"
          @click="() => console.log('팝업호출')"
        >
          <CommonImgMedia
            :src="s3Image({ src: thumbnail.thumbnailUrl })"
            :alt="thumbnail.alt"
            class-name="thumb-item"
          />
        </div>
      </SwiperSlide>
    </Swiper>

    <Swiper
      v-if="showThumbNavMobile"
      :on-swiper="onClickSwiper"
      direction="vertical"
      :space-between="12"
      :navigation="true"
      slides-per-view="auto"
      :watch-slides-progress="true"
      :modules="[FreeMode, Navigation, Thumbs]"
      class="nav-thumb block px-5 pc:px-0"
    >
      <SwiperSlide v-for="(thumb, idx) in thumbnailData" :key="idx">
        <div class="thumb-container">
          <CommonVideoPlayer
            v-if="thumb.type === 'video'"
            :source="s3Image({ src: thumb.thumbnailUrl })"
            :controls="false"
            :is-playable="false"
            video-class-name="thumb-item"
          />
          <CommonImgMedia
            v-else
            :src="s3Image({ src: thumb.thumbnailUrl })"
            :alt="thumb.alt"
            class="thumb-item"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import {
    FreeMode,
    Navigation,
    Pagination,
    Thumbs,
    Zoom
  } from 'swiper/modules'
  import { ref } from '#imports'
  import s3Image from '~/utils/s3-image'
  import type { ThumbnailSlideProps } from '~/types/common/component-type'
  import CommonImgMedia from '#components/ui/common-img-media.vue'
  import CommonVideoPlayer from '#components/ui/common-video-player.vue'

  const { zoom, showThumbNavMobile } = withDefaults(
    defineProps<ThumbnailSlideProps>(),
    {
      zoom: false,
      showThumbNavMobile: false
    }
  )

  const thumbsSwiper = ref(null)
  const modules = zoom ? [Pagination, Thumbs, Zoom] : [Pagination, Thumbs]

  // 썸네일 스와이퍼가 없을경우 참조오류 발생대응
  const thumbs: any = showThumbNavMobile ? { swiper: thumbsSwiper } : undefined

  const onClickSwiper = (thumbnail: any) => {
    thumbsSwiper.value = thumbnail
  }
</script>

<style scoped></style>
