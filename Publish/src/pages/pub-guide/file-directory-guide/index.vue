<template>
  <CommonTitle title="File Directory" />
  <section>
    <CommonFileDirectory :item="treeData" />
  </section>
  <section>
    <h2 class="guide-sub-title">public</h2>
    <div class="rounded-md border-2 bg-white p-5">
      <CommonCautionContent size="md"
        >email / error : html 구문으로 제작해야 하는 페이지, src 바깥에
        정의</CommonCautionContent
      >
      <CommonCautionContent size="md"
        >images &gt; thumb : BO에서 등록되는 이미지 영역에 사용하는 임시
        이미지</CommonCautionContent
      >
      <CommonCautionContent size="md"
        >images &gt; icons : 모든 아이콘</CommonCautionContent
      >
      <CommonCautionContent size="md"
        >images &gt; common : 모든 모듈에서 사용하는
        이미지</CommonCautionContent
      >
      <CommonCautionContent size="md" class="text-error"
        >필요에 따라 각 모듈별 이미지 폴더 생성 후 사용
      </CommonCautionContent>
      <CommonCautionContent size="md"
        >style &gt; common.css / reset.css : 서버 호출용 error page에만
        사용</CommonCautionContent
      >
    </div>
  </section>
  <section>
    <h2 class="guide-sub-title">src &gt; app</h2>
    <div class="rounded-md border-2 bg-white p-5">
      <CommonCautionContent size="md"
        >fo : 모듈별 FO 전체 리스트</CommonCautionContent
      >
      <CommonCautionContent size="md"
        >ui : FO에 사용되는 components 가이드 리스트</CommonCautionContent
      >
    </div>
  </section>
  <section>
    <h2 class="guide-sub-title">src &gt; assets</h2>
    <div class="rounded-md border-2 bg-white p-5">
      <CommonCautionContent size="md"
        >common : 공통 layout.css외에 components에 사용되는 개별 css 파일
        폴더</CommonCautionContent
      >
      <CommonCautionContent size="md"
        >common &gt; text.css :
        <strong
          >전체 FO 내에 사용하는 폰트 사이즈 정의</strong
        ></CommonCautionContent
      >
      <CommonCautionContent size="md"
        >page : 필요에따라 module명으로 생성되는 개별 css 파일
        폴더</CommonCautionContent
      >
      <CommonCautionContent size="md"
        >page &gt; globals.css : common안에 있는 css import하고 있으며,
        tailwind에서 정희하지 못하는 reset 관련 스타일
        정의</CommonCautionContent
      >
      <CommonCautionContent size="md" class="text-error">
        <strong class="text-error"
          >tailwind.config.ts : 전체 FO 내에 사용하는 컬러 / 폰트 두께 / screen
          사이즈 등 일괄 커스텀 가능한 부분 정의
        </strong>
      </CommonCautionContent>
    </div>
  </section>
  <section>
    <h2 class="guide-sub-title">src &gt; components</h2>
    <div class="rounded-md border-2 bg-white p-5">
      <CommonCautionContent size="md"
        >fo : 기본 ui &gt; component를 활용해서 만든 모듈별 component 파일
        폴더</CommonCautionContent
      >
      <CommonCautionContent size="md"
        >ui : <strong>기본 ui에 사용하는 단위별 component 파일 폴더</strong>
        <p class="font-bold text-error">* 개발 레파지토리와 동기화 필수</p>
        <p class="font-bold text-error">* 개발 레파지토리와 동기화 필수</p>
        <p class="font-bold text-error">
          * 경우에 따라 내부에 개별 css파일 포함하고 있음
        </p>
      </CommonCautionContent>
    </div>
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonFileDirectory from '#components/ui/common-file-directory.vue'
  import CommonCautionContent from '#components/ui/common-caution-content.vue'

  const treeData = [
    {
      title: 'public',
      key: '0-0',
      children: [
        { title: 'email', key: '0-0-0', isLeaf: true },
        { title: 'error', key: '0-0-1', isLeaf: true },
        {
          title: 'images',
          key: '0-0-2',
          isLeaf: true,
          children: [
            {title: 'thumb', key: '0-0-2-0', isLeaf: true},
            {title: 'icons', key: '0-0-2-1', isLeaf: true},
            {title: 'common', key: '0-0-2-2', isLeaf: true},
            {title: '....각 페이지명 폴더', key: '0-0-2-3', isLeaf: true}
          ]
        },
        {
          title: 'style',
          key: '0-0-3',
          isLeaf: true,
          children: [
            {title: 'common.css', key: '0-0-3-0', isLeaf: true},
            {title: 'reset.css', key: '0-0-3-1', isLeaf: true},
          ]
        },
      ],
    },
    {
      title: 'src',
      key: '0-1',
      children: [
        { title: 'app > [locale]', key: '0-1-0', isLeaf: true,
          children: [
            {
              title: 'fo',
              key: '0-1-0-0',
              isLeaf: true
            },
            {
              title: 'ui',
              key: '0-1-0-1',
              isLeaf: true
            }
          ]
        },
        { title: 'assets', key: '0-1-1', isLeaf: true,
          children: [
            {
              title: 'common',
              key: '0-1-1-0',
              isLeaf: true
            },
            {
              title: 'page',
              key: '0-1-1-1',
              isLeaf: true
            }
          ]
        },
        { title: 'components', key: '0-1-2', isLeaf: true,
          children: [
            {
              title: 'fo',
              key: '0-1-2-0',
              isLeaf: true
            },
            {
              title: 'ui',
              key: '0-1-2-1',
              isLeaf: true
            }
          ]
        },
        { title: 'data', key: '0-1-3', isLeaf: true },
        { title: 'hooks', key: '0-1-4', isLeaf: true },
      ],
    },
  ];
</script>

<style scoped></style>
