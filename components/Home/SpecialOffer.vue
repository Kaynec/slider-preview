<script setup lang="ts">
import ControllerBig from '@/assets/home_imgs/cards/controller-big.png'
import Ps5Big from '@/assets/home_imgs/cards/ps5-big.svg?inline'

import HeadsetBig from '@/assets/home_imgs/cards/headset-big.png'
import VrBig from '@/assets/home_imgs/cards/Vr-Big.png'

const cardRef = ref()

const height = ref(250)

const calculateHeight = () => {
  const rectHeight = cardRef.value?.$el?.getBoundingClientRect().height
  if (!rectHeight) return

  height.value = rectHeight
}

onMounted(() => {
  calculateHeight()
  window.addEventListener('resize', calculateHeight)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateHeight)
})
</script>
<template>
  <Slider
    ref="sliderRef"
    :loop="false"
    slider-class="px-xs"
    class="custom-spiderman-bg mx-auto !rounded-xl mb-lg w-full h-max cursor-pointer pb-xl"
    :slides-per-view="1.7"
    :pagination="{
      clickable: true
    }"
    :breakpoints="{
      600: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      },
      1700: {
        slidesPerView: 5
      }
    }"
  >
    <SwiperSlide class="flex flex-col items-center relative">
      <div
        class="ms-lg w-max ps-lg relative bottom-0 max-h-full"
        :style="`min-height:${height}px`"
      >
        <img
          src="@/assets/offer-text.svg?inline"
          class="f-w-90-110 max-h-45 pt-4"
          alt="this is the special offer text"
        />

        <NuxtImg
          src="/images/home_imgs/cards/tall-ps5.png"
          alt="tall ps5"
          style="width: min(25vw, 75px); height: min(210px, 18rem)"
          class="absolute bottom-3 start-50% translate-x-50%"
        />
      </div>
    </SwiperSlide>

    <SwiperSlide class="pb-lg" ref="cardRef">
      <SpecialOfferItem
        :img="ControllerBig"
        title="دسته PS5 - سفید"
        percent="5%"
        desc="مدل: دوال سنس سفید"
        price="3,450,000 تومان"
        :time="['22', '14', '35']"
        final-price="2.750.000 تومان"
        class="mt-lg"
      />
    </SwiperSlide>
    <SwiperSlide>
      <SpecialOfferItem
        :img="Ps5Big"
        title="دسته PS5 - سفید"
        percent="5%"
        desc="مدل: دوال سنس سفید"
        price="3,450,000 تومان"
        :time="['22', '14', '35']"
        final-price="2.750.000 تومان"
        class="mt-lg"
      />
    </SwiperSlide>
    <SwiperSlide>
      <SpecialOfferItem
        :img="HeadsetBig"
        title="دسته PS5 - سفید"
        percent="5%"
        desc="مدل: دوال سنس سفید"
        price="3,450,000 تومان"
        :time="['22', '14', '35']"
        final-price="2.750.000 تومان"
        class="mt-lg"
      />
    </SwiperSlide>
    <SwiperSlide>
      <SpecialOfferItem
        :img="VrBig"
        title="دسته PS5 - سفید"
        percent="5%"
        desc="مدل: دوال سنس سفید"
        price="3,450,000 تومان"
        :time="['22', '14', '35']"
        final-price="2.750.000 تومان"
        class="mt-lg"
      />
    </SwiperSlide>
    <SwiperSlide>
      <SpecialOfferItem
        :img="VrBig"
        title="دسته PS5 - سفید"
        percent="5%"
        desc="مدل: دوال سنس سفید"
        price="3,450,000 تومان"
        :time="['22', '14', '35']"
        final-price="2.750.000 تومان"
        class="mt-lg"
      />
    </SwiperSlide>
    <SwiperSlide>
      <SpecialOfferItem
        :img="VrBig"
        title="دسته PS5 - سفید"
        percent="5%"
        desc="مدل: دوال سنس سفید"
        price="3,450,000 تومان"
        :time="['22', '14', '35']"
        final-price="2.750.000 تومان"
        class="mt-lg"
      />
    </SwiperSlide>
    <SwiperSlide>
      <SpecialOfferItem
        :img="VrBig"
        title="دسته PS5 - سفید"
        percent="5%"
        desc="مدل: دوال سنس سفید"
        price="3,450,000 تومان"
        :time="['22', '14', '35']"
        final-price="2.750.000 تومان"
        class="mt-lg"
      />
    </SwiperSlide>
  </Slider>
</template>
<style lang="scss">
.custom-spiderman-bg {
  background: $background-primary;
  // background: red;
  background-image: url('@/assets/login-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0;
  border-radius: 1rem !important;
}

@media screen and (max-width: 768px) {
  .custom-spiderman-bg {
    // background-position: -1rem -14.5rem;
    background-position: -1rem;
    // border-radius: 1.5rem !important;
  }
}
</style>

<!--TODO This is Just For Special Price part Change it In Different Sections  -->
<style>
.swiper-pagination {
  /* ... other styles ... */
  bottom: -5px !important;
}
</style>
