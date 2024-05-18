<template>
  <div class="h-full">
    <div class="flex h-20 items-center justify-between bg-gray9 p-5">
      <h1 class="heading1 text-white">
        <span class="font-bold">X2BEE</span> {{ title }} ( Nuxt )
      </h1>
      <a href="/ui" class="subtitle2 font-medium text-white hover:text-white"
        >UI 페이지 바로가기</a
      >
    </div>
    <div class="guide-layout flex items-stretch bg-white">
      <div class="guide-sidebar-wrap">
        <CommonSidebar />
      </div>
      <div class="flex-1 overflow-auto bg-gray-50 p-10">
        <NuxtPage />
      </div>
    </div>
    <CommonBtnPageTop />
  </div>
</template>

<script setup lang="ts">
  import '@/assets/styles/common/ui-guide.css'
  import type { CommonProps } from '~/types/common/common-props'
  import CommonSidebar from '#components/ui/sidebar/common-sidebar.vue'
  import CommonBtnPageTop from '#components/ui/common-btn-page-top.vue'

  interface DefaultLayoutProps extends CommonProps {
    title?: string
  }

  withDefaults(defineProps<DefaultLayoutProps>(), {
    title: 'UI Components Guide'
  })
</script>

<style scoped></style>
