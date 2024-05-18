export const CM026 = {
  ORDER: { code: '100', name: '주문' },
  ORDER_COMPLETE: { code: '200', name: '주문완료' },
  PAYMENT: { code: '310', name: '주문서결제수단' },
  SHOPPING_BAG: { code: '400', name: '장바구니' },
  MY_PAGE: { code: '300', name: '마이페이지' }
}

export const CM027 = {
  GENERAL_ORDER: { code: '101', name: '일반주문' },
  GIFT_ORDER: { code: '102', name: '선물하기' },
  REGULAR_ORDER: { code: '103', name: '정기주문신청' },
  NON_MEMBER_ORDER: { code: '104', name: '비회원주문' },
  GENERAL_ORDER_COMPLETE: { code: '201', name: '일반주문완료' },
  GIFT_ORDER_COMPLETE: { code: '202', name: '선물하기완료' },
  REGULAR_ORDER_COMPLETE: { code: '203', name: '정기주문신청완료' },
  NON_MEMBER_ORDER_COMPLETE: { code: '204', name: '비회원주문완료' },
  ORDER_INQUIRY: { code: '301', name: '주문내역' },
  CREDIT_CARD: { code: '311', name: '신용카드', payWayCd: '11' },
  KAKAO_PAY: { code: '312', name: '카카오페이' },
  SMILE_PAY: { code: '313', name: '스마일페이' },
  PAYCO: { code: '314', name: '페이코' },
  REALTIME_ACCOUNT_TRANSFER: {
    code: '316',
    name: '실시간계좌이체',
    payWayCd: '12'
  },
  COURIER_CART: { code: '401', name: '택배장바구니' },
  REGULAR_ORDER_CART: { code: '402', name: '정기주문장바구니' }
}

// 장바구니 구분
export const OM001 = {
  SHOPPING_BAG_COURIER: { code: '10', name: '택배', sort_seq: 0 },
  SHOPPING_BAG_PICKUP: { code: '20', name: '매장수령', sort_seq: 999 },
  SHOPPING_BAG_QUICK: { code: '30', name: '퀵배송', sort_seq: 999 },
  SHOPPING_BAG_REGULAR: { code: '40', name: '정기주문', sort_seq: 1 }
}

export const OM002 = {
  GENERAL_ORDER: { code: '10', name: '일반주문', gaName: '일반구매' },
  GIFT_ORDER: { code: '20', name: '선물하기', gaName: '선물하기_일반상품' },
  E_GIFT_CARD_ORDER: {
    code: '30',
    name: 'e-gift상품권',
    gaName: '선물하기_eGiftCard'
  },
  ALLIANCE_ORDER: { code: '40', name: '제휴', gaName: '' }
}

// 주문판매유형코드
export const OM004 = {
  GENERAL_SALES: { code: '10', name: '일반판매' },
  ORDER_FREE_GIFT: { code: '20', name: '주문사은품' },
  GOODS_FREE_GIFT: { code: '30', name: '상품사은품' }
}

export const OM008 = {
  ONE_MONTH: { code: '1', name: '1개월' },
  TWO_MONTH: { code: '2', name: '2개월' },
  THREE_MONTH: { code: '3', name: '3개월' },
  FOUR_MONTH: { code: '4', name: '4개월' },
  FIVE_MONTH: { code: '5', name: '5개월' },
  SIX_MONTH: { code: '6', name: '6개월' }
}

