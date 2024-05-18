type ContentsProps = {
  spacing?: 'default' | 'large' | 'zero'
  size?: 'default' | 'medium' | 'small' | 'full'
  className?: string
  bg?: string
  sidebar?: 'mypage' | 'customer' // 다른 타입이 있을 경우 추가 하세요.
}

type ContentsContainerProps = {
  btnFloating?: boolean // 모바일에서 버튼을 하단에 fixed 시킬 때 컨테이너 여백 확보용 (ButtonArea 에 bottom-fixed 클래스 같이 적용해야 함)
}

export type { ContentsProps, ContentsContainerProps }
