<template>
  <a-tooltip
    v-model:open="open"
    :placement="placementMap[placement]"
    trigger="click"
    :arrow="false"
    :overlay-style="{ margin: '4px' }"
    :overlay-inner-style="{ background: isDark ? 'black' : 'white' }"
    v-bind="$attrs"
  >
    <template #title>
      <div>
        <div :class="`${isDark ? 'text-white' : 'text-black'}`">{{ text }}</div>
        <div class="btn-close cursor-pointer" @click="() => (open = false)">
          <CommonImgMedia
            src="/images/icons/ico_close12.svg"
            :class-name="isDark ? svgColorMap.white : svgColorMap.black"
          />
        </div>
      </div>
    </template>

    <slot>
      <CommonImgMedia
        src="/images/icons/ico_tooltip.svg"
        class-name="cursor-pointer"
      />
    </slot>
  </a-tooltip>
</template>

<script setup lang="ts">
  import CommonImgMedia from '#components/ui/common-img-media.vue'
  import { ref } from '#imports'
  import type {
    CommonTooltipProps,
    PlacementMapType
  } from '~/types/common/component-type'

  withDefaults(defineProps<CommonTooltipProps>(), {
    text: '텍스트를 입력하세요.',
    placement: 'top',
    isDark: false
  })

  const open = ref<boolean>(false)
  const placementMap: PlacementMapType = {
    top: 'top',
    bottom: 'bottom',
    right: 'right',
    left: 'left',
    topRight: 'topLeft',
    topLeft: 'topRight',
    bottomRight: 'bottomLeft',
    bottomLeft: 'bottomRight'
  }
  const svgColorMap = {
    white:
      'invert-[99%] sepia-[99%] saturate-[13%] hueRotate-[244deg] brightness-[105%] contrast-[100%]',
    black:
      'invert-[0%] sepia-[100%] saturate-[7461%] hueRotate-[355deg] brightness-[86%] contrast-[108%]'
  }
</script>

<style scoped></style>
