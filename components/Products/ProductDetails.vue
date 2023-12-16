<script setup lang="ts">
import ControllerBig from '@/assets/home_imgs/cards/Controller-Big.png'

const time = ['22', '14', '35']
</script>
<template>
  <QCard class="min-h-full !rounded-2xl pa-xs">
    <div class="flex justify-between my-lg gap-y-lg">
      <h4 class="text_10xl text-accent">پیشنهاد شگفت انگیز</h4>
      <div
        class="flex items-center !md:items-end md:self-start !md:flex-col gap-3"
      >
        <text class="text-text-secondary"> زمان باقی مانده برای تخفیف: </text>
        <div class="flex">
          <div v-for="t in time" :key="t" class="flex gap-1 justify-center">
            <div
              class="text-accent w-6 h-6 place-content-center grid border-1 border-solid rounded aspect-1"
              style="border-color: var(--primary)"
            >
              {{ t }}
            </div>
            <div v-if="t !== time[time.length - 1]">:</div>
          </div>
        </div>
        <div
          class="border-1 text-primary border-primary h-6 px-1 text-xs px-2 items-center gap-1 rounded-lg flex"
        >
          <Star class="stroke-primary !w-4 !h-4 mb-1" />
          4.6
        </div>
      </div>
    </div>
    <div class="items-center justify-center flex gap-10">
      <!-- imgs -->
      <div class="flex items-center justify-center !sm:flex-nowrap gap-xl">
        <div class="flex flex-col items-center gap-4">
          <img
            class="max-w-58"
            src="@/assets/home_imgs/cards/Controller-Big.png"
            alt="Controller-Big.png"
          />
          <div class="flex gap-2">
            <img
              v-for="i in 3"
              :key="i"
              class="max-w-18 border-1 border-solid border-#303030 p-1px rounded-xl p-xs"
              :src="ControllerBig"
              alt="Controller-Big.png"
            />
          </div>
        </div>
        <!--  -->

        <div class="text-text-secondary flex flex-col gap-4">
          <h4 class="text-h5 text-text-primary">خرید دسته PS5 - سفید</h4>
          <span>
            مدل:
            <span class="text-text-primary"> دوال سنس سفید </span>
          </span>
          <div class="flex gap-2 items-center">
            <Badge class="fill-primary" />
            قابل استفاده به صورت بی‌سیم و با کابل USB-C
          </div>
          <div class="flex gap-2 items-center">
            <CheckCircle class="fill-gray" />
            دارای تکنولوژی تریگرهای تبطیق پذیر و فیدبک هپتیک
          </div>
          <div class="flex gap-2 items-center">
            <CheckCircle class="fill-gray" />
            دارای تاچ‌پد و حسگر حرکتی
          </div>
          <div class="flex gap-2 items-center">
            <CheckCircle class="fill-gray" />
            دارای اسپیکر، میکروفون و جک 3.5 میلی‌متری
          </div>
          <!--  -->
          <div class="flex gap-3">
            <div
              class="flex rounded-3xl gap-2 border-1px border-#303030 border-solid p-xs items-center"
            >
              <HeartWithPlus class="fill-gray" />
              افزودن به علاقه مندی
            </div>
            <div
              class="flex rounded-3xl gap-2 border-1px border-#303030 border-solid p-xs items-center"
            >
              <ShareIt class="fill-gray" />
              اشتراک گذاری
            </div>
            <div
              class="flex rounded-3xl gap-2 border-1px border-#303030 border-solid p-xs items-center"
            >
              <Bell class="fill-gray" />
              اطلاع از تخفیف محصول
            </div>
          </div>
        </div>
      </div>
    </div>
  </QCard>
</template>
