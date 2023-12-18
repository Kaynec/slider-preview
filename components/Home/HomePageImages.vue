<script setup>
import Spiderman from '@/assets/home_imgs/cards/spiderman.png'
import Mario from '@/assets/home_imgs/cards/mario.png'
import Nintendo from '@/assets/home_imgs/cards/nintendo.png'
import Test from '@/assets/home_imgs/cards/test.png'
</script>
<template>
  <div class="grid md:grid-cols-5 gap-4 my-4xl">
    <div class="max-h-18rem md:col-span-3">
      <NuxtImg
        class="rounded-2xl w-full h-full"
        alt="game dynamic banner"
        src="/images/home_imgs/cards/spiderman.png"
      />
    </div>

    <div class="max-h-18rem md:col-span-2">
      <img
        class="rounded-2xl h-full object-cover"
        alt="game dynamic banner"
        :src="Mario"
      />
    </div>

    <div class="max-h-18rem md:col-span-2">
      <img
        class="rounded-2xl max-w-full"
        alt="game dynamic banner"
        :src="Nintendo"
      />
    </div>

    <div class="max-h-18rem md:col-span-3">
      <img
        class="rounded-2xl w-full h-full"
        alt="game dynamic banner"
        :src="Test"
      />
    </div>
  </div>

  <!-- <div class="row  w-full max-h-150">
    <div class="col-12 col-md-6">
      <QImg :src="Spiderman"></QImg>
    </div>
    <div class="col-12 col-md-6">
      <QImg :src="mario"></QImg>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-md-6">
      <QImg :src="Nintendo"></QImg>
    </div>
    <div class="col-12 col-md-6">
      <QImg :src="Test"></QImg>
    </div>
  </div> -->
</template>
