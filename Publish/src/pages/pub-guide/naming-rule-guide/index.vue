<template>
  <CommonTitle title="Naming 규칙" />
  <section>
    <h2 class="guide-sub-title">목적</h2>
    <div class="rounded-md border-2 bg-white p-5">
      <CommonCautionContent size="md"
        >이름만 보고 무엇을 하는 지 알 수 있어야 한다.</CommonCautionContent
      >
      <CommonCautionContent size="md"
        >이름만 보고 어디에서 사용하는 지 알 수 있어야
        한다.</CommonCautionContent
      >
      <CommonCautionContent size="md"
        >Naming 규칙을 지킴으로 소스의 재사용성을 높인다.</CommonCautionContent
      >
    </div>
  </section>
  <section>
    <h2 class="guide-sub-title">이미지</h2>
    <div class="rounded-md border-2 bg-white p-5">
      <CommonCautionContent size="md"
        >기본 규칙: snake_case (언더바 '_' 로 구분된 단어)
        사용</CommonCautionContent
      >
      <CommonCautionContent size="md"
        >'분류_사용처_의미_이벤트_숫자' 의 순으로
        정의한다.</CommonCautionContent
      >
      <CommonCautionContent size="md"
        >아이콘의 경우 앞에 'ico_' 로 시작한다.</CommonCautionContent
      >
    </div>
  </section>
  <section>
    <h2 class="guide-sub-title">className</h2>
    <div class="rounded-md border-2 bg-white p-5">
      <CommonCautionContent size="md"
        >기본 규칙: kebab-case (하이픈으로 구분된 단어)
        사용</CommonCautionContent
      >
      <CommonCautionContent size="md"
        >css 파일 내 정의를 위해 고유 이름 사용 가능하며, 규칙은 아래와
        같음</CommonCautionContent
      >
      <CommonCautionContent size="md"
        >지나친 줄임말은 지양한다. (bm-sm =&gt;
        bottom-small)</CommonCautionContent
      >
    </div>
  </section>
  <section>
    <h2 class="guide-sub-title">component</h2>
    <div class="rounded-md border-2 bg-white p-5">
      <CommonCautionContent size="md"
        >파일명은 kebab-case (하이픈으로 구분된 단어) 사용</CommonCautionContent
      >
      <CommonCautionContent size="md"
        >호출명은 PascalCase (모든 단어는 대문자로 시작)
        사용</CommonCautionContent
      >
    </div>
  </section>
</template>

<script setup lang="ts">
  import CommonCautionContent from '#components/ui/common-caution-content.vue'
  import CommonTitle from '#components/ui/common-title.vue'
</script>

<style scoped></style>
