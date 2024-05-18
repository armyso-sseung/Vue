<script setup lang="ts">
  import { computed } from 'vue'

  interface Props {
    fill?: number
    size?: number
    starId: number
    activeColor: string
    inactiveColor: string
    borderColor?: string
    activeBorderColor?: string
    borderWidth?: number
    roundedCorners?: boolean
    rtl?: boolean
    glow?: number
    glowColor?: string
    animate?: boolean
    margin?: number
  }

  const props = withDefaults(defineProps<Props>(), {
    fill: 0,
    size: 50,
    borderColor: '#000',
    activeBorderColor: '#000',
    borderWidth: 0,
    roundedCorners: false,
    rtl: false,
    glow: 0,
    glowColor: undefined,
    animate: false,
    margin: 5
  })

  const emits = defineEmits<{
    'star-selected': [
      param: {
        id: number
        position: number
      }
    ]
    'star-mouse-move': [
      param: {
        event: MouseEvent
        position: number
        id: number
      }
    ]
  }>()
  const starSize = computed(() => {
    return props.size - 2 * props.margin
  })

  const starFill = computed(() => {
    return starSize.value * (props.fill / 100)
  })

  const getPosition = (e: Event) => {
    const event = e as MouseEvent
    if ('offsetX' in event) {
      const starWidth = (92 / 100) * props.size
      const offset = props.rtl
        ? Math.min(event.offsetX, 45)
        : Math.max(event.offsetX, 1)
      const position = Math.round((100 / starWidth) * offset)
      return Math.min(position, 100)
    }
    return 0
  }

  const selectHandler = (e: Event) => {
    emits('star-selected', {
      id: props.starId,
      position: getPosition(e)
    })
  }

  const mouseHandler = (e: Event) => {
    emits('star-mouse-move', {
      event: e as MouseEvent,
      position: getPosition(e),
      id: props.starId
    })
  }

  const px = (numVal: number) => {
    return `${numVal}px`
  }
</script>
<template>
  <div
    class="star-cover"
    :style="{ width: px(props.size), height: px(props.size) }"
    @mousemove="mouseHandler"
    @click="selectHandler"
  >
    <div class="star-back star-common">
      <div>
        <svg
          :style="{
            width: px(starSize),
            height: px(starSize)
          }"
          viewBox="64 64 896 896"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path
            d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
          />
        </svg>
      </div>
    </div>
    <div
      class="star-fill star-common"
      :style="{ width: `${px(starFill)} !important`, zIndex: 50 }"
    >
      <div>
        <svg
          :style="{ width: px(starSize), height: px(starSize) }"
          viewBox="64 64 896 896"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path
            d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .star-cover {
    transition:
      all 0.2s,
      outline 0s;
    position: relative;
  }
  .star-common {
    margin: 5px;
    position: absolute;
    overflow: hidden;
  }
  .star-common > div {
    position: relative;
  }
  .star-cover:hover {
    transform: scale(1.2);
  }
  .star-fill {
    color: rgb(249, 72, 45);
  }
  .star-back {
    color: rgb(229, 231, 235);
  }
</style>
