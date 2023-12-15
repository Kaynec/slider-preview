<script setup lang="ts">
import ControllerBig from '@/assets/home_imgs/cards/Controller-Big.png'
import Gameimage from '@/assets/shop/game.png'
const cardItems = ref([
  {
    image: ControllerBig,
    alt: 'Controller-Big.png',
    title: 'خرید دسته PS5 - سفید',
    options: [
      { label: 'مدل', value: 'دوال سنس سفید' },
      { label: 'رنگ', value: 'مشکی' },
      {
        label: 'گارانتی',
        value: '10 روز مهلت تست رایگان و اصالت کالا (اورجینال)'
      }
    ],
    quantity: 1,
    price: '۲۸.۵۰۰.۰۰۰'
  },
  {
    image: Gameimage,
    alt: 'Controller-Big.png',
    title: 'خرید بازی Murder on the Orient Express نسخه دلوکس برای PS5',
    options: [{ label: 'مدل', value: 'بازی PS5' }],
    quantity: 1,
    price: '۲۸.۵۰۰.۰۰۰'
  }
  // Add more items as needed
])
</script>
<template>
  <main class="container mx-auto mb-5xl">
    <div class="row q-col-gutter-md">
      <div class="col-12 flex flex-col gap-4">
        <BasketStepper :currentActiveIndex="0" />
      </div>

      <div class="col-12 col-lg-9 flex flex-col gap-4">
        <!-- Reccomended Stuff -->
        <OurReccomendedPackage />
        <!-- Actual Basket -->
        <QCard>
          <QCardSection>
            <h5>
              سبد خرید شما
              <span
                class="!rounded-full inline-flex items-center justify-center w-4 h-4 bg-primary aspect-1 text-text-primary"
              >
                2
              </span>
            </h5>
          </QCardSection>
          <BasketItems
            v-for="(item, index) in cardItems"
            :key="item.alt"
            :addSeperator="index !== cardItems.length - 1"
            :item="item"
          />
        </QCard>
        <!--  -->
      </div>
      <div class="col-12 col-lg-3">
        <QCard class="full q-pa-md flex flex-col gap-6 !rounded-2xl">
          <div
            class="flex flex-col gap-3 full-width items-start justify-end text-text-secondary"
          >
            <div class="flex gap-2 items-center">
              <Comment class="fill-gray" />
              ۳۵ نظر ثبت شده
            </div>
            <div class="flex gap-2 items-center">
              <Badge class="fill-gray" />
              گارانتی اصالت و سلامت فیزیکی کالا
            </div>
            <div class="flex gap-2 items-center">
              <ShipmentExpress class="fill-gray" />
              ارسال تا ۷ روز کاری آینده
            </div>
          </div>
          <!--  -->
          <q-separator />

          <div class="flex justify-between">
            <span>قیمت کالاها (2)</span>
            <span>
              ۲۸.۵۰۰.۰۰۰ <strong class="text-text-secondary">تومان</strong>
            </span>
          </div>
          <div class="flex justify-between">
            <span>جمع سبد خرید شما</span>
            <span>
              34.۵۰۰.۰۰۰ <strong class="text-text-secondary">تومان</strong>
            </span>
          </div>
          <div class="flex justify-between">
            <span>سود شما از این خرید</span>
            <span class="text-text-price">
              7.۵۰۰.۰۰۰ <strong class="text-text-secondary">تومان</strong>
            </span>
          </div>

          <q-separator />

          <div class="flex justify-between">
            <span> قیمت کل: </span>
            <span>
              ۲۸.۵۰۰.۰۰۰ <strong class="text-text-secondary">تومان</strong>
            </span>
          </div>
          <PrimaryButton> ثبت سفارش</PrimaryButton>
        </QCard>
      </div>
    </div>
    <!--  -->
    <SpecialOffer />
  </main>
</template>

<style scoped>
.custom-bg {
  position: relative;
  background: url('@/assets/shop/background.svg');
  box-shadow: inset 0 0 0 1000px rgba(23, 68, 158, 0.134);
  background-size: cover;
  background-position: center;
}
</style>
