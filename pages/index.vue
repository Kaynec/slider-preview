<script setup lang="ts">
const router = useRouter()
// // router.push({ name: 'HomePage' })

// const getRoutes = computed(() => router.getRoutes().filter(el => el.name))
</script>

<template>
  <div class="flex flex-col gap-1 text-sm bg-red">
    <h1 class="text-3xl">Current Pages</h1>
    <!-- <NuxtLink
      :to="{ name: page.name, params: { id: 1 } }"
      v-for="page in getRoutes"
    >
      {{ page.name }}
    </NuxtLink> -->
  </div>
</template>
