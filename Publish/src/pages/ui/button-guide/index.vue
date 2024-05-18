<template>
  <CommonTitle title="CommonButton Guide" />
  <section>
    <h2 class="guide-sub-title">CommonButton variants</h2>
    <div class="component-container flex w-[720px] gap-2">
      <CommonButton size="xxl" variant="bgcolor"> button </CommonButton>
      <CommonButton size="xxl" variant="bgcolor" disabled="{true}">
        button
      </CommonButton>
      <CommonButton size="xxl" variant="border"> button </CommonButton>
      <CommonButton size="xxl" variant="border" disabled="{true}">
        button
      </CommonButton>
      <CommonButton size="xxl" variant="third"> button </CommonButton>
      <CommonButton size="xxl" variant="third" disabled="{true}">
        button
      </CommonButton>
    </div>
    <CommonCodeBlock :language="language" :value="buttonCode" />
  </section>

  <section>
    <h2 class="guide-sub-title">button size</h2>
    <div class="component-container flex w-[720px] gap-2">
      <CommonButton variant="bgcolor" size="xxl"> button </CommonButton>
      <CommonButton variant="bgcolor" size="xl"> button </CommonButton>
      <CommonButton variant="bgcolor" size="lg"> button </CommonButton>
      <CommonButton variant="bgcolor" size="base"> button </CommonButton>
      <CommonButton variant="bgcolor" size="sm"> button </CommonButton>
      <CommonButton variant="bgcolor" size="xs"> button </CommonButton>
    </div>
    <CommonCodeBlock :language="language" :value="buttonsizeCode" />
  </section>

  <section>
    <h2 class="guide-sub-title">CommonButton text type</h2>
    <p class="mb-4">높이 없는 버튼 스타일</p>
    <div class="component-container w-[720px]">
      <CommonButton variant="third" rounded="rounded" size="base">
        button
      </CommonButton>
      <CommonButton variant="underline" size="flg"> button </CommonButton>
      <CommonButton variant="underline" size="fbase">
        button
      </CommonButton>

      <CommonButton size="flg"> button </CommonButton>
      <CommonButton size="fbase"> button </CommonButton>
      <CommonButton size="fsm"> button </CommonButton>
    </div>
    <CommonCodeBlock :language="language" :value="buttoniconCode" />
  </section>

  <section>
    <h2 class="guide-sub-title">button group</h2>
    <div class="component-container w-[720px]">
      <CommonButtonArea class-name="mb-4 w-full" type="column" size="full">
        <CommonButton size="xxl" variant="bgcolor"> button </CommonButton>
        <CommonButton size="xxl" variant="bgcolor"> button </CommonButton>
      </CommonButtonArea>

      <CommonButtonArea class-name="mb-4 w-full" type="column" size="full">
        <CommonButton size="xxl" variant="border"> button </CommonButton>
        <CommonButton size="xxl" variant="bgcolor"> button </CommonButton>
      </CommonButtonArea>

      <CommonButtonArea class-name="mb-4 w-full" type="column">
        <CommonButton size="lg" variant="border"> button </CommonButton>
        <CommonButton size="lg" variant="border"> button </CommonButton>
      </CommonButtonArea>

      <CommonButtonArea class-name="mb-4 w-full" type="row">
        <CommonButton size="lg" variant="bgcolor"> button </CommonButton>
        <CommonButton size="lg" variant="border"> button </CommonButton>
      </CommonButtonArea>

      <CommonButtonArea class-name="bottom-fixed" type="column" size="full">
        <CommonButton variant="border" size="xxl"> button </CommonButton>
        <CommonButton variant="border" size="xxl"> button </CommonButton>
        <CommonButton variant="bgcolor" size="xxl"> button </CommonButton>
      </CommonButtonArea>

      <CommonButtonArea class-name="mb-2 w-full" type="column" size="full">
        <CommonButton size="fsm" class-name="border-r h-[20px]"
          >button</CommonButton
        >
        <CommonButton size="fsm" class-name="h-[20px]"
          >button</CommonButton
        >
      </CommonButtonArea>
    </div>
    <CommonButtonArea :language="language" :value="buttongroupCode" />
  </section>

  <section>
    <h2 class="guide-sub-title">Icon 이 있는 버튼</h2>
    <p class="mb-4">button에 클래스 ico 추가</p>
    <div
      class="mb-4 w-[720px] rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <CommonButtonArea type="column" size="full">
        <CommonButton
          size="sm"
          variant="third"
          class-name="ico"
          @click="handleLikeClick"
        >
          <CommonImgMedia
            :src="`/images/icons/${like ? 'like_active.svg' : 'ico_like_black.svg'}`"
            class-name="size-4"
            :alt="`좋아요${like ? ' 해제' : ''}`"
          />
          좋아요
        </CommonButton>
        <CommonButton size="sm" variant="third" class-name="ico btn-noti-on">
          <CommonImgMedia
            src="/images/icons/ico_bell.svg"
            class-name="size-4"
            alt="알림"
          />
          알림함
        </CommonButton>
      </CommonButtonArea>
    </div>
    <CommonCodeBlock :language="language" :value="iconBtnCode" />
  </section>

  <section>
    <h2 class="guide-sub-title">토글버튼</h2>
    <div class="component-container flex w-[720px] gap-2">
      <CommonButtonArea class-name="text">
        <CommonSwitchbtn
          on-msg="버튼을 키시겠습니까?"
          off-msg="버튼을 끄시겠습니까?"
          :state="toggle"
          @on-ok="handleOk"
        />
      </CommonButtonArea>

      <CommonButton class-name="btn-recomend" title="추천"> 1 </CommonButton>
      <CommonButton class-name="btn-recomend active" title="추천">
        1
      </CommonButton>
      <CommonButton size="fbase" class-name="btn-area-open">
        전체보기
      </CommonButton>
      <CommonButton size="fbase" class-name="btn-area-close">
        전체보기
      </CommonButton>
    </div>
    <CommonCodeBlock :language="language" :value="toggleBtnCode" />
  </section>

  <section>
    <h2 class="guide-sub-title">더보기, 링크 버튼</h2>
    <div class="component-container flex w-[720px] flex-wrap gap-2">
      <CommonButton
        size="fsm"
        class-name="inline-flex items-center gap-1 text-gray7 after:content-[''] after:inline-block after:size-3 after:bg-[url('/images/icons/ico_gray_arrow12.svg')] "
      >
        더보기
      </CommonButton>
      <CommonButton class-name="underline caption1 pc:body1"
        >더보기</CommonButton
      >
      <CommonButton
        size="base"
        variant="third"
        class-name="w-full justify-center inline-flex items-center gap-1 after:content-[''] after:inline-block after:size-3 after:bg-[url('/images/icons/ico_arrow12.svg')] "
      >
        더보기
      </CommonButton>
      <br />
      <CommonButton size="fbase" class-name="btn-arrow-more">
        당첨자 공지사항
      </CommonButton>
    </div>
    <CommonCodeBlock :language="language" :value="moreBtnCode" />
  </section>

  <section>
    <h2 class="guide-sub-title">스크롤 TOP 버튼</h2>
    <p class="mb-4">스크롤을 내릴 경우 페이지 우측 하단에 생성</p>
    <div class="component-container w-[720px]">
      <div class="btn-page-top">
        <CommonButton
          class-name="text-center size-10 bg-white rounded-full"
          @on-click="scrollToTop"
        >
          <CommonImgMedia
            src="/images/icons/ico_arrow_top20.svg"
            alt="상단으로 이동"
            class-name="mx-auto size-5"
          />
        </CommonButton>
      </div>
    </div>
    <CommonCodeBlock :language="language" :value="pageTopBtn" />
  </section>

  <section>
    <h2 class="guide-sub-title">기타 버튼</h2>
    <div class="component-container flex w-[720px] flex-wrap gap-2">
      <CommonButton size="xs" class-name="text-primary bg-primary/5">
        나이키 양말
      </CommonButton>
      <CommonButton
        size="xs"
        variant="third"
        rounded="rounded"
        class-name="inline-flex items-center gap-1 after:content-[''] after:inline-block after:size-3 after:bg-[url('/images/icons/ico_gray_close12.svg')]"
      >
        나이키 양말
      </CommonButton>
      <br />
      <CommonButton size="fsm" class-name="btn-area-x-close">
        2만원 이하
      </CommonButton>
      <CommonButton size="fsm" class-name="btn-down"> 전체받기 </CommonButton>
      <CommonButton class-name="btn-down-primary">할인혜택</CommonButton>
    </div>
    <CommonCodeBlock :language="language" :value="etcbuttonCode" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonButton from '#components/ui/common-button.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'
  import CommonButtonArea from '#components/ui/common-button-area.vue'
  import CommonImgMedia from '#components/ui/common-img-media.vue'
  import CommonSwitchbtn from '#components/ui/common-switchbtn.vue'
  import { ref } from '#imports'

  const like = ref<boolean>(false)
  const toggle = ref<boolean>(false)

  const handleLikeClick = () => {
    like.value = !like.value
  }

  const handleOk = () => {
    toggle.value = !toggle.value
  }

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  const language = 'javascript'
  const buttonCode = `
import {CommonButton, CommonButtonArea} from "@/components/ui/common-button";

<div class="m-4 flex gap-2">
  <CommonButton>button</CommonButton>
  <CommonButton disabled={true}>button</CommonButton>
  </div>
  <div class="m-4 flex gap-2">
  <CommonButton variant="border">button</CommonButton>
  <CommonButton variant="border" disabled={true}>button</CommonButton>
  </div>
  <div class="m-4 flex gap-2">
  <CommonButton variant="third">button</CommonButton>
  <CommonButton variant="third" disabled={true}>button</CommonButton>
</div>`

  const buttonsizeCode = `
<div class="m-4 flex gap-2 w-[720px]">
	<CommonButton variant="bgcolor" size="xxl">button</CommonButton>
	<CommonButton variant="bgcolor" size="xl">button</CommonButton>
	<CommonButton variant="bgcolor" size="lg">button</CommonButton>
	<CommonButton variant="bgcolor" size="base">button</CommonButton>
	<CommonButton variant="bgcolor" size="sm">button</CommonButton>
</div>`

  const buttoniconCode = `
<div class="mb-4 flex gap-2 w-[720px]">
	<CommonButton variant="third" rounded="rounded" size="base">button</CommonButton>
	<CommonButton variant="underline" size="flg">button</CommonButton>
	<CommonButton variant="underline" size="fbase">button</CommonButton>
  <CommonButton size="flg">button</CommonButton>
  <CommonButton size="fbase">button</CommonButton>
  <CommonButton size="fsm">button</CommonButton>
</div>`

  const buttongroupCode = `
<CommonButtonArea className="mb-4 w-full" type="column" size="full"> {/* 가로 사이즈는 임시 */}
	<CommonButton size="xxl" variant="bgcolor">button</CommonButton>
	<CommonButton size="xxl" variant="bgcolor">button</CommonButton>
</CommonButtonArea>

<CommonButtonArea className="mb-4 w-full" type="column" size="full"> {/* 가로 사이즈는 임시 */}
	<CommonButton size="xxl" variant="border">button</CommonButton>
	<CommonButton size="xxl" variant="bgcolor">button</CommonButton>
</CommonButtonArea>

<CommonButtonArea className="mb-4 w-full" type="column"> {/* 가로 사이즈는 임시 */}
	<CommonButton size="lg" variant="border">button</CommonButton>
	<CommonButton size="lg" variant="border">button</CommonButton>
</CommonButtonArea>

<CommonButtonArea className="mb-4 w-full" type="row"> {/* 가로 사이즈는 임시 */}
	<CommonButton size="lg" variant="bgcolor">button</CommonButton>
	<CommonButton size="lg" variant="border">button</CommonButton>
</CommonButtonArea>

<CommonButtonArea className="bottom-fixed" type="column" size="full"> {/* 가로 사이즈는 임시 */}
  <CommonButton variant="border" size="xxl">
    button
  </CommonButton>
  <CommonButton variant="border" size="xxl">
    button
  </CommonButton>
  <CommonButton variant="bgcolor" size="xxl">
    button
  </CommonButton>
</CommonButtonArea>

<CommonButtonArea className="mb-2 w-full" type="column" size="full">
      <CommonButton size="fsm" className="border-r h-[20px]">button</CommonButton>
      <CommonButton size="fsm" className='h-[20px]'>button</CommonButton>
</CommonButtonArea>`

  const iconBtnCode = `
import Image from 'nuxt/image'

<CommonButton size="sm" variant="third" className="ico">
  <CommonImgMedia
      src="/images/icons/ico_like_black.svg"
      width="16"
      height="16"
      alt="좋아요"
    />
  좋아요
</CommonButton>

{/* 알림이 있을 경우 Button에 btn-noti-on 클래스 추가, 없으면 제거 */}
<CommonButton size="sm" variant="third" className="ico btn-noti-on">
  <CommonImgMedia
    src="/images/icons/ico_bell.svg"
    width="16"
    height="16"
    alt="알림"
  />
  알림함
</CommonButton>`

  const toggleBtnCode = `
import { CommonButton, CommonButtonArea } from '@/components/ui/common-button'
import CommonSwitchbtn from '@/components/ui/common-switch-btn'

const toggle = ref<boolean>(false)
const handleOk = () => {
  toggle.value = !toggle.value
}

<CommonButtonArea className="text">
  <CommonSwitchbtn
    onMsg="버튼을 키시겠습니까?"
    offMsg="버튼을 끄시겠습니까?"
    :state="toggle"
    @handleOk="handleOk"
  />
</CommonButtonArea>

<CommonButton className="btn-recomend" title="추천">1</CommonButton>
<CommonButton className="btn-recomend active" title="추천">1</CommonButton>

<CommonButton size="fbase" className="btn-area-open">전체보기</CommonButton>
<CommonButton size="fbase" className="btn-area-close">전체보기</CommonButton>`

  const moreBtnCode = `
<CommonButton
  size="fsm"
  className="inline-flex items-center gap-1 text-gray7 after:content-[''] after:inline-block after:size-3 after:bg-[url('/images/icons/ico_gray_arrow12.svg')] "
>
  더보기
</CommonButton>
<CommonButton className="underline caption1 pc:body1">더보기</CommonButton>
<CommonButton
  size="base"
  variant="third"
  className="w-full justify-center inline-flex items-center gap-1 after:content-[''] after:inline-block after:size-3 after:bg-[url('/images/icons/ico_arrow12.svg')] "
>
  더보기
</CommonButton>
<br />
<CommonButton size="fbase" className="btn-arrow-more">
  당첨자 공지사항
</CommonButton>`

  const pageTopBtn = `
import CommonBtnPageTop from "@/inner-components/common-btn-page-top";

<CommonBtnPageTop />
`

  const etcbuttonCode = `
<CommonButton size="xs" className="text-primary bg-primary/5">나이키 양말</CommonButton>
<CommonButton
  size="xs"
  variant="third"
  rounded="rounded"
  className="inline-flex items-center gap-1 after:content-[''] after:inline-block after:size-3 after:bg-[url('/images/icons/ico_gray_close12.svg')]"
>나이키 양말</CommonButton>

<CommonButton size="fsm" className="btn-area-x-close">2만원 이하</CommonButton>
<CommonButton size="fsm" className="btn-down">전체받기</CommonButton>
<CommonButton className="btn-down-primary">할인혜택</CommonButton>`
</script>

<style scoped></style>
