<template>
  <CommonTitle title="Steps Guide" />
  <section>
    <h2 class="mb-4 text-xl font-bold">기본 타입</h2>
    <p class="mb-4">
      Steps는 antd ui 프레임워크 사용. api는 antd 와 동일하게 사용됩니다.
      <a
        href="https://antdv.com/components/steps/#api"
        target="_blank"
        class="rounded-full border border-gray4 bg-white px-6 py-2 text-black disabled:text-gray5"
      >
        Ant design Steps Api
      </a>
    </p>
    <div
      class="mb-4 w-full rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <CommonSteps :current="2" />
    </div>

    <div class="my-5">
      <CommonCaution>
        <CommonCautionTitle>옵션</CommonCautionTitle>
        <CommonCautionContent>
          <b>items</b>: Steps에 뿌려질 단계 데이터. 커스텀 하고 싶을 경우에만
          추가 - 기본값으로 [주문상세/상품준비중/배송중/배송완료] 로 셋팅되어
          있음 [Array]
        </CommonCautionContent>
        <CommonCautionContent>
          <b>current</b>: 진행중인 단계 표시 - 기본값 null [Number]
        </CommonCautionContent>
      </CommonCaution>
    </div>

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section1" />
    </div>

    <h2 class="mb-4 text-xl font-bold">direction = Vertical</h2>

    <div
      class="mb-4 w-full rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <CommonSteps
        direction="vertical"
        :current="0"
        :items="[
          {
            title: '서울자양우리 | 배송출발',
            description: '1.6(수) 16:30'
          },
          {
            title: '광진B | 간선하차',
            description: '1.6(수) 12:30'
          },
          {
            title: '대전HUB | 집화처리',
            description: '1.6(수) 08:30'
          }
        ]"
      />
    </div>

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section2" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonCaution from '#components/ui/common-caution.vue'
  import CommonCautionTitle from '#components/ui/common-caution-title.vue'
  import CommonCautionContent from '#components/ui/common-caution-content.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'
  import CommonSteps from '#components/ui/common-steps.vue'

  const language = 'javascript'
  const section1 = `
import CommonSteps from '#components/ui/common-steps.vue'

<CommonSteps :current="2" />`

  const section2 = `
import CommonSteps from '#components/ui/common-steps.vue'

<CommonSteps
  direction="vertical"
  :current="0"
  :items="[
    {
      title: '서울자양우리 | 배송출발',
      description: '1.6(수) 16:30'
    },
    {
      title: '광진B | 간선하차',
      description: '1.6(수) 12:30'
    },
    {
      title: '대전HUB | 집화처리',
      description: '1.6(수) 08:30'
    }
  ]"
/>`
</script>

<style scoped></style>
