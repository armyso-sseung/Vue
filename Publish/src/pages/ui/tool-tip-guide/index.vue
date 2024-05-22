<template>
  <CommonTitle title="Tool Tip Guide" />
  <section>
    <h2 class="guide-sub-title">색상 타입</h2>
    <div class="component-container flex w-[720px] flex-wrap gap-2">
      <CommonTooltip text="Tooltip 테스트" />
      <CommonTooltip text="Tooltip 테스트" is-dark />
    </div>
    <CommonCodeBlock :language="language" :value="section1" />
  </section>
  <section>
    <h2 class="guide-sub-title">placement</h2>
    <p class="guide-description">
      "top", "bottom", "right", "left", "topLeft", "topRight", "bottomLeft",
      "bottomRight"
    </p>
    <div class="component-container flex w-[720px] flex-wrap gap-2">
      <CommonTooltip text="Tooltip 테스트" placement="bottomRight" />
      <CommonTooltip text="Tooltip 테스트" placement="topRight" />
    </div>
    <CommonCodeBlock :language="language" :value="section2" />
  </section>
  <section>
    <h2 class="guide-sub-title">컴포넌트와 같이 사용</h2>
    <div class="component-container flex w-[720px] flex-wrap gap-2">
      <CommonTooltip text="Tooltip 테스트" placement="right">
        <CommonButton variant="third" rounded="rounded" size="base">
          TOOL-TIP
        </CommonButton>
      </CommonTooltip>
    </div>
    <CommonCodeBlock :language="language" :value="section3" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonTooltip from '#components/ui/common-tooltip.vue'
  import CommonButton from '#components/ui/common-button.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const language = 'javascript'
  const section1 = `
import CommonTooltip from '#components/ui/common-tooltip.vue'

<CommonTooltip text="Tooltip 테스트" />
<CommonTooltip text="Tooltip 테스트" is-dark />`

  const section2 = `
import CommonTooltip from '#components/ui/common-tooltip.vue'

<CommonTooltip text="Tooltip 테스트" placement="bottomRight" />
<CommonTooltip text="Tooltip 테스트" placement="topRight" />`

  const section3 = `
import CommonTooltip from '#components/ui/common-tooltip.vue'

<CommonTooltip text="Tooltip 테스트" placement="right">
  <CommonButton variant="third" rounded="rounded" size="base">
    TOOL-TIP
  </CommonButton>
</CommonTooltip>`
</script>

<style scoped></style>
