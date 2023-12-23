<template>
  <div
    class="col flex cursor-pointer snap-start flex-col items-center gap-2 justify-center hover:animate-pulse"
  >
    <img
      :src="img ?? defaultImage"
      class="max-h-45"
      :alt="img ?? defaultImage"
    />
    <span class="!text-inherit text-xs">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
import defaultImage from '@/assets/home_imgs/headphone.png'
defineProps<{
  title: string
  img?: string
}>()
</script>

<style scoped></style>
