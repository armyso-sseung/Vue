<template>
  <baseLayout>
    <productListComponent :productList="productList" @moveToDetail="moveToDetail" />
  </baseLayout>
</template>

<script>
  import baseLayout from "~/layouts/baseLayout.vue";
  import productListComponent from "~/components/product/productListComponent.vue"
  import {getProductList} from "~/apis/product/productApi";


  export default {
    components: {
      baseLayout,
      productListComponent,
    },

    async asyncData() {
      try {
        const { data } = await getProductList()
        const productList = data.map(product => ({
          ...product,
          imageUrl: `${ product.imageUrl }?random=${ Math.random() }`
        }))

        return { productList }
      } catch ( error ) {
        const productList = []
        return { productList }
      }
    },

    methods: {
      moveToDetail( id ) {
        this.$router.push(`/product/${ id }`)
      }
    }
  }
</script>

<style scoped>

</style>
