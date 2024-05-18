<script setup lang="ts">
  import { computed } from 'vue'
  import type { CommonProps } from '~/types/common/common-props'
  import s3Image from '~/utils/s3-image'

  interface itemProps {
    reviewWrite?: string
    seller: string
    itemName: string
    thumbnailUrl?: string
    rewardPeriod?: number
    linkUrl: string
  }

  interface Props extends CommonProps {
    data: itemProps
  }

  const props = defineProps<Props>()
  const data = computed(() => props.data)
</script>

<template>
  <div
    :class="`simple-order-item ${props.className ? ' ' + props.className : ''}`"
  >
    <NuxtLink :href="data.linkUrl" class="block">
      <div class="flex w-full space-x-2 pc:space-x-3">
        <div class="unit-img relative size-20 shrink-0">
          <img
            v-if="data.thumbnailUrl"
            :src="s3Image({ src: data.thumbnailUrl })"
            :alt="data.itemName"
          />
        </div>
        <div class="unit-info flex-auto flex-row space-y-1">
          <p class="body2 font-bold">{{ data.seller }}</p>
          <p class="body1">{{ data.itemName }}</p>
          <p
            v-if="
              data.reviewWrite === 'N' &&
              data.rewardPeriod &&
              data.rewardPeriod >= 0
            "
            class="body2 font-bold text-secondary2"
          >
            적립기한 D-{{ data.rewardPeriod }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
