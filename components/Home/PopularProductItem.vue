<template>
  <div
    class="grid gap-1 bg-background-primary custom-opacity !overflow-visible !rounded-2rem -hover:translate-y-3 transition-ease transition-250"
  >
    <div class="px-xs">
      <section
        class="h-12rem basis-full mx-auto !rounded-3xl ma-xl bg-background-secondary border-1px border-solid border-#303030 pa-lg px-2xl"
      >
        <img
          :src="img"
          class="full-width full-height object-contain"
          alt="product card image"
        />
      </section>
    </div>

    <div class="flex justify-between px-xs basis-full items-center">
      <span class="text-lg">{{ title }}</span>
      <span class="text-primary text-lg">{{ price }}</span>
    </div>

    <span class="text-text-secondary text-sm text-start ps-xs full-width pb-sm"
      >{{ desc }}
    </span>

    <!-- TODO Maki This Dynamic TOO -->
    <div class="flex !overflow-visible">
      <QBtn
        @click="$router.push('/Products')"
        class="!rounded-b-2rem !overflow-visible text-primary !bg-#007AFF0D full-width flex justify-center text-lg gap-2 items-center border-t-1 border-t-#007AFF q-py-md border-t-solid"
      >
        <Bag class="fill-primary w-7.5 h-7.5" />
        افزودن به سبد خرید
      </QBtn>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  img: string
  title: string
  desc: string
  price: string
}>()
</script>
