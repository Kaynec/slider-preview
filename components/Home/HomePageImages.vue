<script setup lang="ts">
import Spiderman from '@/assets/home_imgs/cards/spiderman.png'
import Mario from '@/assets/home_imgs/cards/mario.png'
import Nintendo from '@/assets/home_imgs/cards/nintendo.png'
import Test from '@/assets/home_imgs/cards/test.png'
import { useIntersectionObserver } from '@vueuse/core'

const imageContainer = ref()

const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  imageContainer,
  ([{ isIntersecting }]) => {
    // i don't set it to false because i don't re enable the animation
    if (isIntersecting) {
      targetIsVisible.value = true
    }
  }
)

onBeforeUnmount(stop)
</script>
<template>
  <div
    class="grid md:grid-cols-5 gap-4 my-4xl opacity-0"
    ref="imageContainer"
    :class="{ animte: targetIsVisible }"
  >
    <div class="max-h-18rem md:col-span-3">
      <img
        class="rounded-2xl w-full h-full"
        alt="game dynamic banner"
        :src="Spiderman"
      />
    </div>

    <div class="max-h-18rem md:col-span-2">
      <img
        class="rounded-2xl h-full object-cover"
        alt="game dynamic banner"
        :src="Mario"
      />
    </div>

    <div class="max-h-18rem md:col-span-2">
      <img
        class="rounded-2xl max-w-full"
        alt="game dynamic banner"
        :src="Nintendo"
      />
    </div>

    <div class="max-h-18rem md:col-span-3">
      <img
        class="rounded-2xl w-full h-full"
        alt="game dynamic banner"
        :src="Test"
      />
    </div>
  </div>
</template>

<style scoped>
.animte {
  animation: animateOnScroll 1.25s forwards;
}

@keyframes animateOnScroll {
  from {
    opacity: 0;
    transform: translate(50vh, 25vw);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
}
</style>