// 결제수단코드
export const OM013 = {
  CREDIT_CARD: {
    code: '11',
    name: '신용카드',
    ref_1_val: '',
    ref_2_val: 'C',
    isMainPayWayCd: true,
    isEasyPay: false
  },
  REALTIME_ACCOUNT_TRANSFER: {
    code: '12',
    name: '실시간계좌이체',
    ref_1_val: 'A',
    ref_2_val: '',
    isMainPayWayCd: true,
    isEasyPay: false
  },
  NAVER_PAY: {
    code: '14',
    name: '네이버페이',
    ref_1_val: '',
    ref_2_val: 'C',
    isMainPayWayCd: true,
    isEasyPay: true
  },
  KAKAO_PAY: {
    code: '15',
    name: '카카오페이',
    ref_1_val: '',
    ref_2_val: 'C',
    isMainPayWayCd: true,
    isEasyPay: true
  },
  PAYCO: {
    code: '16',
    name: '페이코',
    ref_1_val: '',
    ref_2_val: 'C',
    isMainPayWayCd: true,
    isEasyPay: true
  },
  SAMSUNG_PAY: {
    code: '17',
    name: '삼성페이',
    ref_1_val: '',
    ref_2_val: 'C',
    isMainPayWayCd: true,
    isEasyPay: true
  },
  APPLE_PAY: {
    code: '18',
    name: '애플페이',
    ref_1_val: '',
    ref_2_val: 'C',
    isMainPayWayCd: true,
    isEasyPay: true
  },
  L_PAY: {
    code: '19',
    name: 'LPAY',
    ref_1_val: '',
    ref_2_val: 'C',
    isMainPayWayCd: true,
    isEasyPay: true
  },
  TOSS_PAY: {
    code: '20',
    name: '토스페이',
    ref_1_val: '',
    ref_2_val: 'C',
    isMainPayWayCd: true,
    isEasyPay: true
  },
  SSG_PAY: {
    code: '21',
    name: 'SSG페이',
    ref_1_val: '',
    ref_2_val: 'C',
    isMainPayWayCd: true,
    isEasyPay: true
  },
  MILEAGE: {
    code: '32',
    name: '마일리지',
    ref_1_val: '',
    ref_2_val: 'M',
    isMainPayWayCd: false,
    isEasyPay: false
  }
}

// 주문매체코드
export const OM007 = {
  CC: { code: '10', name: '전화상담(CC)' },
  PC: { code: '20', name: 'PC' },
  MO: { code: '30', name: '모바일웹' },
  APP_AOS: { code: '40', name: '안드로이드앱' },
  APP_IOS: { code: '50', name: 'IOS앱' },
  PARTNERSHIP: { code: '60', name: '제휴' },
  LIVE_COMMERCE: { code: '70', name: '라이브커머스' }
}

// 정기주문상태코드
export const OM009 = {
  ONGOING: { code: '10', name: '진행중' },
  SUSPENSION: { code: '20', name: '중단' },
  CLOSE: { code: '30', name: '해지' }
}

// 주문비용구분코드
export const OM043 = {
  DELIVERY_FEE: { code: '10', name: '배송비' },
  RETURN_FEE: { code: '20', name: '회수반품비' },
  EXCHANGE_FEE: { code: '30', name: '교환배송비' },
  EXTRA_FEE: { code: '50', name: '추가배송비' }
}

export const VD005 = {
  FREE: { code: '10', name: '무료' },
  CHARGED: { code: '20', name: '유료' },
  CONDITIONAL_FREE: { code: '30', name: '조건부무료' }
}

export const PR003 = {
  NORMAL_SALE: { code: '10', name: '일반판매' },
  RSV_SALE: { code: '20', name: '예약상품' }
}

export const PR005 = {
  SALES: { code: '10', name: '판매중' },
  SOLD_OUT: { code: '20', name: '품절' },
  SUSPEND: { code: '30', name: '일시중단' },
  SALE_END: { code: '40', name: '판매종료' }
}

// 배송방법코드
export const LO010 = {
  COURIER_DELIVERY: { code: '10', name: '택배배송' },
  FOUR_PM: { code: '20', name: '4PM' },
  STORE_PICK_UP: { code: '30', name: '매장수령' },
  QUICK_DELIVERY: { code: '40', name: '퀵배송' },
  OVERSEAS_DELIVERY: { code: '50', name: '해외배송' },
  NON_DELIVERY: { code: '60', name: '무배송' }
}

// 배송메시지코드
export const ME039 = {
  NOT_SELECTED: { code: '10', name: '배송메시지 입력 안함' },
  DELIVERY_BEFORE_CALL: { code: '20', name: '배송 전 연락바랍니다' },
  NOT_PRESENT_FRONT_DOOR: { code: '30', name: '부재 시 문 앞에 놓아주세요' },
  NOT_PRESENT_SECURITY_OFFICE: {
    code: '40',
    name: '부재 시 경비실에 맡겨주세요'
  },
  QUICK_DELIVERY_REQUEST: { code: '50', name: '빠른 배송 부탁 드립니다' },
  NOT_PRESENT_CALL: { code: '60', name: '부재 시 핸드폰으로 연락바랍니다' },
  DIRECT_INPUT: { code: '70', name: '직접입력' }
}

