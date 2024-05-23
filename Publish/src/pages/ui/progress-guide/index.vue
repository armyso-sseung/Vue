<template>
  <CommonTitle title="Progress" />
  <section>
    <h2 className="guide-sub-title">renderType = "percent" (기본값)</h2>
    <CommonCaution class="mb-5">
      <CommonCautionTitle>renderType: percent 옵션</CommonCautionTitle>
      <CommonCautionContent>
        <b>showLabel</b>: Progress 좌측 텍스트 영역 출력 여부. 기본값 false
        [boolean]
      </CommonCautionContent>
      <CommonCautionContent>
        <b>title</b>: 타이틀 영역에 출력될 타이틀 텍스트 [string]
      </CommonCautionContent>
      <CommonCautionContent>
        <b>result</b>: 타이틀 영역에 출력될 디스크립션 텍스트 [string]
      </CommonCautionContent>
    </CommonCaution>
    <div class="component-container w-[500px]">
      <CommonProgress render-type="percent" :percent="50" :show-label="false" />
      <CommonProgress
        render-type="percent"
        :percent="50"
        title="디자인"
        result="화면과 같아요"
        show-label
      />
    </div>
    <CommonCodeBlock :language="language" :value="section1" />
  </section>

  <section>
    <h2 class="guide-sub-title">renderType = "price"</h2>
    <CommonCaution class-name="mb-5">
      <CommonCautionTitle>renderType: price 옵션</CommonCautionTitle>
      <CommonCautionContent>
        <b>currentPrice</b>: 총 금액 [number]
      </CommonCautionContent>
      <CommonCautionContent>
        <b>totalPrice</b>: 도달 금액 [number]
      </CommonCautionContent>
    </CommonCaution>
    <div class="component-container w-[500px]">
      <CommonProgress
        render-type="price"
        :current-price="22560"
        :total-price="50000"
      />
      <CommonProgress
        render-type="price"
        :current-price="25600"
        :total-price="70000"
      />
      <CommonProgress
        render-type="price"
        :current-price="0"
        :total-price="100000"
      />
      <CommonProgress
        render-type="price"
        :current-price="100000"
        :total-price="100000"
      />
      <CommonProgress
        render-type="price"
        :current-price="120000"
        :total-price="100000"
      />
    </div>

    <CommonCodeBlock :language="language" :value="section2" />
  </section>
</template>

<script setup lang="ts">
  import CommonCaution from '#components/ui/common-caution.vue'
  import CommonCautionTitle from '#components/ui/common-caution-title.vue'
  import CommonCautionContent from '#components/ui/common-caution-content.vue'
  import CommonProgress from '#components/ui/common-progress.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const language = 'javascript'
  const section1 = `
import CommonProgress from '#components/ui/common-progress.vue'

<CommonProgress render-type="percent" :percent="50" :show-label="false" />
<CommonProgress
  render-type="percent"
  :percent="50"
  title="디자인"
  result="화면과 같아요"
  show-label
/>`

  const section2 = `
import CommonProgress from '#components/ui/common-progress.vue'

<CommonProgress
  render-type="price"
  :current-price="22560"
  :total-price="50000"
/>
<CommonProgress
  render-type="price"
  :current-price="25600"
  :total-price="70000"
/>
<CommonProgress
  render-type="price"
  :current-price="0"
  :total-price="100000"
/>
<CommonProgress
  render-type="price"
  :current-price="100000"
  :total-price="100000"
/>
<CommonProgress
  render-type="price"
  :current-price="120000"
  :total-price="100000"
/>`
</script>

<style scoped></style>
