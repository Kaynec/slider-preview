<script setup lang="ts">
import OurServices from '@/components/Home/OurServices.vue'

import ps4Image from '@/assets/home_imgs/ps4.png'
import ps5Image from '@/assets/home_imgs/ps5.png'

useSeoMeta({
  title: 'Cheats  - Home page',
  ogTitle: 'Cheats  - Home page',
  description: 'صفحه اصلی',
  ogDescription: 'صفحه اصلی'
})

definePageMeta({
  currentPageName: 'صفحه اصلی'
})

const slide = ref(1)
</script>

<template>
  <QPage class="px-sm row col">
    <Slider
      class="mb-lg"
      :slides-per-view="3.5"
      :pagination="{
        clickable: true
      }"
      :breakpoints="{
        640: {
          slidesPerView: 4.5,
          spaceBetween: 20
        },
        860: {
          slidesPerView: 6.5,
          spaceBetween: 20
        },
        1240: {
          slidesPerView: 7,
          spaceBetween: 20
        }
      }"
    >
      <!-- Padding Bottom For Pagination to Show -->
      <template v-for="i in 3">
        <SwiperSlide class="pb-2xl">
          <Story title="پلی استیشن ۵" :img="ps5Image" />
        </SwiperSlide>
        <SwiperSlide class="pb-2xl">
          <Story title="هدفون گیمینگ" />
        </SwiperSlide>
        <SwiperSlide class="pb-2xl">
          <Story title="دسته PS4" :img="ps4Image" />
        </SwiperSlide>
      </template>
    </Slider>

    <Transition
      enter-active-class="duration-500 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0"
    >
      <ClientOnly>
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          animated
          swipeable
          control-color="white"
          navigation
          class="text-white !border-none !shadow-none bg-transparent !h-max w-full !p-0 mt-lg"
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
                  src="@/assets/home_imgs/selected_navigation.svg?inline"
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

          <q-carousel-slide
            class="!overflow-hidden w-full !p-0"
            v-for="i in 4"
            :name="i"
          >
            <NuxtImg
              v-if="$q.screen.width > 800"
              width="1500"
              height="600"
              class="w-full h-auto pointer-events-none"
              src="/images/home_imgs/hero.webp"
              alt="carousel"
              preload
            />
            <NuxtImg
              v-if="$q.screen.width < 800"
              width="375"
              height="270"
              class="w-full h-auto pointer-events-none"
              src="/images/home_imgs/hero-mobile_1x.webp"
              :quality="60"
              alt="carousel"
              preload
            />
          </q-carousel-slide>
        </q-carousel>
      </ClientOnly>
    </Transition>
    <div>
      <OurServices />
    </div>
    <SpecialOffer />
    <HomePageImages />
    <div class="w-full">
      <PopularProducts />
    </div>
    <div class="w-full">
      <AboutUs />
    </div>

    <div class="w-full">
      <Blog />
    </div>
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
