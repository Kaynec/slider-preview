<script setup lang="ts">
import OurServices from '@/components/Home/OurServices.vue'

import ps4Image from '@/assets/home_imgs/ps4.png'
import ps5Image from '@/assets/home_imgs/ps5.png'

useSeoMeta({
  title: 'Cheats  - Home page',
  ogTitle: 'Cheats  - Home page',
  description: 'صفحه اصلی',
  ogDescription: 'صفحه اصلی',
  titleTemplate: 'صفحه اصلی'
})

const globalStore = useGlobalStore()
globalStore.setCurrentTextName('صفحه اصلی')

const slide = ref(1)
</script>

<template>
  <QPage class="row col">
    <q-scroll-area
      style="width: 100%; height: auto; padding-bottom: 1rem"
      class="min-h-12rem md:min-h-14.5rem"
    >
      <div class="flex !flex-nowrap !overflow-hidden gap-4">
        <template v-for="i in 6">
          <Story title="پلی استیشن ۵" :img="ps5Image" />
          <Story title="هدفون گیمینگ" />
          <Story title="دسته PS4" :img="ps4Image" />
        </template>
      </div>
    </q-scroll-area>
    <!-- <ClientOnly>
        <Slider
          class="mb-lg animation"
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
      </ClientOnly> -->

    <Transition
      enter-active-class="duration-500 ease-out"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0"
    >
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
          <picture class="pointer-events-none max-w-full w-full">
            <source
              media="(min-width: 900px)"
              srcset="/images/home_imgs/hero.webp"
              width="1500"
              height="600"
              class="w-full max-h-full"
            />
            <source
              media="(min-width: 320px)"
              srcset="/images/home_imgs/hero-mobile_1x.webp"
              width="375"
              height="270"
              class="w-full max-h-full"
            />
            <img
              src="/images/home_imgs/hero-mobile_1x.webp"
              alt="IfItDoesntMatchAnyMedia"
              width="375"
              height="270"
              class="w-full max-h-full"
            />
          </picture>
        </q-carousel-slide>
      </q-carousel>
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

.animation {
  animation: scale-down 0.8s ease-in-out forwards;
}

@keyframes scale-down {
  from {
    transform: translateY(-600px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
