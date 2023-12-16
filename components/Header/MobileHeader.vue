<script setup lang="ts">
import { vAutoAnimate } from '@formkit/auto-animate'
import { useQuasar } from 'quasar'
// import { links } from '@/layouts/links'
import { links } from '../layouts/links'
const q = useQuasar()

const search = ref('')

const toggleDarkMode = (val: boolean) => {
  q.dark.set(val)
  if (val) {
    document.querySelector('html')?.classList.add('dark')
  } else {
    document.querySelector('html')?.classList.remove('dark')
  }
}

const drawer = ref(false)
</script>
<template>
  <q-header class="absolute top-0 bg-transparent p-2" v-auto-animate>
    <MobileDrawer v-if="drawer" @close="drawer = !drawer" />
    <div class="!min-h-35 flex items-center justify-between relative">
      <!-- Top Css hack For Background cause it's not full -->
      <div
        class="absolute top-3 w-full h-13 bg-background-primary rounded-lg"
      ></div>
      <!--  -->
      <img
        alt="absolute header background"
        src="@/assets/mobile-header.svg?inline"
        class="absolute object-cover w-full"
      />
      <div class="flex flex-1 relative items-center justify-between px-6 pb-12">
        <button @click="drawer = !drawer">
          <div class="i-carbon-menu text-lg"></div>
        </button>
        <img
          src="@/assets/logo.png"
          class="relative max-w-15"
          alt="website logo"
        />
        <HeaderShopIcon />
      </div>
      <div
        class="w-52% mx-auto absolute top-5.5rem 2xl:top-7.2rem left-1/2 translate-x-1/2"
      >
        <QInput
          rounded
          standout="bg-transparent"
          v-model="search"
          label="جست و جو کنید"
          class="z-3 !rounded-full"
          bgColor="grey-10"
          :dark="true"
          dense
        >
          <template v-slot:prepend>
            <q-icon name="search" color="blue-10" />
          </template>
        </QInput>
      </div>
    </div>
    <!--  -->
  </q-header>
</template>
