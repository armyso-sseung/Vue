<script setup lang="ts">
  import { computed, ref, watch } from 'vue'
  import RateStar from '#components/ui/rate/rate-star.vue'

  interface Props {
    increment?: number
    rating?: number
    roundStartRating?: boolean
    activeColor?: string | string[]
    inactiveColor?: string
    maxRating?: number
    starSize?: number
    showRating?: boolean
    readOnly?: boolean
    textClass?: string
    inline?: boolean
    borderColor?: string
    activeBorderColor?: string | string[]
    borderWidth?: number
    roundedCorners?: boolean
    padding?: number
    rtl?: boolean
    fixedPoints?: number
    glow?: number
    glowColor?: string
    clearable?: boolean
    activeOnClick?: boolean
    animate?: boolean
  }

  interface RateHandleProps {
    event?: MouseEvent
    position: number
    id: number
  }

  const props = withDefaults(defineProps<Props>(), {
    increment: 1,
    rating: 0,
    roundStartRating: true,
    activeColor: '#ffd055',
    inactiveColor: '#d8d8d8',
    maxRating: 5,
    starSize: 50,
    showRating: false,
    readOnly: false,
    textClass: '',
    inline: false,
    borderColor: '#999',
    activeBorderColor: undefined,
    borderWidth: 0,
    roundedCorners: false,
    padding: 5,
    rtl: false,
    fixedPoints: undefined,
    glow: 0,
    glowColor: '#fff',
    clearable: false,
    activeOnClick: false,
    animate: false
  })

  const emits = defineEmits<{
    'update:rating': [rating: number]
    'hover:rating': [rating: number]
  }>()

  // 기존에 선택된 값
  const selectedRating = ref(props.rating || props.maxRating)
  // 현재 마우스가 가르키는 값
  const currentRating = ref(props.rating || props.maxRating)
  const step = ref(props.increment * 100)
  const ratingSelected = ref(false)

  const rateRound = (rating: number | string) => {
    let tRating = 0
    if (typeof rating === 'string') {
      tRating = parseFloat(rating) || 0
    } else {
      tRating = rating
    }
    const inv = 1.0 / props.increment
    return Math.min(props.maxRating, Math.ceil(tRating * inv) / inv)
  }

  const resultRating = computed(() => {
    return rateRound(currentRating.value)
  })

  const margin = computed(() => {
    return props.padding + props.borderWidth
  })

  const fillLevel = computed(() => {
    const resultArray = new Array(props.maxRating)
    for (let i = 0; i < resultArray.length; i++) {
      if (i < resultRating.value) {
        resultArray[i] =
          resultRating.value - i > 1 ? 100 : (resultRating.value - i) * 100
      }
    }
    return resultArray
  })

  const resetHandler = () => {
    if (!props.readOnly) {
      currentRating.value = selectedRating.value
    }
  }

  const rateHandler = (args: RateHandleProps, persist: boolean) => {
    if (!props.readOnly) {
      const position = props.rtl
        ? (100 - args.position) / 100
        : args.position / 100
      currentRating.value = rateRound((args.id + position - 1).toFixed(2))
      currentRating.value =
        currentRating.value > props.maxRating
          ? props.maxRating
          : currentRating.value
      if (persist) {
        if (props.clearable && currentRating.value === selectedRating.value) {
          selectedRating.value = 0
        } else {
          selectedRating.value = currentRating.value
        }

        emits('update:rating', selectedRating.value)
        ratingSelected.value = true
      } else {
        emits('hover:rating', currentRating.value)
      }
    }
  }

  watch(
    () => props.rating,
    (val) => {
      currentRating.value = val
      selectedRating.value = val
    },
    {
      flush: 'post'
    }
  )
</script>
<template>
  <div
    :class="[
      'vue-star-rating',
      { 'vue-star-rating-rtl': rtl },
      { 'vue-star-rating-inline': inline }
    ]"
  >
    <div class="vue-star-rating" @mouseleave="resetHandler">
      <span
        v-for="n in maxRating"
        :key="n"
        :class="[
          { 'vue-star-rating-pointer': !readOnly },
          'vue-star-rating-star'
        ]"
      >
        <RateStar
          :size="starSize"
          :active-color="'#ffd055'"
          :inactive-color="'#d8d8d8'"
          :fill="fillLevel[n - 1]"
          :star-id="n"
          :step="step"
          :rtl="rtl"
          :glow="glow"
          :glow-color="glowColor"
          :animate="animate"
          :margin="margin"
          @star-selected="(args: RateHandleProps) => rateHandler(args, true)"
          @star-mouse-move="(args: RateHandleProps) => rateHandler(args, false)"
        />
      </span>
    </div>
  </div>
</template>
<style scoped>
  .vue-star-rating-star {
    display: inline-block;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }

  .vue-star-rating {
    display: flex;
    align-items: center;
  }

  .vue-star-rating-rtl .vue-star-rating-rating-text {
    margin-right: 10px;
    direction: rtl;
  }
</style>
