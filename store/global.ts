import { acceptHMRUpdate, defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const dark = ref(false)

  const toggleDark = () => {
    dark.value = !dark.value
  }

  return {
    dark,
    toggleDark
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
