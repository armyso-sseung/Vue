<template>
  <footer
    class="bg-gray2 px-5 pt-4 text-center pc:min-w-[1280px] pc:px-10 pc:pb-10"
  >
    <div class="foot-wrap flex w-full flex-col items-center justify-center">
      <div
        class="foot-menu flex w-full flex-row flex-wrap justify-center gap-x-6 gap-y-1.5 px-5"
      >
        <p
          v-for="menu in footerData.companyMenu"
          :key="menu.title"
          class="body2 relative text-black"
        >
          <a :href="menu.url">{{ menu.title }}</a>
        </p>
      </div>
      <LayoutLogo class-name="mt-8" />
      <div class="foot-contents w-full pc:mx-auto pc:w-[1200px]">
        <CommonAccordion type="multiple" class-name="cont-accordion text-left">
          <CommonAccordionItem value="item-1" class-name="item">
            <CommonAccordionTrigger class-name="btn-tit my-2 mo:mb-3"
              >사업자정보 펼쳐보기</CommonAccordionTrigger
            >
            <CommonAccordionContent class-name="mo:p-0 body2 text-left">
              서울특별시 송파구 법원로9길 26 H Business Park D동 6층<br />TEL :
              02-554-4668 <br />FAX : 02-554-4583<br />
              <CommonButtonArea class-name="mt-1">
                <CommonButton size="fsm" class-name="btn-arrow-more"
                  >사업자정보확인</CommonButton
                >
              </CommonButtonArea>
            </CommonAccordionContent>
          </CommonAccordionItem>
        </CommonAccordion>
      </div>
      <div class="foot_copy caption1 mt-5 text-gray7">
        Copyright© LOGO Corp. All rights reserved.
      </div>
    </div>
  </footer>
  <CommonBtnPageTop />
</template>

<script setup lang="ts">
  import LayoutLogo from '#components/ui/layout/layout-logo.vue'
  import CommonAccordion from '#components/ui/common-accordion.vue'
  import CommonAccordionItem from '#components/ui/common-accordion-item.vue'
  import CommonAccordionTrigger from '#components/ui/common-accordion-trigger.vue'
  import CommonAccordionContent from '#components/ui/common-accordion-content.vue'
  import CommonButtonArea from '#components/ui/common-button-area.vue'
  import CommonButton from '#components/ui/common-button.vue'
  import CommonBtnPageTop from '#components/ui/common-btn-page-top.vue'

  const footerData = {
    companyMenu: [
      { title: '회사소개', url: '/' },
      { title: '고객센터', url: '/' },
      { title: '이용약관', url: '/' },
      { title: '개인정보처리방침', url: '/' },
      { title: '분쟁해결기준', url: '/' },
      { title: '청소년보호방침', url: '/' },
      { title: '전자금융거래약관', url: '/' }
    ]
  }
</script>

<style scoped></style>
