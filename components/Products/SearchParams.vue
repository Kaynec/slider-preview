<template>
  <div class="flex flex-col !flex-nowrap w-full gap-3 col-span-4 lg:col-span-1">
    <QInput
      standout="bg-transparent"
      v-model="model.search"
      input-class="text-white"
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
            <QCheckbox
              :label="filter.name"
              v-for="filter in filterboxArray"
              :key="filter.name"
              v-model="filter.value"
            />
          </q-card-section>
        </q-card>
      </q-expansion-item>
      <!-- <q-separator class="my-sm" /> -->

      <q-expansion-item expand-separator label="بر اساس نوع محصول">
        <q-card class="bg-dark">
          <q-card-section class="flex flex-col">
            <QCheckbox
              :label="filter.name"
              v-for="filter in productTypeFilterArray"
              :key="filter.name"
              v-model="filter.value"
            />
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item expand-separator label="بر اساس قیمت">
        <q-card class="bg-dark">
          <q-card-section class="flex flex-col">
            <QRadio
              :label="filter.name"
              v-for="filter in priceFilterArray"
              :key="filter.name"
              :val="filter.name"
              v-model="currentPriceFilter"
              as
            />
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <!-- <q-separator class="my-sm" /> -->

      <div class="flex flex-col !my-lg">
        <SwitchComponent
          label="فقط کالاهای موجود"
          v-model="model.availableToggle"
        />
        <q-separator class="!my-lg" />
        <div class="flex justify-between">
          <SwitchComponent
            v-model="model.discountedToggle"
            label="کالای های تخفیف دار"
          />
        </div>
      </div>
    </q-list>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<{
  search: string
  availableToggle: boolean
  discountedToggle: boolean
}>({ required: true })

const filterboxArray = ref([
  {
    name: 'Sony',
    value: false
  },
  {
    name: 'Microsoft',
    value: false
  },
  {
    name: 'Nintendo',
    value: false
  }
])

const currentPriceFilter = ref('ارزان ترین')

const priceFilterArray = ref([
  {
    name: 'ارزان ترین',
    value: false
  },
  {
    name: 'گرانترین',
    value: false
  },
  {
    name: 'جدید ترین',
    value: false
  },
  {
    name: 'پرفروش ترین',
    value: false
  }
])

const productTypeFilterArray = ref([
  {
    name: 'کنسول بازی',
    value: false
  },
  {
    name: 'لوازم جانبی',
    value: false
  },
  {
    name: 'دسته',
    value: false
  }
])
</script>
