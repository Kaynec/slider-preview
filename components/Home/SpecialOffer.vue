<script setup>
import ControllerBig from '@/assets/home_imgs/cards/Controller-Big.png'
import Ps5Big from '@/assets/home_imgs/cards/ps5-big.svg'

import HeadsetBig from '@/assets/home_imgs/cards/Headset-Big.png'
import VrBig from '@/assets/home_imgs/cards/Vr-Big.png'
</script>
<template>
  <QCard
    :class="{ row: $q.screen.width > 1024 }"
    class="custom-spiderman-bg pa-sm md-pa-lg !m-y-sm full-width mx-auto !rounded-20px"
  >
    <div class="col-2 flex flex-col items-center justify-start gap-6">
      <h3 class="text-primary text-h5 text-bold md:max-w-20">
        پیشنهاد شگفت انگیز
      </h3>
      <q-img
        src="@/assets/home_imgs/cards/tall-ps5.png"
        width="120"
        height="160"
        class="max-w-30 object-contain"
      />
    </div>
    <div class="col-10 row q-col-gutter-sm">
      <div class="col-12 col-md-3">
        <SpecialOfferItem
          :img="ControllerBig"
          title="دسته PS5 - سفید"
          percent="5%"
          desc="مدل: دوال سنس سفید"
          price="3,450,000 تومان"
          :time="['22', '14', '35']"
          final-price="2.750.000 تومان"
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
        />
      </div>
    </div>
  </QCard>
</template>
<style lang="scss">
.custom-spiderman-bg {
  background-image: url('@/assets/login-bg.png');
  background-size: cover;
  background-position: 0 -5rem;
  background-repeat: no-repeat;
}
</style>
