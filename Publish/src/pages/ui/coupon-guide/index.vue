<template>
  <CommonTitle title="Coupon Guide" />
  <section>
    <div class="my-5">
      <CommonCaution>
        <CommonCautionTitle>옵션</CommonCautionTitle>
        <CommonCautionContent>
          <b>downStatus</b>: 쿠폰 우측 버튼 영역 상태값. 기본값 '보유쿠폰'
          ['쿠폰받기' | '받기완료' | '사용완료' | '보유쿠폰'] - backend 에서
          넘어오는 값에 따라 바뀔수 있음.
        </CommonCautionContent>
        <CommonCautionContent>
          쿠폰 컴포넌트는 button으로 구성되며, downStatus가 '쿠폰받기' 인
          아이템을 제외하고 모두 disabled 처리됨.
        </CommonCautionContent>
      </CommonCaution>
    </div>

    <h2 class="mb-4 text-xl font-bold">
      버튼영역 상태에 따른 케이스 downStatus
    </h2>
    <div class="w-[420px] rounded-lg border border-gray-300 bg-white px-8 py-4">
      <div v-for="(coupon, idx) in couponDataList" :key="idx">
        <CommonContentsTitle
          :title="`downStatus = '${coupon.downStatus === '보유쿠폰' ? coupon.downStatus + ' - (보유쿠폰, 기본값)' : coupon.downStatus}'`"
          :depth="3"
        />
        <CommonCoupon
          :benefit="coupon.benefit"
          :coupon-nm="coupon.couponNm"
          :date="coupon.date"
          :min-amount="coupon.minAmount"
          :max-amount="coupon.maxAmount"
          :desc="coupon.desc"
          :device="coupon.device"
          :down-status="coupon.downStatus"
          class-name="mb-3"
        />
      </div>
    </div>
    <div class="mb-10 mt-8 min-w-fit max-w-2xl">
      <CommonCodeBlock :language="language" :value="section1" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import CommonCaution from '#components/ui/common-caution.vue'
  import CommonCautionTitle from '#components/ui/common-caution-title.vue'
  import CommonCautionContent from '#components/ui/common-caution-content.vue'
  import CommonContentsTitle from '#components/ui/common-contents-title.vue'
  import CommonCoupon from '#components/ui/common-coupon.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'
  import { couponDataList } from '~/datas/coupon-data'
  import CommonTitle from '#components/ui/common-title.vue'

  const language = 'javascript'
  const section1 = `
import CommonCoupon from '#components/ui/common-coupon.vue'

<CommonCoupon
  :benefit="coupon.benefit"
  :coupon-nm="coupon.couponNm"
  :date="coupon.date"
  :min-amount="coupon.minAmount"
  :max-amount="coupon.maxAmount"
  :desc="coupon.desc"
  :device="coupon.device"
  :down-status="coupon.downStatus"
  class-name="mb-3"
/>


 * downStatus: 'normal' | 'ready' | 'received' | 'used'
 * normal: 보유쿠폰
 * ready: 쿠폰받기
 * received: 받기완료
 * used: 사용완료
 `
</script>

<style scoped></style>
