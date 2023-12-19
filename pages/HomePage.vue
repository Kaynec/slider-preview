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
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      swipeable
      control-color="white"
      navigation
      class="text-white !border-none !shadow-none bg-transparent !h-max"
    >
      <template v-slot:navigation-icon="{ active, btnProps, onClick }">
        <div class="translate-y-3">
          <q-btn
            v-if="active"
            size="sm"
            color="yellow"
            flat
            round
            dense
            @click="onClick"
          >
            <img
              src="../assets/home_imgs/selected_navigation.svg"
              alt="selected banner icon"
            />
          </q-btn>
          <q-btn
            v-else
            size="xs"
            :icon="btnProps.icon"
            color="white"
            flat
            round
            dense
            @click="onClick"
          />
        </div>
      </template>
      <q-carousel-slide class="!overflow-hidden" v-for="i in 4" :name="i">
        <NuxtImg
          width="100%"
          height="600"
          class="w-full h-auto pointer-events-none"
          src="/images/home_imgs/hero.webp"
          alt="carousel"
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
  height: 150px !important;
  width: 100%;
  margin: 0 auto;
}

@media screen and (min-width: 350px) {
  .carousel-image {
    min-height: 10rem !important;
  }
}

@media screen and (min-width: 450px) {
  .carousel-image {
    min-height: 11rem !important;
  }
}

@media screen and (min-width: 550px) {
  .carousel-image {
    min-height: 13rem !important;
  }
}

@media screen and (min-width: 680px) {
  .carousel-image {
    min-height: 16rem !important;
  }
}

@media screen and (min-width: 1024px) {
  .carousel-image {
    min-height: 25rem !important;
  }

  .show-mydata {
    flex-direction: row;
  }
}

@media screen and (min-width: 1400px) {
  .carousel-image {
    min-height: 35rem !important;
  }

  .show-mydata {
    flex-direction: row;
  }
}
</style>
