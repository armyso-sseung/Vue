<template>
  <LayoutHeader> TEST </LayoutHeader>
  <LayoutContainer>
    <LayoutContentsWrap>
      <div class="bg-gray3 p-5 text-center">
        default(size/spacing) - width 1280
      </div>
    </LayoutContentsWrap>
    <LayoutContentsWrap size="full">
      <div class="bg-gray3 p-5 text-center">size="full" - width 100%</div>
    </LayoutContentsWrap>
    <LayoutContentsWrap size="medium">
      <div class="bg-gray3 p-5 text-center">size="medium" - width 1140</div>
    </LayoutContentsWrap>
    <LayoutContentsWrap size="small">
      <div class="bg-gray3 p-5 text-center">size="small" - width 455</div>
    </LayoutContentsWrap>
    <LayoutContentsWrap spacing="large">
      <div class="bg-gray3 p-5 text-center">spacing="large"</div>
    </LayoutContentsWrap>
    <LayoutContentsWrap spacing="zero">
      <div class="bg-gray3 p-5 text-center">spacing="zero"</div>
    </LayoutContentsWrap>
  </LayoutContainer>
  <LayoutFooter />

  <div class="mb-10 mt-4 min-w-fit">
    <CommonCodeBlock :language="language" :value="code1" />
  </div>
</template>

<script setup lang="ts">
  import LayoutContainer from '#components/ui/layout/layout-container.vue'
  import LayoutContentsWrap from '#components/ui/layout/layout-contents-wrap.vue'
  import LayoutFooter from '#components/ui/layout/layout-footer.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const language = 'js'
  const code1 = `
import LayoutHeader from "@/components/fo/common/layout-header";
import { HeaderContents } from "@/components/fo/common/inner-components/header-contents";
import { Container, ContentsWrap } from "@/components/fo/common/contents-wrap";
import LayoutFooter from "@/components/fo/common/layout-footer";

<LayoutHeader>
  <HeaderContents title={ "Layout Guide" } type="main" />
</LayoutHeader>
<Container>
  <ContentsWrap>
    <div className="p-5 bg-gray3 text-center">default(size/spacing) - width 1280</div>
  </ContentsWrap>
  <ContentsWrap size="full">
    <div className="p-5 bg-gray3 text-center">size="full" - width 100%</div>
  </ContentsWrap>
  <ContentsWrap size="medium">
    <div className="p-5 bg-gray3 text-center">size="medium" - width 1140</div>
  </ContentsWrap>
  <ContentsWrap size="small">
    <div className="p-5 bg-gray3 text-center">size="small" - width 455</div>
  </ContentsWrap>
  <ContentsWrap spacing="large">
    <div className="p-5 bg-gray3 text-center">spacing="large"</div>
  </ContentsWrap>
  <ContentsWrap spacing="zero">
    <div className="p-5 bg-gray3 text-center">spacing="zero"</div>
  </ContentsWrap>
</Container>
<LayoutFooter />`
</script>

<style scoped></style>
