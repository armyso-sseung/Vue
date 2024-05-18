import { addComponent, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup() {
    addComponent({
      name: 'VCodeBlock',
      filePath: '@wdns/vue-code-block',
      mode: 'client'
    })
  }
})
