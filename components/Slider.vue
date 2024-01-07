<script setup lang="ts">
import type { SwiperOptions } from 'swiper/types'

defineProps<{
  options?: SwiperOptions
  sliderClass?: string
  slidesPerView?: number | 'auto'
  spaceBetween?: number
  loop?: boolean
  pagination?: boolean | Record<string, unknown>
  breakpoints?: Record<
    number,
    {
      spaceBetween?: number
      slidesPerView?: number
    }
  >
}>()

const sliderRef = ref()

defineExpose({
  ref: sliderRef
})
</script>

<template>
  <div class="w-full max-w-92vw md:max-w-full" ref="sliderRef">
    <Swiper
      :class="`${sliderClass} `"
      :modules="[SwiperAutoplay, SwiperScrollbar, SwiperPagination]"
      :slides-per-view="slidesPerView ?? 'auto'"
      :space-between="spaceBetween ?? 15"
      :effect="'creative'"
      :options="options"
      :pagination="pagination ?? false"
      :breakpoints="breakpoints ?? {}"
      :loop="loop ?? true"
      :resistance="true"
    >
      <slot />
      <template v-slot:container-start>
        <slot name="container-start"
      /></template>
      <template v-slot:container-end><slot name="container-end" /></template>
      <template v-slot:wrapper-start><slot name="wrapper-start" /></template>
      <template v-slot:wrapper-end><slot name="wrapper-end" /></template>
    </Swiper>
  </div>
</template>
