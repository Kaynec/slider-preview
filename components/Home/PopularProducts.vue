<script setup>
import ControllerBig from '@/assets/home_imgs/cards/controller-big.png'
import Ps5Big from '@/assets/home_imgs/cards/ps5-big.svg?inline'

import HeadsetBig from '@/assets/home_imgs/cards/headset-big.png'
import VrBig from '@/assets/home_imgs/cards/Vr-Big.png'
</script>
<template>
  <div class="flex flex-col gap-4 my-6xl cursor-pointer">
    <span class="text_5xl heading">محصولات پر فروش</span>
    <p class="text-text-secondary">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
      طراحان گرافیک است،
    </p>

    <Slider
      :loop="false"
      :pagination="{
        clickable: true
      }"
      slider-class=""
      class="mx-auto mb-lg"
      :slides-per-view="1.1"
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
      <SwiperSlide class="pb-xl">
        <PopularProductItem
          :img="Ps5Big"
          title="دسته PS5 - سفید"
          percent="5%"
          desc="مدل: دوال سنس سفید"
          price="3,450,000 تومان"
          :time="['22', '14', '35']"
          final-price="2.750.000 تومان"
        />
      </SwiperSlide>
      <SwiperSlide class="pb-xl">
        <PopularProductItem
          :img="Ps5Big"
          title="دسته PS5 - سفید"
          percent="5%"
          desc="مدل: دوال سنس سفید"
          price="3,450,000 تومان"
          :time="['22', '14', '35']"
          final-price="2.750.000 تومان"
        />
      </SwiperSlide>
      <SwiperSlide class="pb-xl">
        <PopularProductItem
          :img="HeadsetBig"
          title="دسته PS5 - سفید"
          percent="5%"
          desc="مدل: دوال سنس سفید"
          price="3,450,000 تومان"
          :time="['22', '14', '35']"
          final-price="2.750.000 تومان"
        />
      </SwiperSlide>
      <SwiperSlide class="pb-xl">
        <PopularProductItem
          :img="VrBig"
          title="دسته PS5 - سفید"
          percent="5%"
          desc="مدل: دوال سنس سفید"
          price="3,450,000 تومان"
          :time="['22', '14', '35']"
          final-price="2.750.000 تومان"
        />
      </SwiperSlide>
      <SwiperSlide class="pb-xl">
        <PopularProductItem
          :img="Ps5Big"
          title="دسته PS5 - سفید"
          percent="5%"
          desc="مدل: دوال سنس سفید"
          price="3,450,000 تومان"
          :time="['22', '14', '35']"
          final-price="2.750.000 تومان"
        />
      </SwiperSlide>
      <SwiperSlide class="pb-xl">
        <PopularProductItem
          :img="Ps5Big"
          title="دسته PS5 - سفید"
          percent="5%"
          desc="مدل: دوال سنس سفید"
          price="3,450,000 تومان"
          :time="['22', '14', '35']"
          final-price="2.750.000 تومان"
        />
      </SwiperSlide>
      <SwiperSlide class="pb-xl">
        <PopularProductItem
          :img="HeadsetBig"
          title="دسته PS5 - سفید"
          percent="5%"
          desc="مدل: دوال سنس سفید"
          price="3,450,000 تومان"
          :time="['22', '14', '35']"
          final-price="2.750.000 تومان"
        />
      </SwiperSlide>
      <SwiperSlide class="pb-xl">
        <PopularProductItem
          :img="VrBig"
          title="دسته PS5 - سفید"
          percent="5%"
          desc="مدل: دوال سنس سفید"
          price="3,450,000 تومان"
          :time="['22', '14', '35']"
          final-price="2.750.000 تومان"
        />
      </SwiperSlide>
    </Slider>
  </div>
</template>
