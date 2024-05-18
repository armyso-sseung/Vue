<template>
  <CommonTitle title="Index" />
  <section>
    <h2 class="guide-sub-title">필요성</h2>
    <div class="rounded-md border-2 bg-white p-5">
      <CommonCautionContent size="md"
        >마크업 개발은 FONT-END 페이지의 기본 골격을 형성하기 때문에 디자인,
        브라우저 스크립트, 성능, 접근성 등과 긴밀한 관계가 있다. 따라서, 마크업
        개발을 잘 해야 모든 브라우저에서 콘텐츠를 손실 없이, 빠르고 쉽게
        사용자에게 전달할 수 있다.</CommonCautionContent
      >
      <CommonCautionContent size="md"
        >해당 문서는 퍼블리셔가 지켜야 할 항목들을 제시하는 바이다. <br />이는,
        유지보수에 투자되는 비용을 최소화하기 위해 통일 된 코드 작성법을
        제시한다. <br />코드를 최초로 작성한 사람이 끝까지 유지보수 할 확률은
        매우 낮다. 따라서, 최초 개발자가 아닌 사람도 코드를 빠르고 정확하게
        이해할 수 있도록 작성하는 것은 코드의 유지보수 비용을 절감하고 업무
        효율을 높이는 데 결정적인 역할을 한다.
        <br />
        <br />프로젝트의 마크업 코드는 본 문서에 따라 작성해야 한다. <br />본
        가이드를 준수하면 프로젝트 멤버 간 코드 공유도 쉬워지고, 일관성 있게
        코드를 작성할 수 있다. <br />어떤 퍼블리싱 가이드를 선택하느냐가 중요한
        것이 아니라, 통일 된 기준으로 소스 코드를 작성하는 것이 중요하다.
      </CommonCautionContent>
    </div>
  </section>
  <section>
    <h2 class="guide-sub-title">개별 목표</h2>
    <div class="mb-3 rounded-md border-2 bg-white p-5">
      <CommonCautionTitle size="lg">마크업</CommonCautionTitle>
      <CommonCautionContent size="md"
        >Valid Markup : W3C표준에 근거한 마크업</CommonCautionContent
      >
      <CommonCautionContent size="md"
        >Semantic Markup : 의미에 맞는 HTML 엘리먼트를 사용하여 문서 구조
        마크업</CommonCautionContent
      >
    </div>
    <div class="rounded-md border-2 bg-white p-5">
      <CommonCautionTitle size="lg">Tailwind CSS</CommonCautionTitle>
      <CommonCautionContent size="md"
        >표준화된 유틸리티 클래스 집합을 사용하므로, 작업자가 누구든 상관없이
        일관된 사이트 유지가 가능하다. (공식홈페이지:
        <a href="https://tailwindcss.com/docs/installation" target="_blank"
          >tailwindcss.com)</a
        ></CommonCautionContent
      >
      <CommonCautionContent size="md"
        >제한된 디자인 제어로 효율적이고 반응이 빠른 구축을 목표로 할 수
        있다.</CommonCautionContent
      >
      <CommonCautionContent size="md"
        >Tailwind css는 접근성을 염두해 두고 설계되어 접속환경, 장애, 언어에
        구애 받지 않는 서비스 구현이 가능하다.</CommonCautionContent
      >
    </div>
  </section>
  <section>
    <h2 class="guide-sub-title">Cross browsing</h2>
    <div class="rounded-md border-2 bg-white p-5">
      <CommonCautionContent size="md"
        ><strong
          >웹 표준 기술을 채용하여 다른 기종/플랫폼에 따라 달리 구현되는 기술을
          비슷하게 만듦과 동시에 어느 한쪽에 최적화되어 치우치지 않도록
          공통요소를 사용하여 웹 페이지를 제작하는 기법을 말한다.</strong
        ><br />웹페이지의 상호 호환성(Cross Browsing) 구축에 대해 기본적인
        오해가 있다. <br />cross browsingdl 모든 웹브라우저에서 100% 똑 같이
        보여야 한다는 생각이다. <br />작게는 1990년대 후 반 Netscape사와
        Microsoft사의 Browser War 기간 동안 일어난 브라우저의 비호환성을 억지로
        끼워 맞추려는 기법 정도로 치부되는 것이다. <br />그러나 OS가 다르고
        글꼴이 다르며, <br />HTML을 렌더링(Rendering)하는 엔진이 다르기 때문에
        모든 웹브라 우저에서 100% 똑같이 보이게 하는 것은 가능하지
        않다.</CommonCautionContent
      >
    </div>
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonCautionContent from '#components/ui/common-caution-content.vue'
  import CommonCautionTitle from '#components/ui/common-caution-title.vue'
</script>

<style scoped></style>
