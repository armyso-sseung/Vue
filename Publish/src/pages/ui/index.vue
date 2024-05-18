<template>
  <div class="flex h-20 items-center justify-between bg-gray9 p-5">
    <h1 class="heading1 text-white">
      <span class="font-bold">X2BEE</span> UI Components Guide
    </h1>
  </div>
  <div class="guide-layout flex items-stretch bg-white">
    <div class="guide-sidebar-wrap">
      <CommonSidebar />
    </div>
    <div class="flex-1 overflow-auto bg-gray-50 p-10">
      <div class="mb-8">
        <h1 class="mb-4 text-2xl font-bold">Layout Guide</h1>
        <CommonLayout />
      </div>
    </div>
  </div>
  <CommonBtnPageTop />
</template>

<script setup lang="ts">
  import CommonBtnPageTop from '#components/ui/common-btn-page-top.vue'
  import CommonSidebar from '#components/ui/sidebar/common-sidebar.vue'
  import CommonLayout from '#components/ui/layout/common-layout.vue'
</script>

<style scoped></style>
