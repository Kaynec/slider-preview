<template>
  <QCard
    class="flex flex-col items-center justify-center gap-5 py-2 px-3 custom-opacity"
  >
    <section
      class="h-12rem md:h-14rem lg:h-14rem xl:h-18rem full-width rounded-lg bg-background-secondary border-1px border-solid border-#303030 q-pa-sm"
    >
      <img
        :src="img"
        :alt="img"
        class="full-width full-height object-contain"
      />
    </section>

    <div class="flex justify-between full-width items-center">
      <span class="text-md">{{ title }}</span>
      <QChip color="primary" text-color="white" square>{{ percent }}</QChip>
    </div>

    <span class="text-text-secondary text-sm text-start full-width"
      >{{ desc }}
    </span>

    <div class="flex justify-between full-width items-center">
      <span class="text-xs">{{ price }}</span>
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
    <QBtn
      @click="$router.push('/Products')"
      class="!rounded-full bg-btn-gradient q-py-sm full-width"
    >
      {{ finalPrice }}
    </QBtn>
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
</script>
