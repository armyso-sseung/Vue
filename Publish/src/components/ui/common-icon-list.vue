<template>
  <div :class="cn('mt-2 flex gap-1', className)">
    <CommonImage
      v-for="icon in icons"
      :key="icon.iconNo"
      :src="icon.iconPath"
      :alt="icon.iconNo"
      :height="180"
      class-name="h-[18px] w-auto"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { cn } from '~/utils/common-utils'
  import CommonImage from '#components/ui/common-image.vue'

  const iconStore = useIconStore()
  const { iconList, className } = defineProps<{
    iconList: string[]
    className?: string
  }>()
  const icons = ref<
    {
      iconNo: string
      iconPath: string
    }[]
  >([])
  watch(iconStore.$state, (state) => {
    icons.value = iconList.slice(0, 3).map((icon) => {
      return {
        iconNo: icon,
        iconPath: state.icons[icon]
      }
    })
  })
</script>

<style scoped></style>
