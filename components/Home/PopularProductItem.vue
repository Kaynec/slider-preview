<template>
  <div
    class="grid gap-3 bg-background-primary custom-opacity pt-sm !overflow-visible !rounded-1.75rem -hover:translate-y-3 transition-ease transition-250"
  >
    <div class="px-xs">
      <section
        class="h-8rem basis-full mx-auto !rounded-2xl flex items-center bg-background-secondary border-1px border-solid border-#303030 f-text-11-14"
      >
        <img
          :src="img"
          width="60"
          height="70"
          class="m-auto object-contain"
          alt="product card image"
        />
      </section>
    </div>

    <div class="flex justify-between px-xs basis-full gap-1 items-center">
      <span class="f-text-11-14">{{ title }}</span>
      <span class="text-primary f-text-9-11 font-bold">{{ price }}</span>
    </div>

    <span class="text-text-secondary !f-text-11-14 text-start ps-xs full-width"
      >{{ desc }}
    </span>

    <!-- TODO Maki This Dynamic TOO -->
    <div class="flex !overflow-visible">
      <QBtn
        @click="$router.push('/Products')"
        class="!rounded-b-1.75rem q-py-sm !overflow-visible text-primary !bg-#007AFF0D full-width flex justify-center !f-text-11-14 gap-2 items-center border-t-1 border-t-#007AFF border-t-solid"
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
