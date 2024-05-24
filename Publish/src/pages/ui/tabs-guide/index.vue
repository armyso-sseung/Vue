<template>
  <CommonTitle title="Tabs Guide" />
  <section>
    <div
      class="mb-4 w-[700px] rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <CommonTabs default-value="tab2" class-name="tab type01">
        <CommonTabsList class-name="tab-menu">
          <CommonTabsTrigger value="tab1">Tab name 1</CommonTabsTrigger>
          <CommonTabsTrigger value="tab2">Tab name 2</CommonTabsTrigger>
          <CommonTabsTrigger value="tab3">Tab name 3</CommonTabsTrigger>
        </CommonTabsList>
        <CommonTabsContent value="tab1" class-name="tab-cont">
          Tab Content 1
        </CommonTabsContent>
        <CommonTabsContent value="tab2" class-name="tab-cont">
          Tab Content 2
        </CommonTabsContent>
        <CommonTabsContent value="tab3" class-name="tab-cont">
          Tab Content 3
        </CommonTabsContent>
      </CommonTabs>
    </div>

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section1" />
    </div>
  </section>

  <section>
    <div
      class="mb-4 w-[700px] rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <CommonTabs default-value="tab1_4" class-name="tab type02">
        <CommonTabsList class-name="tab-menu">
          <CommonTabsTrigger value="tab1_1">Tab name 1</CommonTabsTrigger>
          <CommonTabsTrigger value="tab1_2">Tab name 2</CommonTabsTrigger>
          <CommonTabsTrigger value="tab1_3">Tab name 3</CommonTabsTrigger>
          <CommonTabsTrigger value="tab1_4">Tab name 4</CommonTabsTrigger>
          <CommonTabsTrigger value="tab1_5">Tab name 5</CommonTabsTrigger>
        </CommonTabsList>
        <CommonTabsContent value="tab1_1" class-name="tab-cont">
          Tab Content 1
        </CommonTabsContent>
        <CommonTabsContent value="tab1_2" class-name="tab-cont">
          Tab Content 2
        </CommonTabsContent>
        <CommonTabsContent value="tab1_3" class-name="tab-cont">
          Tab Content 3
        </CommonTabsContent>
        <CommonTabsContent value="tab1_4" class-name="tab-cont">
          Tab Content 4
        </CommonTabsContent>
        <CommonTabsContent value="tab1_5" class-name="tab-cont">
          Tab Content 5
        </CommonTabsContent>
      </CommonTabs>
    </div>

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section2" />
    </div>
  </section>

  <section>
    <div
      class="mb-4 w-[700px] rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <CommonTabs default-value="tab2_1" class-name="tab type03">
        <CommonTabsList class-name="tab-menu">
          <CommonTabsTrigger value="tab2_1">Tab name 1</CommonTabsTrigger>
          <CommonTabsTrigger value="tab2_2">Tab name 2</CommonTabsTrigger>
          <CommonTabsTrigger value="tab2_3">Tab name 3</CommonTabsTrigger>
        </CommonTabsList>
        <CommonTabsContent value="tab2_1" class-name="tab-cont">
          Tab Content 1
        </CommonTabsContent>
        <CommonTabsContent value="tab2_2" class-name="tab-cont">
          Tab Content 2
        </CommonTabsContent>
        <CommonTabsContent value="tab2_3" class-name="tab-cont">
          Tab Content 3
        </CommonTabsContent>
      </CommonTabs>
    </div>

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section3" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonTabs from '#components/ui/common-tabs.vue'
  import CommonTabsList from '#components/ui/common-tabs-list.vue'
  import CommonTabsTrigger from '#components/ui/common-tabs-trigger.vue'
  import CommonTabsContent from '#components/ui/common-tabs-content.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const language = 'javascript'
  const section1 = `
import CommonTabs from '#components/ui/common-tabs.vue'
import CommonTabsList from '#components/ui/common-tabs-list.vue'
import CommonTabsTrigger from '#components/ui/common-tabs-trigger.vue'
import CommonTabsContent from '#components/ui/common-tabs-content.vue'

<CommonTabs defaultValue="tab1" className="tab type01">
  <CommonTabsList className="tab-menu">
    <CommonTabsTrigger value="tab1">Tab name 1</CommonTabsTrigger>
    <CommonTabsTrigger value="tab2">Tab name 2</CommonTabsTrigger>
    <CommonTabsTrigger value="tab3">Tab name 3</CommonTabsTrigger>
  </CommonTabsList>
  <CommonTabsContent value="tab1" className="tab-cont">
    Tab Content 1
  </CommonTabsContent>
  <CommonTabsContent value="tab2" className="tab-cont">
    Tab Content 2
  </CommonTabsContent>
  <CommonTabsContent value="tab3" className="tab-cont">
    Tab Content 3
  </CommonTabsContent>
</CommonTabs>`

  const section2 = `
import CommonTabs from '#components/ui/common-tabs.vue'
import CommonTabsList from '#components/ui/common-tabs-list.vue'
import CommonTabsTrigger from '#components/ui/common-tabs-trigger.vue'
import CommonTabsContent from '#components/ui/common-tabs-content.vue'

<CommonTabs defaultValue="tab1_1" className="tab type02">
  <CommonTabsList className="tab-menu">
    <CommonTabsTrigger value="tab1_1">Tab name 1</CommonTabsTrigger>
    <CommonTabsTrigger value="tab1_2">Tab name 2</CommonTabsTrigger>
    <CommonTabsTrigger value="tab1_3">Tab name 3</CommonTabsTrigger>
    <CommonTabsTrigger value="tab1_4">Tab name 4</CommonTabsTrigger>
    <CommonTabsTrigger value="tab1_5">Tab name 5</CommonTabsTrigger>
  </CommonTabsList>
  <CommonTabsContent value="tab1_1" className="tab-cont">
    Tab Content 1
  </CommonTabsContent>
  <CommonTabsContent value="tab1_2" className="tab-cont">
    Tab Content 2
  </CommonTabsContent>
  <CommonTabsContent value="tab1_3" className="tab-cont">
    Tab Content 3
  </CommonTabsContent>
  <CommonTabsContent value="tab1_4" className="tab-cont">
    Tab Content 4
  </CommonTabsContent>
  <CommonTabsContent value="tab1_5" className="tab-cont">
    Tab Content 5
  </CommonTabsContent>
</CommonTabs>`

  const section3 = `
import CommonTabs from '#components/ui/common-tabs.vue'
import CommonTabsList from '#components/ui/common-tabs-list.vue'
import CommonTabsTrigger from '#components/ui/common-tabs-trigger.vue'
import CommonTabsContent from '#components/ui/common-tabs-content.vue'

<CommonTabs defaultValue="tab2_1" className="tab type03">
  <CommonTabsList className="tab-menu">
    <CommonTabsTrigger value="tab2_1">Tab name 1</CommonTabsTrigger>
    <CommonTabsTrigger value="tab2_2">Tab name 2</CommonTabsTrigger>
    <CommonTabsTrigger value="tab2_3">Tab name 3</CommonTabsTrigger>
  </CommonTabsList>
  <CommonTabsContent value="tab2_1" className="tab-cont">
    Tab Content 1
  </CommonTabsContent>
  <CommonTabsContent value="tab2_2" className="tab-cont">
    Tab Content 2
  </CommonTabsContent>
  <CommonTabsContent value="tab2_3" className="tab-cont">
    Tab Content 3
  </CommonTabsContent>
</CommonTabs>`
</script>

<style scoped></style>
