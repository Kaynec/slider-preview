<script setup lang="ts">
// import { useQuasar } from 'quasar'
// import { links } from './links'
// const q = useQuasar()

// const search = ref('')
</script>

<template>
  <q-layout view="hHh LpR fff">
    <Header v-if="$q.screen.width > 1024" />

    <q-page-container>
      <div
        class="text-text-secondary flex container mt-2.25rem mb-1rem mx-auto px-xs md:px-sm lg:px-lg gap-2 items-center"
      >
        <div class="flex gap-3 items-center" v-if="$route.meta.currentPageName">
          <div class="i-carbon:home" />
          <template
            v-for="(name, index) in $route.meta.currentPageName
              .toString()
              .split('-')"
          >
            <div class="i-carbon:chevron-left" />
            <span
              :class="`${
                index ===
                $route.meta.currentPageName.toString().split('-').length - 1
                  ? 'text-text-primary'
                  : ''
              }`"
              >{{ name }}</span
            >
          </template>
        </div>
      </div>
      <router-view
        v-slot="{ Component, route }"
        class="container mx-auto md:px-sm lg:px-lg"
      >
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" :key="route" />
        </transition>
      </router-view>
    </q-page-container>
    <Footer v-if="$q.screen.width > 1024" />
  </q-layout>
</template>
<!-- <style>
.input-container > .q-field__label {
  color: purple !important;
}
</style> -->
<style lang="scss" scoped>
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
