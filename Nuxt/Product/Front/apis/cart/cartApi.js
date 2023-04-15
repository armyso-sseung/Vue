import axios from "axios";


const cart = axios.create({
  baseURL: process.env.baseURL + `/carts`
})


export const  getCartList = async () => {
  return await cart.get(``)
}

export const insertCart = async ( product ) => {
  return await cart.post(``, product)
}

export const deleteCart = async ( id ) => {
  return await cart.delete(`/${ id }`)
}
