<template>
  <a-date-picker
    :class="`datapicker-custom${className ? ' ' + className : ''}`"
    :value="state && dayjs(state)"
    :placeholder="placeholder"
    :locale="locale"
    :picker="picker"
    @change="handleChange"
  >
    <template #nextIcon>
      <CommonImgMedia
        :src="'/images/icons/ico_arrow18.svg'"
        alt="다음달이동버튼"
        class-name="rotate-180"
      />
    </template>

    <template #prevIcon>
      <CommonImgMedia
        :src="'/images/icons/ico_arrow18.svg'"
        alt="이전달이동버튼"
      />
    </template>

    <template #suffixIcon>
      <CommonImgMedia :src="'/images/icons/ico_calandar.svg'" alt="" />
    </template>
  </a-date-picker>
</template>

<script setup lang="ts">
  import dayjs, { Dayjs } from 'dayjs'
  import locale from 'ant-design-vue/es/date-picker/locale/ko_KR'
  import updateLocale from 'dayjs/plugin/updateLocale'
  import type { DatePickerProps } from '~/types/common/component-type'
  import CommonImgMedia from '#components/ui/common-img-media.vue'
  import '@/assets/styles/common/datepicker.css'
  import 'dayjs/locale/ko'

  dayjs.extend(updateLocale)
  dayjs.updateLocale('ko', {})
  locale.lang.dayFormat = ''

  const DATE_DEFAULT_FORMAT = 'YYYY-MM-DD'
  const state = defineModel<Date | undefined>('state', { required: true })
  withDefaults(defineProps<DatePickerProps>(), {
    format: DATE_DEFAULT_FORMAT,
    placeholder: '',
    picker: 'date'
  })

  const handleChange = (newValue: Dayjs | string) => {
    state.value = (newValue as Dayjs)?.toDate()
  }
</script>

<style scoped></style>
