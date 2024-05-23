<template>
  <CommonTitle title="Accordion Guide" />
  <section>
    <h2 class="guide-sub-title">
      type="single" (self open 가능/ self close 불가능)
    </h2>
    <div class="component-container w-[500px]">
      <CommonAccordion type="single" class-name="cont-accordion">
        <CommonAccordionItem value="item-1" class-name="item">
          <CommonAccordionTrigger class-name="btn-tit"
            >item 1</CommonAccordionTrigger
          >
          <CommonAccordionContent
            >This is content for item 1</CommonAccordionContent
          >
        </CommonAccordionItem>
        <CommonAccordionItem value="item-2" class-name="item">
          <CommonAccordionTrigger class-name="btn-tit"
            >item 2</CommonAccordionTrigger
          >
          <CommonAccordionContent
            >This is content for item 2</CommonAccordionContent
          >
        </CommonAccordionItem>
        <CommonAccordionItem value="item-3" class-name="item">
          <CommonAccordionTrigger class-name="btn-tit"
            >item 3</CommonAccordionTrigger
          >
          <CommonAccordionContent
            >This is content for item 3</CommonAccordionContent
          >
        </CommonAccordionItem>
      </CommonAccordion>
    </div>
    <CommonCodeBlock :language="language" :value="section1" />
  </section>

  <section>
    <h2 class="guide-sub-title">type="multiple" (self open/close 모두 가능)</h2>
    <div class="component-container w-[500px]">
      <CommonAccordion type="multiple" class-name="cont-accordion">
        <CommonAccordionItem value="item-1" class-name="item">
          <CommonAccordionTrigger class-name="btn-tit"
            >item 1</CommonAccordionTrigger
          >
          <CommonAccordionContent
            >This is content for item 1</CommonAccordionContent
          >
        </CommonAccordionItem>
        <CommonAccordionItem value="item-2" class-name="item">
          <CommonAccordionTrigger class-name="btn-tit"
            >item 2</CommonAccordionTrigger
          >
          <CommonAccordionContent
            >This is content for item 2</CommonAccordionContent
          >
        </CommonAccordionItem>
        <CommonAccordionItem value="item-3" class-name="item">
          <CommonAccordionTrigger class-name="btn-tit"
            >item 3</CommonAccordionTrigger
          >
          <CommonAccordionContent
            >This is content for item 3</CommonAccordionContent
          >
        </CommonAccordionItem>
      </CommonAccordion>
    </div>
    <CommonCodeBlock :language="language" :value="section2" />
  </section>

  <section>
    <h2 class="guide-sub-title">
      정보 안내 아코디언 className="info-accordion"
    </h2>
    <div class="component-container w-[500px]">
      <CommonAccordion type="multiple" class-name="info-accordion">
        <CommonAccordionItem value="item-1">
          <CommonAccordionTrigger class-name="info-tit"
            >타이틀1</CommonAccordionTrigger
          >
          <CommonAccordionContent class-name="info-content">
            <CommonCautionContent>디스크립션1</CommonCautionContent>
            <CommonCautionContent>디스크립션2</CommonCautionContent>
          </CommonAccordionContent>
        </CommonAccordionItem>
        <CommonAccordionItem value="item-2">
          <CommonAccordionTrigger class-name="info-tit"
            >타이틀2</CommonAccordionTrigger
          >
          <CommonAccordionContent class-name="info-content">
            <CommonCautionContent>디스크립션1</CommonCautionContent>
            <CommonCautionContent>디스크립션2</CommonCautionContent>
          </CommonAccordionContent>
        </CommonAccordionItem>
      </CommonAccordion>
    </div>

    <CommonCodeBlock :language="language" :value="section3" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonAccordion from '#components/ui/common-accordion.vue'
  import CommonAccordionItem from '#components/ui/common-accordion-item.vue'
  import CommonAccordionTrigger from '#components/ui/common-accordion-trigger.vue'
  import CommonAccordionContent from '#components/ui/common-accordion-content.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'
  import CommonCautionContent from '#components/ui/common-caution-content.vue'

  const language = 'javascript'
  const section1 = ``

  const section2 = ``

  const section3 = ``
</script>

<style scoped></style>
