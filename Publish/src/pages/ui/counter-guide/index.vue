<template>
  <CommonTitle title="Counter Guide" />
  <section>
    <h2 class="guide-sub-title">기본 유형</h2>

    <div class="component-container w-fit">
      <CommonCounter>
        <CommonCounterButton @click="minusNum">
          <CommonImgMedia
            src="/images/icons/ico_minus.svg"
            alt="수량빼기버튼"
          />
        </CommonCounterButton>
        <CommonNumberDiv>{{ count }}</CommonNumberDiv>
        <CommonCounterButton @click="plusNum">
          <CommonImgMedia
            src="/images/icons/ico_plus.svg"
            alt="수량더하기버튼"
          />
        </CommonCounterButton>
      </CommonCounter>
      <p class="invalid-error mt-1">1회 최대 구매 가능 수량 10개</p>
    </div>
    <CommonCodeBlock :language="language" :value="code" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonCounter from '#components/ui/common-counter.vue'
  import CommonCounterButton from '#components/ui/common-counter-button.vue'
  import CommonImgMedia from '#components/ui/common-img-media.vue'
  import CommonNumberDiv from '#components/ui/common-number-div.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'
  import { ref } from '#imports'

  const count = ref<number>(0)

  const plusNum = () => {
    count.value = count.value + 1
  }
  const minusNum = () => {
    if (count.value > 0) count.value = count.value - 1
  }

  const language = 'javascript'
  const code = `
import { Counter, CounterButton, NumberDiv } from "@/components/ui/counter2"

const count = ref<number>(0)

const plusNum = () => {
  count.value = count.value + 1
}
const minusNum = () => {
  if (count.value > 0) count.value = count.value - 1
}

<CommonCounter>
  <CommonCounterButton @click="minusNum">
    <CommonImgMedia
      src="/images/icons/ico_minus.svg"
      alt="수량빼기버튼"
    />
  </CommonCounterButton>
  <CommonNumberDiv>{{ count }}</CommonNumberDiv>
  <CommonCounterButton @click="plusNum">
    <CommonImgMedia
      src="/images/icons/ico_plus.svg"
      alt="수량더하기버튼"
    />
  </CommonCounterButton>
</CommonCounter>
<p class="invalid-error mt-1">1회 최대 구매 가능 수량 10개</p>`
</script>

<style scoped></style>
