<template>
  <textarea
    :id="id"
    v-model="model"
    :class="
      cn(
        TextareatVariants({
          variant,
          className
        })
      )
    "
    :placeholder="placeholder"
    :disabled="disabled"
    :minLength="minLength"
    :maxLength="maxLength"
    :name="name"
    @change="(event) => $emit('change', event)"
  ></textarea>
  <div v-if="maxLength && maxLength > 0" class="textvalue">
    <span class="text-xs">
      <em>{{ (model ?? '').length.toLocaleString() }}</em
      >/
      {{ `${maxLength.toLocaleString()} ` }}
      {{ minLength && `(최소${minLength.toLocaleString()}자)` }}
    </span>
  </div>
</template>

<script setup lang="ts">
  import type {
    TextareaEmits,
    TextareaProps
  } from '~/types/common/component-type'
  import { cn } from '~/utils/common-utils'
  import { TextareatVariants } from '~/lib/common/ui/components/text-variables'

  defineEmits<TextareaEmits>()
  defineProps<TextareaProps>()
  const model = defineModel<string>('model', {
    required: true
  })
</script>
