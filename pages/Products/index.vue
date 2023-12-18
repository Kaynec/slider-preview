<script setup lang="ts">
useSeoMeta({
  title: 'cspro - products',
  ogTitle: 'cspro - products',
  description: 'نحصولات',
  ogDescription: 'نحصولات'
})

definePageMeta({
  currentPageName: 'نحصولات'
})

import ControllerBig from '@/assets/home_imgs/cards/controller-big.png'
import Ps5Big from '@/assets/home_imgs/cards/ps5-big.png'

import HeadsetBig from '@/assets/home_imgs/cards/headset-big.png'

const availableToggle = ref(false)
const discountedToggle = ref(false)
//

const search = ref('')

const filterConditions = {
  All: 'همه محصولات',
  Newset: 'جدید ترین',
  Cheapest: 'ارزان ترین',
  MostExpensive: 'گران ترین',
  MostPopular: 'پرفروش ترین'
}
const CurrentFilterCondition = ref(filterConditions.All)
</script>
<template>
  <main class="container mx-auto mb-5xl">
    <!--  -->
    <section class="grid grid-cols-4 gap-lg">
      <!-- Right Side Search Section -->
      <div class="flex flex-col gap-3 col-span-4 lg:col-span-1">
        <QInput
          standout="bg-transparent"
          v-model="search"
          label="جست جو محصول"
          class="z-3"
          rounded
          bgColor="dark"
          :dark="true"
        >
          <template v-slot:append>
            <div class="i-carbon:search text-blue-9" />
          </template>
        </QInput>
        <q-list bordered class="rounded-24px bg-dark pa-lg text-text-primary">
          <div class="flex justify-between">
            <span>فیلترها</span>
            <TrashCan class="stroke-red" />
          </div>
          <q-separator class="!my-sm" />

          <q-expansion-item expand-separator label="بر اساس برند">
            <q-card class="bg-dark">
              <q-card-section class="flex flex-col">
                <QCheckbox label="Sony" />
                <QCheckbox label="Microsoft" />
                <QCheckbox label="Nintendo" />
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <!-- <q-separator class="my-sm" /> -->

          <q-expansion-item expand-separator label="بر اساس نوع محصول">
            <q-card class="bg-dark">
              <q-card-section class="flex flex-col">
                <QCheckbox label="کنسول بازی" />
                <QCheckbox label="لوازم جانبی" />
                <QCheckbox label="دسته" />
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <!-- <q-separator class="my-sm" /> -->

          <div class="flex flex-col !my-lg">
            <SwitchComponent
              label="فقط کالاهای موجود"
              v-model="availableToggle"
            />
            <q-separator class="!my-lg" />
            <div class="flex justify-between">
              <SwitchComponent
                v-model="discountedToggle"
                label="کالای های تخفیف دار"
              />
            </div>
          </div>
        </q-list>
      </div>
      <!--  -->
      <div class="col-span-4 lg:col-span-3">
        <div
          class="flex items-center justify-between mb-6 gap-y-6 mt-3 text-text-secondary px-lg text-1rem"
        >
          <div class="flex gap-2">
            <svg
              width="25"
              height="25"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1667 3.41667V5.25C17.1667 5.91667 16.7501 6.75 16.3334 7.16667L12.7501 10.3333C12.2501 10.75 11.9167 11.5833 11.9167 12.25V15.8333C11.9167 16.3333 11.5834 17 11.1667 17.25L10.0001 18C8.91673 18.6667 7.41673 17.9167 7.41673 16.5833V12.1667C7.41673 11.5833 7.0834 10.8333 6.75007 10.4167L6.3584 10.0083C6.10007 9.73333 6.05007 9.31667 6.2584 8.99167L10.5251 2.14167C10.6751 1.9 10.9417 1.75 11.2334 1.75H15.5001C16.4167 1.75 17.1667 2.5 17.1667 3.41667Z"
                fill="#979797"
              />
              <path
                d="M8.62467 3.025L5.66634 7.76667C5.38301 8.225 4.73301 8.29167 4.35801 7.9L3.58301 7.08333C3.16634 6.66667 2.83301 5.91667 2.83301 5.41667V3.5C2.83301 2.5 3.58301 1.75 4.49967 1.75H7.91634C8.56634 1.75 8.96634 2.46667 8.62467 3.025Z"
                fill="#979797"
              />
            </svg>
            فیلتر بر اساس:
          </div>

          <span
            v-for="item in Object.keys(filterConditions)"
            :key="item"
            class="cursor-pointer pb-2"
            :class="{
              'text-primary b-b-2  b-b-solid': CurrentFilterCondition === (filterConditions as any)[item]
            }"
            style="border-color: var(--primary)"
            @click="CurrentFilterCondition = (filterConditions as any)[item]"
          >
            {{ (filterConditions as any)[item] }}
          </span>
        </div>

        <div class="q-col-gutter-lg row">
          <template v-for="i in 9">
            <div class="col-12 col-sm-6 col-lg-4">
              <PopularProductItem
                :img="ControllerBig"
                title="دسته PS5 - سفید"
                percent="5%"
                desc="مدل: دوال سنس سفید"
                price="3,450,000 تومان"
                :time="['22', '14', '35']"
                final-price="2.750.000 تومان"
              />
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <PopularProductItem
                :img="Ps5Big"
                title="دسته PS5 - سفید"
                percent="5%"
                desc="مدل: دوال سنس سفید"
                price="3,450,000 تومان"
                :time="['22', '14', '35']"
                final-price="2.750.000 تومان"
              />
            </div>
            <div class="col-12 col-sm-6 col-lg-4">
              <PopularProductItem
                :img="HeadsetBig"
                title="دسته PS5 - سفید"
                percent="5%"
                desc="مدل: دوال سنس سفید"
                price="3,450,000 تومان"
                :time="['22', '14', '35']"
                final-price="2.750.000 تومان"
              />
            </div>
          </template>
        </div>
      </div>
    </section>
  </main>
</template>
