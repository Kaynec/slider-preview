import { acceptHMRUpdate, defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const scrollRef = ref()

  const dark = ref(false)

  const toggleDark = () => {
    dark.value = !dark.value
  }

  return {
    dark,
    toggleDark,
    scrollRef,
    setScrollRef: (el: Ref<any>) => (scrollRef.value = el)
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
