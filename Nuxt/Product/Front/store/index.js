import {getCartList} from "~/apis/cart/cartApi";

export const state = () => ({
  cartList: [],
})

export const mutations = {
  insertCart( state, product ) {
    state.cartList.push( product )
  },

  deleteCart( state, product ) {
    state.cartList.splice(state.cartList.indexOf(product), 1)
  },

  setCartList( state, cartList ) {
    state.cartList = cartList
  },
}

export const actions = {
  async getCartList( context ) {
    const { data } = await getCartList()
    const cartList = data.map( product => ({
      ...product,
      imageUrl: `${ product.imageUrl }?random=${ Math.random() }`
    }) )

    context.commit( 'setCartList', cartList )
  }
}
