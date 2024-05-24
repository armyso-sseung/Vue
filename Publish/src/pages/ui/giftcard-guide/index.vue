<template>
  <CommonTitle title="GiftCard" />
  <section>
    <h2 class="mb-4 text-xl font-bold">&lt;GiftCard /&gt;</h2>
    <p class="mb-4">선물 카드</p>
    <div class="my-5">
      <CommonCaution>
        <CommonCautionTitle>옵션</CommonCautionTitle>
        <CommonCautionContent> <b>msg</b>: 전송할 메시지 </CommonCautionContent>
      </CommonCaution>
    </div>
    <div
      class="mb-4 w-full rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <CommonGiftCard
        hide-sender
        msg="생일축하해~ 생일축하해~ 생일축하해~ 생일축하해~ 생일축하해~ 생일축하해~ 생일축하해~ 생일축하해~ 생일축하해~ 생일축하해~ 생일축하해~ 생일축하해~"
      />
    </div>
    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section1" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonCaution from '#components/ui/common-caution.vue'
  import CommonCautionTitle from '#components/ui/common-caution-title.vue'
  import CommonCautionContent from '#components/ui/common-caution-content.vue'
  import CommonGiftCard from '#components/ui/common-gift-card.vue'

  const language = 'javascript'
  const section1 = `
import CommonGiftCard from '#components/ui/common-gift-card.vue'

<CommonGiftCard hideSender msg="생일축하해~ 생일축하해~ 생일축하해~ 생일축하해~ 생일축하해~ 생일축하해~ 생일축하해~ 생일축하해~ 생일축하해~ 생일축하해~ 생일축하해~ 생일축하해~" />`
</script>

<style scoped></style>
