import { breakPoints } from '@/lib/common/ui/variables'

const GoodsUnitImageSizes = {
  base: `(max-width: ${breakPoints.mo.max}) 20vw, 15vw`,
  list: {
    card: `(max-width: 500px) 30vw, (max-width: ${breakPoints.mo.max}) 25vw, 20vw`,
    list: '20vw'
  },
  slide: '13vw'
}

const SwiperImageSizes = {
  full: '(max-width:1024px) 60vw, 80vw',
  common: `(max-width: 500px) 60vw, (max-width: ${breakPoints.mo.max}) 50vw, 20vw`
}

const GoodsUnitImageWidth = {
  default: {
    pc: 384,
    mo: 141
  },
  list: {
    pc: 100,
    mo: 96
  },
  card: {
    pc: 282,
    mo: 192
  },
  slide: {
    pc: 282,
    mo: 141
  }
}

const SwiperImageWidth = {
  full: 1900,
  popup: {
    pc: 384,
    mo: 450
  }
}

export {
  GoodsUnitImageSizes,
  SwiperImageSizes,
  GoodsUnitImageWidth,
  SwiperImageWidth
}
