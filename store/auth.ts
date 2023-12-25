import { acceptHMRUpdate, defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const token = useCookie('token', {
    maxAge: 10000 * 60
  })

  const user = useCookie('token', {
    maxAge: 10000 * 60
  })

  return {
    setToken: (newToken: string) => (token.value = newToken),
    getToken: () => token.value
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
