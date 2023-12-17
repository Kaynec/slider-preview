<script setup lang="ts">
import ControllerBig from '@/assets/home_imgs/cards/Controller-Big.png'
import Gameimage from '@/assets/shop/game.png'

useSeoMeta({
  title: 'cspro - repair page register',
  ogTitle: 'cspro - repair page register',
  description: 'سبد خرید - انتخاب تاریخ',
  ogDescription: 'سبد خرید - انتخاب تاریخ'
})

definePageMeta({
  currentPageName: 'سبد خرید - انتخاب تاریخ'
})

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
        <BasketStepper :currentActiveIndex="1" />
      </div>
      <div class="col-12 col-lg-9 flex flex-col gap-4">
        <!-- Reccomended Stuff -->
        <OurReccomendedPackage />
        <!-- Actual Basket -->
        <QCard>
          <QCardSection class="flex gap-5 flex-col">
            <h5>آدرس تحویل سفارش</h5>
            <div class="gap-2 flex items-center">
              <Location class="fill-primary" />
              تهران میدان فردوسی ، بین دارستانی و وصال، خ سرابی ، کوچه یاران ،
              پلاک ۱ واحد ۳
            </div>
            <div class="flex justify-between items-center">
              <span class="text-text-secondary">بهراد قاسمی</span>
              <span class="text-primary flex gap-1"
                >تغییر یا ویرایش آدرس <AngleLeft class="fill-primary" />
              </span>
            </div>
          </QCardSection>
        </QCard>
        <!-- SelectDate  -->
        <QCard>
          <QCardSection class="flex gap-2 text-lg items-center">
            <ShipmentExpress class="fill-primary" />
            کالاهای ارسالی
          </QCardSection>
          <QCardSection
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-lg"
          >
            <QCard
              v-for="i in 3"
              class="bg-background-secondary flex flex-col gap-3 pa-sm items-center"
            >
              <img
                src="@/assets/home_imgs/cards/Controller-Big.png"
                alt="Controller-Big.png"
              />
              <span class="text-text-primary">دسته PS5 - سفید</span>
              <span class="text-text-secondary">مدل: دوال سنس سفید</span>
            </QCard>
          </QCardSection>
          <QCardSection>
            <h5 class="flex gap-2 text-lg items-center">
              <ShipmentExpress class="fill-primary" />
              انتخاب زمان ارسال

              <span class="text-text-secondary text-xs">
                (بازه‌های دارای ظرفیت اختصاصی برای اعضای دیجی‌پلاس)</span
              >
            </h5>
          </QCardSection>
          <QCardSection>
            <SelectDateTabs />
          </QCardSection>
        </QCard>
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
