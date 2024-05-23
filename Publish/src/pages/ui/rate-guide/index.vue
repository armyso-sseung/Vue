<template>
  <CommonTitle title="Rate Guide" />
  <CommonCaution class-name="mb-5">
    <CommonCautionTitle>옵션</CommonCautionTitle>
    <CommonCautionContent>
      <b>size</b>: Rate 사이즈 14px/18px/24px - 기본값 'medium' ['small' |
      'medium' | 'large']
    </CommonCautionContent>
    <CommonCautionContent>
      <b>showNumber</b>: 별점 숫자 표시 여부 - 기본값 false [boolean]
    </CommonCautionContent>
    <CommonCautionContent>
      <b>allowHalf</b>: 0.5점 별 적용 여부 - 기본값 false [boolean]
    </CommonCautionContent>
    <CommonCautionContent>
      <b>disabled</b>: Rate 컴포넌트를 readonly로 출력 - 기본값 false [boolean]
    </CommonCautionContent>
  </CommonCaution>
  <section>
    <h2 class="guide-sub-title">Size = small, medium(기본값), large</h2>
    <div class="component-container flex w-[375px] flex-col gap-3">
      <CommonRate :default-value="3" size="small" />
      <CommonRate :default-value="3" />
      <CommonRate :default-value="3" size="large" />
    </div>

    <CommonCodeBlock :language="language" :value="section1" />
  </section>
  <section>
    <h2 class="guide-sub-title">showNumber, allowHalf, disabled</h2>
    <div class="component-container flex w-[375px] flex-col gap-3">
      <CommonRate :default-value="5" show-number />
      <CommonRate :default-value="3.5" show-number allow-half />
      <CommonRate :default-value="3.5" disabled show-number />
    </div>

    <CommonCodeBlock :language="language" :value="section2" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonCaution from '#components/ui/common-caution.vue'
  import CommonCautionTitle from '#components/ui/common-caution-title.vue'
  import CommonCautionContent from '#components/ui/common-caution-content.vue'
  import CommonRate from '#components/ui/common-rate.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const language = 'javascript'
  const section1 = `
import CommonRate from '#components/ui/common-rate.vue'

<CommonRate :default-value="3" size="small" />
<CommonRate :default-value="3" />
<CommonRate :default-value="3" size="large" />`

  const section2 = `
import CommonRate from '#components/ui/common-rate.vue'

<CommonRate :default-value="5" show-number />
<CommonRate :default-value="3.5" show-number allow-half />
<CommonRate :default-value="3.5" disabled show-number />`
</script>

<style scoped></style>
