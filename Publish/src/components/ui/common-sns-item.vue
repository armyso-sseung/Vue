<template>
  <div class="h-auto w-full" v-bind="$attrs">
    <CommonImgMedia
      :src="snsData.snsImgUrl"
      :alt="snsData.snsName"
      class-name="block w-full"
    />
  </div>
  <p class="invisible size-0 overflow-hidden text-transparent opacity-0">
    {{ snsData.snsName }}
  </p>
</template>

<script setup lang="ts">
  import CommonImgMedia from '#components/ui/common-img-media.vue'
  import type { SnsItemProps } from '~/types/common/component-type'

  defineProps<SnsItemProps>()
</script>

<style scoped></style>
