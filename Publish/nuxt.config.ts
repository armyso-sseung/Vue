// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  alias: {
    '#components': '../src/components'
  },
  imports: {
    autoImport: false
  },
  css: ['assets/styles/page/globals.css'],
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {}
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@ant-design-vue/nuxt'
  ],
  nitro: {
    esbuild: {
      options: {
        target: 'es2020'
      }
    }
  },
  antd: {
    // Ant Design Options
  },
  pinia: {
    storesDirs: ['./stores/**']
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  }
})
