import { Quasar } from 'quasar'
import langFa from 'quasar/lang/fa-IR'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Quasar, {
    lang: langFa,
    config: {
      dark: true
    }
  })
})
