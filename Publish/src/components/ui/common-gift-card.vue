<template>
  <div :class="`gift-card${className ? ' ' + className : ''}`" v-bind="$attrs">
    <div
      class="gift-img-container mb-3 mt-5"
      :style="{ backgroundImage: `url(/images/mypage/img_gift01.jpg)` }"
    >
      기본 이미지
    </div>
    <div v-if="!hideSender" class="gift-txt-container">
      <div class="caption1 font-bold">보낸사람</div>
      <div class="body1 mb-3">최우식 010-****-8652</div>
      <div
        ref="$textElem"
        :class="`body1${isTextRowOverflow ? ' ellipsis-2' : ''} `"
      >
        {{ msg }}
      </div>

      <div v-if="isTextRowOverflow || isAreaOpen" class="mt-1 flex justify-end">
        <CommonButton
          size="fbase"
          :class-name="`${isAreaOpen ? 'btn-area-close' : 'btn-area-open'}`"
          @click="onClickMoreView"
        >
          더보기
        </CommonButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { GiftCardProps } from '~/types/common/component-type'
  import CommonButton from '#components/ui/common-button.vue'
  import { onMounted, ref } from '#imports'

  defineProps<GiftCardProps>()

  const isAreaOpen = ref<boolean>(false)
  const isTextRowOverflow = ref<boolean>(false)
  const $textElem = ref<HTMLDivElement | null>(null)

  const onClickMoreView = () => {
    isAreaOpen.value = !isAreaOpen.value
    isTextRowOverflow.value = !isTextRowOverflow.value
  }

  const checkOverflow = () => {
    if ($textElem.value) {
      isTextRowOverflow.value = $textElem.value.clientHeight > 48
    }
  }

  onMounted(() => {
    checkOverflow()
  })
</script>

<style scoped></style>
