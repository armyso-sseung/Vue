<template>
  <CommonTitle title="Title Guide" />
  <section>
    <h2 class="mb-4 text-xl font-bold">&lt;SectionTitle /&gt;</h2>
    <p class="mb-4">
      메인화면 등의 코너 섹션의 타이틀로 사용, CornerSection 컨테이너 내부에
      배치
    </p>
    <div
      class="mb-4 w-full rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <CommonSectionTitle> 섹션 <b>타이틀</b> </CommonSectionTitle>
    </div>

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section1" />
    </div>
  </section>

  <section>
    <h2 class="mb-4 text-xl font-bold">&lt;PageTitle/&gt;</h2>
    <p class="mb-4">서브화면의 페이지 메인 타이틀로 사용</p>
    <div
      class="mb-4 w-full rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <CommonPageTitle class-name="">페이지 타이틀</CommonPageTitle>
    </div>

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section2" />
    </div>
  </section>

  <section>
    <h2 class="mb-4 text-xl font-bold">&lt;ContentsTitle/&gt;</h2>
    <p class="mb-4">서브화면의 컨텐츠 타이틀로 사용</p>
    <div class="my-5">
      <CommonCaution>
        <CommonCautionTitle>옵션</CommonCautionTitle>
        <CommonCautionContent>
          <b>title</b>: 타이틀 입력 [string | React.JSX.Element]
        </CommonCautionContent>
        <CommonCautionContent>
          <b>description</b>: 타이틀 하단에 디스크립션이 있을 경우 사용 [string
          | React.JSX.Element]
        </CommonCautionContent>
        <CommonCautionContent>
          <b>textCenter</b>: 텍스트 가운데 정렬 여부 지정 - 기본값 false
          [boolean]
        </CommonCautionContent>
        <CommonCautionContent>
          <b>tag</b>: 타이틀의 웹표준 의미에 맞는 헤딩 태그를 지정 - 기본값 h2
          [string]
        </CommonCautionContent>
        <CommonCautionContent>
          <b>depth</b>: 타이틀의 시각적인 크기 조정 - 기본값 1 [number]
        </CommonCautionContent>
        <CommonCautionContent>
          <b>extra</b>: 타이틀의 우측에 버튼 등 요소가 있을 경우 사용 - 기본값
          null [React.ReactNode]
        </CommonCautionContent>
      </CommonCaution>
    </div>
    <div
      class="mb-4 w-full rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <CommonContentsTitle title="컨텐츠 타이틀 - depth={1} (20px)" />
      <div class="mb-10 flex h-[60px] items-center justify-center bg-gray3">
        하단 컨텐츠
      </div>
      <CommonContentsTitle
        title="컨텐츠 타이틀 - depth={2} (16px)"
        :depth="2"
      />
      <div class="mb-10 flex h-[60px] items-center justify-center bg-gray3">
        하단 컨텐츠
      </div>
      <CommonContentsTitle title="컨텐츠 타이틀 - depth={3} (14px)" depth="3" />
      <div class="mb-10 flex h-[60px] items-center justify-center bg-gray3">
        하단 컨텐츠
      </div>

      <CommonDivider class-name="mb-5" />

      <CommonContentsTitle
        title="디스크립션이 있는 타이틀"
        description="디스크립션 첫 번째 줄<br />디스크립션 두 번째 줄"
      />

      <CommonDivider class-name="mb-5" />
      <CommonContentsTitle
        title="타이틀 우측에  버튼 등 Extra 요소가 있는 경우"
        :depth="2"
      />
      <div class="flex h-[60px] items-center justify-center bg-gray3">
        하단 컨텐츠
      </div>
    </div>

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section3" />
    </div>
  </section>

  <section>
    <h3 class="mb-4 text-lg font-bold">
      SectionTitle - Mobile과 PC 의 타이틀 사이즈가 다를 경우 반응형 처리
    </h3>
    <div
      class="mb-4 w-full rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <CommonContentsTitle
        title="타이틀 뎁스 반응형 처리"
        :depth="2"
        class-name="pc:heading2"
      />
      <div class="flex h-[60px] items-center justify-center bg-gray3">
        하단 컨텐츠
      </div>
    </div>

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section4" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonSectionTitle from '#components/ui/common-section-title.vue'
  import CommonPageTitle from '#components/ui/common-page-title.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'
  import CommonCaution from '#components/ui/common-caution.vue'
  import CommonCautionTitle from '#components/ui/common-caution-title.vue'
  import CommonCautionContent from '#components/ui/common-caution-content.vue'
  import CommonContentsTitle from '#components/ui/common-contents-title.vue'
  import CommonDivider from '#components/ui/common-divider.vue'

  const language = 'javascript'
  const section1 = `
import CommonSectionTitle from '#components/ui/common-section-title.vue'

<CommonSectionTitle> 섹션 <b>타이틀</b> </CommonSectionTitle>`

  const section2 = `
import CommonPageTitle from '#components/ui/common-page-title.vue'

<CommonPageTitle class-name="">페이지 타이틀</CommonPageTitle>`

  const section3 = `
import CommonCaution from '#components/ui/common-caution.vue'
import CommonCautionTitle from '#components/ui/common-caution-title.vue'
import CommonCautionContent from '#components/ui/common-caution-content.vue'
import CommonContentsTitle from '#components/ui/common-contents-title.vue'

<div class="my-5">
  <CommonCaution>
    <CommonCautionTitle>옵션</CommonCautionTitle>
    <CommonCautionContent>
      <b>title</b>: 타이틀 입력 [string | React.JSX.Element]
    </CommonCautionContent>
    <CommonCautionContent>
      <b>description</b>: 타이틀 하단에 디스크립션이 있을 경우 사용 [string
      | React.JSX.Element]
    </CommonCautionContent>
    <CommonCautionContent>
      <b>textCenter</b>: 텍스트 가운데 정렬 여부 지정 - 기본값 false
      [boolean]
    </CommonCautionContent>
    <CommonCautionContent>
      <b>tag</b>: 타이틀의 웹표준 의미에 맞는 헤딩 태그를 지정 - 기본값 h2
      [string]
    </CommonCautionContent>
    <CommonCautionContent>
      <b>depth</b>: 타이틀의 시각적인 크기 조정 - 기본값 1 [number]
    </CommonCautionContent>
    <CommonCautionContent>
      <b>extra</b>: 타이틀의 우측에 버튼 등 요소가 있을 경우 사용 - 기본값
      null [React.ReactNode]
    </CommonCautionContent>
  </CommonCaution>
</div>
<div
  class="mb-4 w-full rounded-lg border border-gray-300 bg-white px-8 py-4"
>
  <CommonContentsTitle title="컨텐츠 타이틀 - depth={1} (20px)" />
  <div class="mb-10 flex h-[60px] items-center justify-center bg-gray3">
    하단 컨텐츠
  </div>
  <CommonContentsTitle
    title="컨텐츠 타이틀 - depth={2} (16px)"
    :depth="2"
  />
  <div class="mb-10 flex h-[60px] items-center justify-center bg-gray3">
    하단 컨텐츠
  </div>
  <CommonContentsTitle title="컨텐츠 타이틀 - depth={3} (14px)" depth="3" />
  <div class="mb-10 flex h-[60px] items-center justify-center bg-gray3">
    하단 컨텐츠
  </div>

  <CommonDivider class-name="mb-5" />

  <CommonContentsTitle
    title="디스크립션이 있는 타이틀"
    description="디스크립션 첫 번째 줄<br />디스크립션 두 번째 줄"
  />

  <CommonDivider class-name="mb-5" />
  <CommonContentsTitle
    title="타이틀 우측에  버튼 등 Extra 요소가 있는 경우"
    :depth="2"
  />
  <div class="flex h-[60px] items-center justify-center bg-gray3">
    하단 컨텐츠
  </div>
</div>`

  const section4 = `
import CommonContentsTitle from '#components/ui/common-contents-title.vue'

<CommonContentsTitle
  title="타이틀 뎁스 반응형 처리"
  :depth="2"
  class-name="pc:heading2"
/>`
</script>

<style scoped></style>
