<script lang="ts" setup>
const currentActiveProductType = ref<'Controller' | 'Console'>('Controller')
</script>
<template>
  <QCard class="min-h-full q-pa-md flex flex-col gap-6 !rounded-2xl">
    <div
      class="flex flex-col gap-3 full-width items-start justify-end text-text-secondary"
    >
      <span> لطفا نوع خدمات تعمیر خود را انتخاب کنید. </span>
      <div
        class="bg-#23272D rounded-lg w-full flex items-center justify-between gap-1 pa-xs"
      >
        <button
          :class="{
            'border-1 border-primary border-solid  !shadow-md  shadow-blue-6 ':
              currentActiveProductType === 'Controller'
          }"
          class="rounded-xl flex-1 flex !flex-row text-primary items-center gap-1 text-xs p-8px"
          @click="currentActiveProductType = 'Controller'"
        >
          <img
            class="w-8 h-8 object-contain"
            alt="image of card"
            src="@/assets/home_imgs/cards/controller-big.png"
          />
          <span> انواع دسته بازی </span>
        </button>
        <button
          :class="{
            'border-1 border-primary border-solid  !shadow-md  shadow-blue-6 ':
              currentActiveProductType === 'Console'
          }"
          class="rounded-xl flex-1 flex !flex-row text-primary items-center gap-1 text-xs p-8px"
          @click="currentActiveProductType = 'Console'"
        >
          <img
            class="w-8 h-8 object-contain"
            alt="image of card"
            src="@/assets/home_imgs/cards/ps5-big.png"
          />
          <span> انواع کنسول بازی </span>
        </button>
      </div>
    </div>

    <div class="flex flex-col">
      <q-radio
        class="translate-x-2 text-text-secondary"
        val="line"
        label="دسته play station 4"
      />
      <q-radio
        class="translate-x-2 text-text-secondary"
        val="line"
        label="دسته play station 5"
      />
      <q-radio
        class="translate-x-2 text-text-secondary"
        val="line"
        label="دسته X Box One"
      />
      <q-radio
        class="translate-x-2 text-text-secondary"
        val="line"
        label="دسته X Box One"
      />
      <q-radio
        class="translate-x-2 text-text-secondary"
        val="line"
        label="دسته X Box One"
      />
    </div>

    <PrimaryButton> شروع تست خرابی دسته </PrimaryButton>
  </QCard>
</template>
