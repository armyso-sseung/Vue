<template>
  <v-row>
    <v-col v-for="product in productList" :key="product.name" cols="12" md="4" lx="4">
      <v-card link @click="moveToDetail( product.id )">
        <v-img :src="product.imageUrl" :alt="product.name" />
        <v-card-title>{{ `${ product.name }` }}</v-card-title>
        <v-card-text>
          {{ `$ ${ product.price }` }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    props: {
      productList: {
        type: Array,
        default() {
          return []
        },
      },
    },

    methods: {
      moveToDetail( id ) {
        this.$emit('moveToDetail', id)
      }
    }
  }
</script>

<style scoped>

</style>
