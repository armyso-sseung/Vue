<template>
  <baseLayout>
    <v-card>
      <v-row>
        <v-col cols="6" class="pl-6">
          <v-img :src="product.imageUrl" :alt="product.name" height="100%" cover />
        </v-col>

        <v-col cols="6" class="pr-9">
          <v-card-title class="pl-0">{{ product.name }}</v-card-title>
          <v-card-text class="pl-0">{{ `$ ${ product.price }` }}</v-card-text>
          <v-btn color="primary" width="100%" @click="handleClickCart">Product to Cart</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </baseLayout>
</template>

<script>
  import baseLayout from "~/layouts/baseLayout.vue";
  import {getProduct} from "~/apis/product/productApi";
  import {insertCart} from "~/apis/cart/cartApi";


  export default {
    components: {
      baseLayout,
    },

    async asyncData({ params }) {
      const { data } = await getProduct( params.id )
      return { product: data }
    },

    methods: {
      async handleClickCart() {
        await insertCart( this.product )
        this.$store.commit('insertCart', this.product )
        this.$router.push('/cart')
      },
    }
  }
</script>

<style scoped>
</style>
