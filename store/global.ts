import { acceptHMRUpdate, defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const scrollRef = ref()

  const dark = ref(false)

  const token = useCookie('token', {
    maxAge: 10000 * 60
  })

  const toggleDark = () => {
    dark.value = !dark.value
  }

  return {
    dark,
    toggleDark,
    scrollRef,
    setScrollRef: (el: Ref<any>) => (scrollRef.value = el),
    setToken: newToken => (token.value = newToken),
    getToken: () => token.value
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
