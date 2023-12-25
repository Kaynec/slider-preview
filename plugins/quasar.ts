import { Quasar, Loading, LoadingBar, Notify } from 'quasar'
import langFa from 'quasar/lang/fa-IR'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Quasar, {
    plugins: {
      Loading
      // Notify
    },
    lang: langFa,
    config: {
      dark: true
    }
  })
})