// 공동현관출입방법
export const ME040 = {
  COMMON_DOOR_NUMBER: { code: '10', name: '공동현관 출입번호' },
  FREE_ENTRY: { code: '20', name: '자유출입' },
  ETC: { code: '30', name: '기타' }
}

export const SYSTEM = {
  FO: { code: '10', name: 'FO' },
  BO: { code: '20', name: 'BO' }
}

export const ORDER_TYPE = {
  GENERAL: { code: '10', name: '일반주문' },
  REGULAR: { code: '20', name: '정기주문' },
  GIFT: { code: '30', name: '선물주문' }
}

export const PAY_BUSINESS_TYPE = {
  ORDER: {
    code: '10',
    name: '주문',
    processUrl: 'order',
    completeMsg: '주문 완료되었습니다.',
    errorMsg: '주문에 실패하였습니다.',
    request: 'orderRegisterRequest',
    isOrder: true,
    isClaim: false
  },
  CANCEL: {
    code: '20',
    name: '취소',
    processUrl: 'claim/orderCancel/cancelFO',
    completeMsg: '주문취소가 완료되었습니다.',
    errorMsg: '결제가 실패되었습니다.',
    request: 'claimRequest',
    isOrder: false,
    isClaim: true
  },
  RETURN: {
    code: '30',
    name: '반품',
    processUrl: 'claim/return/acceptReturnFO',
    completeMsg: '반품신청이 완료되었습니다.',
    errorMsg: '결제가 실패되었습니다.',
    request: 'claimRequest',
    isOrder: false,
    isClaim: true
  },
  EXCHANGE: {
    code: '40',
    name: '교환',
    processUrl: 'claim/exchange/acceptExchangeFO',
    completeMsg: '교환신청이 완료되었습니다.',
    errorMsg: '결제가 실패되었습니다.',
    request: 'claimRequest',
    isOrder: false,
    isClaim: true
  },
  EXCHANGE_SHIPPING: {
    code: '50',
    name: '결제대기',
    processUrl: 'claim/fee/deliveryFeePayment',
    completeMsg: '배송비 결제가 완료되었습니다.',
    errorMsg: '결제가 실패되었습니다.',
    request: 'claimRequest',
    isOrder: false,
    isClaim: false
  },
  REGULAR_ORDER: {
    code: '60',
    name: '정기결제',
    processUrl: 'autoPaymentCard/registerCard',
    completeMsg: '자동결제카드가 정상적으로 등록되었습니다.',
    errorMsg: '자동결제카드 등록이 실패하였습니다.',
    request: 'payRequest',
    isOrder: false,
    isClaim: false
  }
}

export const OM052 = {
  BIILLING: { code: '10', name: '정기결제' },
  KAKAO: { code: '20', name: '카카오페이' },
  ALI_PAY: { code: '30', name: '알리페이' },
  WECHAT_PAY: { code: '40', name: '위쳇페이' },
  NOTICLUDE: { code: '99', name: '해당없음' }
}

export const OM051 = {
  FO: { code: '10', name: 'FO' },
  BO: { code: '20', name: 'BO' }
}

export const OM030 = {
  INICIS: { code: '10', name: '이니시스' },
  TOSS: { code: '20', name: '토스' },
  SMPAY: { code: '30', name: 'LGCNS' },
  EXIMBAY: { code: '40', name: '엑심베이' }
}

export const OM034 = {
  ONE_MONTH: { code: '11', name: '1개월' },
  ONE_WEEK: { code: '12', name: '1주' },
  TWO_WEEK: { code: '22', name: '2주' },
  THREE_WEEK: { code: '32', name: '3주' },
  FOUR_WEEK: { code: '42', name: '4주' },
  EIGHT_WEEK: { code: '82', name: '8주' }
}

