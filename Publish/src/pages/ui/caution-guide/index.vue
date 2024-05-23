<template>
  <CommonTitle title="Caution Guide" />
  <h2 class="guide-sub-title">Caution, CautionTitle, CautionContent</h2>
  <div class="component-container">
    <CommonCaution>
      <CommonCautionTitle>유의사항</CommonCautionTitle>
      <CommonCautionContent>
        개인사업자/법인/체크/선불/기프트/하이브리드/토스카드/은행계열카드는 적용
        대상에서 제외됩니다.
      </CommonCautionContent>
      <CommonCautionContent>
        고객 부담 수수료는 해당 카드사로 문의 바랍니다.
      </CommonCautionContent>
      <CommonCautionContent>
        전북/광주 카드 무이자의 경우, 결제창 내 (무) 표기가 되지 않더라도, 금액
        조건 만족 시 결제 시에 업종 무이자 적용됩니다.
      </CommonCautionContent>
      <CommonCautionContent>
        본 행사는 카드사 사정에 따라 변경 또는 중단될 수 있습니다.
      </CommonCautionContent>
    </CommonCaution>
    <br />
    <CommonCaution>
      <CommonCautionTitle size="lg">교환/반품 신청 기간</CommonCautionTitle>
      <CommonCautionContent>
        교환/취소/반품/교환/환불은 배송 완료 후 7일 이내에 가능합니다.
      </CommonCautionContent>
      <CommonCautionContent>
        고객님이 받으신 상품의 내용이 표시 광고 및 계약 내용과 다른 경우 상품을
        수령하신 날로부터 3개월 이내, 그 사실을 안 날(알 수 있었던 날)부터 30일
        이내에 신청이 가능합니다.
      </CommonCautionContent>
    </CommonCaution>
  </div>
  <CommonCodeBlock :language="language" :value="section1" />
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonCaution from '#components/ui/common-caution.vue'
  import CommonCautionTitle from '#components/ui/common-caution-title.vue'
  import CommonCautionContent from '#components/ui/common-caution-content.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const language = 'javascript'
  const section1 = `
import CommonCaution from '#components/ui/common-caution.vue'
import CommonCautionTitle from '#components/ui/common-caution-title.vue'
import CommonCautionContent from '#components/ui/common-caution-content.vue'

<CommonCaution>
  <CommonCautionTitle>유의사항</CommonCautionTitle>
  <CommonCautionContent>
    개인사업자/법인/체크/선불/기프트/하이브리드/토스카드/은행계열카드는 적용
    대상에서 제외됩니다.
  </CommonCautionContent>
  <CommonCautionContent>
    고객 부담 수수료는 해당 카드사로 문의 바랍니다.
  </CommonCautionContent>
  <CommonCautionContent>
    전북/광주 카드 무이자의 경우, 결제창 내 (무) 표기가 되지 않더라도, 금액
    조건 만족 시 결제 시에 업종 무이자 적용됩니다.
  </CommonCautionContent>
  <CommonCautionContent>
    본 행사는 카드사 사정에 따라 변경 또는 중단될 수 있습니다.
  </CommonCautionContent>
</CommonCaution>

<CommonCaution>
  <CommonCautionTitle size="lg">교환/반품 신청 기간</CommonCautionTitle>
  <CommonCautionContent>
    교환/취소/반품/교환/환불은 배송 완료 후 7일 이내에 가능합니다.
  </CommonCautionContent>
  <CommonCautionContent>
    고객님이 받으신 상품의 내용이 표시 광고 및 계약 내용과 다른 경우 상품을
    수령하신 날로부터 3개월 이내, 그 사실을 안 날(알 수 있었던 날)부터 30일
    이내에 신청이 가능합니다.
  </CommonCautionContent>
</CommonCaution>`
</script>

<style scoped></style>
