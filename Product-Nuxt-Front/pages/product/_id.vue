<template>
  <baseLayout>
    <v-card>
      <v-row>
        <v-col cols="6" class="pl-6">
          <v-img :src="product.imageUrl" :alt="product.name" />
        </v-col>

        <v-col cols="6" class="pr-9">
          <v-card-title class="pl-0"><h2>{{ product.name }}</h2></v-card-title>
          <v-card-text class="pl-0">{{ `$ ${ product.price }` }}</v-card-text>
          <v-btn width="100%" color="primary">Product to Cart</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </baseLayout>
</template>

<script>
  import baseLayout from "~/layouts/baseLayout.vue";
  import {getProduct} from "~/apis/product/productApi";


  export default {
    components: {
      baseLayout,
    },

    async asyncData({ params }) {
      const { data } = await getProduct( params.id )
      return { product: data }
    },

    methods: {
      
    }
  }
</script>

<style scoped>

</style>
