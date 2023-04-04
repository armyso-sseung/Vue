import axios from "axios";


const product = axios.create({
  baseURL: process.env.baseURL + `/products`
})


export const getProductList = async () => {
  return await product.get('')
}

export const getProduct = async ( id ) => {
  return await product.get(`/${ id }`)
}

export const getProductSearch = async ( keyword ) => {
  return await product.get(``, {
    params: { name_like: keyword }
  })
}
