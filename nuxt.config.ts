import { quasar } from '@quasar/vite-plugin'

export default defineNuxtConfig({
  ssr: false,
  nitro: {
    compressPublicAssets: {
      brotli: true,
      gzip: true
    },
    minify: true
  },
  postcss: {
    plugins: {
      'postcss-rtlcss': {}
    }
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
    '@nuxtjs/critters'
  ],
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
        from: 'vue'
      }
    ]
  },
  components: [
    {
      path: 'components',
      pathPrefix: false
    },
    {
      path: 'node_modules/quasar/src/components/',
      pathPrefix: false
    }
  ],

  build: {
    transpile: ['quasar']
  },
  css: ['@/assets/scss/main.scss', '@unocss/reset/tailwind.css'],
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
    build: {
      cssCodeSplit: true
    },
    ssr: {
      external: ['happy-dom']
    },
    plugins: [
      quasar({
        sassVariables: '@/assets/scss/quasar-variables.scss'
      })
    ]
  }
})
