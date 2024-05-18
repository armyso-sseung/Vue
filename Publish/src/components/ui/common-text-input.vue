<template>
  <div :class="`input-item${className ? ' ' + className : ''}`">
    <input
      ref="$input"
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      :class="
        cn(
          `${textRight && 'text-right'}`,
          TextInputVariants({
            variant,
            className
          }),
          TextCustomVariants({
            shape,
            deleteBtn: deleteBtnProps
          })
        )
      "
      :maxlength="maxLength"
      :minlength="minLength"
      :readonly="readonly"
      :disabled="disabled"
      @change="(event) => $emit('change', event)"
      @focus="onFocus"
      @blur="onBlur"
    />
    <button type="button" class="btn-delete" @click="onReset">삭제</button>
  </div>
</template>

<script setup lang="ts">
  import { cn, computed, ref } from '#imports'
  import type {
    TextInputEmits,
    TextInputProps
  } from '~/types/common/component-type'
  import {
    TextCustomVariants,
    TextInputVariants
  } from '~/lib/common/ui/components/text-variables'

  defineEmits<TextInputEmits>()
  const { readonly } = withDefaults(defineProps<TextInputProps>(), {
    className: '',
    readonly: false,
    disabled: false,
    shape: 'default'
  })
  const model = defineModel('model')
  const focused = ref(false)
  const $input = ref<HTMLInputElement | null>(null)

  const onFocus = () => {
    focused.value = true
  }
  const onBlur = () => {
    setTimeout(() => {
      focused.value = false
    }, 300)
    // FocusOut delay
  }

  const onReset = () => {
    model.value = ''
  }

  const handleFocusInput = () => {
    $input.value?.focus()
  }

  const deleteBtnProps = computed(() => {
    return !readonly &&
      focused.value &&
      (model.value?.toString().length ?? 0) > 0
      ? 'on'
      : 'default'
  })

  defineExpose({
    handleFocusInput: () => handleFocusInput()
  })
</script>

<style scoped></style>
