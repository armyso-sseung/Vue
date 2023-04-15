<template>
  <baseLayout>
    <SearchComponent @search="handleClickSearch" />
    <productListComponent :productList="productList" @moveToDetail="moveToDetail" />
  </baseLayout>
</template>

<script>
  import baseLayout from "~/layouts/baseLayout.vue";
  import productListComponent from "~/components/product/productListComponent.vue"
  import {getProductList, getProductSearch} from "~/apis/product/productApi";
  import SearchComponent from "~/components/common/SearchComponent.vue";


  export default {
    components: {
      SearchComponent,
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

    data() {
      return {
      }
    },

    methods: {
      async handleClickSearch( keyword ) {
        const { data } = await getProductSearch( keyword )
        this.productList = data.map( product => ({
          ...product,
          imageUrl: `${ product.imageUrl }?random=${ Math.random() }`
        }) )
      },

      moveToDetail( id ) {
        this.$router.push(`/product/${ id }`)
      }
    }
  }
</script>

<style scoped>

</style>
