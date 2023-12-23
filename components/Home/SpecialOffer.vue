<script setup>
import ControllerBig from '@/assets/home_imgs/cards/controller-big.png'
import Ps5Big from '@/assets/home_imgs/cards/ps5-big.svg?inline'

import HeadsetBig from '@/assets/home_imgs/cards/headset-big.png'
import VrBig from '@/assets/home_imgs/cards/Vr-Big.png'
</script>
<template>
  <Slider
    :loop="false"
    slider-class="px-sm"
    class="custom-spiderman-bg mx-auto !rounded-xl mb-lg w-full h-max cursor-pointer pb-xl"
    :slides-per-view="1.2"
    :pagination="{
      clickable: true
    }"
    :breakpoints="{
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      },
      1700: {
        slidesPerView: 4
      }
    }"
  >
    <SwiperSlide class="max-w-70">
      <div
        class="flex flex-col items-start ms-lg w-max ps-lg pt-8 relative justify-between gap-30 max-h-full min-h-115 sm:min-h-123 lg:min-h-130 xl:min-h-140"
      >
        <img
          src="@/assets/offer-text.svg?inline"
          class="f-w-120-144"
          alt="this is the special offer text"
        />

        <NuxtImg
          src="/images/home_imgs/cards/tall-ps5.png"
          alt="tall ps5"
          width="120"
          height="260"
          class="max-w-30 object-contain mb-lg lg:mb-0 !mt-auto absolute bottom-0 start-50% translate-x-50%"
        />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <SpecialOfferItem
        :img="ControllerBig"
        title="دسته PS5 - سفید"
        percent="5%"
        desc="مدل: دوال سنس سفید"
        price="3,450,000 تومان"
        :time="['22', '14', '35']"
        final-price="2.750.000 تومان"
        class="my-lg"
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
        class="my-lg"
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
        class="my-lg"
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
        class="my-lg"
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
        class="my-lg"
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
        class="my-lg"
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
        class="my-lg"
      />
    </SwiperSlide>
  </Slider>
</template>
<style lang="scss">
.custom-spiderman-bg {
  background: $background-primary;
  background-image: url('@/assets/login-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 -10.5rem;
}

@media screen and (max-width: 768px) {
  .custom-spiderman-bg {
    // background-position: -1rem -14.5rem;
    background-position: -1rem;
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
