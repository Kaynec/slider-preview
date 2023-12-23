<script setup lang="ts">
import ControllerBig from '@/assets/home_imgs/cards/controller-big.png'
import { getCssVar } from 'quasar'
import ProductFeatureWithIcon from './ProductFeatureWithIcon.vue'

const time = ['22', '14', '35']
</script>
<template>
  <QCard class="min-h-full !rounded-2xl pa-xs">
    <div class="flex justify-between my-lg gap-y-lg">
      <h4
        class="text_10xl text-center grow"
        :style="`color: ${getCssVar('negative')} !important`"
      >
        پیشنهاد شگفت انگیز
      </h4>
    </div>
    <div class="items-center justify-center flex gap-10">
      <!-- imgs -->
      <div class="flex items-center justify-center !sm:flex-nowrap gap-xl">
        <div class="flex justify-between grow items-center gap-4">
          <div class="flex flex-col items-start">
            <div class="flex items-start flex-col gap-3">
              <text class="text-text-secondary">
                زمان باقی مانده برای تخفیف:
              </text>
              <div class="flex">
                <div
                  v-for="t in time"
                  :key="t"
                  class="flex gap-1 justify-center"
                >
                  <div
                    class="text-negative w-8.5 h-8.5 place-content-center grid border-1 border-solid rounded aspect-1"
                    :style="`border-color: ${getCssVar('negative')}`"
                  >
                    {{ t }}
                  </div>
                  <div v-if="t !== time[time.length - 1]">:</div>
                </div>
              </div>
            </div>
            <img
              class="max-w-58"
              src="@/assets/home_imgs/cards/controller-big.png"
              alt="controller-big.png"
            />
          </div>

          <div class="flex flex-col gap-2">
            <img
              v-for="i in 3"
              :key="i"
              class="max-w-18 border-1 border-solid border-#303030 p-1px rounded-xl p-xs"
              :src="ControllerBig"
              alt="controller-big.png"
            />
          </div>
        </div>
        <!--  -->

        <div class="text-text-secondary flex flex-col gap-4 grow">
          <h4 class="text-h5 text-text-primary">خرید دسته PS5 - سفید</h4>

          <div class="flex justify-between pb-lg items-center">
            <span class="text-lg">
              مدل:
              <span class="text-#71B5FF"> دوال سنس سفید </span>
            </span>
            <div
              class="border-1 text-primary border-primary h-7 px-1 text-xs px-2 items-center gap-1 rounded-lg flex"
            >
              <Star class="stroke-primary !w-6 !h-6 mb-1" />
              4.6
            </div>
          </div>

          <ProductFeatureWithIcon
            title="قابل استفاده به صورت بی‌سیم و با کابل USB-C"
          >
            <template #icon>
              <Badge class="fill-primary" />
            </template>
          </ProductFeatureWithIcon>

          <ProductFeatureWithIcon
            title="دارای تکنولوژی تریگرهای تبطیق پذیر و فیدبک هپتیک"
          />
          <ProductFeatureWithIcon title="دارای تاچ‌پد و حسگر حرکتی" />
          <ProductFeatureWithIcon
            title="دارای اسپیکر، میکروفون و جک 3.5 میلی‌متری"
          />

          <!--  -->
          <div class="flex gap-6">
            <div
              class="flex rounded-2xl gap-2 border-1px border-#303030 border-solid p-xs items-center"
            >
              <HeartWithPlus class="fill-gray" />
            </div>
            <div
              class="flex rounded-2xl gap-2 border-1px border-#303030 border-solid p-xs items-center"
            >
              <ShareIt class="fill-gray" />
            </div>
            <div
              class="flex rounded-2xl gap-2 border-1px border-#303030 border-solid p-xs items-center"
            >
              <Bell class="fill-gray" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <QCard
      class="bg-background-dark my-lg min-h-full !pa-sm flex flex-col gap-3 !rounded-lg"
    >
      <div class="flex justify-between items-center">
        <h5 class="text-h5 text-text-primary">گارانتی محصول</h5>
        <button class="inline-flex items-center text_lg gap-2 text-primary">
          <span class="font-700">مطالعه بیشتر</span>
          <CurvedLeftArrow class="stroke-primary" />
        </button>
      </div>

      <q-radio
        class="translate-x-2 text-text-secondary"
        val="line"
        label="۱۰ روز مهلت تست رایگان و اصالت کالا (اورجینال)"
      />
      <q-radio
        class="translate-x-2 text-text-secondary"
        val="line"
        label="۱۲ ماه ضمانت خدمات و تعمیرات(+300,000 تومان)"
      />
    </QCard>
    <div class="flex items-center justify-between ps-sm my-2xl">
      <span text-lg>
        ۲۸.۵۰۰.۰۰۰ <small class="text-text-secondary">تومان</small>
      </span>
      <PrimaryButton class="!rounded-full"> افزودن به سبد خرید </PrimaryButton>
    </div>

    <q-separator class="!mb-4 !mt-2" />
    <div class="flex gap-3 full-width justify-between text-text-secondary">
      <div class="flex gap-2 items-center">
        <Comment class="fill-gray" />
        ۳۵ نظر ثبت شده
      </div>
      <div class="flex gap-2 items-center">
        <ShipmentExpress class="fill-gray" />
        ارسال تا ۷ روز کاری آینده
      </div>
      <div class="flex gap-2 items-center">
        <Badge class="fill-gray" />
        گارانتی اصالت و سلامت فیزیکی کالا
      </div>
    </div>
  </QCard>
</template>
