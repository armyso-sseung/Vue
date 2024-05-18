<template>
  <input
    :id="id"
    type="radio"
    :name="name"
    :class="
      cn(
        'aspect-square size-5 rounded-full border border-black bg-center bg-no-repeat disabled:border-gray4 data-[state=checked]:bg-icon-radio-on',
        className
      )
    "
    :disabled="disabled"
    :value="value"
    :checked="model === value"
    :data-state="model === value ? 'checked' : ''"
    @click="handleClickRadio"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
  import type {
    RadioGroupItemEmits,
    RadioGroupItemProps
  } from '~/types/common/component-type'
  import { cn } from '~/utils/common-utils'
  import {inject, ref} from "#imports";

  const emits = defineEmits<RadioGroupItemEmits>()
  defineProps<RadioGroupItemProps>()

  const { model, setModel } = inject('common-radio', {
    model: ref(''),
    setModel: (value: string) => value
  })

  const handleClickRadio = (event: Event) => {
    setModel(event.target.value)
    emits('click', event)
  }
</script>

<style scoped></style>
