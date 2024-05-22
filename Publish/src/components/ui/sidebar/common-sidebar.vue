<template>
  <div class="guide-sidebar">
    <nav>
      <CommonAccordion type="multiple" class-name="mt-2 side-accordion">
        <CommonAccordionItem value="ui-items-0" class-name="mb-4">
          <CommonAccordionTrigger class-name="group-tit"
            >개발환경</CommonAccordionTrigger
          >
          <CommonAccordionContent class-name="!bg-gray3 !p-0 !px-2">
            <ul>
              <CommonLinks href="/pub-guide/index-guide" menu-name="Index" />
              <CommonLinks
                href="/pub-guide/file-directory-guide"
                menu-name="File Directory"
              />
              <CommonLinks
                href="/pub-guide/naming-rule-guide"
                menu-name="Naming Rule"
              />
            </ul>
          </CommonAccordionContent>
        </CommonAccordionItem>

        <CommonAccordionItem value="ui-items-1" class-name="mb-4">
          <CommonAccordionTrigger class-name="group-tit"
            >입출력</CommonAccordionTrigger
          >
          <CommonAccordionContent class-name="!bg-gray3 !p-0 !px-2">
            <ul>
              <CommonLinks href="/ui/button-guide" menu-name="Button" />
              <CommonLinks href="/ui/checkbox-guide" menu-name="Checkbox" />
              <CommonLinks href="/ui/counter-guide" menu-name="Counter" />
              <CommonLinks
                href="/ui/date-picker-guide"
                menu-name="Date Picker"
              />
              <CommonLinks href="/ui/input-guide" menu-name="TextInput" />
              <CommonLinks href="/ui/radio-guide" menu-name="Radio" />
              <CommonLinks href="/ui/range-guide" menu-name="Range" />
              <CommonLinks href="/ui/rate-guide" menu-name="Rate" />
              <CommonLinks href="/ui/progress-guide" menu-name="Progress" />
              <CommonLinks href="/ui/select-guide" menu-name="Select" />
              <CommonLinks href="/ui/flag-guide" menu-name="Flag" />
              <CommonLinks href="/ui/text-guide" menu-name="Text" />
              <CommonLinks href="/ui/textarea-guide" menu-name="Textarea" />
              <CommonLinks
                href="/ui/image-uploader-guide"
                menu-name="ImageUploade"
              />
            </ul>
          </CommonAccordionContent>
        </CommonAccordionItem>
        <CommonAccordionItem value="ui-items-2" class-name="mb-4">
          <CommonAccordionTrigger class-name="group-tit"
            >팝업</CommonAccordionTrigger
          >
          <CommonAccordionContent class-name="!bg-gray3 !p-0 !px-2">
            <ul>
              <CommonLinks href="/ui/dialog-guide" menu-name="Dialog" />
              <CommonLinks href="/ui/modal-guide" menu-name="Modal" />
              <CommonLinks href="/ui/drawer-guide" menu-name="Drawer" />
              <CommonLinks href="/ui/toast-guide" menu-name="Toast" />
              <CommonLinks href="/ui/tool-tip-guide" menu-name="Tool Tip" />
            </ul>
          </CommonAccordionContent>
        </CommonAccordionItem>
        <CommonAccordionItem value="ui-items-3" class-name="mb-4">
          <CommonAccordionTrigger class-name="group-tit"
            >슬라이더</CommonAccordionTrigger
          >
          <CommonAccordionContent class-name="!bg-gray3 !p-0 !px-2">
            <ul>
              <CommonLinks
                href="/ui/banner-slide-guide"
                menu-name="Banner Slide"
              />
              <CommonLinks
                href="/ui/category-list-guide"
                menu-name="Category List"
              />
              <CommonLinks href="/ui/swiper-guide" menu-name="Swiper 샘플" />
              <CommonLinks
                href="/ui/thumbnail-slide-guide"
                menu-name="Thumbnail Slide"
              />
              <CommonLinks
                href="/ui/slide-btn-list-guide"
                menu-name="SlideBtn List"
              />
            </ul>
          </CommonAccordionContent>
        </CommonAccordionItem>
        <CommonAccordionItem value="ui-items-4" class-name="mb-4">
          <CommonAccordionTrigger class-name="group-tit"
            >레이아웃</CommonAccordionTrigger
          >
          <CommonAccordionContent class-name="!bg-gray3 !p-0 !px-2">
            <ul>
              <CommonLinks href="/ui/accordion-guide" menu-name="Accordion" />
              <CommonLinks href="/ui/banner-msg-guide" menu-name="BannerMsg" />
              <CommonLinks href="/ui/breadcrumb-guide" menu-name="Breadcrumb" />
              <CommonLinks href="/ui/caution-guide" menu-name="Caution" />
              <CommonLinks href="/ui/form-guide" menu-name="Form" />
              <CommonLinks href="/ui/img-media-guide" menu-name="ImgMedia" />
              <CommonLinks href="/ui/groupbox-guide" menu-name="GroupBox" />
              <CommonLinks href="/ui/link-list-guide" menu-name="Link List" />
              <CommonLinks href="/ui/nodata-guide" menu-name="No Data" />
              <CommonLinks href="/ui/order-item-guide" menu-name="Order Item" />
              <CommonLinks href="/ui/steps-guide" menu-name="Steps" />
              <CommonLinks href="/ui/tabs-guide" menu-name="Tabs" />
              <CommonLinks href="/ui/table-guide" menu-name="Table" />
              <CommonLinks href="/ui/title-guide" menu-name="Title" />
              <CommonLinks href="/ui/timeline-guide" menu-name="TimeLine" />
              <CommonLinks href="/ui/runtine-guide" menu-name="Runtine" />
              <CommonLinks href="/ui/divider-guide" menu-name="Divider" />
              <CommonLinks href="/ui/side-menu-guide" menu-name="Side Menu" />
            </ul>
          </CommonAccordionContent>
        </CommonAccordionItem>
        <CommonAccordionItem value="ui-items-5" class-name="mb-4">
          <CommonAccordionTrigger class-name="group-tit"
            >상품</CommonAccordionTrigger
          >
          <CommonAccordionContent class-name="!bg-gray3 !p-0 !px-2">
            <ul>
              <CommonLinks
                href="/ui/product-item-guide"
                menu-name="Product Item"
              />
              <CommonLinks
                href="/ui/product-slide-guide"
                menu-name="Product Slide"
              />
              <CommonLinks
                href="/ui/product-list-guide"
                menu-name="Product List"
              />
              <CommonLinks
                href="/ui/review-item-guide"
                menu-name="Review Item"
              />
              <CommonLinks
                href="/ui/order-item-guide"
                menu-name="Order Item*"
              />
              <CommonLinks
                href="/ui/simple-order-item-guide"
                menu-name="Simple Order Item"
              />
              <CommonLinks href="/ui/gift-item-guide" menu-name="Gift Item*" />
              <CommonLinks
                href="/ui/videoplayer-guide"
                menu-name="Video Player"
              />
            </ul>
          </CommonAccordionContent>
        </CommonAccordionItem>
        <CommonAccordionItem value="ui-items-6" class-name="mb-4">
          <CommonAccordionTrigger class-name="group-tit"
            >이벤트</CommonAccordionTrigger
          >
          <CommonAccordionContent class-name="!bg-gray3 !p-0 !px-2">
            <ul>
              <CommonLinks
                href="/ui/event-roulette-guide"
                menu-name="Event Roulette"
              />
              <CommonLinks
                href="/ui/event-result-msg-guide"
                menu-name="EventResultMsg"
              />
            </ul>
          </CommonAccordionContent>
        </CommonAccordionItem>
        <CommonAccordionItem value="ui-items-7" class-name="mb-4">
          <CommonAccordionTrigger class-name="group-tit"
            >기타</CommonAccordionTrigger
          >
          <CommonAccordionContent class-name="!bg-gray3 !p-0 !px-2">
            <ul>
              <CommonLinks href="/ui/coupon-guide" menu-name="coupon" />
              <CommonLinks href="/ui/sns-guide" menu-name="sns" />
              <CommonLinks href="/ui/error-guide" menu-name="error" />
              <CommonLinks href="/ui/loading-guide" menu-name="loading" />
              <CommonLinks href="/ui/giftcard-guide" menu-name="gift" />
            </ul>
          </CommonAccordionContent>
        </CommonAccordionItem>
      </CommonAccordion>
    </nav>
  </div>
</template>

<script setup lang="ts">
  import CommonAccordion from '#components/ui/common-accordion.vue'
  import CommonAccordionItem from '#components/ui/common-accordion-item.vue'
  import CommonAccordionTrigger from '#components/ui/common-accordion-trigger.vue'
  import CommonAccordionContent from '#components/ui/common-accordion-content.vue'
  import CommonLinks from '#components/ui/sidebar/common-links.vue'
</script>

<style scoped></style>
