<script setup>
import ControllerBig from '@/assets/home_imgs/cards/controller-big.png'
import Ps5Big from '@/assets/home_imgs/cards/ps5-big.png'

import HeadsetBig from '@/assets/home_imgs/cards/headset-big.png'
import VrBig from '@/assets/home_imgs/cards/Vr-Big.png'
</script>
<template>
  <div class="gap-4 my-6xl cursor-pointer">
    <span class="text_header heading">محصولات پر فروش</span>
    <p class="text-text-secondary">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
      طراحان گرافیک است،
    </p>

    <Slider class="!pb-4rem">
      <div class="embla__slide">
        <PopularProductItem
          :img="Ps5Big"
          title="دسته PS5 - سفید"
          percent="5%"
          desc="مدل: دوال سنس سفید"
          price="3,450,000 تومان"
          :time="['22', '14', '35']"
          final-price="2.750.000 تومان"
        />
      </div>
      <div class="embla__slide">
        <PopularProductItem
          :img="Ps5Big"
          title="دسته PS5 - سفید"
          percent="5%"
          desc="مدل: دوال سنس سفید"
          price="3,450,000 تومان"
          :time="['22', '14', '35']"
          final-price="2.750.000 تومان"
        />
      </div>
      <div class="embla__slide">
        <PopularProductItem
          :img="HeadsetBig"
          title="دسته PS5 - سفید"
          percent="5%"
          desc="مدل: دوال سنس سفید"
          price="3,450,000 تومان"
          :time="['22', '14', '35']"
          final-price="2.750.000 تومان"
        />
      </div>
      <div class="embla__slide">
        <PopularProductItem
          :img="VrBig"
          title="دسته PS5 - سفید"
          percent="5%"
          desc="مدل: دوال سنس سفید"
          price="3,450,000 تومان"
          :time="['22', '14', '35']"
          final-price="2.750.000 تومان"
        />
      </div>
      <div class="embla__slide">
        <PopularProductItem
          :img="Ps5Big"
          title="دسته PS5 - سفید"
          percent="5%"
          desc="مدل: دوال سنس سفید"
          price="3,450,000 تومان"
          :time="['22', '14', '35']"
          final-price="2.750.000 تومان"
        />
      </div>
      <div class="embla__slide">
        <PopularProductItem
          :img="Ps5Big"
          title="دسته PS5 - سفید"
          percent="5%"
          desc="مدل: دوال سنس سفید"
          price="3,450,000 تومان"
          :time="['22', '14', '35']"
          final-price="2.750.000 تومان"
        />
      </div>
      <div class="embla__slide">
        <PopularProductItem
          :img="HeadsetBig"
          title="دسته PS5 - سفید"
          percent="5%"
          desc="مدل: دوال سنس سفید"
          price="3,450,000 تومان"
          :time="['22', '14', '35']"
          final-price="2.750.000 تومان"
        />
      </div>
      <div class="embla__slide">
        <PopularProductItem
          :img="VrBig"
          title="دسته PS5 - سفید"
          percent="5%"
          desc="مدل: دوال سنس سفید"
          price="3,450,000 تومان"
          :time="['22', '14', '35']"
          final-price="2.750.000 تومان"
        />
      </div>
    </Slider>
  </div>
</template>
