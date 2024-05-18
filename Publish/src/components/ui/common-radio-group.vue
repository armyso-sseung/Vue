<template>
  <div
    :class="cn('grid gap-2', className)"
    @click="(event) => $emit('click', event)"
    v-bind="$attrs"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import type {
    RadioGroupEmits,
    RadioGroupProps
  } from '~/types/common/component-type'
  import { cn } from '~/utils/common-utils'
  import {provide} from "#imports";

  defineProps<RadioGroupProps>()
  defineEmits<RadioGroupEmits>()
  const model = defineModel('model', { required: true })
  const setModel = (value: string) => {
    model.value = value
  }

  provide('common-radio', {
    model,
    setModel
  })
</script>

<style scoped></style>
