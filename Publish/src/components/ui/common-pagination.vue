<template>
  <NuxtLink
    v-if="isShow"
    v-slot="{ navigate }"
    :to="{ path: route.path, query: queryString }"
    custom
  >
    <CommonButtonArea
      type="column"
      class-name="mx-auto mt-5 w-full pc:mt-10 pc:w-[384px]"
    >
      <CommonButton
        size="base"
        variant="third"
        class-name="inline-flex w-full items-center justify-center gap-1 after:inline-block after:size-3 after:bg-[url('/images/icons/ico_arrow12.svg')] after:content-[''] "
        v-bind="$attrs"
        @click="
          (event) => {
            navigate()
            handleClickButton(event)
          }
        "
      >
        {{ text }}
      </CommonButton>
    </CommonButtonArea>
  </NuxtLink>
</template>

<script setup lang="ts">
  import CommonButtonArea from '#components/ui/common-button-area.vue'
  import CommonButton from '#components/ui/common-button.vue'
  import type {
    PaginationEmits,
    PaginationProps,
    PaginationType
  } from '~/types/common/component-type'
  import {
    computed,
    onBeforeRouteUpdate,
    onMounted,
    ref,
    useRoute
  } from '#imports'

  const route = useRoute()
  const data = ref<PaginationType>({ dataList: [], totalCount: 0 })
  const emits = defineEmits<PaginationEmits>()
  const props = withDefaults(defineProps<PaginationProps>(), {
    params: () => {
      return {}
    },
    isSearch: false,
    text: '더보기'
  })

  const SEARCH_PAGE_NO = '0'
  const DEFAULT_PAGE_NO = '1'
  const DEFAULT_PAGE = props.isSearch ? SEARCH_PAGE_NO : DEFAULT_PAGE_NO
  const pageNo = ref<number>(
    Number(
      (props.isSearch ? route.query.from : route.query.pageNo) || DEFAULT_PAGE
    )
  )

  // 활성 여부
  const isShow = computed(() => {
    return data.value.dataList.length < (data.value.totalCount as number)
  })

  // 데이터 여부
  const isData = computed(() => {
    return !!data.value.dataList.length
  })

  // 쿼리 스트링 작업
  const queryString = computed(() => {
    const pageKey = props.isSearch ? 'from' : 'pageNo'

    const query = { ...route.query }
    query[pageKey] = `${pageNo.value + 1}`

    return query
  })

  const pageSize = computed(() => {
    // 직접 접속 시 대응
    if (!isData.value && pageNo.value > Number(DEFAULT_PAGE)) {
      const page = Number(pageNo.value || DEFAULT_PAGE)
      return `${(props.isSearch ? page + 1 : page) * props.size}`
    }

    return `${props.size}`
  })

  // 일반 조회
  const handleDefaultData = () => {
    const defaultParams = {
      ...props.params,
      pageSize: pageSize.value,
      pageNo: !isData.value ? DEFAULT_PAGE_NO : pageNo.value
    }
    handleDataList(defaultParams)
  }

  // 검색엔진용 조회
  const handleSearchData = () => {
    const searchParams = {
      ...props.params,
      size: pageSize.value,
      from: !isData.value ? SEARCH_PAGE_NO : pageNo.value * props.size
    }
    handleDataList(searchParams)
  }

  // 데이터 더보기 대응
  const handleDataList = async (apiParams: Object) => {
    const res = await props.api(apiParams)
    const dataList = [...data.value.dataList, ...res.dataList]

    data.value = { dataList, totalCount: res.totalCount }
  }

  // 더보기 버튼
  const handleClickButton = (event: Event) => {
    pageNo.value++
    props.isSearch ? handleSearchData() : handleDefaultData()
    emits('click', event)
  }

  // Init
  onMounted(() => {
    props.isSearch ? handleSearchData() : handleDefaultData()
  })

  // 쿼리 변경 대응
  onBeforeRouteUpdate((to) => {
    const pageKey = props.isSearch ? 'from' : 'pageNo'
    if (!to.query[pageKey] || to.query[pageKey] === DEFAULT_PAGE) {
      data.value.dataList = []
      pageNo.value = Number(DEFAULT_PAGE)
      props.isSearch ? handleSearchData() : handleDefaultData()
    }
  })

  defineExpose({ data, pageNo, pageSize })
</script>

<style scoped></style>
