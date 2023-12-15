<template>
  <QCard
    class="flex flex-col items-center justify-center gap-1 custom-opacity !rounded-3em"
  >
    <section
      class="h-12rem w-95% mx-auto !rounded-3xl ma-xl bg-background-secondary border-1px border-solid border-#303030 pa-lg px-2xl"
    >
      <QImg :src="img" fit="scale-down" class="full-width full-height" />
    </section>

    <div class="flex justify-between px-xs full-width items-center">
      <span class="text-lg">{{ title }}</span>
      <span class="text-primary text-lg">{{ price }}</span>
    </div>

    <span class="text-text-secondary text-sm text-start ps-xs full-width pb-sm"
      >{{ desc }}
    </span>

    <!-- TODO Maki This Dynamic TOO -->
    <QBtn
      @click="$router.push('/Products')"
      class="!rounded-b-3em text-primary !bg-#007AFF0D full-width flex justify-center text-lg gap-2 items-center border-t-1 border-t-#007AFF q-py-md border-t-solid"
    >
      <Bag class="fill-primary w-7.5 h-7.5" />
      افزودن به سبد خرید
    </QBtn>
  </QCard>
</template>

<script setup lang="ts">
defineProps<{
  img: string
  title: string
  desc: string
  price: string
}>()
</script>
