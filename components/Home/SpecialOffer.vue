<script setup>
import ControllerBig from '@/assets/home_imgs/cards/controller-big.png'
import Ps5Big from '@/assets/home_imgs/cards/ps5-big.svg?inline'

import HeadsetBig from '@/assets/home_imgs/cards/headset-big.png'
import VrBig from '@/assets/home_imgs/cards/Vr-Big.png'
</script>
<template>
  <QCard
    :class="{ row: $q.screen.width > 1024 }"
    class="custom-spiderman-bg full-width mx-auto !rounded-20px row px-lg"
  >
    <div
      class="col-12 col-lg-2 flex flex-col items-center justify-between mt-4 gap-6"
    >
      <img
        src="../../assets/offer-text.svg?inline"
        class="f-w-120-144"
        alt="this is the special offer text"
      />

      <NuxtImg
        src="/images/home_imgs/cards/tall-ps5.png"
        alt="tall ps5"
        width="120"
        height="260"
        class="max-w-30 object-contain mb-lg lg:mb-0"
      />
    </div>
    <div class="col-12 col-lg-10 row q-col-gutter-sm">
      <div class="col-12 col-md-3">
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
      </div>
      <div class="col-12 col-md-3">
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
      </div>
      <div class="col-12 col-md-3">
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
      </div>
      <div class="col-12 col-md-3">
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
      </div>
    </div>
  </QCard>
</template>
<style lang="scss">
.custom-spiderman-bg {
  background: $background-primary;
  background-image: url('@/assets/login-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
}

@media screen and (max-width: 768px) {
  .custom-spiderman-bg {
    background-position: -1rem -14.5rem;
  }
}
</style>
