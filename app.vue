<script setup lang="ts">
import { useGlobalStore } from './store/global'
import { useQuasar } from 'quasar'
import '@unocss/reset/tailwind.css'
// import './styles/main.scss'

onMounted(() => {
  const $q = useQuasar()

  console.log($q.lang.rtl)

  const globalStore = useGlobalStore()

  const isDark = computed(() => globalStore.dark)
  if (isDark) {
    $q.dark.set(true)
    document.querySelector('html')?.classList.add('dark')
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
