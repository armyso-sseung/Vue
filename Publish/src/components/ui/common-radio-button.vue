<template>
  <div
    :class="`radio-button-custom${className ? ' ' + className : ''} size-${size}`"
  >
    <div v-for="(item, idx) in options" :key="idx" class="radio-item">
      <input
        :id="`${name}-${item.value}`"
        v-model="model"
        type="radio"
        :value="item.value"
        :disabled="disabled || item.disabled"
        :name="name"
        v-bind="$attrs"
      />
      <label :for="`${name}-${item.value}`">{{ item.label }}</label>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import type { RadioButtonProps } from '~/types/common/component-type'
  import '@/assets/styles/common/radio-button.css'

  const model = defineModel('model')
  withDefaults(defineProps<RadioButtonProps>(), {
    disabled: false,
    className: '',
    size: 'base',
    name: ''
  })
</script>

<style scoped></style>
