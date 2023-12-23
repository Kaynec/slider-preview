<template>
  <QCard
    class="custom-card-class cursor-pointer transition-300 hover:scale-[1.03] flex justify-center items-center min-h-75 card-with-border relative"
  >
    <!-- Css hack For Svg  -->
    <div
      class="absolute top-5 w-full h-30 bg-background-primary !rounded-2xl"
    ></div>
    <!--  -->
    <QImg :src="codImage" alt="warzone image" class="flex pa-lg !rounded-t-2xl">
      <div
        class="bg-overlay rounded-2xl relative bottom-0 space-y-xs w-97.5% left-50% translate-x-50% backdrop-blur"
      >
        <span class="text_md">{{ label }}</span>
        <p class="text-text-secondary text_xs">
          {{ desc.substring(0, 150) }}...
        </p>
      </div>
    </QImg>
    <!--  -->
    <div class="flex justify-start w-full gap-3 mb-auto px-xs">
      <div
        class="flex gap-2 items-center text-#ddd border-e-2 border-e-#ddd p-e-lg"
      >
        <Calendar class="fill-#ddd w-7 h-7" />
        {{ time }}
      </div>

      <div class="flex gap-2 items-center text-#ddd">
        <Chat class="w-7 h-7 stroke-#ddd" />
        {{ commentAmount }} نظر
      </div>
    </div>
  </QCard>
</template>
<script setup lang="ts">
import codImage from '@/assets/home_imgs/cards/warzone.png'

defineProps<{
  label: string
  desc: string
  commentAmount: number | string
  time: string
}>()
</script>
<style lang="scss">
.custom-card-class {
  background: url('@/assets/home_imgs/cards/Subtract.svg');
  background-color: red;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent !important;
  background-position: bottom;
  box-shadow: none;
}
</style>
