import { quasar } from '@quasar/vite-plugin'
import Unocss from 'unocss/vite'

export default defineNuxtConfig({
  alias: {
    '@': '',
    '~': ''
  },
  modules: ['@pinia/nuxt'],
  imports: {
    dirs: ['src/composables', 'src/store'],
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

  build: {
    transpile: ['quasar']
  },
  css: [
    '@quasar/extras/roboto-font/roboto-font.css',
    '@quasar/extras/material-icons/material-icons.css',
    '@quasar/extras/fontawesome-v6/fontawesome-v6.css',
    // '@/styles/quasar.scss',
    // '~/assets/scss/main.scss'
    // 'styles/quasar-variables.scss',
    '@/assets/scss/main.scss',
    // '@/assets/scss/quasar-variables.scss',
    '@/assets/scss/quasar.scss',
    'uno.css'
  ],
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true
      }
    },
    define: {
      // "process.env.DEBUG": false,
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
