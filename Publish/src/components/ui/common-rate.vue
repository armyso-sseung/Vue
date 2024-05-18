<script setup lang="ts">
  import { type VariantProps } from 'class-variance-authority'
  import type { RateProps } from 'ant-design-vue'
  import { computed, ref } from 'vue'
  import { cn } from '~/utils/common-utils'
  import type { CommonProps } from '~/types/common/common-props'
  import { RateVariants } from '~/lib/common/ui/components/rate-variables'
  import RateStarCover from '#components/ui/rate/rate-star-cover.vue'

  type RateVariantsProps = VariantProps<typeof RateVariants>
  interface Props
    extends Pick<RateProps, 'allowHalf' | 'disabled'>,
      CommonProps {
    size?: RateVariantsProps['size']
    showNumber?: boolean
    defaultValue?: number
    starSize?: number
  }

  const props = withDefaults(defineProps<Props>(), {
    defaultValue: 0,
    showNumber: false,
    className: undefined,
    disabled: false,
    starSize: 34
  })
  const emits = defineEmits<{
    change: [value: number]
  }>()
  const rateValueRef = ref(props.defaultValue)
  const defaultModel = defineModel<number>()
  const rateValue = computed(() => defaultModel.value ?? rateValueRef.value)
  const updateRate = (numVal: number) => {
    if (defaultModel.value) {
      defaultModel.value = numVal
    } else {
      rateValueRef.value = numVal
      emits('change', numVal)
    }
  }
</script>

<template>
  <div :class="cn(RateVariants({ size: props.size }), props.className)">
    <RateStarCover
      :read-only="disabled"
      :rating="rateValue"
      :padding="props.size === 'small' ? 2 : 5"
      :increment="props.allowHalf ? 0.5 : 1"
      :star-size="props.starSize"
      @update:rating="updateRate"
    />

    <div v-if="props.showNumber" class="number-group">
      <span class="rate">{{ rateValue }}</span> /
      <span class="total">5</span>
    </div>
  </div>
</template>

<style scoped>
  @import 'assets/styles/common/rate.css';
</style>
