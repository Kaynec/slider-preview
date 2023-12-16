<template>
  <QCard
    class="custom-card-class cursor-pointer transition-300 hover:scale-[1.03] !pb-[3.5rem] !lg-pb-[2.75rem] flex justify-center items-center min-h-75 mb-3rem gap-6 card-with-border q-pa-md"
    @click.self=""
  >
    <!--  -->
    <QImg src="images/home_imgs/cards/warzone.png" class="flex q-pa-lg">
      <div
        class="bg-overlay rounded-2xl relative bottom-2 space-y-sm w-97.5% left-50% translate-x-50% backdrop-blur"
      >
        <span class="text-lg">{{ label }}</span>
        <p class="text-text-secondary text-xs">
          {{ desc }}
        </p>
      </div>
    </QImg>
    <!--  -->
    <div class="flex justify-start w-full gap-3">
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
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent !important;
  background-position: center;
  box-shadow: none;
}
</style>
