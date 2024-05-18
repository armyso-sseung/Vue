<script setup lang="ts">
  import type { CommonEmits, CommonProps } from '~/types/common/common-props'

  interface FormProps extends CommonProps {
    gap?: 'small' | 'medium' | 'large'
    showRequired?: boolean
  }
  const emits = defineEmits<Pick<CommonEmits, 'submit'>>()
  const props = withDefaults(defineProps<FormProps>(), {
    gap: 'medium'
  })
  const submitHandler = (e: Event) => {
    e.preventDefault()
    emits('submit', e)
  }
</script>

<template>
  <form
    :class="`form-custom gap-${props.gap}${props.className ? ' ' + props.className : ''}`"
    @submit="submitHandler"
  >
    <input type="hidden" name="_csrf" value="x2bee" />
    <div v-if="props.showRequired" class="caption1 mb-[-8px] text-right">
      <span class="required">*</span>표시는 필수 입력 사항입니다.
    </div>
    <slot></slot>
  </form>
</template>

<style scoped></style>
