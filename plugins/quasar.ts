import * as components from 'quasar'
import { Quasar } from 'quasar'
// @ts-ignore

import langFa from 'quasar/lang/fa-IR'
// import * as components from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Quasar, {
    components,
    lang: langFa,
    // dark: true,
    config: {
      dark: true
    }
  })
})
