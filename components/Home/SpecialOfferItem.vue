<template>
  <QCard
    class="grid grid-cols-1 gap-3 py-2 px-3 custom-opacity hover:scale-[1.01] transition-ease transition-250"
    ref="cardRef"
  >
    <div
      class="flex !rounded-xl grow basis-full bg-background-secondary border-1px border-solid border-#303030 q-pa-sm"
    >
      <section class="h-5rem md:h-8rem lg:h-9.5rem xl:h-11rem mx-auto">
        <img
          :src="img"
          :alt="img"
          class="max-w-full max-h-full object-contain"
          loading="lazy"
        />
      </section>
    </div>

    <div class="flex justify-between full-width items-center">
      <span class="f-text-11-14">{{ title }}</span>
      <QChip
        color="primary"
        size="clamp(8px,10px,14px)"
        text-color="white"
        square
        >{{ percent }}</QChip
      >
    </div>

    <span class="text-text-secondary f-text-11-14 text-start full-width"
      >{{ desc }}
    </span>

    <div class="flex justify-between full-width items-center">
      <span class="f-text-11-14">{{ price }}</span>
      <div class="flex gap-1">
        <div v-for="t in time" :key="t" class="flex gap-1 justify-center">
          <div
            class="text-primary w-5.5 h-5.5 place-content-center grid border-1 border-solid rounded aspect-1"
            style="border-color: var(--primary)"
          >
            {{ t }}
          </div>
          <div v-if="t !== time[time.length - 1]">:</div>
        </div>
      </div>
    </div>
    <!-- TODO Make THis Dynamic TOO -->
    <div class="flex">
      <PrimaryButton
        dense
        @click="$router.push('/Products')"
        class="!rounded-full grow !text_xs"
      >
        {{ finalPrice }}
      </PrimaryButton>
    </div>
  </QCard>
</template>

<script setup lang="ts">
defineProps<{
  img: string
  title: string
  percent: string
  desc: string
  price: string
  time: string[]
  finalPrice: string
}>()

const cardRef = ref()

defineExpose({
  ref: cardRef
})
</script>
