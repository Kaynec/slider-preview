<template>
  <q-layout
    view="hHh LpR fff"
    dir="rtl"
    class="h-screen h-100svh !flex !flex-col"
  >
    <PageLoadingSPinner />

    <q-page-container>
      <QPage class="page-container max-w-screen 2xl:max-w-90rem px-lg">
        <router-view v-slot="{ Component, route }">
          <transition name="slide-fade" mode="out-in" :key="$route.fullPath">
            <component :is="Component" :key="route" />
          </transition>
        </router-view>
      </QPage>
    </q-page-container>
  </q-layout>
</template>

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
