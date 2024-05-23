<template>
  <CommonTitle title="BannerMsg Guide" />
  <p class="mb-4">페이지 상단에 붙는 알림성 메시지 박스</p>
  <CommonCaution class-name="mb-10">
    <CommonCautionTitle>옵션</CommonCautionTitle>
    <CommonCautionContent>
      <b>variant</b>: 메시지 박스 디자인 타입 - null [null | "red"]
    </CommonCautionContent>
    <CommonCautionContent>
      <b>showCloseBtn</b>: close 버튼 노출 여부 - false [boolean]
    </CommonCautionContent>
  </CommonCaution>

  <section>
    <h2 class="mb-4 text-xl font-bold">기본 타입</h2>

    <div
      class="mb-4 w-full rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <CommonBannerMsg>
        <CommonCaution>
          <CommonCautionContent>
            알림 내용은 7일 지나면 자동으로 삭제 처리 됩니다.
          </CommonCautionContent>
        </CommonCaution>
      </CommonBannerMsg>
    </div>
  </section>
  <section>
    <h2 class="mb-4 text-xl font-bold">중요 타입</h2>
    <p class="mb-4">variant="red" + showCloseBtn</p>
    <div
      class="mb-4 w-full rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <CommonBannerMsg show-close-btn variant="red">
        <p class="break-all">고객 공지: &nbsp; 알림명절 배송 공지</p>
      </CommonBannerMsg>
    </div>
  </section>

  <div class="mb-10 mt-4 min-w-fit">
    <CommonCodeBlock :language="language" :value="section1" />
  </div>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonCaution from '#components/ui/common-caution.vue'
  import CommonCautionTitle from '#components/ui/common-caution-title.vue'
  import CommonCautionContent from '#components/ui/common-caution-content.vue'
  import CommonBannerMsg from '#components/ui/common-banner-msg.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const language = 'javascript'
  const section1 = `
import CommonBannerMsg from '#components/ui/common-banner-msg.vue'
import CommonCaution from '#components/ui/common-caution.vue'
import CommonCautionContent from '#components/ui/common-caution-content.vue'

<CommonBannerMsg>
  <CommonCaution>
    <CommonCautionContent>
      알림 내용은 7일 지나면 자동으로 삭제 처리 됩니다.
    </CommonCautionContent>
  </CommonCaution>
</CommonBannerMsg>`
</script>

<style scoped></style>
