<template>
  <CommonTitle title="ThumbnailSlide" />
  <section>
    <h2 class="guide-sub-title">Mobile</h2>
    <p class="mb-4">
      data: slide에 사용할 데이터<br />
      showThumbNavMobile: mobile 환경 판단
    </p>
    <CommonThumbnailSlide
      :thumbnail-data="thumbnailSildeData"
      class-name="goods-main-slide mo:mt-10"
    />
    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section1" />
    </div>
  </section>
  <section>
    <h2 class="guide-sub-title">PC</h2>
    <CommonThumbnailSlide
      :thumbnail-data="thumbnailSildeData"
      :show-thumb-nav-mobile="!isMobile()"
      class-name="goods-main-slide mo:mt-10"
    />
    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section2" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'
  import CommonThumbnailSlide from '#components/ui/common-thumbnail-slide.vue'
  import { isMobile } from '#imports'
  import 'swiper/css'

  const thumbnailSildeData = [
    {
      type: 'video',
      thumbnailUrl:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      alt: ''
    },
    {
      type: 'image',
      thumbnailUrl: '/images/thumb/products/img_slider_01.jpg',
      alt: '상품1'
    },
    {
      type: 'image',
      thumbnailUrl: '/images/thumb/products/img_slider_02.jpg',
      alt: '상품2'
    },

    {
      type: 'image',
      thumbnailUrl: '/images/thumb/products/img_slider_03.jpg',
      alt: '상품3'
    },

    {
      type: 'image',
      thumbnailUrl: '/images/thumb/products/img_slider_04.jpg',
      alt: '상품4'
    },
    {
      type: 'image',
      thumbnailUrl: '/images/thumb/products/img_slider_05.jpg',
      alt: '상품5'
    }
  ]

  const language = 'javascript'
  const section1 = `
import CommonThumbnailSlide from '#components/ui/common-thumbnail-slide.vue'
import 'swiper/css'

<CommonThumbnailSlide
  :thumbnail-data="thumbnailSildeData"
  class-name="goods-main-slide mo:mt-10"
/>`

  const section2 = `
import CommonThumbnailSlide from '#components/ui/common-thumbnail-slide.vue'
import 'swiper/css'

<CommonThumbnailSlide
  :thumbnail-data="thumbnailSildeData"
  :show-thumb-nav-mobile="!isMobile()"
  class-name="goods-main-slide mo:mt-10"
/>`
</script>

<style scoped></style>
