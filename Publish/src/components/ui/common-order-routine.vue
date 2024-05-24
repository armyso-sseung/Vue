<template>
  <div>
    <div class="duration mb-10">
      <CommonContentsTitle :depth="3">
        <template #title>
          <h2 class="title">{{ `정기주문 기간 ` }}</h2>
          <span v-if="month"
            ><b>{{ month }}</b></span
          >
        </template>
      </CommonContentsTitle>
      <CommonRadioButton
        v-model:model="radioValue1"
        name="itemListMonth"
        :options="itemListMonth"
        @change="handleRadioChangeMonth"
      />
    </div>

    <div class="frequency mb-10">
      <CommonContentsTitle :depth="3">
        <template #title>
          <h2 class="title">{{ `정기주문 주기 ` }}</h2>
          <span v-if="week"
            ><b>{{ week }}</b></span
          >
        </template>
      </CommonContentsTitle>
      <CommonRadioButton
        v-model:model="radioValue2"
        name="itemListWeek"
        :options="itemListWeek"
        @change="handleRadioChangeWeek"
      />
    </div>

    <div>
      <CommonContentsTitle :depth="3">
        <template #title>
          <h2 class="title">{{ `정기주문 요일 ` }}</h2>
          <span v-if="day"
            ><b>{{ day }}</b></span
          >
        </template>
      </CommonContentsTitle>
      <div class="day flex">
        <div
          v-for="day in itemListDay"
          :key="day"
          class="mo:flex-1 mo:text-center pc:mr-3"
        >
          <button
            :class="`size-10 rounded-full ${selectedDays.includes(day) ? 'selected font-bold' : ''}`"
            @click="() => handleDaySelect(day)"
          >
            {{ day }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from '#imports'
  import CommonContentsTitle from '#components/ui/common-contents-title.vue'
  import CommonRadioButton from '#components/ui/common-radio-button.vue'

  interface OrderRuntinePros {
    month?: string
    week?: string
    day?: string
  }

  withDefaults(defineProps<OrderRuntinePros>(), {
    month: '',
    week: '',
    day: ''
  })

  const selectedDays = ref<string[]>([])
  const radioValue1 = ref<string>('1month')
  const radioValue2 = ref<string>('1week')

  const itemListMonth = [
    { label: '1개월', value: '1month' },
    { label: '2개월', value: '2month' },
    { label: '3개월', value: '3months' },
    { label: '4개월', value: '4month' },
    { label: '5개월', value: '5month' }
  ]

  const itemListWeek = [
    { label: '1주', value: '1week', disabled: false },
    { label: '2주', value: '2week', disabled: false },
    { label: '3주', value: '3week', disabled: false },
    { label: '4주', value: '4week', disabled: false },
    { label: '8주', value: '8week', disabled: true }
  ]

  const itemListDay = ['월', '화', '수', '목', '금', '토', '일']

  const handleRadioChangeMonth = (value: string) => {
    console.log('라디오 클릭', value)
  }

  const handleRadioChangeWeek = (value: string) => {
    console.log('라디오 클릭', value)
  }

  const handleDaySelect = (day: string) => {
    // 요일 선택
    const index = selectedDays.value.indexOf(day)
    selectedDays.value =
      index === -1
        ? [...selectedDays.value, day]
        : selectedDays.value.filter((d) => d !== day)
  }
</script>

<style scoped></style>
