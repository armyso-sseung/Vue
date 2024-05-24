<template>
  <CommonTitle title="SlideBtnList Guide" />
  <p class="mb-5">
    data: 데이터<br />
    active: 선택된 슬라이드
  </p>
  <CommonSlideBtnList class-name="mb-5">
    <CommonSlideBtn
      v-for="btn in btnList"
      :key="`terms_tab_${btn.id}`"
      :data="btn"
      :active="activeId === btn.id"
      @click="() => handleSlideClick(btn.id)"
    />
  </CommonSlideBtnList>
  <div class="mt-8 min-w-fit max-w-2xl">
    <CommonCodeBlock :language="language" :value="section1" />
  </div>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonSlideBtnList from '#components/ui/common-slide-btn-list.vue'
  import CommonSlideBtn from '#components/ui/common-slide-btn.vue'
  import { ref } from '#imports'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const btnList = [
    { id: '1', label: '전체' },
    { id: '2', label: '뷰티' },
    { id: '3', label: '럭셔리' },
    { id: '4', label: '여성패션' },
    { id: '5', label: '남성패션' },
    { id: '6', label: '식품' },
    { id: '7', label: '생활/건강' },
    { id: '8', label: '가구/홈데코' }
  ]
  const activeId = ref(btnList.at(0)?.id)

  const handleSlideClick = (id: string) => {
    activeId.value = id
  }

  const language = 'javascript'
  const section1 = `
import CommonSlideBtnList from '#components/ui/common-slide-btn-list.vue'
import CommonSlideBtn from '#components/ui/common-slide-btn.vue'

const handleSlideClick = (id: string) => {
  activeId.value = id
}

<CommonSlideBtnList class-name="mb-5">
  <CommonSlideBtn
    v-for="btn in btnList"
    :key="terms_tab_btn.id"
    :data="btn"
    :active="activeId === btn.id"
    @click="() => handleSlideClick(btn.id)"
  />
</CommonSlideBtnList>`
</script>

<style scoped></style>
