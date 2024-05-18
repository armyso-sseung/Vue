import { type Ref, ref, watch } from 'vue'

interface PageIndexCallback<DataT, ContT> {
  prevIndex: number
  resData: ContT[]
  dataList: ContT[]
  callData: DataT
}

interface FetchModel {
  pageIdx: number
  pageSize: number
}

interface DeleteModal {
  deleteIndex?: number
}

type searchType = 'fullscan' | 'binary'

type DataCallbackResType<ContT> = { resData: ContT[]; totalCount: number }
type DataCallbackParseType<ContT> = {
  callBackData: ContT[]
  totalCount: number
}

interface ConfigProp<DataT, ContT> {
  queryKey: Ref<string>
  fetchFn: (props: FetchModel) => Promise<DataT>
  dataCallback: (
    data: DataT,
    count: number
  ) => ContT[] | DataCallbackResType<ContT>
  getKey: (data: ContT) => string
  initPageIndex: number
  pageSize: number
  initCall?: boolean
  initData?: DataT
  pageIndexCallback?: (data: PageIndexCallback<DataT, ContT>) => number
  searchType?: searchType
}

interface GoodsListEditModel<ContT> {
  key: string
  changeCallback: (res: ContT) => ContT
}

interface SearchProps<ContT> {
  dataList: ContT[]
  searchKey: number
  getKey: (data: ContT) => number
}

interface SearchBinaryProps<ContT> extends SearchProps<ContT> {
  eIdx?: number
  sIdx?: number
}

const binarySearch = <ContT>({
  dataList,
  searchKey,
  getKey,
  eIdx = dataList.length - 1,
  sIdx = 0
}: SearchBinaryProps<ContT>): number => {
  const midIdx = Math.floor((eIdx - sIdx) / 2) + sIdx
  const tKey = getKey(dataList[midIdx])
  if (searchKey === tKey) {
    return midIdx
  }

  if (eIdx === sIdx) {
    return -1
  } else {
    const nSIdx = searchKey > tKey ? sIdx : midIdx + 1
    const nEIdx = searchKey > tKey ? midIdx - 1 : eIdx
    return binarySearch({
      dataList,
      searchKey,
      getKey,
      eIdx: nEIdx,
      sIdx: nSIdx
    })
  }
}

// const backsearch = <Cont>
const defaultNextPage = <DataT, ContT>(
  data: PageIndexCallback<DataT, ContT>
): number => {
  return data.prevIndex + 1
}

