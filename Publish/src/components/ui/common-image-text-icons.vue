<template>
  <Swiper slides-per-view="auto" :space-between="0" class="slide-category">
    <SwiperSlide
      v-for="(icon, idx) in iconData"
      :key="idx"
      :style="{ width: 'auto' }"
    >
      <button
        v-if="icon.imageList.at(0) && icon.textList.at(0)"
        type="button"
        class="flex w-full flex-col items-center"
      >
        <span
          class="flex size-[54px] items-center justify-center rounded-[20px] bg-gray2"
        >
          <common-image
            :src="icon.imageList.at(0)?.contPathNm"
            :alt="icon.imageList.at(0)?.altCont"
            :width="32"
            :height="32"
          />
        </span>
        <div class="body2 pc:body1 mt-2 break-keep">
          {{ icon.textList.at(0)?.contTitleNm }}
        </div>
      </button>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import type { ImageTextIconProps } from '~/types/common/component-type'
  import CommonImage from '#components/ui/common-image.vue'

  defineProps<ImageTextIconProps>()
</script>

<style scoped></style>
