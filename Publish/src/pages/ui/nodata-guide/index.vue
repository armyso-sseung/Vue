<template>
  <CommonTitle title="NoData Guide" />
  <CommonCaution class-name="mb-10">
    <CommonCautionTitle>NodataTitle 옵션</CommonCautionTitle>
    <CommonCautionContent>
      <b>type</b>: 표시될 아이콘 타입 - 기본값 "default" ["default" | "waring" |
      "chkecking" | "cart"]
    </CommonCautionContent>
  </CommonCaution>
  <section>
    <h2 class="guide-sub-title">type = default</h2>
    <div class="component-container w-[500px]">
      <CommonNoData>
        <CommonNoDataTitle type="default">
          지금은 이용 가능한
          <br />
          할인 혜택이 없습니다.
        </CommonNoDataTitle>
        <CommonNoDataText>
          주문이 실패하였습니다. 잠시 후 다시 시도해 주세요.
        </CommonNoDataText>
      </CommonNoData>
    </div>
    <CommonCodeBlock :language="language" :value="section1" />
  </section>

  <section>
    <h2 class="guide-sub-title">type = waring</h2>
    <div class="component-container w-[500px]">
      <CommonNoData>
        <CommonNoDataTitle type="waring"
          >waring 타이틀 입니다.</CommonNoDataTitle
        >
        <CommonNoDataText>waring 디스크립션 입니다.</CommonNoDataText>
      </CommonNoData>
    </div>
    <CommonCodeBlock :language="language" :value="section2" />
  </section>

  <section>
    <h2 class="guide-sub-title">type = chkecking</h2>
    <div class="component-container w-[500px]">
      <CommonNoData>
        <CommonNoDataTitle type="chkecking"
          >chkecking 타이틀 입니다.</CommonNoDataTitle
        >
        <CommonNoDataText>chkecking 디스크립션 입니다.</CommonNoDataText>
      </CommonNoData>
    </div>
    <CommonCodeBlock :language="language" :value="section3" />
  </section>

  <section>
    <h2 class="guide-sub-title">type = cart</h2>
    <div class="component-container w-[500px]">
      <CommonNoData>
        <CommonNoDataTitle type="cart">cart 타이틀 입니다.</CommonNoDataTitle>
        <CommonNoDataText>cart 디스크립션 입니다.</CommonNoDataText>
      </CommonNoData>
    </div>
    <CommonCodeBlock :language="language" :value="section4" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonCaution from '#components/ui/common-caution.vue'
  import CommonCautionTitle from '#components/ui/common-caution-title.vue'
  import CommonCautionContent from '#components/ui/common-caution-content.vue'
  import CommonNoData from '#components/ui/common-no-data.vue'
  import CommonNoDataTitle from '#components/ui/common-no-data-title.vue'
  import CommonNoDataText from '#components/ui/common-no-data-text.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const language = 'javascript'
  const section1 = `
import CommonNoData from '#components/ui/common-no-data.vue'
import CommonNoDataTitle from '#components/ui/common-no-data-title.vue'
import CommonNoDataText from '#components/ui/common-no-data-text.vue'

<CommonNoData>
  <CommonNoDataTitle type="default">
    지금은 이용 가능한
    <br />
    할인 혜택이 없습니다.
  </CommonNoDataTitle>
  <CommonNoDataText>
    주문이 실패하였습니다. 잠시 후 다시 시도해 주세요.
  </CommonNoDataText>
</CommonNoData>`

  const section2 = `
import CommonNoData from '#components/ui/common-no-data.vue'
import CommonNoDataTitle from '#components/ui/common-no-data-title.vue'
import CommonNoDataText from '#components/ui/common-no-data-text.vue'

<CommonNoData>
  <CommonNoDataTitle type="waring"
    >waring 타이틀 입니다.</CommonNoDataTitle
  >
  <CommonNoDataText>waring 디스크립션 입니다.</CommonNoDataText>
</CommonNoData>`

  const section3 = `
import CommonNoData from '#components/ui/common-no-data.vue'
import CommonNoDataTitle from '#components/ui/common-no-data-title.vue'
import CommonNoDataText from '#components/ui/common-no-data-text.vue'

<CommonNoData>
  <CommonNoDataTitle type="chkecking"
    >chkecking 타이틀 입니다.</CommonNoDataTitle
  >
  <CommonNoDataText>chkecking 디스크립션 입니다.</CommonNoDataText>
</CommonNoData>`

  const section4 = `
import CommonNoData from '#components/ui/common-no-data.vue'
import CommonNoDataTitle from '#components/ui/common-no-data-title.vue'
import CommonNoDataText from '#components/ui/common-no-data-text.vue'

<CommonNoData>
  <CommonNoDataTitle type="cart">cart 타이틀 입니다.</CommonNoDataTitle>
  <CommonNoDataText>cart 디스크립션 입니다.</CommonNoDataText>
</CommonNoData>`
</script>

<style scoped></style>
