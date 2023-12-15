import { quasar } from '@quasar/vite-plugin'
import Unocss from 'unocss/vite'

export default defineNuxtConfig({
  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {}
    // ...other options
  },
  alias: {
    '@': '',
    '~': ''
  },
  modules: ['@pinia/nuxt', '@nuxt/image', '@unocss/nuxt'],
  // @ts-ignore
  image: {
    quality: 80
  },
  // @ts-ignore
  pinia: {
    storesDirs: ['store/**']
  },
  imports: {
    dirs: ['composables', 'store'],
    imports: [
      {
        from: '@vueuse/core'
      },
      {
        from: 'vue/macros'
      },
      {
        from: 'vue-router'
      },
      {
        from: 'vue'
      }
    ]
  },
  components: [
    {
      path: 'components',
      pathPrefix: false
    }
  ],

  build: {
    transpile: ['quasar', '@happy-dom/global-registrator']
  },
  css: [
    '@quasar/extras/roboto-font/roboto-font.css',
    '@quasar/extras/material-icons/material-icons.css',
    '@quasar/extras/fontawesome-v6/fontawesome-v6.css',
    '@/assets/scss/main.scss',
    '@/assets/scss/quasar.scss'
  ],
  vite: {
    define: {
      // "process.env.DEBUG": false,
    },
    build: {
      cssCodeSplit: true
    },
    ssr: {
      external: ['happy-dom']
    },
    plugins: [
      quasar({
        sassVariables: 'assets/scss/quasar-variables.scss'
      }),
      // https://github.com/antfu/unocss
      // see unocss.config.ts for config
      Unocss()
    ]
  }
})
