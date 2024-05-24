<template>
  <CommonTitle title="TimeLine Guide" />
  <div class="my-5">
    <CommonCaution>
      <CommonCautionTitle>TimeLineContainer 옵션</CommonCautionTitle>
      <CommonCautionContent>
        <b>title</b>: 타임라인 그룹을 묶어줄 타이틀. (ex: 날짜, 주문번호)
        [string]
      </CommonCautionContent>
    </CommonCaution>
    <br />
    <CommonCaution>
      <CommonCautionTitle>TimeLine 옵션</CommonCautionTitle>
      <CommonCautionContent>
        <b>title</b>: 타임라인 아이템 타이틀 [string]
      </CommonCautionContent>
      <CommonCautionContent>
        <b>date</b>: 타임라인 아이템 날짜 및 시간 [string]
      </CommonCautionContent>
      <CommonCautionContent>
        <b>msg</b>: 상세메시지 [string]
      </CommonCautionContent>
      <CommonCautionContent>
        <b>msgType</b>: msgType 에 따라 부가 정보 또는 버튼 출력/미출력 - 기본값
        null. 우측 타입은 백단 데이터에 따라 변경 될 수 있음 ['QNA' | '주문' |
        '이벤트' | '쿠폰' | '정보제공' | '기타']
      </CommonCautionContent>
    </CommonCaution>
  </div>

  <section>
    <h2 class="mb-4 text-xl font-bold">기본 타입</h2>
    <p class="mb-4">디스크립션</p>
    <div
      class="mb-4 w-[500px] rounded-lg border border-gray-300 bg-white px-8 py-4"
    >
      <CommonTimeLineContainer
        v-for="(timeList, idx) in timeLineData"
        :key="idx"
        title="2024.01.15"
      >
        <CommonTimeLine
          v-for="(time, idx) in timeList.list"
          :key="idx"
          :title="time.title"
          :date="time.date"
          :msg="time.msg"
          :msg-type="time.msgType"
        />
      </CommonTimeLineContainer>
    </div>

    <div class="mb-10 mt-4 min-w-fit">
      <CommonCodeBlock :language="language" :value="section1" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import CommonTitle from '#components/ui/common-title.vue'
  import CommonCaution from '#components/ui/common-caution.vue'
  import CommonCautionTitle from '#components/ui/common-caution-title.vue'
  import CommonCautionContent from '#components/ui/common-caution-content.vue'
  import CommonTimeLineContainer from '#components/ui/common-time-line-container.vue'
  import CommonTimeLine from '#components/ui/common-time-line.vue'
  import CommonCodeBlock from '#components/ui/common-code-block.vue'

  const timeLineData = [
    {
      date: '2024.01.15',
      list: [
        {
          title: '주문취소 안내',
          date: '2024.01.15 10:00:00',
          msg: '고객님의 주문(254258858521)이 취소되었습니다.',
          msgType: '주문'
        },
        {
          title: '이벤트 당첨 안내',
          date: '2024.01.15 10:00:00',
          msg: '최우식 고객님, 이벤트 마일리지 당첨을 축하 드립니다.',
          msgType: '이벤트'
        },
        {
          title: '쿠폰 소멸안내',
          date: '2024.01.15 10:00:00',
          msg: '최우식 고객님의 쿠폰 소멸 안내 드립니다.',
          msgType: '쿠폰'
        }
      ]
    },
    {
      date: '2024.01.01',
      list: [
        {
          title: '1:1 문의 답변완료 안내',
          date: '2024.01.15 10:00:00',
          msg: '최우식 고객님, 문의하신 내용에 대한 답변이 완료되었습니다.',
          msgType: 'QNA'
        },
        {
          title: '회원가입완료 안내',
          date: '2024.01.15 10:00:00',
          msg: '고객님, 회원 가입을 진심으로 감사드립니다.',
          msgType: '기타'
        }
      ]
    },
    {
      date: '2022.12.23',
      list: [
        {
          title: '정기적 수신동의 안내',
          date: '2024.01.15 10:00:00',
          msg: '최우식 고객님, 이 메시지는 정보통신망법에 따라 2년마다 발송되는 광고성 정보 수신동의 확인 메시지 입니다.',
          msgType: '정보제공'
        }
      ]
    }
  ]

  const language = 'javascript'
  const section1 = `
import CommonTimeLineContainer from '#components/ui/common-time-line-container.vue'
import CommonTimeLine from '#components/ui/common-time-line.vue'

<CommonTimeLineContainer
  v-for="(timeList, idx) in timeLineData"
  :key="idx"
  title="2024.01.15"
>
  <CommonTimeLine
    v-for="(time, idx) in timeList"
    :key="idx"
    :title="time.title"
    :date="time.date"
    :msg="time.msg"
    :msg-type="time.msgType"
  />
</CommonTimeLineContainer>`
</script>

<style scoped></style>
