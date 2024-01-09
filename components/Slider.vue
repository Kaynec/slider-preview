<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import { getCssVar } from 'quasar'
const [emblaNode, emblaApi] = emblaCarouselVue({
  direction: 'rtl',
  dragFree: true
})

const {
  pagination = true,
  dotsActiveColor = getCssVar('primary') || 'blue',
  dotsBackgroundColor = '#fff'
} = defineProps<{
  pagination: boolean
  dotsBackgroundColor: string
  dotsActiveColor: string
}>()

const containerRef = ref()

defineExpose({
  ref: containerRef
})

const dots_node = ref()

const addDotBtnsAndClickHandlers = (
  emblApi: typeof emblaApi,
  dotsNode: HTMLElement
): (() => void) => {
  let dotNodes: HTMLElement[] = []

  const addDotBtnsWithClickHandlers = (): void => {
    dotsNode.innerHTML = emblApi
      .value!.scrollSnapList()
      .map(
        () =>
          `<button class="embla__dot rounded-full w-2.5 h-2.5" style="background:${dotsBackgroundColor}" type="button"></button>`
      )
      .join('')

    dotNodes = Array.from(dotsNode.querySelectorAll('.embla__dot'))
    dotNodes.forEach((dotNode, index) => {
      dotNode.addEventListener(
        'click',
        () => emblApi.value?.scrollTo(index),
        false
      )
    })
  }

  const toggleDotBtnsActive = (): void => {
    const previous = emblApi.value!.previousScrollSnap()
    const selected = emblApi.value!.selectedScrollSnap()
    dotNodes[previous].style.backgroundColor = dotsBackgroundColor
    dotNodes[selected].style.backgroundColor = dotsActiveColor
  }

  emblApi.value
    ?.on('init', addDotBtnsWithClickHandlers)
    .on('reInit', addDotBtnsWithClickHandlers)
    .on('init', toggleDotBtnsActive)
    .on('reInit', toggleDotBtnsActive)
    .on('select', toggleDotBtnsActive)

  return (): void => {
    dotsNode.innerHTML = ''
  }
}

// onMounted(() => {
//   if (pagination) addDotBtnsAndClickHandlers(emblaApi, dots_node.value)
// })
</script>

<template>
  <div class="relative pb-2rem">
    <div class="embla__dots" ref="dots_node"></div>
    <div class="embla" ref="emblaNode">
      <div class="embla__container" ref="containerRef">
        <slot />
      </div>
    </div>
  </div>
</template>
<style scoped>
.embla {
  overflow: hidden;
}
.embla__container {
  display: flex;
  gap: 1rem;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}
.embla__dots {
  z-index: 99;
  position: absolute;
  bottom: 1rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}
</style>
