<template>
  <CommonTitle title="ImgMedia Guide" />
  <p class="mb-4">이미지를 불러오기 위한 컴포넌트</p>
  <CommonCaution class-name="mb-10">
    <CommonCautionTitle>옵션</CommonCautionTitle>
    <CommonCautionContent>
      <b>src</b>: 모바일 화면에서 표시될 기본 이미지 경로 - [string]
    </CommonCautionContent>
    <CommonCautionContent>
      <b>width</b>: 모바일 화면에서 표시될 이미지 너비 - 500px [number]
    </CommonCautionContent>
    <CommonCautionContent>
      <b>pcSrc</b>: PC 화면에서 표시될 이미지 경로 - [string]
    </CommonCautionContent>
    <CommonCautionContent>
      <b>pcWidth</b>: PC 화면에서 표시될 이미지 너비 - 1024px [number]
    </CommonCautionContent>
    <CommonCautionContent>
      <b>priority</b>: eager 로딩 여부 - false [boolean]
    </CommonCautionContent>
  </CommonCaution>

  <section>
    <h2 class="mb-4 text-xl font-bold">
      모바일과 PC에서 서로 다른 이미지 출력
    </h2>

    <CommonImgMedia
      src="/images/mypage/img_gift01.jpg"
      alt="모바일용 이미지"
      pc-src="/images/mypage/img_gift02.jpg"
      pc-alt="PC용 이미지"
    />
    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section1" />
    </div>
  </section>

  <section>
    <h2 class="mb-4 text-xl font-bold">eager 로딩 적용</h2>

    <CommonImgMedia
      src="/images/mypage/img_gift01.jpg"
      alt="기본 이미지"
      :priority="true"
    />

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section2" />
    </div>
  </section>

  <section>
    <h2 class="mb-4 text-xl font-bold">PC와 모바일 각각 너비 지정</h2>

    <CommonImgMedia
      src="/images/mypage/img_gift01.jpg"
      alt="모바일용 이미지"
      :width="500"
      pc-src="/images/mypage/img_gift01.jpg"
      pc-alt="PC용 이미지"
      :pc-width="1000"
    />

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section3" />
    </div>
  </section>

  <section>
    <h2 class="mb-4 text-xl font-bold">useDevice를 사용한 너비 지정</h2>

    <CommonImgMedia
      src="/images/mypage/img_gift01.jpg"
      alt="기본 이미지"
      :width="isMobile() ? 500 : 1000"
      class-name="mobile-image-class"
    />

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section4" />
    </div>
  </section>

  <section>
    <h2 class="mb-4 text-xl font-bold">className으로 스타일 적용</h2>

    <CommonImgMedia
      src="/images/mypage/img_gift01.jpg"
      alt="기본 이미지"
      class-name="border-2 border-black"
    />

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section5" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonCaution from '#components/ui/common-caution.vue'
  import CommonCautionTitle from '#components/ui/common-caution-title.vue'
  import CommonCautionContent from '#components/ui/common-caution-content.vue'
  import CommonImgMedia from '#components/ui/common-img-media.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'
  import { isMobile } from '#imports'

  const language = 'javascript'
  const section1 = `
import CommonImgMedia from '#components/ui/common-img-media.vue'

<CommonImgMedia
  src="/images/mypage/img_gift01.jpg"
  alt="모바일용 이미지"
  pc-src="/images/mypage/img_gift02.jpg"
  pc-alt="PC용 이미지"
/>`

  const section2 = `
import CommonImgMedia from '#components/ui/common-img-media.vue'

<CommonImgMedia
  src="/images/mypage/img_gift01.jpg"
  alt="기본 이미지"
  :priority="true"
/>`

  const section3 = `
import CommonImgMedia from '#components/ui/common-img-media.vue'

<CommonImgMedia
  src="/images/mypage/img_gift01.jpg"
  alt="모바일용 이미지"
  :width="500"
  pc-src="/images/mypage/img_gift01.jpg"
  pc-alt="PC용 이미지"
  :pc-width="1000"
/>`

  const section4 = `
import CommonImgMedia from '#components/ui/common-img-media.vue'

<CommonImgMedia
  src="/images/mypage/img_gift01.jpg"
  alt="기본 이미지"
  :width="isMobile() ? 500 : 1000"
  class-name="mobile-image-class"
/>`

  const section5 = `
import CommonImgMedia from '#components/ui/common-img-media.vue'

<CommonImgMedia
  src="/images/mypage/img_gift01.jpg"
  alt="기본 이미지"
  class-name="border-2 border-black"
/>`
</script>

<style scoped></style>