// 리스트 데이터 관리시, 네트워크 호출 최소화를 위한 커스텀 훅
const useGoodsListQuery = <DataT, ContT>(props: ConfigProp<DataT, ContT>) => {
  // const [isPending, setIsPending] = useState(true)
  // const [isPagePending, setIsPagePending] = useState(false)
  // const [saveKey, setSaveKey] = useState(queryKey)
  // const [dataList, setDataList] = useState<ContT[]>(initData?.data)
  const {
    queryKey,
    initPageIndex,
    // initCall = true,
    getKey,
    pageSize,
    initData,
    searchType = 'fullscan',
    // 변경되는 값들 (콜백들은 useRef처리가 필요. 계속 변경된다고 판단하므로...)
    dataCallback,
    fetchFn,
    pageIndexCallback
  } = props
  const isPagePending = ref(false)
  const isPending = ref(true)

  const dataCallbackRef = (data: DataT): DataCallbackParseType<ContT> => {
    const result = dataCallback(data, dataList.value.length)
    const isArray = Array.isArray(result)
    return {
      callBackData: isArray ? result : result.resData,
      totalCount: isArray ? -1 : result.totalCount
    }
  }

  // 초기호출
  const dataList = ref([]) as Ref<ContT[]>
  const initContData = initData
    ? dataCallbackRef(initData)
    : {
        callBackData: [],
        totalCount: 0
      }
  if (initData) {
    dataList.value = initContData.callBackData
  }

  // 렌더링 방지
  const nextPage = pageIndexCallback || defaultNextPage
  const firstCallRef = ref(!!initData)
  const pageIndex = ref(initPageIndex + 1)
  // 커버
  const isLast = ref(
    initContData.callBackData.length
      ? initContData.callBackData.length < pageSize
      : false
  )
  // 변경감지 막기
  const fetchFnRef = (props: FetchModel): Promise<DataT> => {
    if (firstCallRef.value) isPending.value = true
    else isPagePending.value = true
    return fetchFn(props).finally(() => {
      if (firstCallRef.value) {
        firstCallRef.value = false
        isPending.value = false
      } else {
        isPagePending.value = false
      }
    })
  }

  // searchFn
  const searchFn = (key: string) => {
    if (searchType === 'binary') {
      return binarySearch({
        dataList: dataList.value,
        searchKey: parseInt(key),
        getKey: (t: ContT) => parseInt(getKey(t))
      })
    } else {
      return dataList.value.findIndex((el: ContT) => getKey(el) === key)
    }
  }

  // 다음 데이터 호출
  const fetchNextPage = () => {
    fetchFnRef({ pageIdx: pageIndex.value, pageSize }).then((resData) => {
      if (isLast.value) return // 요청 종료 처리
      const { callBackData, totalCount } = dataCallbackRef(resData)
      if (totalCount > 0) {
        const curMaxViewCount = pageSize * (pageIndex.value - 1)
        isLast.value = curMaxViewCount >= totalCount
      }
      if (
        !isLast.value &&
        (callBackData.length === 0 || (callBackData?.length || 0) < pageSize)
      ) {
        // api 추가 호출 종료
        isLast.value = true
      }
      pageIndex.value = nextPage({
        prevIndex: pageIndex.value,
        callData: resData,
        dataList: dataList.value,
        resData: callBackData
      })
      dataList.value = [...dataList.value, ...callBackData]
    })
  }

  // 변경데이터 호출
  const fetchFirstPage = () => {
    // if (dataList.length < 1) return
    fetchFnRef({ pageIdx: initPageIndex, pageSize }).then((resData) => {
      const prev = dataList.value
      if (prev?.length < 1) return prev
      // 첫번째 페이지 데이터 기준으로 호출된 데이터와 비교해서, 호출데이터 + 기존데이터
      const firstKey = getKey(prev[0])
      const { callBackData } = dataCallbackRef(resData)
      const firstIndex = callBackData.findIndex((el) => getKey(el) === firstKey)
      if (firstIndex > 0) {
        const afterLength = dataList.value.length + firstIndex
        const maxLength = (pageIndex.value - 1) * pageSize
        if (maxLength < afterLength && isLast) isLast.value = false
        return callBackData
          .slice(0, firstIndex)
          .concat(prev.slice(firstIndex - 1, maxLength - firstIndex))
      } else {
        return prev
      }
    })
  }

  // 최신데이터 재호출
  // 삭제 처리 보조
  const fetchLastPage = (props?: DeleteModal) => {
    if (dataList.value.length < 1 || pageIndex.value - 1 < initPageIndex)
      // 현재 데이터가 없거나, 현재페이지가 최소페이지보다 작은경우(재귀방지)
      return
    const refetchIdx = pageIndex.value - 1
    fetchFnRef({ pageIdx: refetchIdx, pageSize }).then((resData) => {
      // 최신 데이터 채워넣기
      const { callBackData, totalCount } = dataCallbackRef(resData)
      if (callBackData.length < 1) {
        // pageSize + 1의 타겟을 삭제했을시 쿼리 결과가 없어서 오류가난다. 이전인덱스로 재조회
        pageIndex.value = refetchIdx
        fetchLastPage()
        return
      }
      // if (callBackData?.length < 1) return
      if (!isLast.value) {
        const curMaxViewCount = pageSize * refetchIdx
        if (totalCount > 0 && totalCount <= curMaxViewCount) {
          isLast.value = true
        } else if ((callBackData?.length || 0) < pageSize) {
          // api 추가 호출 종료
          isLast.value = true
        }
      }
      if (refetchIdx === initPageIndex) {
        return callBackData
      } else {
        const target = [...dataList.value]
        // 삭제시, 삭제인덱스를 제외
        if (props?.deleteIndex !== undefined)
          target.splice(props.deleteIndex, 1)
        // 호출데이터의 첫번째 데이터 기준. 기존데이터 + 호출데이터
        const newFirstKey = getKey(callBackData[0])
        const matchIndex = target.findLastIndex(
          (el) => getKey(el) === newFirstKey
        )
        if (matchIndex >= 0) {
          return target.slice(0, matchIndex).concat(callBackData)
        } else {
          // 삭제후에도 변경 최신데이터가 확인이 되지않는경우.(거의 없긴함)
          return target
        }
      }
    })
  }

  // 데이터 변경
  const setData = ({ key, changeCallback }: GoodsListEditModel<ContT>) => {
    const tIndex = searchFn(key)
    if (tIndex >= 0) {
      const target = dataList.value[tIndex]
      dataList.value[tIndex] = changeCallback(target)
    }
  }

  // 현재 페이지 전체로 재호출.
  // pageSize를 사용해야함.
  const fetchAllPage = () => {
    fetchFnRef({
      pageIdx: initPageIndex,
      pageSize: dataList.value.length
    }).then((resData) => {
      const { callBackData } = dataCallbackRef(resData)
      dataList.value = callBackData
    })
  }
  // 재호출
  const fetchReload = () => {
    // if (!firstCallRef.current) setIsPending(true)
    fetchFnRef({ pageIdx: initPageIndex, pageSize })
      .then((resData) => {
        const { callBackData, totalCount } = dataCallbackRef(resData)
        if (totalCount > 0) {
          isLast.value = totalCount <= pageSize
        } else {
          isLast.value = callBackData.length < pageSize
        }
        pageIndex.value = nextPage({
          prevIndex: initPageIndex,
          callData: resData,
          dataList: dataList.value,
          resData: callBackData
        })
        dataList.value = callBackData
      })
      .finally(() => {
        // if (!firstCallRef.current) setIsPending(false)
      })
  }

  // 데이터 삭제 기능
  const delData = (key: string) => {
    const deleteIdx = searchFn(key)
    if (deleteIdx < 0) return
    if (dataList?.value.length === 1 && deleteIdx === 0) {
      // 마지막 하나 삭제시에는 재호출을 한다
      fetchReload()
    } else {
      // 일반 삭제
      fetchLastPage({ deleteIndex: deleteIdx })
    }
  }

  // 새 데이터가 추가되었을시
  const fetchNewData = () => {
    if (dataList?.value.length === 0) {
      fetchReload()
    } else {
      fetchFirstPage()
      // if (initPageIndex < pageIndex.current - 1) fetchLastPage()
    }
  }
  watch(queryKey, () => fetchReload(), { flush: 'post' })

  return {
    dataList,
    setData,
    delData,
    fetchNewData,
    fetchNextPage,
    fetchFirstPage,
    fetchLastPage,
    fetchAllPage,
    fetchReload,
    isLast,
    isPending,
    isPagePending
  }
}

export default useGoodsListQuery
