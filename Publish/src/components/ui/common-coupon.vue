<template>
  <button
    type="button"
    :class="cn(CouponVariants({ downStatus }), className)"
    :disabled="downStatus !== 'ready'"
    v-bind="$attrs"
  >
    <div class="txt-area">
      <p class="txt-benefit">{{ benefit }}</p>
      <p class="txt-name">{{ couponNm }}</p>
      <p class="txt-date">{{ date }}(D-1)</p>
      <p v-if="minAmount && maxAmount" class="txt-desc">
        {{ `취소 ${minAmount.toLocaleString()} 이상 구매 시 최대 ` }}
        {{ maxAmount.toLocaleString() }} 원 할인
      </p>
      <p class="txt-desc">{{ desc }}</p>
      <div class="btn-flags">
        <CommonFlag v-for="(item, idx) in device" :key="idx" border="type4">
          {{ item }}
        </CommonFlag>
      </div>
    </div>
    <div class="btn-status">{{ downStatusMap[downStatus] }}</div>
  </button>
</template>

<script setup lang="ts">
  import type { CouponProps } from '~/types/common/component-type'
  import { cn } from '~/utils/common-utils'
  import { CouponVariants } from '~/lib/common/ui/components/coupon-variables'
  import CommonFlag from '#components/ui/common-flag.vue'

  defineProps<CouponProps>()

  const downStatusMap = {
    normal: '보유쿠폰',
    ready: '쿠폰받기',
    received: '받기완료',
    used: '사용완료'
  }
</script>

<style scoped></style>
