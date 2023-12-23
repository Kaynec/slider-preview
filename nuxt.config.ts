import { quasar } from '@quasar/vite-plugin'

// @ts-ignore
import viteImagemin from 'vite-plugin-imagemin'

export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: {
      brotli: true,
      gzip: true
    },

    // prerender: {
    //   routes: ['/homepage', '/auth/login']
    // },
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
    'nuxt-swiper',
    ,
    // 'nuxt-purgecss',
    ['@nuxtjs/robots', {}]
  ],
  image: {
    quality: 80
  },
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
    // styleLang: 'scss'
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
  css: [
    '@/assets/scss/main.scss',
    '@/assets/scss/generated.css',
    '@unocss/reset/tailwind.css'
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
