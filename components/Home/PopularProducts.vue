<script setup>
import ControllerBig from '@/assets/home_imgs/cards/Controller-Big.png'
import Ps5Big from '@/assets/home_imgs/cards/ps5-big.svg?inline'

import HeadsetBig from '@/assets/home_imgs/cards/Headset-Big.png'
import VrBig from '@/assets/home_imgs/cards/Vr-Big.png'
</script>
<template>
  <div class="flex flex-col gap-4 my-6xl">
    <span class="text_5xl heading">محصولات پر فروش</span>
    <p class="text-text-secondary">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
      طراحان گرافیک است،
    </p>
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-md-6 col-lg-3">
        <PopularProductItem
          :img="ControllerBig"
          title="دسته PS5 - سفید"
          percent="5%"
          desc="مدل: دوال سنس سفید"
          price="3,450,000 تومان"
          :time="['22', '14', '35']"
          final-price="2.750.000 تومان"
        />
      </div>
      <div class="col-12 col-md-6 col-lg-3">
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
      <div class="col-12 col-md-6 col-lg-3">
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
      <div class="col-12 col-md-6 col-lg-3">
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
    </div>
  </div>
</template>
