<template>
  <v-app dark>
    <v-container class="mt-10">
      <div>
        <h1 class="logo" @click="handleClickLogo">Product-Nuxt</h1>
      </div>
      <v-btn v-for="menu in menuList" :key="menu.title" :to="menu.path" class="mt-5 mb-15" text>{{ menu.title }}</v-btn>
      <slot />
    </v-container>
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
  .logo {
    display: inline-block;
    cursor: pointer;
  }
</style>
