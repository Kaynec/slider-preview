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

const paymentMethod = ref<'Online' | 'InPerson'>('Online')
</script>
<template>
  <main class="container mx-auto mb-5xl">
    <div class="row q-col-gutter-md">
      <div class="col-12 flex flex-col gap-4">
        <BasketStepper :currentActiveIndex="2" />
      </div>
      <div class="col-12 col-lg-9 flex flex-col gap-4">
        <!-- Reccomended Stuff -->
        <OurReccomendedPackage />
        <!-- Actual Basket -->
        <QCard>
          <QCardSection class="flex gap-5 flex-col">
            <h5>انتخاب روش پرداخت</h5>
            <div class="gap-2 flex items-center text-primary">
              <QRadio v-model="paymentMethod" val="Online" />
              <OnlinePayment
                :class="`${
                  paymentMethod === 'Online'
                    ? 'fill-primary'
                    : 'fill-text-secondary'
                }`"
              />
              <div
                class="flex flex-col"
                :class="`${
                  paymentMethod === 'Online'
                    ? 'text-primary'
                    : 'text-text-secondary'
                }`"
              >
                <span>پرداخت اینترنتی</span>
                <span> پرداخت آنلاین با تمامی کارت‌های بانکی </span>
              </div>
            </div>
            <q-separator color="border-primary" />
            <div class="gap-2 flex items-center text-primary">
              <QRadio v-model="paymentMethod" val="InPerson" />
              <InPerson
                :class="`${
                  paymentMethod === 'InPerson'
                    ? 'fill-primary'
                    : 'fill-text-secondary'
                }`"
              />
              <div
                class="flex flex-col"
                :class="`${
                  paymentMethod === 'InPerson'
                    ? 'text-primary'
                    : 'text-text-secondary'
                }`"
              >
                <span>پرداخت در محل</span>
                <span> امکان پرداخت در محل به صورت حضوری</span>
              </div>
            </div>
          </QCardSection>
        </QCard>
        <!-- SelectDate  -->
        <QCard>
          <QCardSection> <h5>اعمال کد تخفیف</h5></QCardSection>

          <div class="row q-col-gutter-lg pa-lg">
            <div class="col-12 col-md-6">
              <QCardSection
                class="bg-background-secondary rounded-lg flex flex-col gap-3"
              >
                <div class="flex justify-between p-3">
                  <span> کد تخفیف </span>

                  <button class="text-primary">اعمال کد</button>
                </div>

                <QInput
                  label="کد تخفیف خود را وارد کنید"
                  class="rounded-xl"
                  standout="bg-transparent"
                  borderles
                  outlined
                />
              </QCardSection>
            </div>
            <div class="col-12 col-md-6">
              <QCardSection
                class="bg-background-secondary rounded-lg flex flex-col gap-3"
              >
                <div class="flex justify-between p-3">
                  <span> کارت های هدیه</span>

                  <button class="text-primary">اعمال کد</button>
                </div>

                <QInput
                  label="کد کارت هدیه خود را وارد کنید"
                  class="rounded-xl"
                  standout="bg-transparent"
                  borderles
                  outlined
                />
              </QCardSection>
            </div>
          </div>
        </QCard>
      </div>
      <div class="col-12 col-lg-3">
        <QCard class="full q-pa-md flex flex-col gap-6 !rounded-2xl">
          <div
            class="flex flex-col gap-3 full-width items-start justify-end text-text-secondary"
          >
            <div
              class="flex gap-2 items-center text-text-secondary justify-between w-full"
            >
              <span>قیمت کالاها (2)</span>
              <span>
                <span class="text-text-primary pe-1">۲۸.۵۰۰.۰۰۰</span>
                <small>تومان</small>
              </span>
            </div>

            <div
              class="flex gap-2 items-center text-text-secondary justify-between w-full"
            >
              <span>هزینه ارسال</span>
              <span>
                <span class="text-text-primary pe-1">34.۵۰۰.۰۰۰</span>
                <small>تومان</small>
              </span>
            </div>
            <span class="text-primary flex gap-1 items-center">
              اطلاعات بیشتر
              <AngleLeft class="fill-primary w-4 h-4" />
            </span>
          </div>

          <!--  -->
          <q-separator />

          <div class="flex justify-between">
            <span>سود شما از این خرید</span>
            <span class="text-text-price">
              7.۵۰۰.۰۰۰ <strong class="text-text-secondary">تومان</strong>
            </span>
          </div>

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
    <NuxtLink
      :to="{
        name: 'Basket'
      }"
      class="text-primary flex gap-1 items-center pt-4"
    >
      بازگشت به سبد خرید
      <AngleLeft class="fill-primary w-4 h-4" />
    </NuxtLink>
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
