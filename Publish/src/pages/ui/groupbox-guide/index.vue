<template>
  <CommonTitle title="GroupBox Guide" />
  <p class="mb-4">
    GroupBox 하단에 마진 20px 있음. 마진 조정이 필요할 경우 className 으로 변경
  </p>

  <CommonCaution class-name="mb-10">
    <CommonCautionTitle>옵션</CommonCautionTitle>
    <CommonCautionContent>
      <b>type</b>: 박스 스타일 지정 - 기본값 "border" ["box-gray" | "border"]
    </CommonCautionContent>
  </CommonCaution>

  <section>
    <h2 class="guide-sub-title">type = border</h2>

    <div class="component-container w-[500px]">
      <CommonGroupBox type="border">
        <table class="table-info">
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

      <CommonGroupBox type="border">
        <div class="mb-2 flex items-center justify-between text-xs text-gray7">
          <p>총 상품금액 합계</p>
          <div><span>72,000</span>원</div>
        </div>
        <div class="flex items-center justify-between text-xs text-gray7">
          <p>할인금액</p>
          <div><span>5,600</span>원</div>
        </div>
        <div class="flex items-center justify-between text-xs text-gray7">
          <p>마일리지 사용 금액</p>
          <div><span>15,000</span>원</div>
        </div>
        <div class="flex items-center justify-between text-xs text-gray7">
          <p>배송비</p>
          <div><span>0</span>원</div>
        </div>

        <div class="mt-3 flex items-center justify-between">
          <p class="body1">총 결제금액</p>
          <div class="text-primary">
            <span class="body1 font-bold">5,150</span>
            <span class="caption1">원</span>
          </div>
        </div>
      </CommonGroupBox>
    </div>

    <CommonCodeBlock :language="language" :value="section1" />
  </section>

  <section>
    <h2 class="guide-sub-title">type = box-gray</h2>

    <div class="component-container w-[500px]">
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
        <table class="table-info col-2">
          <tbody>
            <tr>
              <th>상품평</th>
              <td class="text-right">
                <b class="pc:text-2xl">13</b>
              </td>
            </tr>
            <tr>
              <th>이벤트 참여 현황</th>
              <td class="text-right">
                <b class="pc:text-2xl">1</b>
              </td>
            </tr>
            <tr>
              <th>상품 Q&A</th>
              <td class="text-right">
                <b class="pc:text-2xl">13</b>
              </td>
            </tr>
            <tr>
              <th>1:1 문의</th>
              <td class="text-right">
                <b class="pc:text-2xl">0</b>
              </td>
            </tr>
          </tbody>
        </table>
      </CommonGroupBox>
    </div>

    <CommonCodeBlock :language="language" :value="section2" />
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonCaution from '#components/ui/common-caution.vue'
  import CommonCautionTitle from '#components/ui/common-caution-title.vue'
  import CommonCautionContent from '#components/ui/common-caution-content.vue'
  import CommonGroupBox from '#components/ui/common-group-box.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'
  import CommonButton from '#components/ui/common-button.vue'

  const language = 'javascript'
  const section1 = `
import CommonGroupBox from '#components/ui/common-group-box.vue'

<CommonGroupBox type="border">
  <table class="table-info">
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

<CommonGroupBox type="border">
  <div class="mb-2 flex items-center justify-between text-xs text-gray7">
    <p>총 상품금액 합계</p>
    <div><span>72,000</span>원</div>
  </div>
  <div class="flex items-center justify-between text-xs text-gray7">
    <p>할인금액</p>
    <div><span>5,600</span>원</div>
  </div>
  <div class="flex items-center justify-between text-xs text-gray7">
    <p>마일리지 사용 금액</p>
    <div><span>15,000</span>원</div>
  </div>
  <div class="flex items-center justify-between text-xs text-gray7">
    <p>배송비</p>
    <div><span>0</span>원</div>
  </div>

  <div class="mt-3 flex items-center justify-between">
    <p class="body1">총 결제금액</p>
    <div class="text-primary">
      <span class="body1 font-bold">5,150</span>
      <span class="caption1">원</span>
    </div>
  </div>
</CommonGroupBox>`

  const section2 = `
import CommonGroupBox from '#components/ui/common-group-box.vue'

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
  <table class="table-info col-2">
    <tbody>
      <tr>
        <th>상품평</th>
        <td class="text-right">
          <b class="pc:text-2xl">13</b>
        </td>
      </tr>
      <tr>
        <th>이벤트 참여 현황</th>
        <td class="text-right">
          <b class="pc:text-2xl">1</b>
        </td>
      </tr>
      <tr>
        <th>상품 Q&A</th>
        <td class="text-right">
          <b class="pc:text-2xl">13</b>
        </td>
      </tr>
      <tr>
        <th>1:1 문의</th>
        <td class="text-right">
          <b class="pc:text-2xl">0</b>
        </td>
      </tr>
    </tbody>
  </table>
</CommonGroupBox>`
</script>

<style scoped></style>
