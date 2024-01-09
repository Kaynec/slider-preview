<template>
  <div
    class="min-w-90 flex sm-flex-col bg-background-primary custom-opacity gap-y-3 pt-xs !overflow-visible !rounded-1.75rem -hover:translate-y-3 transition-ease transition-250"
  >
    <div class="px-2 md:px-3">
      <section
        class="min-w-5rem aspect-1 sm:aspect-auto w-auto min-h-7rem px-sm p-sm mx-auto !rounded-2xl flex items-center bg-background-secondary border-1px border-solid border-#303030 f-text-11-14"
      >
        <img
          :src="img"
          width="90"
          height="90"
          class="m-auto object-contain aspect-1 w-auto max-w-30 md:max-w-30 lg:max-w-35"
          alt="product card image"
          loading="lazy"
        />
      </section>
    </div>

    <div class="flex flex-1 gap-1">
      <div
        class="flex justify-between px-xs basis-full gap-1 items-center basis-full"
      >
        <span class="f-text-18-20">{{ title }}</span>
        <ClientOnly>
          <span
            v-if="$q.screen.width > 640"
            class="text-primary f-text-13-16 font-bold ps-xs"
            >{{ price }}</span
          >
        </ClientOnly>
      </div>

      <span
        class="text-text-secondary !f-text-14-14 pt-2 text-start ps-xs basis-full"
        >مدل : <span class="text-primary-alternate">{{ desc }}</span>
      </span>
      <ClientOnly>
        <span
          v-if="$q.screen.width < 640"
          class="text-primary f-text-16-20 font-bold ps-xs"
          >{{ price }}</span
        >
      </ClientOnly>
    </div>

    <!-- TODO Maki This Dynamic TOO -->
    <div class="flex !overflow-visible basis-full">
      <QBtn
        @click="$router.push('/Products')"
        class="!rounded-b-1.75rem !overflow-visible text-primary !bg-#007AFF0D full-width flex justify-center !p-0 !py-2 !f-text-18-22 gap-2 items-center !border-t-2 !border-t-#007AFF !border-t-solid"
      >
        <Bag class="fill-primary w-8 h-8" />
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
