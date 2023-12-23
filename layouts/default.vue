<script setup lang="ts">
type ScrollEvt = {
  ref: any
  verticalPosition: number
  verticalPercentage: number
  verticalSize: number
  verticalContainerSize: number
  horizontalPosition: number
  horizontalPercentage: number
  horizontalSize: number
  horizontalContainerSize: number
}

const scrollAmount = ref(0)

const state = useGlobalStore()

function handleScroll(e: ScrollEvt) {
  scrollAmount.value = e.verticalPosition
}

const scrollRef = ref()

// Setting The Ref of Scroll Area to store in Global State
onMounted(() => state.setScrollRef(scrollRef.value))
</script>
<template>
  <q-layout
    view="hHh LpR fff"
    dir="rtl"
    class="h-screen h-100svh !flex !flex-col"
  >
    <PageLoadingSPinner />

    <ClientOnly>
      <DesktopHeader
        v-if="$q.screen.width > 900"
        :scrollAmount="scrollAmount"
      />
      <MobileHeader v-else :scrollAmount="scrollAmount" />
    </ClientOnly>
    <QScrollArea
      ref="scrollRef"
      class="!h-screen !h-100svh !flex !flex-col"
      @scroll="handleScroll"
    >
      <q-page-container
        class="pb-[35rem] md:pb-15rem page-container 2xl:max-w-90rem"
      >
        <div
          class="text-text-secondary flex container max-w-90rem mt-2.25rem mb-1rem mx-auto px-xs md:px-sm lg:px-lg gap-2 items-center"
        >
          <div
            class="flex gap-3 items-center"
            v-if="$route.meta.currentPageName"
          >
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

        <router-view class="mx-auto px-xs" v-slot="{ Component, route }">
          <transition name="slide-fade" mode="out-in">
            <component :is="Component" :key="route" />
          </transition>
        </router-view>
      </q-page-container>
      <div class="absolute bottom-0 w-full">
        <ClientOnly v-if="$q.screen.width > 1024">
          <DesktopFooter class="mt-auto w-full relative bottom-0" />
        </ClientOnly>
        <ClientOnly v-else>
          <MobileFooter />
        </ClientOnly>
      </div>
    </QScrollArea>
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
