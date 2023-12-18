<script setup lang="ts">
import OurServices from '@/components/Home/OurServices.vue'

useSeoMeta({
  title: 'cspro - Home page',
  ogTitle: 'cspro - Home page',
  description: 'صفحه اصلی',
  ogDescription: 'صفحه اصلی'
})

definePageMeta({
  currentPageName: 'صفحه اصلی'
})

const slide = ref(1)
</script>

<template>
  <QPage class="px-sm md:px-8xl pt-8xl pb-4xl column">
    <div class="grid grid-cols-3 md:grid-cols-6 pb-3xl justify-center gap-lg">
      <div class="col flex flex-col items-center gap-2 justify-center">
        <img
          src="@/assets/home_imgs/headphone.png"
          class="max-h-45"
          alt="headphone img"
        />
        <span class="!text-inherit">هدفون گیمینگ</span>
      </div>
      <div class="col flex flex-col items-center gap-2 justify-center">
        <img
          src="@/assets/home_imgs/ps4.png"
          class="max-h-45"
          alt="headphone img"
        />
        <span>دسته PS4</span>
      </div>
      <div class="col flex flex-col items-center gap-2 justify-center">
        <img
          src="@/assets/home_imgs/ps5.png"
          class="max-h-45"
          alt="headphone img"
        />
        <span>پلی استیشن ۵</span>
      </div>
      <div class="col flex flex-col items-center gap-2 justify-center">
        <img
          src="@/assets/home_imgs/headphone.png"
          class="max-h-45"
          alt="headphone img"
        />
        <span>هدفون گیمینگ</span>
      </div>
      <div class="col flex flex-col items-center gap-2 justify-center">
        <img
          src="@/assets/home_imgs/ps4.png"
          class="max-h-45"
          alt="headphone img"
        />
        <span>دسته PS4</span>
      </div>
      <div class="col flex flex-col items-center gap-2 justify-center">
        <img
          src="@/assets/home_imgs/ps5.png"
          class="max-h-45"
          alt="headphone img"
        />
        <span>پلی استیشن ۵</span>
      </div>
    </div>
    <!-- Carousel -->
    <q-carousel
      v-model="slide"
      swipeable
      animated
      transition="true"
      navigation
      transition-prev="slide-right"
      transition-next="slide-left"
      control-color="amber"
      class="carousel-image text-white !border-none !w-full !shadow-none bg-transparent"
    >
      <template v-slot:navigation-icon="{ active, btnProps, onClick }">
        <div class="-translate-y-5">
          <q-btn
            v-if="active"
            size="lg"
            color="yellow"
            flat
            round
            dense
            @click="onClick"
          >
            <img
              src="@/assets/home_imgs/selected_navigation.svg?inline"
              alt="selected banner icon"
            />
          </q-btn>
          <q-btn
            v-else
            size="sm"
            :icon="btnProps.icon"
            color="white"
            flat
            round
            dense
            @click="onClick"
          />
        </div>
      </template>
      <q-carousel-slide v-for="i in 4" :name="i" class="!w-full !h-full">
        <NuxtImg
          key="/images/home_imgs/hero.webp"
          alt="carousel image"
          class="pointer-events-none overflow-hidden"
          src="/images/home_imgs/hero.webp"
          preload
        />
      </q-carousel-slide>
    </q-carousel>
    <!--  -->
    <OurServices />
    <SpecialOffer />
    <HomePageImages />
    <PopularProducts />
    <AboutUs />
    <Blog />
  </QPage>
</template>

<style lang="scss">
.carousel-image {
  min-height: 190px !important;
}

@media screen and (min-width: 680px) {
  .carousel-image {
    min-height: 19.8rem !important;
    margin: 0 auto;
  }
}

@media screen and (min-width: 1024px) {
  .carousel-image {
    min-height: 30rem !important;
    margin: 0 auto;
  }

  .show-mydata {
    flex-direction: row;
  }
}

@media screen and (min-width: 1440px) {
  .carousel-image {
    min-height: 36rem !important;
    margin: 0 auto;
  }

  .show-mydata {
    flex-direction: row;
  }
}
</style>
