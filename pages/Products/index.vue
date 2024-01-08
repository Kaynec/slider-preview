<script setup lang="ts">
useSeoMeta({
  title: 'Cheats  - products',
  ogTitle: 'Cheats  - products',
  description: 'محصولات',
  ogDescription: 'محصولات'
})

const globalStore = useGlobalStore()
globalStore.setCurrentTextName('محصولات')

import ControllerBig from '@/assets/home_imgs/cards/controller-big.png'
import Ps5Big from '@/assets/home_imgs/cards/ps5-big.png'

import HeadsetBig from '@/assets/home_imgs/cards/headset-big.png'

const filterConditions = {
  All: 'همه محصولات',
  Newset: 'جدید ترین',
  Cheapest: 'ارزان ترین',
  MostExpensive: 'گران ترین',
  MostPopular: 'پرفروش ترین'
}
const CurrentFilterCondition = ref(filterConditions.All)

//

const showDialog = ref(false)

const model = ref({
  search: '',
  availableToggle: false,
  discountedToggle: false
})
</script>
<template>
  <main>
    <!--  -->
    <section class="grid grid-cols-4 gap-lg">
      <!-- Right Side Search Section => Desktop -->
      <LazySearchParams :model-value="model" v-if="$q.screen.width > 900" />

      <!-- Show THis Only On Mobile -->
      <!--  -->
      <div class="col-span-4 lg:col-span-3">
        <QDialog v-model="showDialog" class="w-full">
          <LazySearchParams :model-value="model" />
        </QDialog>
        <LazyFilterComponent
          :filterConditions="filterConditions"
          :current-filter-condition="((CurrentFilterCondition as string))"
          @update="newCondition => (CurrentFilterCondition = newCondition)"
          @show-dialog="showDialog = true"
        />

        <div class="q-col-gutter-lg row">
          <template v-for="i in 9">
            <div class="col-12 col-sm-6 col-md-4">
              <ProductItem
                :img="ControllerBig"
                title="دسته PS5 - سفید"
                percent="5%"
                desc=" دوال سنس سفید"
                price="۳,۴۰۰,۰۰۰"
                :time="['22', '14', '35']"
                final-price="۳,۰۰,۰۰۰"
                :discount-percent="15"
                region="آسیا"
              />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <ProductItem
                :img="Ps5Big"
                title="دسته PS5 - سفید"
                percent="5%"
                desc=" دوال سنس سفید"
                price="۳,۴۰۰,۰۰۰"
                :time="['22', '14', '35']"
                final-price="۳,۰۰,۰۰۰"
                :discount-percent="15"
                region="آسیا"
              />
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <ProductItem
                :img="HeadsetBig"
                title="دسته PS5 - سفید"
                percent="5%"
                desc=" دوال سنس سفید"
                price="۳,۴۰۰,۰۰۰"
                :time="['22', '14', '35']"
                final-price="۳,۰۰,۰۰۰"
                :discount-percent="15"
                region="آسیا"
              />
            </div>
          </template>
        </div>
      </div>
    </section>
  </main>
</template>
