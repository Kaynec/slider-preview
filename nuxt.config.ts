import { quasar } from '@quasar/vite-plugin'

// @ts-ignore
// import vsharp from 'vite-plugin-vsharp'

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
    prerender: {
      routes: ['/homepage', '/login']
    }
  },
  postcss: {
    plugins: {
      'postcss-rtlcss': {}
    }
  },

  // devtools: {
  //   // Enable devtools (default: true)
  //   enabled: true,
  //   // VS Code Server options
  //   vscode: {}
  //   // ...other options
  // },
  // @ts-ignore
  compression: {
    algorithm: 'brotliCompress'
  },

  alias: {
    '@': '',
    '~': ''
  },
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@unocss/nuxt',
    'nuxt-svgo',
    'nuxt-typed-router',
    ,
    // 'nuxt-purgecss',
    ['@nuxtjs/robots', {}]
  ],
  image: {
    quality: 80
  },
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
    '@unocss/reset/tailwind.css'
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
        sassVariables: '@/assets/scss/quasar-variables.scss'
      }),
      // vsharp(),
      ViteImageOptimizer({
        /* pass your config */
      })
    ]
  }
})
