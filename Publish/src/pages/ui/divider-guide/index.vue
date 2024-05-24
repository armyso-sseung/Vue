<template>
  <CommonTitle title="Divider Guide" />
  <p class="mb-4">구역을 나누기 위한 컴포넌트</p>
  <CommonCaution class-name="mb-10">
    <CommonCautionTitle>옵션</CommonCautionTitle>
    <CommonCautionContent>
      <b>lineBold</b>: 선 굵기 두껍게 - 기본값 false [boolean]
    </CommonCautionContent>
    <CommonCautionContent>
      <b>lineThin</b>: 선 굵기 얇게 - 기본값 false [boolean]
    </CommonCautionContent>
  </CommonCaution>

  <section>
    <h2 class="mb-4 text-xl font-bold">기본</h2>
    <div class="component-container w-[720px]">
      <CommonDivider />
    </div>

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section1" />
    </div>
  </section>

  <section>
    <h2 class="mb-4 text-xl font-bold">lineBold</h2>
    <div class="component-container w-[720px]">
      <CommonDivider :line-bold="true" />
    </div>

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section2" />
    </div>
  </section>

  <section>
    <h2 class="mb-4 text-xl font-bold">lineThin</h2>
    <div class="component-container w-[720px]">
      <CommonDivider :line-thin="true" />
    </div>

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section3" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonCaution from '#components/ui/common-caution.vue'
  import CommonCautionTitle from '#components/ui/common-caution-title.vue'
  import CommonCautionContent from '#components/ui/common-caution-content.vue'
  import CommonDivider from '#components/ui/common-divider.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const language = 'javascript'
  const section1 = `
import CommonDivider from '#components/ui/common-divider.vue'

<CommonDivider />`

  const section2 = `
import CommonDivider from '#components/ui/common-divider.vue'

<CommonDivider lineBold />`

  const section3 = `
import CommonDivider from '#components/ui/common-divider.vue'

<CommonDivider lineThin />`
</script>

<style scoped></style>
