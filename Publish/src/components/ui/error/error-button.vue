<template>
  <CommonButtonArea
    class-name="mt-10 w-full pc:w-[335px] mx-auto"
    type="column"
    size="full"
  >
    <CommonButton
      v-if="buttonLabel"
      size="xxl"
      variant="border"
      @click="(event) => $emit('click', event)"
      >{{ buttonLabel }}</CommonButton
    >
    <CommonButton
      size="xxl"
      variant="bgcolor"
      @click="(event) => $emit('click', event)"
      >{{ buttonLabelActive }}</CommonButton
    >
  </CommonButtonArea>
</template>

<script setup lang="ts">
  import CommonButtonArea from '#components/ui/common-button-area.vue'
  import CommonButton from '#components/ui/common-button.vue'
  import type {
    ErrorButtonEmits,
    ErrorButtonProps
  } from '~/types/common/component-type'

  defineEmits<ErrorButtonEmits>()
  defineProps<ErrorButtonProps>()
</script>

<style scoped></style>
