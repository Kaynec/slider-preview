<script setup lang="ts">
import { useGlobalStore } from './store/global'
import { useQuasar } from 'quasar'
// import './styles/main.scss'

onMounted(() => {
  const $q = useQuasar()
  const globalStore = useGlobalStore()

  const isDark = computed(() => globalStore.dark)
  if (isDark) {
    $q.dark.set(true)
    document.querySelector('html')?.classList.add('dark')
  }
})
</script>

<template>
  <NuxtLayout class="bg-red">
    <NuxtPage />
  </NuxtLayout>
</template>
<style lang="scss"></style>
