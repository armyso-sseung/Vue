<script setup lang="ts">
  import { inject, ref } from 'vue'
  import dayjs from 'dayjs'
  import CommonButton from '#components/ui/common-button.vue'
  import CommonImage from '#components/ui/common-image.vue'
  import s3Image from '~/utils/s3-image'
  import CommonVideoPlayer from '#components/ui/common-video-player.vue'
  import type {
    ReviewContents,
    ReviewData,
    ReviewThumbnails
  } from '~/types/goods/goods-review-types'
  import { isMobile as isMobileCheck } from '~/utils/device-utils'
  import { getReviewHlpful } from '~/api/goods/goods-review-api'
  import {
    GOODS_BR_REPLACE,
    GoodsReviewThumbnailInjectionKey
  } from '~/constants/goods-constants'
  import CommonRate from '#components/ui/common-rate.vue'
  import type { CommonProps } from '~/types/common/common-props'

  interface Props extends CommonProps {
    contents: ReviewData
    images?:
      | Array<{ contFilePathNm: string; type: string; revGbCd: string }>
      | ReviewContents[]
    fullContent?: boolean
    reviewThumbnail: ReviewThumbnails
    isPopupReviewDetail?: boolean
  }

  const reviewModalInject = inject(GoodsReviewThumbnailInjectionKey)

  const props = defineProps<Props>()

  const formatDate = (date: string, newformat?: string) => {
    // 2022.12.31 형식을 2022/12/31 형식으로 변환해서 dayjs에서 처리하게 함(iOS 사파리 invalid date 오류 방지)
    const format = newformat || 'YYYY.MM.DD'
    return dayjs(
      date?.replace(/^(\S*).*/g, '$1')?.replace(/[^:\s\d]+/g, '/')
    ).format(format)
  }

  const isMobile = isMobileCheck()
  const isRecommend = ref(props.contents?.myClickedHelpYn === 'Y')
  // const { setReviewIndex } = useReviewIndexStore()
  // const [isOpenReviewDetail, setIsOpenReviewDetail] = useState(false)
  // const [isOpenReviewDecl, setIsOpenReviewDecl] = useState(false)

  const hlpfulCnt = ref(props.contents?.hlpfulCnt || 0)
  // 펼치기
  const expanded = ref<boolean>(false)

  const contentRef = ref<HTMLDivElement>()
  const isOverflowing = ref<boolean>(false)
  //
  const isHlpfulEdit = ref(false)
  // const isMounted = useRef(false)
  // const isLogin = isAuthenticated()
  // 목록인지 팝업인지 구분
  const isModal = ref(props.isPopupReviewDetail)
  // const { detailPopupCount, setDetailPopupCount } = useReviewThumbnailStore()
  // const tReviewDetail = getMessage('goods-page.reviewDetail')
  // const dialog = useGoodsDialogStore()
  // const login = useGoodsLogin()

  const toggleRecomend = () => {
    setReviewHlpful(props.contents.revNo)
    isHlpfulEdit.value = !isHlpfulEdit.value
  }

  const toggleExpand = () => {
    expanded.value = !expanded.value
  }

  async function setReviewHlpful(revNo: string) {
    // if (
    //   !login.checkAlert({
    //     showCloseButton: false,
    //     pageReturn: true
    //   })
    // )
    //   return
    console.log('props.contents?.myReviewYn', props.contents?.myReviewYn)

    // 리뷰 작성자 본인여부 확인
    if (props.contents?.myReviewYn === 'Y') {
      // dialog.open({
      //   content: tReviewDetail('notAllowed'),
      //   type: 'confirm',
      //   ok: tReviewDetail('confirm')
      // })
    } else {
      // 도움돼요 호출
      const res = await getReviewHlpful(revNo)
      if (res?.hlpfulCnt !== undefined && res?.delYn) {
        hlpfulCnt.value = res.hlpfulCnt
        isRecommend.value = res.delYn === 'N'
      }
    }
  }

  const mapLength = isMobile ? 4 : 6 // 모바일일 경우 이미지 4개만 뿌려주기, pc일 경우 6개 뿌려주기
</script>

