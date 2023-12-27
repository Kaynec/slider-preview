import type { UserOutPut } from '@/api'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const token = useCookie('token', {
    maxAge: 10000 * 60
  })

  const user = useCookie<UserOutPut>('user', {
    maxAge: 10000 * 60
  })

  return {
    setToken: (newToken: string) => (token.value = newToken),
    getToken: () => token.value,
    getUser: () => user.value,
    setUser: (newUser: UserOutPut) => (user.value = newUser)
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
