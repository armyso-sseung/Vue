<template>
  <CommonTitle title="Breadcrumb Guide" />
  <section>
    <h2 class="guide-sub-title">Breadcrumb</h2>
    <p class="mb-4">모바일에서는 hidden, PC에서만 보이도록 처리함.</p>
    <div class="component-container">
      <CommonBreadcrumb :items="navItem" class-name="hidden pc:block" />
    </div>

    <CommonCodeBlock :language="language" :value="section1" />
  </section>
</template>

<script setup lang="ts">
  import CommonCodeBlock from '#components/ui/common-code-block.vue'
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonBreadcrumb from '#components/ui/common-breadcrumb.vue'
  import { h } from '#imports'

  const navItem = [
    {
      href: '/',
      title: h('img', {src: '/images/icons/ico_nav_home.svg', alt: '홈'})
    },
    {
      href: '',
      title: '조명/전구'
    },
    {
      title: '데스크스탠드'
    }
  ]

  const language = 'javascript'
  const section1 = `
import CommonBreadcrumb from '#components/ui/common-breadcrumb.vue'

<CommonBreadcrumb :items="navItem" class-name="hidden pc:block" />`
</script>

<style scoped></style>
