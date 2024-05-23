<template>
  <CommonTitle title="Date Picker Guide" />
  <section>
    <h2 class="guide-sub-title">picker 타입("date" | "month") - 기본값 date</h2>

    <div class="component-container w-fit">
      <div class="flex gap-1">
        <CommonDatePicker v-model:state="datePicker1" placeholder="날짜 선택" />
        <CommonDatePicker
          v-model:state="datePicker2"
          placeholder="날짜 선택"
          picker="month"
        />
      </div>
    </div>

    <CommonCodeBlock :language="language" :value="code1" />
  </section>

  <section>
    <h2 class="guide-sub-title">상세조회 클릭 시 기간 캘린더 표시</h2>
    <p class="mb-4">조회기간이 월단위 일 경우 picker="month" 옵션</p>
    <div class="component-container w-[500px]">
      <CommonRadioButton
        v-model:model="radioButton"
        name="select2"
        :options="itemList"
        default-value="Details"
        class-name="w-full mb-5 pc:mb-10"
      />

      <div
        v-if="showDetailSearch"
        className="w-full mb-5 pc:mb-10 flex gap-1 items-center pc:max-w-[356px] mx-auto"
      >
        <CommonDatePicker
          v-model:state="datePicker2"
          placeholder="날짜 선택"
          class-name="flex-auto"
        />
        ~
        <CommonDatePicker
          v-model:state="datePicker3"
          placeholder="날짜 선택"
          class-name="flex-auto"
        />
        <CommonButton variant="third" size="base" class-name="flex-none">
          조회
        </CommonButton>
      </div>
    </div>

    <CommonCodeBlock :language="language" :value="code2" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonDatePicker from '#components/ui/common-date-picker.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'
  import CommonRadioButton from '#components/ui/common-radio-button.vue'
  import CommonButton from '#components/ui/common-button.vue'
  import { computed, ref } from '#imports'

  const datePicker1 = ref<Date>()
  const datePicker2 = ref<Date>()
  const datePicker3 = ref<Date>()
  const radioButton = ref<string>()

  const showDetailSearch = computed(() => {
    return radioButton.value === 'Details'
  })

  const itemList = [
    { label: '1주', value: '1week' },
    { label: '1개월', value: '1month' },
    { label: '3개월', value: '3months' },
    { label: '상세조회', value: 'Details' }
  ]

  const language = 'tsx'
  const code1 = `
import CommonDatePicker from '#components/ui/common-date-picker.vue'

const datePicker1 = ref<Date>()
const datePicker2 = ref<Date>()

<CommonDatePicker v-model:state="datePicker1" placeholder="날짜 선택" />
<CommonDatePicker
  v-model:state="datePicker2"
  placeholder="날짜 선택"
  picker="month"
/>`

  const code2 = `
import CommonDatePicker from '#components/ui/common-date-picker.vue'
import CommonRadioButton from '#components/ui/common-radio-button.vue'

const datePicker3 = ref<Date>()
const radioButton = ref<string>()

const showDetailSearch = computed(() => {
    return radioButton.value === 'Details'
  })

<CommonRadioButton
  name="select2"
  :options="itemList"
  default-value="Details"
  class-name="w-full mb-5 pc:mb-10"
/>

<div
  v-if="showDetailSearch"
  className="w-full mb-5 pc:mb-10 flex gap-1 items-center pc:max-w-[356px] mx-auto"
>
  <CommonDatePicker
    v-model:state="datePicker2"
    placeholder="날짜 선택"
    class-name="flex-auto"
  />
  ~
  <CommonDatePicker
    v-model:state="datePicker3"
    placeholder="날짜 선택"
    class-name="flex-auto"
  />
  <CommonButton variant="third" size="base" class-name="flex-none">
    조회
  </CommonButton>
</div>`
</script>

<style scoped></style>
