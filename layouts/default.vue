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

const globalState = useGlobalStore()

const currentPageMetaName = computed(() => globalState.currentTextname)
</script>
<template>
  <q-layout
    view="hHh LpR fff"
    dir="rtl"
    class="h-screen h-100svh !flex !flex-col"
  >
    <PageLoadingSPinner />

    <Header :scrollAmount="scrollAmount" />
    <QScrollArea
      ref="scrollRef"
      class="!h-screen !h-100svh"
      @scroll="handleScroll"
    >
      <q-page-container>
        <QPage
          class="page-container max-w-screen 2xl:max-w-90rem pb-4.5rem px-xs"
        >
          <div
            class="flex gap-3 items-center md:mt-2.3rem mb-.75rem"
            v-if="currentPageMetaName"
          >
            <div class="i-carbon:home" />
            <template
              v-for="(name, index) in currentPageMetaName.toString().split('-')"
            >
              <div class="i-carbon:chevron-left" />
              <span
                :class="`${
                  index === currentPageMetaName.toString().split('-').length - 1
                    ? 'text-text-primary'
                    : ''
                }`"
                >{{ name }}</span
              >
            </template>
          </div>
          <router-view v-slot="{ Component, route }">
            <transition name="slide-fade" mode="out-in" :key="$route.fullPath">
              <component :is="Component" :key="route" />
            </transition>
          </router-view>
        </QPage>
        <div>
          <LazyDesktopFooter />
          <LazyMobileFooter />
        </div>
      </q-page-container>
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
