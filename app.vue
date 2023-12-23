<script setup lang="ts">
import { useGlobalStore } from './store/global'
import { useQuasar } from 'quasar'

onMounted(() => {
  const $q = useQuasar()

  const globalStore = useGlobalStore()

  const isDark = computed(() => globalStore.dark)

  if (!isDark) return

  $q.dark.set(true)
  document.querySelector('html')?.classList.add('dark')
})
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :throttle="0" />
    <NuxtPage />
  </NuxtLayout>
</template>
