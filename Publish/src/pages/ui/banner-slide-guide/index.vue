<template>
  <CommonTitle title="BannerSlide Guide" />
  <section>
    <h2 class="guide-sub-title">type='card' (default)</h2>
    <div class="component-container default-type !ml-0 w-large">
      <CommonBannerSlide>
        <CommonBannerSlideContents
          v-for="(card, idx) in cardSlideBannerData"
          :key="idx"
        >
          <NuxtLink :to="card.linkUrl" :class="cardStyles.linkBox">
            <CommonImgMedia
              :src="card.imgUrl"
              :alt="card.title"
              :width="isMobile() ? 242 : 384"
              :class-name="cardStyles.img"
            />
            <div
              :class="
                cn(
                  cardStyles.textBox,
                  card.fontColor ? 'text-' + card.fontColor : 'text-black'
                )
              "
            >
              <div :class="cardStyles.title">{{ card.title }}</div>
              <div :class="cardStyles.description">{{ card.description }}</div>
            </div>
          </NuxtLink>
        </CommonBannerSlideContents>
      </CommonBannerSlide>
    </div>
    <CommonCodeBlock :language="language" :value="section1" />
  </section>

  <section>
    <h2 class="guide-sub-title">type='full'</h2>
    <div class="component-container w-full">
      <CommonBannerSlide type="full" loop autoplay>
        <CommonBannerSlideContents
          v-for="(full, idx) in fullSlideBannerData"
          :key="idx"
          type="full"
        >
          <NuxtLink :to="full.linkUrl" :class="fullStyles.linkBox">
            <CommonImgMedia
              :src="full.imgUrl"
              :alt="full.title"
              :class-name="fullStyles.img"
              :pc-src="full.imgUrlPc"
              :pc-alt="full.title"
              :pc-class-name="fullStyles.img"
              :pc-width="SwiperImageWidth.full"
            />
            <div
              :class="
                cn(
                  fullStyles.textBox,
                  full.fontColor ? 'text-' + full.fontColor : 'text-black'
                )
              "
            >
              <div :class="fullStyles.title">{{ full.title }}</div>
              <div :class="fullStyles.description">{{ full.description }}</div>
            </div>
          </NuxtLink>
        </CommonBannerSlideContents>
      </CommonBannerSlide>
    </div>
    <CommonCodeBlock :language="language" :value="section2" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonBannerSlide from '#components/ui/common-banner-slide.vue'
  import CommonBannerSlideContents from '#components/ui/common-banner-slide-contents.vue'
  import { cardStyles, fullStyles } from '~/lib/common/ui/banner-variables'
  import CommonImgMedia from '#components/ui/common-img-media.vue'
  import { cn, isMobile } from '#imports'
  import { SwiperImageWidth } from '#components/ui/image/image-variables'
  import 'swiper/css'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const cardSlideBannerData = [
    {
      imgUrl: '/images/thumb/banner/small_01.jpg',
      linkUrl: '',
      title: '새콤달콤,종류도 맛도 다양한 향긋한 딸기 백화점',
      description: '맛과 영양이 농축된 60일 딸기',
      fontColor: ''
    },
    {
      imgUrl: '/images/thumb/banner/small_02.jpg',
      linkUrl: '',
      title: '새콤달콤,종류도 맛도 다양한 향긋한 딸기 백화점',
      description: '맛과 영양이 농축된 60일 딸기',
      fontColor: 'orange'
    },
    {
      imgUrl: '/images/thumb/banner/small_03.jpg',
      linkUrl: '',
      title: '새콤달콤,종류도 맛도 다양한 향긋한 딸기 백화점',
      description: '맛과 영양이 농축된 60일 딸기',
      fontColor: ''
    },
    {
      imgUrl: '/images/thumb/banner/small_01.jpg',
      linkUrl: '',
      title: '새콤달콤,종류도 맛도 다양한 향긋한 딸기 백화점',
      description: '맛과 영양이 농축된 60일 딸기',
      fontColor: ''
    },
    {
      imgUrl: '/images/thumb/banner/small_03.jpg',
      linkUrl: '',
      title: '새콤달콤,종류도 맛도 다양한 향긋한 딸기 백화점',
      description: '맛과 영양이 농축된 60일 딸기',
      fontColor: ''
    },
    {
      imgUrl: '/images/thumb/banner/small_01.jpg',
      linkUrl: '',
      title: '새콤달콤,종류도 맛도 다양한 향긋한 딸기 백화점',
      description: '맛과 영양이 농축된 60일 딸기',
      fontColor: ''
    },
    {
      imgUrl: '/images/thumb/banner/small_03.jpg',
      linkUrl: '',
      title: '새콤달콤,종류도 맛도 다양한 향긋한 딸기 백화점',
      description: '맛과 영양이 농축된 60일 딸기',
      fontColor: ''
    },
    {
      imgUrl: '/images/thumb/banner/small_01.jpg',
      linkUrl: '',
      title: '새콤달콤,종류도 맛도 다양한 향긋한 딸기 백화점',
      description: '맛과 영양이 농축된 60일 딸기',
      fontColor: ''
    }
  ]

  const fullSlideBannerData = [
    {
      imgUrl: '/images/thumb/banner/big_mo.jpg',
      imgUrlPc: '/images/thumb/banner/big_01.jpg',
      linkUrl: '',
      title: '마트 대란 난축맛돈부터 우리 흑돈MANIAC 1',
      description: '베스트 상품 최대 30%',
      fontColor: 'white'
    },
    {
      imgUrl: '/images/thumb/banner/big_mo.jpg',
      imgUrlPc: '/images/thumb/banner/big_01.jpg',
      linkUrl: '',
      title: '마트 대란 난축맛돈부터 우리 흑돈MANIAC 2',
      description: '베스트 상품 최대 30%',
      fontColor: 'primary'
    },
    {
      imgUrl: '/images/thumb/banner/big_mo.jpg',
      imgUrlPc: '/images/thumb/banner/big_01.jpg',
      linkUrl: '',
      title: '마트 대란 난축맛돈부터 우리 흑돈MANIAC 3',
      description: '베스트 상품 최대 30%',
      fontColor: ''
    }
  ]

  const language = 'javascript'
  const section1 = `
import CommonBannerSlide from '#components/ui/common-banner-slide.vue'
import CommonBannerSlideContents from '#components/ui/common-banner-slide-contents.vue'
import CommonImgMedia from '#components/ui/common-img-media.vue'
import { cardStyles } from '~/lib/common/ui/banner-variables'
import { cn, isMobile } from '#imports'
import 'swiper/css'

<div class="component-container default-type !ml-0 w-large">
  <CommonBannerSlide>
    <CommonBannerSlideContents
      v-for="(card, idx) in cardSlideBannerData"
      :key="idx"
    >
      <NuxtLink :to="card.linkUrl" :class="cardStyles.linkBox">
        <CommonImgMedia
          :src="card.imgUrl"
          :alt="card.title"
          :width="isMobile() ? 242 : 384"
          :class-name="cardStyles.img"
        />
        <div
          :class="
            cn(
              cardStyles.textBox,
              card.fontColor ? 'text-' + card.fontColor : 'text-black'
            )
          "
        >
          <div :class="cardStyles.title">{{ card.title }}</div>
          <div :class="cardStyles.description">{{ card.description }}</div>
        </div>
      </NuxtLink>
    </CommonBannerSlideContents>
  </CommonBannerSlide>
</div>`

  const section2 = `
import CommonBannerSlide from '#components/ui/common-banner-slide.vue'
import CommonBannerSlideContents from '#components/ui/common-banner-slide-contents.vue'
import { SwiperImageWidth } from '#components/ui/image/image-variables'
import CommonImgMedia from '#components/ui/common-img-media.vue'
import { fullStyles } from '~/lib/common/ui/banner-variables'
import { cn } from '#imports'
import 'swiper/css'

<CommonBannerSlide type="full" loop autoplay>
  <CommonBannerSlideContents
    v-for="(full, idx) in fullSlideBannerData"
    :key="idx"
    type="full"
  >
    <NuxtLink :to="full.linkUrl" :class="fullStyles.linkBox">
      <CommonImgMedia
        :src="full.imgUrl"
        :alt="full.title"
        :class-name="fullStyles.img"
        :pc-src="full.imgUrlPc"
        :pc-alt="full.title"
        :pc-class-name="fullStyles.img"
        :pc-width="SwiperImageWidth.full"
      />
      <div
        :class="
          cn(
            fullStyles.textBox,
            full.fontColor ? 'text-' + full.fontColor : 'text-black'
          )
        "
      >
        <div :class="fullStyles.title">{{ full.title }}</div>
        <div :class="fullStyles.description">{{ full.description }}</div>
      </div>
    </NuxtLink>
  </CommonBannerSlideContents>
</CommonBannerSlide>`
</script>

<style scoped></style>