export const PAYMENT_TYPE = {
  PG_PAYMENT: { code: 10, name: 'PG 결제', isAuthCompleted: 'Y' },
  INTERNAL_PAYMENT: { code: 20, name: '내부API 결제', isAuthCompleted: 'N' }
}

export const PAY_METHOD = {
  CREDIT_CARD: {
    code: '11',
    name: '신용카드',
    inicisMobile: 'CARD',
    inicisPc: 'Card'
  },
  REALTIME_ACCOUNT_TRANSFER: {
    code: '12',
    name: '실시간계좌이체',
    inicisMobile: 'BANK',
    inicisPc: 'DirectBank'
  },
  NAVER_PAY: {
    code: '14',
    name: '네이버페이',
    inicisMobile: 'CARD',
    inicisPc: 'onlynaverpay'
  },
  KAKAO_PAY: {
    code: '15',
    name: '카카오페이',
    inicisMobile: 'CARD',
    inicisPc: 'onlykakaopay'
  },
  PAYCO: {
    code: '16',
    name: '페이코',
    inicisMobile: 'CARD',
    inicisPc: 'onlypayco'
  },
  SAMSUNG_PAY: {
    code: '17',
    name: '삼성페이',
    inicisMobile: 'CARD',
    inicisPc: 'onlyssp'
  },
  APPLE_PAY: {
    code: '18',
    name: '애플페이',
    inicisMobile: 'CARD',
    inicisPc: 'onlyapplepay'
  },
  L_PAY: {
    code: '19',
    name: 'LPAY',
    inicisMobile: 'CARD',
    inicisPc: 'onlylpay'
  },
  TOSS_PAY: {
    code: '20',
    name: '토스페이',
    inicisMobile: 'CARD',
    inicisPc: 'onlytosspay'
  },
  SSG_PAY: {
    code: '21',
    name: 'SSG페이',
    inicisMobile: 'CARD',
    inicisPc: 'onlyssgcard'
  },
  REGULAR_PAY: { code: '22', name: '정기결제', inicisMobile: '', inicisPc: ' ' }
}

export const MK002 = {
  GOODS_DISCOUNT: { code: '11', name: '상품할인쿠폰' },
  SHOPPING_BASKET: { code: '12', name: '장바구니쿠폰' },
  REDUNDANT_DISCOUNT: { code: '13', name: '중복할인쿠폰' },
  FREE_DELIVERY: { code: '14', name: '무료배송쿠폰' },
  FREE_RETURN: { code: '15', name: '무료반품쿠폰' },
  EXECUTIVES: { code: '20', name: '임직원할인' },
  GOODS_DIRECT: { code: '21', name: '상품즉시할인' },
  GOODS_MILEAGE: { code: '40', name: '상품마일리지' }
}

export const MK003 = {
  START: { code: '10', name: '진행중' },
  STOP: { code: '20', name: '중단' }
}

export const MK004 = {
  PC: { code: '01', name: 'pc' },
  MOBILE: { code: '02', name: 'mobile' },
  APP: { code: '03', name: 'app' }
}

export const MK005 = {
  FIXED_AMOUNT: { code: '01', name: '정액' },
  FIXED_RATE: { code: '02', name: '정률' }
}

/*
export const findByCode = (codeObj, code) => {
  return Object.keys(codeObj)
    .map((key) => codeObj[key])
    .find((e) => e.code === code)
}
*/

// 자산적립사용사유코드
export const ME020 = {
  BASE: { code: '21', name: '주문적립(기본)' },
  MBR_GRADE: { code: '22', name: '회원등급적립' },
  RESERVATION_GOODS: { code: '23', name: '예약상품적립' },
  PROMO: { code: '24', name: '프로모션적립' },
  ORDER: { code: '50', name: '주문사용' },
  DELIVERY_FEE: { code: '58', name: '배송비사용' },
  REFUND: { code: '29', name: '환불적립' }
}

export const LOGIN_JOIN_GUIDE = 'loginJoinGuide'
export const NON_MEMBER_ORDER = 'nonMemberOrder'
export const EASY_PAY = 'EasyPay'
export const REGULAR_PAY = 'RegularPay'
