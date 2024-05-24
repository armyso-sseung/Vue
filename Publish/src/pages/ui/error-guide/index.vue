<template>
  <CommonTitle title="Error Guide" />
  <section>
    <h2 class="mb-4 text-xl font-bold">400 오류 (페이지 없음)</h2>
    <div class="w-fit rounded-lg border border-gray-300 bg-white px-8 py-4">
      <ErrorTitle>페이지를 찾을 수 없습니다.</ErrorTitle>
      <ErrorText>
        요청하신 페이지가 제거되었거나,<br />
        이름이 변경되었거나,<br />
        일시적으로 사용이 중단되었습니다.
      </ErrorText>
      <ErrorButton button-label="이전" button-label-active="홈으로 이동" />
    </div>

    <div class="mt-8 min-w-fit">
      <CommonCodeBlock :language="language" :value="section1" />
    </div>
  </section>

  <section>
    <h2 class="mb-4 mt-10 mt-10 text-xl font-bold">
      500 오류 (서버 접속 오류)
    </h2>
    <div class="w-fit rounded-lg border border-gray-300 bg-white px-8 py-4">
      <ErrorTitle>서비스에 접속할 수 없습니다.</ErrorTitle>
      <ErrorText>
        죄송합니다.<br />
        일시적으로 접속되지 않았습니다.<br />
        잠시 후 다시 이용 부탁드리며,<br />
        이용에 불편을 드려 사과드립니다.
      </ErrorText>
      <ErrorButton button-label-active="다시 시도하기" />
    </div>

    <div class="mt-8 min-w-fit">
      <CommonCodeBlock :language="language" :value="section2" />
    </div>
  </section>

  <section>
    <h2 class="mb-4 mt-10 text-xl font-bold">서비스 점검</h2>
    <div class="w-fit rounded-lg border border-gray-300 bg-white px-8 py-4">
      <ErrorTitle>서비스 점검 중입니다.</ErrorTitle>
      <CommonBannerMsg class-name="mt-3 w-full pc:w-[335px] mx-auto">
        <CommonCaution>
          <CommonCautionContent size="md"
            >점검 시간 : 2024년 2월 6일 오전 10시 ~ 11시</CommonCautionContent
          >
          <CommonCautionContent size="md"
            >점검 이유 : 서비스 개선을 위한 점검입니다.</CommonCautionContent
          >
        </CommonCaution>
      </CommonBannerMsg>
      <ErrorText class-name="text-gray7">
        점검시간 동안 일부 서비스 이용이<br />
        제한되는 점 양해 부탁드립니다.
      </ErrorText>
    </div>

    <div class="mt-8 min-w-fit">
      <CommonCodeBlock :language="language" :value="section3" />
    </div>
  </section>

  <section>
    <h2 class="mb-4 mt-10 text-xl font-bold">401 오류 (구입자 나이제한)</h2>
    <div class="w-fit rounded-lg border border-gray-300 bg-white px-8 py-4">
      <ErrorTitle type="adult"
        >만 19세 미만의 청소년은<br />이용할 수 없습니다.</ErrorTitle
      >
      <ErrorText>
        [정보통신망이용촉진 및 정보 보호 등에 관한 법률]<br />
        및 [청소년보호법]에 따라,<br />
        미성년자 고객님은 청소년 유해매체물<br />
        관련 페이지에 접근이 불가합니다.
      </ErrorText>
      <ErrorButton button-label-active="홈으로 이동" />
    </div>

    <div class="mt-8 min-w-fit">
      <CommonCodeBlock :language="language" :value="section4" />
    </div>
  </section>

  <section>
    <h2 class="mb-4 mt-10 text-xl font-bold">401 오류 (본인인증 요청)</h2>
    <div class="w-fit rounded-lg border border-gray-300 bg-white px-8 py-4">
      <ErrorTitle type="adult">성인 인증 후 이용이 가능합니다.</ErrorTitle>
      <ErrorText>
        이 상품은 청소년 유해매체물로,<br />
        만 19세 미만의 청소년이 이용할 수 없습니다.<br />
        미성년자 고객님은 청소년 유해매체물<br />
        관련 페이지에 접근이 불가합니다.<br /><br />
        이용을 원하시는 경우,<br />
        가입 계정의 회원 정보와 동일한 명의로<br />
        본인 인증을 진행해 주세요.
      </ErrorText>
      <ErrorButton button-label-active="휴대폰으로 본인인증 하기" />
    </div>

    <div class="mt-8 min-w-fit">
      <CommonCodeBlock :language="language" :value="section5" />
    </div>
  </section>

  <section>
    <h2 class="mb-4 mt-10 text-xl font-bold">401 오류 (본인인증 오류)</h2>
    <div class="w-fit rounded-lg border border-gray-300 bg-white px-8 py-4">
      <ErrorTitle>본인인증 정보를 다시 확인해 주세요.</ErrorTitle>
      <ErrorText>
        가입하신 계정의 회원정보와<br />
        본인인증 정보가 일치하지 않습니다.<br /><br />
        로그인하신 계정과 동일한 정보로<br />
        본인인증을 진행해 주세요. (본인명의)
      </ErrorText>
      <ErrorButton button-label-active="홈으로 이동" />
    </div>

    <div class="mt-8 min-w-fit">
      <CommonCodeBlock :language="language" :value="section6" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import ErrorTitle from '#components/ui/error/error-title.vue'
  import ErrorText from '#components/ui/error/error-text.vue'
  import ErrorButton from '#components/ui/error/error-button.vue'
  import CommonBannerMsg from '#components/ui/common-banner-msg.vue'
  import CommonCaution from '#components/ui/common-caution.vue'
  import CommonCautionContent from '#components/ui/common-caution-content.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const language = 'javascript'
  const section1 = `
import ErrorTitle from '#components/ui/error/error-title.vue'
import ErrorText from '#components/ui/error/error-text.vue'
import ErrorButton from '#components/ui/error/error-button.vue'

<ErrorTitle>페이지를 찾을 수 없습니다.</ErrorTitle>
<ErrorText>
  요청하신 페이지가 제거되었거나,<br />
  이름이 변경되었거나,<br />
  일시적으로 사용이 중단되었습니다.
</ErrorText>
<ErrorButton button-label="이전" button-label-active="홈으로 이동" />`

  const section2 = `
import ErrorTitle from '#components/ui/error/error-title.vue'
import ErrorText from '#components/ui/error/error-text.vue'
import ErrorButton from '#components/ui/error/error-button.vue'

<ErrorTitle>서비스에 접속할 수 없습니다.</ErrorTitle>
<ErrorText>
  죄송합니다.<br />
  일시적으로 접속되지 않았습니다.<br />
  잠시 후 다시 이용 부탁드리며,<br />
  이용에 불편을 드려 사과드립니다.
</ErrorText>
<ErrorButton button-label-active="다시 시도하기" />`

  const section3 = `
import ErrorTitle from '#components/ui/error/error-title.vue'
import ErrorText from '#components/ui/error/error-text.vue'
import ErrorButton from '#components/ui/error/error-button.vue'
import CommonBannerMsg from '#components/ui/common-banner-msg.vue'
import CommonCaution from '#components/ui/common-caution.vue'
import CommonCautionContent from '#components/ui/common-caution-content.vue'

<ErrorTitle>서비스 점검 중입니다.</ErrorTitle>
<CommonBannerMsg class-name="mt-3 w-full pc:w-[335px] mx-auto">
  <CommonCaution>
    <CommonCautionContent size="md"
      >점검 시간 : 2024년 2월 6일 오전 10시 ~ 11시</CommonCautionContent
    >
    <CommonCautionContent size="md"
      >점검 이유 : 서비스 개선을 위한 점검입니다.</CommonCautionContent
    >
  </CommonCaution>
</CommonBannerMsg>
<ErrorText class-name="text-gray7">
  점검시간 동안 일부 서비스 이용이<br />
  제한되는 점 양해 부탁드립니다.
</ErrorText>`

  const section4 = `
import ErrorTitle from '#components/ui/error/error-title.vue'
import ErrorText from '#components/ui/error/error-text.vue'
import ErrorButton from '#components/ui/error/error-button.vue'

<ErrorTitle type="adult"
  >만 19세 미만의 청소년은<br />이용할 수 없습니다.</ErrorTitle
>
<ErrorText>
  [정보통신망이용촉진 및 정보 보호 등에 관한 법률]<br />
  및 [청소년보호법]에 따라,<br />
  미성년자 고객님은 청소년 유해매체물<br />
  관련 페이지에 접근이 불가합니다.
</ErrorText>
<ErrorButton button-label-active="홈으로 이동" />`

  const section5 = `
import ErrorTitle from '#components/ui/error/error-title.vue'
import ErrorText from '#components/ui/error/error-text.vue'
import ErrorButton from '#components/ui/error/error-button.vue'

<ErrorTitle type="adult">성인 인증 후 이용이 가능합니다.</ErrorTitle>
<ErrorText>
  이 상품은 청소년 유해매체물로,<br />
  만 19세 미만의 청소년이 이용할 수 없습니다.<br />
  미성년자 고객님은 청소년 유해매체물<br />
  관련 페이지에 접근이 불가합니다.<br /><br />
  이용을 원하시는 경우,<br />
  가입 계정의 회원 정보와 동일한 명의로<br />
  본인 인증을 진행해 주세요.
</ErrorText>
<ErrorButton button-label-active="휴대폰으로 본인인증 하기" />`

  const section6 = `
import ErrorTitle from '#components/ui/error/error-title.vue'
import ErrorText from '#components/ui/error/error-text.vue'
import ErrorButton from '#components/ui/error/error-button.vue'

<ErrorTitle>본인인증 정보를 다시 확인해 주세요.</ErrorTitle>
<ErrorText>
  가입하신 계정의 회원정보와<br />
  본인인증 정보가 일치하지 않습니다.<br /><br />
  로그인하신 계정과 동일한 정보로<br />
  본인인증을 진행해 주세요. (본인명의)
</ErrorText>
<ErrorButton button-label-active="홈으로 이동" />`
</script>

<style scoped></style>
