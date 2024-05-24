<template>
  <CommonTitle title="Table Guide" />
  <section>
    <h2 class="mb-4 text-xl font-bold">class = table</h2>
    <p class="mb-4">
      상품고시정보, 사이즈 정보와 같이 행과 열이 고정된 정적 정보 표시에 사용.
      <br />
      텍스트 정렬은 기본 좌측 정렬이므로, 가운데 정렬 필요 시 text-center
      클래스를 필요한 위치(table, th, td 등)에 넣습니다.
    </p>

    <div
      class="mb-4 w-full rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <h3 class="mb-4 text-xl font-bold">상단 헤더형</h3>
      <table class="table text-center">
        <caption>
          테이블 설명
        </caption>
        <colgroup>
          <col :style="{ width: '25%' }" />
          <col :style="{ width: '25%' }" />
          <col :style="{ width: '25%' }" />
          <col :style="{ width: '25%' }" />
        </colgroup>
        <thead>
          <tr>
            <th>사이즈</th>
            <th>XS</th>
            <th>S</th>
            <th>M</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>가슴</th>
            <td>80</td>
            <td>84~88</td>
            <td>100</td>
          </tr>
          <tr>
            <th>어깨</th>
            <td>80</td>
            <td>84~88</td>
            <td>100</td>
          </tr>
          <tr>
            <th>허리</th>
            <td>80</td>
            <td>84~88</td>
            <td>100</td>
          </tr>
          <tr>
            <th>엉덩이</th>
            <td>80</td>
            <td>84~88</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
      <h3 class="mb-4 text-xl font-bold">좌측 헤더형</h3>
      <table class="table">
        <caption>
          테이블 설명
        </caption>
        <colgroup>
          <col :style="{ width: '40%' }" />
          <col :style="{ width: '60%' }" />
        </colgroup>
        <tbody>
          <tr>
            <th>제조사/원산지</th>
            <td>서울시 송파구 법원로 9길 26 6층</td>
          </tr>
          <tr>
            <th>상품번호</th>
            <td>새상품</td>
          </tr>
          <tr>
            <th>품명 및 모델명</th>
            <td>상품 상세설명 참조</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section1" />
    </div>
  </section>

  <section>
    <h2 class="mb-4 text-xl font-bold">class = table-info</h2>
    <p class="mb-4">th, td 쌍으로 이루어진 정보 테이블.</p>

    <div
      class="mb-4 w-[500px] rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <table class="table-info mb-10">
        <caption>
          증정품, 사은품, 추가혜택, 배송정보, 공급업체, 상품번호 정보
        </caption>
        <colgroup>
          <col :style="{ width: '80px' }" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>증정품</th>
            <td>발레하는 소녀 미니 오르골(컬러 랜덤)</td>
          </tr>
          <tr>
            <th>사은품</th>
            <td>
              <CommonSelect
                v-model:model="selectValue1"
                :options="[
                  { value: 'option1', label: '크리스마스 사은품 증정' },
                  { value: 'option2', label: ' 크리스마스 사은품 증정' }
                ]"
                class-name="w-full"
                placeholder="크리스마스 사은품 증정"
              />

              <div class="mt-3 flex gap-2">
                <button class="inline-flex size-10 items-center justify-center">
                  <CommonImgMedia
                    src="/images/thumb/products/img_slider_01.jpg"
                    alt=""
                    class-name="size-full object-contain"
                  />
                </button>
                <button class="inline-flex size-10 items-center justify-center">
                  <CommonImgMedia
                    src="/images/thumb/products/img_slider_03.jpg"
                    alt=""
                    class-name="size-full object-contain"
                  />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th>추가혜택</th>
            <td>
              <CommonButton
                variant="underline"
                size="fsm"
                class-name="pc:body1"
              >
                마일리지 적립 안내
              </CommonButton>
              <br />
              <CommonButton
                variant="underline"
                size="fsm"
                class-name="pc:body1"
              >
                무이자 할부 안내
              </CommonButton>
            </td>
          </tr>
          <tr>
            <th>배송정보</th>
            <td>
              <div class="flex justify-between">
                <span>2일 이내 발송예정</span>
                <CommonButton
                  variant="underline"
                  size="fsm"
                  class-name="pc:body1"
                >
                  더보기
                </CommonButton>
              </div>
              <div>무료배송</div>
              <div>산악 및 섬 지역에 3,000원 추가</div>
              <div class="mt-2 text-primary">예약상품</div>
              <div>예약기간: 2024.01.01 ~ 2024.01.15</div>
              <div>출고예정일: 2024.01.20</div>
            </td>
          </tr>
          <tr>
            <th>공급업체</th>
            <td>텐바이텐</td>
          </tr>
          <tr>
            <th>상품번호</th>
            <td>10182154</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section2" />
    </div>
  </section>

  <section>
    <h2 class="mb-4 text-xl font-bold">class = table-info responsive</h2>
    <p class="mb-4">반응형 테이블.</p>

    <div
      class="mb-4 w-[500px] rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <div class="group-box">
        <table class="table-info responsive">
          <tbody>
            <tr>
              <th class="align-middle text-base">
                <span class="text-black">잔여</span>
              </th>
              <td class="text-right">
                <div class="mb-1 text-2xl pc:text-3xl"><b>9,654,000</b>원</div>
                <div class="text-sm text-gray7">한도 10,000,000원</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section3" />
    </div>
  </section>

  <section>
    <h2 class="mb-4 text-xl font-bold">GroupBox(box-gray) &gt; .table-info</h2>
    <p class="mb-4">
      GroupBox 컴포넌트 내부에 table-info 배치. 그룹박스 자체 하단 여백을 가지고
      있으므로 여백이 불필요 할 경우 GroupBox에 mb-0 클래스 사용
    </p>

    <div
      class="mb-4 w-[500px] rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <CommonGroupBox type="box-gray">
        <table class="table-info">
          <caption>
            주문번호
          </caption>
          <colgroup>
            <col :style="{ width: '64px' }" />
            <col />
            <col :style="{ width: '100px' }" />
          </colgroup>
          <tbody>
            <tr>
              <th>주문번호</th>
              <td>
                <CommonButton
                  variant="underline"
                  size="fsm"
                  class-name="font-bold pc:body1"
                >
                  2111255588P1010
                </CommonButton>
              </td>
              <td class="text-right">
                <span class="text-gray7">2024.01.31</span>
              </td>
            </tr>
          </tbody>
        </table>
      </CommonGroupBox>

      <CommonGroupBox type="box-gray">
        <table class="table-info">
          <caption>
            주문번호
          </caption>
          <colgroup>
            <col :style="{ width: '64px' }" />
            <col />
            <col :style="{ width: '100px' }" />
          </colgroup>
          <tbody>
            <tr>
              <th>주문번호</th>
              <td>
                <CommonButton
                  variant="underline"
                  size="fsm"
                  class-name="font-bold pc:body1"
                >
                  2111255588P1010
                </CommonButton>
              </td>
            </tr>
            <tr>
              <th>주문일시</th>
              <td>2024년 01월 15일 17:00</td>
            </tr>
          </tbody>
        </table>
      </CommonGroupBox>
    </div>

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section4" />
    </div>
  </section>

  <section>
    <h2 class="mb-4 text-xl font-bold">
      GroupBox(box-gray) &gt; .table-info responsive
    </h2>
    <p class="mb-4">GroupBox 컴포넌트 내부에 table-info 배치. 반응형 테이블</p>

    <div
      class="mb-4 w-[500px] rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <CommonGroupBox type="border" class-name="mb-0">
        <table class="table-info responsive">
          <tbody>
            <tr>
              <th class="align-middle text-base">
                <span class="text-black">마일리지</span>
              </th>
              <td class="text-right">
                <span class="text-2xl pc:text-3xl">
                  <b>1,000,323,755</b>M
                </span>
              </td>
            </tr>
            <tr>
              <th class="align-middle text-base">
                <span class="text-black">쿠폰</span>
              </th>
              <td class="text-right">
                <span class="text-2xl pc:text-3xl"> <b>5</b>장 </span>
              </td>
            </tr>
          </tbody>
        </table>
      </CommonGroupBox>
    </div>

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section5" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'
  import CommonSelect from '#components/ui/common-select.vue'
  import { ref } from '#imports'
  import CommonImgMedia from '#components/ui/common-img-media.vue'
  import CommonButton from '#components/ui/common-button.vue'
  import CommonGroupBox from '#components/ui/common-group-box.vue'

  const selectValue1 = ref<string>('option1')

  const language = 'javascript'
  const section1 = `
<table class="table text-center">
  <caption>
    테이블 설명
  </caption>
  <colgroup>
    <col :style="{ width: '25%' }" />
    <col :style="{ width: '25%' }" />
    <col :style="{ width: '25%' }" />
    <col :style="{ width: '25%' }" />
  </colgroup>
  <thead>
    <tr>
      <th>사이즈</th>
      <th>XS</th>
      <th>S</th>
      <th>M</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>가슴</th>
      <td>80</td>
      <td>84~88</td>
      <td>100</td>
    </tr>
    <tr>
      <th>어깨</th>
      <td>80</td>
      <td>84~88</td>
      <td>100</td>
    </tr>
    <tr>
      <th>허리</th>
      <td>80</td>
      <td>84~88</td>
      <td>100</td>
    </tr>
    <tr>
      <th>엉덩이</th>
      <td>80</td>
      <td>84~88</td>
      <td>100</td>
    </tr>
  </tbody>
</table>

<br />
<br />
<h3 class="mb-4 text-xl font-bold">좌측 헤더형</h3>
<table class="table">
  <caption>
    테이블 설명
  </caption>
  <colgroup>
    <col :style="{ width: '40%' }" />
    <col :style="{ width: '60%' }" />
  </colgroup>
  <tbody>
    <tr>
      <th>제조사/원산지</th>
      <td>서울시 송파구 법원로 9길 26 6층</td>
    </tr>
    <tr>
      <th>상품번호</th>
      <td>새상품</td>
    </tr>
    <tr>
      <th>품명 및 모델명</th>
      <td>상품 상세설명 참조</td>
    </tr>
  </tbody>
</table>`

  const section2 = `
import CommonSelect from '#components/ui/common-select.vue'
import CommonButton from '#components/ui/common-button.vue'
import CommonImgMedia from '#components/ui/common-img-media.vue'

<table class="table-info mb-10">
  <caption>
    증정품, 사은품, 추가혜택, 배송정보, 공급업체, 상품번호 정보
  </caption>
  <colgroup>
    <col :style="{ width: '80px' }" />
    <col />
  </colgroup>
  <tbody>
    <tr>
      <th>증정품</th>
      <td>발레하는 소녀 미니 오르골(컬러 랜덤)</td>
    </tr>
    <tr>
      <th>사은품</th>
      <td>
        <CommonSelect
          v-model:model="selectValue1"
          :options="[
            { value: 'option1', label: '크리스마스 사은품 증정' },
            { value: 'option2', label: ' 크리스마스 사은품 증정' }
          ]"
          class-name="w-full"
          placeholder="크리스마스 사은품 증정"
        />

        <div class="mt-3 flex gap-2">
          <button class="inline-flex size-10 items-center justify-center">
            <CommonImgMedia
              src="/images/thumb/products/img_slider_01.jpg"
              alt=""
              class-name="size-full object-contain"
            />
          </button>
          <button class="inline-flex size-10 items-center justify-center">
            <CommonImgMedia
              src="/images/thumb/products/img_slider_03.jpg"
              alt=""
              class-name="size-full object-contain"
            />
          </button>
        </div>
      </td>
    </tr>
    <tr>
      <th>추가혜택</th>
      <td>
        <CommonButton
          variant="underline"
          size="fsm"
          class-name="pc:body1"
        >
          마일리지 적립 안내
        </CommonButton>
        <br />
        <CommonButton
          variant="underline"
          size="fsm"
          class-name="pc:body1"
        >
          무이자 할부 안내
        </CommonButton>
      </td>
    </tr>
    <tr>
      <th>배송정보</th>
      <td>
        <div class="flex justify-between">
          <span>2일 이내 발송예정</span>
          <CommonButton
            variant="underline"
            size="fsm"
            class-name="pc:body1"
          >
            더보기
          </CommonButton>
        </div>
        <div>무료배송</div>
        <div>산악 및 섬 지역에 3,000원 추가</div>
        <div class="mt-2 text-primary">예약상품</div>
        <div>예약기간: 2024.01.01 ~ 2024.01.15</div>
        <div>출고예정일: 2024.01.20</div>
      </td>
    </tr>
    <tr>
      <th>공급업체</th>
      <td>텐바이텐</td>
    </tr>
    <tr>
      <th>상품번호</th>
      <td>10182154</td>
    </tr>
  </tbody>
</table>`

  const section3 = `
<div class="group-box">
  <table class="table-info responsive">
    <tbody>
      <tr>
        <th class="align-middle text-base">
          <span class="text-black">잔여</span>
        </th>
        <td class="text-right">
          <div class="mb-1 text-2xl pc:text-3xl"><b>9,654,000</b>원</div>
          <div class="text-sm text-gray7">한도 10,000,000원</div>
        </td>
      </tr>
    </tbody>
  </table>
</div>`

  const section4 = `
import CommonGroupBox from '#components/ui/common-group-box.vue'
import CommonButton from '#components/ui/common-button.vue'

<CommonGroupBox type="box-gray">
  <table class="table-info">
    <caption>
      주문번호
    </caption>
    <colgroup>
      <col :style="{ width: '64px' }" />
      <col />
      <col :style="{ width: '100px' }" />
    </colgroup>
    <tbody>
      <tr>
        <th>주문번호</th>
        <td>
          <CommonButton
            variant="underline"
            size="fsm"
            class-name="font-bold pc:body1"
          >
            2111255588P1010
          </CommonButton>
        </td>
        <td class="text-right">
          <span class="text-gray7">2024.01.31</span>
        </td>
      </tr>
    </tbody>
  </table>
</CommonGroupBox>

<CommonGroupBox type="box-gray">
  <table class="table-info">
    <caption>
      주문번호
    </caption>
    <colgroup>
      <col :style="{ width: '64px' }" />
      <col />
      <col :style="{ width: '100px' }" />
    </colgroup>
    <tbody>
      <tr>
        <th>주문번호</th>
        <td>
          <CommonButton
            variant="underline"
            size="fsm"
            class-name="font-bold pc:body1"
          >
            2111255588P1010
          </CommonButton>
        </td>
      </tr>
      <tr>
        <th>주문일시</th>
        <td>2024년 01월 15일 17:00</td>
      </tr>
    </tbody>
  </table>
</CommonGroupBox>`

  const section5 = `
import CommonGroupBox from '#components/ui/common-group-box.vue'

<CommonGroupBox type="border" class-name="mb-0">
  <table class="table-info responsive">
    <tbody>
      <tr>
        <th class="align-middle text-base">
          <span class="text-black">마일리지</span>
        </th>
        <td class="text-right">
          <span class="text-2xl pc:text-3xl">
            <b>1,000,323,755</b>M
          </span>
        </td>
      </tr>
      <tr>
        <th class="align-middle text-base">
          <span class="text-black">쿠폰</span>
        </th>
        <td class="text-right">
          <span class="text-2xl pc:text-3xl"> <b>5</b>장 </span>
        </td>
      </tr>
    </tbody>
  </table>
</CommonGroupBox>`
</script>

<style scoped></style>
