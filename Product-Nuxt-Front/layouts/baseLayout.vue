<template>
  <v-app dark>
    <div class="app">
      <v-container class="mt-10">
        <div>
          <h1 class="logo" @click="handleClickLogo">Product-Nuxt</h1>
        </div>
        <v-btn v-for="menu in menuList" :key="menu.title" :to="menu.path" class="mt-5 mb-15" text>{{ menu.title }}</v-btn>
        <slot />
      </v-container>
      <div v-if="$route.name == 'product'" class="cart-wrapper">
        <v-btn :to="{ path: '/cart' }">cart</v-btn>
      </div>
    </div>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        menuList: [
          {title: 'Home', path: '/'},
          {title: 'Product', path: '/product'},
        ],
      }
    },

    methods: {
      handleClickLogo() {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .app {
    position: relative;
  }

  .logo {
    display: inline-block;
    cursor: pointer;
  }

  .cart-wrapper {
    position: sticky;
    float: right;
    bottom: 2em;
    right: 2em;
  }
</style>
