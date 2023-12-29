import { acceptHMRUpdate, defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const scrollRef = useState()

  const dark = ref(false)

  const toggleDark = () => {
    dark.value = !dark.value
  }

  const currentTextname = ref('')

  return {
    dark,
    toggleDark,
    scrollRef,
    currentTextname,
    setScrollRef: (el: Ref<any>) => (scrollRef.value = el),
    setCurrentTextName: (el: string) => (currentTextname.value = el)
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
