<template>
  <div :class="cn(TimeLineVariants({}), className)" v-bind="$attrs">
    <div class="time-line-title">{{ title }}</div>
    <div class="time-line-date">{{ date }}</div>
    <div class="time-line-msg">{{ msg }}</div>
    <CommonButtonArea
      class-name="w-full gap-2 mt-5 pc:justify-end flex-wrap"
      type="column"
    >
      <CommonButton
        v-if="msgType === '주문'"
        size="sm"
        variant="third"
        class-name="w-[45%] flex-auto"
      >
        주문상세보기
      </CommonButton>
      <CommonButton
        v-else-if="msgType === '이벤트'"
        size="sm"
        variant="third"
        class-name="w-[45%] flex-auto"
      >
        이벤트 참여현황 보기
      </CommonButton>
      <CommonButton
        v-else-if="msgType === '쿠폰'"
        size="sm"
        variant="third"
        class-name="w-[45%] flex-auto"
      >
        쿠폰 확인하기
      </CommonButton>
    </CommonButtonArea>
  </div>
</template>

<script setup lang="ts">
  import type { TimeLineProps } from '~/types/common/component-type'
  import { TimeLineVariants } from '~/lib/common/ui/components/time-line-variables'
  import CommonButtonArea from '#components/ui/common-button-area.vue'
  import CommonButton from '#components/ui/common-button.vue'
  import { cn } from '~/utils/common-utils'
  import '@/assets/styles/common/time-line.css'

  defineProps<TimeLineProps>()
</script>

<style scoped></style>