<template>
  <article
    :class="`review-item${props.className ? ' ' + props.className : ''} review-item-scope`"
  >
    <div class="review-controls">
      <CommonRate
        :star-size="18"
        allow-half
        :default-value="props.contents?.revScrVal"
        size="small"
        disabled
      />
      <div class="extra-btns">
        <CommonButton
          size="fsm"
          @click="
            () => reviewModalInject?.openDeclarationModal(props.contents.revNo)
          "
        >
          신고
        </CommonButton>
        <button
          :class="`btn-recomend ${isRecommend ? 'active' : ''}`"
          title="추천"
          @click="toggleRecomend"
        >
          {{ hlpfulCnt }}
        </button>
      </div>
    </div>

    <div
      v-if="props.contents?.evaluations && !isModal"
      class="my-2 flex-col space-y-2"
    >
      <dl
        v-for="(evaluation, index) in props.contents.evaluations"
        :key="index"
        class="body2 flex space-x-3"
      >
        <dt class="min-w-12">{{ evaluation.evltItemNm }}</dt>
        <dd>{{ evaluation.evltVal }}</dd>
      </dl>
    </div>
    <div
      v-if="props.images"
      class="btn-review-box mb-2 grid grid-cols-4 gap-3 pc:grid-cols-6"
    >
      <button
        v-for="(item, index) in props.images?.slice(0, mapLength)"
        :key="index"
        type="button"
        :class="`${item.revGbCd === '30' ? 'video' : ''} ${isMobile && props.images.length > 4 && index === 3 ? 'more' : ''} relative`"
        @click.prevent="
          () => {
            // showReviewDetailModal(reviewThumbnail, contents?.revNo)
            console.log('상품평 모달')
          }
        "
      >
        <CommonImage
          v-if="item.revGbCd !== '30'"
          class-name="block aspect-square size-full"
          :src="s3Image({ src: item.contFilePathNm })"
          :alt="item.contFilePathNm || '상품 이미지'"
        />
        <video
          v-else
          preload="metadata"
          class="block aspect-square h-auto w-full"
          :src="s3Image({ src: item.contFilePathNm }) + '#t=0.5'"
        ></video>
      </button>
    </div>

    <div
      ref="contentRef"
      :class="`body1 ${expanded ? '' : 'ellipsis-2'} ${props.isPopupReviewDetail ? 'normal' : 'break-all'}`"
      v-html="
        props.contents?.revCont.replaceAll(GOODS_BR_REPLACE, '<br />') || ''
      "
    ></div>
    <div class="review-extra-info">
      <span class="name">{{ props.contents?.member.loginId }}</span>
      <span class="date">{{
        formatDate(props.contents?.revWrtDtm || '')
      }}</span>
    </div>

    <div v-if="isOverflowing && !isModal" class="mt-1 flex justify-end">
      <CommonButton
        size="fbase"
        :class-name="`${expanded ? 'btn-area-close' : 'btn-area-open'}`"
        @click.prevent="toggleExpand"
      >
        {{ expanded ? '접기' : '펼치기' }}
      </CommonButton>
    </div>
  </article>
  <div v-if="isModal" class="review-detail-img review-detail-img-scope">
    <div
      v-for="(item, index) in props.contents?.contents || []"
      :key="index"
      :class="`${item.revGbCd === '30' ? '' : 'img-container'}`"
    >
      <CommonVideoPlayer
        v-if="item.revGbCd === '30'"
        :source="s3Image({ src: item.contFilePathNm })"
        :controls="true"
        :is-playable="true"
      />
      <CommonImage
        v-else
        :src="s3Image({ src: item.contFilePathNm })"
        :alt="item.contFileNm || '상품 이미지'"
      />
    </div>
  </div>
</template>

<style scoped>
  @import 'assets/styles/common/review-item.css';
  .review-item-scope {
    @apply p-5;
  }
  .review-detail-img-scope {
    @apply p-5;
  }

  .extra-btns button:first-child {
    font-size: 12px;
  }

  /* 추천버튼 */
  button.btn-recomend,
  .mark-recommend {
    @apply inline-flex h-5 items-center rounded-xl border border-gray4 pl-1.5 pr-3 text-xs text-gray7;
  }
  button.btn-recomend::before,
  .mark-recommend::before {
    @apply mr-0.5 block size-5 bg-[url('~/public/images/icons/ico_recommend.svg')] bg-center bg-no-repeat content-[''];
  }
  button.btn-recomend.active {
    @apply text-primary;
  }
  button.btn-recomend.active::before {
    @apply bg-[url('~/public/images/icons/ico_recommend_active.svg')];
  }
</style>
