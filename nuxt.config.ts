import { quasar } from '@quasar/vite-plugin'

// @ts-ignore
// import vsharp from 'vite-plugin-vsharp'

import viteImagemin from 'vite-plugin-imagemin'

export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: {
      brotli: true,
      gzip: true
    },
    prerender: {
      routes: ['/homepage', '/login']
    },
    minify: true
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
  css: ['@/assets/scss/main.scss', '@unocss/reset/tailwind.css'],
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
      viteImagemin({
        gifsicle: {
          optimizationLevel: 10,
          interlaced: false
        },
        optipng: {
          optimizationLevel: 10
        },
        mozjpeg: {
          quality: 20
        },
        pngquant: {
          quality: [0.65, 0.65],
          speed: 3
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox'
            },
            {
              name: 'removeEmptyAttrs',
              active: false
            }
          ]
        }
      })
    ]
  }
})
