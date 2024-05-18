import { cva } from 'class-variance-authority'

const ButtonVariants = cva('disabled:pointer-events-none text-black', {
  variants: {
    variant: {
      // 배경색, 보더색, 컬러 색상, 비활성화 css 지정
      bgcolor: 'bg-primary text-white disabled:bg-gray4 disabled:text-gray6',
      border:
        'type-border bg-white border border-primary text-black disabled:border-none disabled:text-gray6 disabled:bg-gray4',
      third:
        'bg-white border border-gray4 text-black disabled:text-gray5 btn-third',
      underline: 'underline underline-offset-2 disabled:text-gray7'
    },
    size: {
      // 버튼 좌우 여백, 높이, 폰트 사이즈 순 가로사이즈는 지정 안함
      // f[size]는 좌우 여백, 높이 지정 없이 폰트 사이즈로 구분
      xxl: 'px-4 min-h-12 h-12 pc:min-h-14 pc:h-14 subtitle2', // 56px
      xl: 'px-2 min-h-12 h-12 subtitle2', // 48px
      lg: 'px-4 min-h-11 h-11 subtitle2', // 44px
      base: 'px-4 min-h-10 h-10 body1', // 40px
      sm: 'px-4 min-h-8 h-8 body2 ', // 32px
      xs: 'px-2 min-h-6 h-7 body2', // 28px
      flg: 'subtitle2', // font-size 16px
      fbase: 'body1', // font-size 14px
      fsm: 'body2' // font-size 12px
    },
    rounded: {
      // 모서리 라운드
      rounded: 'rounded-full'
    }
  }
})

const ButtonAreaVariants = cva('flex', {
  variants: {
    type: {
      default: 'flex',
      column: 'flex-row flex-nowrap gap-x-2 justify-center items-center',
      row: 'flex-col flex-wrap gap-y-2',
      right: 'justify-end'
    },
    size: {
      default: '',
      full: 'type-full w-full [&>button]:flex-1 [&>a]:flex-1 '
    }
  },
  defaultVariants: {
    type: 'default',
    size: 'default'
  }
})

export { ButtonVariants, ButtonAreaVariants }
