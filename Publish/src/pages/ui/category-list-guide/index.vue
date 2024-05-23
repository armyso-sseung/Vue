<template>
  <CommonTitle title="CategoryList Guide" />
  <section>
    <h2 class="guide-sub-title">CategoryList</h2>
    <div class="component-container">
      <CommonImageTextIcons :icon-data="categoryListData" />
    </div>

    <CommonCodeBlock :language="language" :value="section1" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonImageTextIcons from '#components/ui/common-image-text-icons.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'
  import 'swiper/css'

  const categoryListData = [
    {
      imageList: [
        {
          contPathNm: '/images/category-icons/category_food.svg',
          altCont: '식품'
        }
      ],
      textList: [{ contTitleNm: '식품' }]
    },
    {
      imageList: [
        {
          contPathNm: '/images/category-icons/category_beauty.svg',
          altCont: '뷰티'
        }
      ],
      textList: [{ contTitleNm: '뷰티' }]
    },
    {
      imageList: [
        {
          contPathNm: '/images/category-icons/category_branded_fashon.svg',
          altCont: '브랜드패션'
        }
      ],
      textList: [{ contTitleNm: '브랜드패션' }]
    },
    {
      imageList: [
        {
          contPathNm: '/images/category-icons/category_trend_fashon.svg',
          altCont: '트렌드패션'
        }
      ],
      textList: [{ contTitleNm: '트렌드패션' }]
    },
    {
      imageList: [
        {
          contPathNm: '/images/category-icons/category_sports.svg',
          altCont: '스포츠/레저'
        }
      ],
      textList: [{ contTitleNm: '스포츠/레저' }]
    },
    {
      imageList: [
        {
          contPathNm: '/images/category-icons/category_essentials.svg',
          altCont: '생필품/펫'
        }
      ],
      textList: [{ contTitleNm: '생필품/펫' }]
    },
    {
      imageList: [
        {
          contPathNm: '/images/category-icons/category_maternity.svg',
          altCont: '출산/유아동'
        }
      ],
      textList: [{ contTitleNm: '출산/유아동' }]
    },
    {
      imageList: [
        {
          contPathNm: '/images/category-icons/category_digital.svg',
          altCont: '디지털/가전'
        }
      ],
      textList: [{ contTitleNm: '디지털/가전' }]
    },
    {
      imageList: [
        {
          contPathNm: '/images/category-icons/category_funiture.svg',
          altCont: '가구/홈데코'
        }
      ],
      textList: [{ contTitleNm: '가구/홈데코' }]
    }
  ]

  const language = 'javascript'
  const section1 = `
import CommonImageTextIcons from '#components/ui/common-image-text-icons.vue'

<CommonImageTextIcons :iconData="categoryListData" />`
</script>

<style scoped></style>
