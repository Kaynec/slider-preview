<script setup lang="ts">
import OurServices from '@/components/Home/OurServices.vue'

useSeoMeta({
  title: 'cspro - repair page register',
  ogTitle: 'cspro - repair page register',
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
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="white"
      navigation
      class="text-white !border-none !shadow-none !h-max bg-transparent"
    >
      <template v-slot:navigation-icon="{ active, btnProps, onClick }">
        <div class="translate-y-5">
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
      <q-carousel-slide
        img-src="/images/home_imgs/hero.png"
        v-for="i in 4"
        :name="i"
        class="carousel-image"
      >
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
  min-height: 165px !important;
}

@media screen and (min-width: 680px) {
  .carousel-image {
    min-height: 17.8rem !important;
    margin: 0 auto;
  }
}

@media screen and (min-width: 1024px) {
  .carousel-image {
    min-height: 28rem !important;
    margin: 0 auto;
  }

  .show-mydata {
    flex-direction: row;
  }
}

@media screen and (min-width: 1440px) {
  .carousel-image {
    min-height: 34rem !important;
    margin: 0 auto;
  }

  .show-mydata {
    flex-direction: row;
  }
}
</style>
