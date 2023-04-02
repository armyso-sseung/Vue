<template>
  <baseLayout>
    <v-row>
      <v-col v-for="cart in cartList" :key="cart.id" cols="6" >
        <v-card>
          <v-row class="mb-3">
            <v-col cols="6">
              <v-img class="ml-3" :src="cart.imageUrl" />
            </v-col>

            <v-col cols="6">
              <v-card-title class="pa-0">{{ cart.name }}</v-card-title>
              <v-card-text class="mb-10 pa-0">{{ `$ ${ cart.price }` }}</v-card-text>
              <v-btn class="mt-10" color="error" width="90%" @click="handleClickDel( cart )">Del</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </baseLayout>
</template>

<script>
  import baseLayout from "~/layouts/baseLayout.vue";
  import {deleteCart} from "~/apis/cart/cartApi";


  export default {
    components: {
      baseLayout,
    },

    async asyncData({ store }) {
      await store.dispatch( 'getCartList' )
    },

    computed: {
      cartList() {
        return this.$store.state.cartList
      }
    },

    methods: {
      async handleClickDel( product ) {
        await deleteCart( product.id )
        this.$store.commit('deleteCart', product)
      }
    }
  }
</script>

<style scoped>

</style>
