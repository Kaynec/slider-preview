<script setup lang="ts">
const router = useRouter()
const globalState = useGlobalStore()
</script>

<template>
  <div class="flex flex-col gap-1 text-sm mt-xl">
    <NuxtLink :to="{ name: 'HomePage' }"> صفحه اصلی </NuxtLink>
  </div>
</template>
