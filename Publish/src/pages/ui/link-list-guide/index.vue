<template>
  <CommonTitle title="LinkList Guide" />
  <section>
    <h2 class="guide-sub-title">기본유형</h2>
    <p class="mb-4">
      다음 컨텐츠와의 간격을 위해 자체 하단 여백을 가지고 있음. 여백이 불필요 할
      경우 "mb-0" 클래스 추가
    </p>
    <div class="component-container w-[375px]">
      <CommonLinkList :data="linkListData" />
    </div>

    <CommonCodeBlock :language="language" :value="section1" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonLinkList from '#components/ui/common-link-list.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const linkListData = [
    {
      title: '상품고시정보',
      url: '/'
    },
    {
      title: '교환/반품안내',
      url: '/'
    }
  ]

  const language = 'javascript'
  const section1 = `
import CommonLinkList from '#components/ui/common-link-list.vue'

<CommonLinkList :data="linkListData" />`
</script>

<style scoped></style>
