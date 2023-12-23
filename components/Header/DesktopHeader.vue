<script setup lang="ts">
import { useQuasar } from 'quasar'

defineProps<{
  scrollAmount: number
}>()

// import { links } from '@/layouts/links'
import { links } from '@/layouts/links'
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
</script>
<template>
  <TransitionGroup>
    <q-header
      :class="{
        'w-full max-w-90rem': scrollAmount > 0,
        'mx-auto max-w-full ': scrollAmount <= 0
      }"
      class="bg-transparent mx-auto transition-600 absolute top-0"
    >
      <Transition
        enter-active-class="duration-500 ease-out"
        enter-from-class="transform opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="transform opacity-0"
      >
        <img
          v-if="scrollAmount"
          alt="absolute header background"
          src="@/assets/header-bg-sm.svg?inline"
          class="absolute inset-0 w-full"
        />
      </Transition>
      <!-- Bigger Part of Header -->
      <div class="flex items-start justify-between pt-2 relative">
        <img
          src="@/assets/logo.png"
          class="relative max-w-25 2xl:max-w-35 -translate-y-5"
          alt="website logo"
        />

        <div
          class="flex flex-1 relative justify-between md:pl-4 md:pl-24 xl:pl-36 pr-6 pt-4"
        >
          <NuxtLink
            class="f-text-8-12 pt-3"
            v-for="link in links"
            :to="link.route"
            :key="link.name"
            >{{ link.name }}</NuxtLink
          >
          <!-- Toggle And content Below Toggle -->
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-4">
              <button @click="navigateTo('/basket')">
                <HeaderShopIcon class="!cursor-pointer" />
              </button>
              <div class="bg-#24272C rounded-xl px-2">
                <!-- @click="toggleDarkMode(true)" -->
                <!-- TODO Rechange This  -->
                <q-btn
                  class=""
                  :class="{ 'bg-#0F1214': $q.dark.isActive }"
                  flat
                  icon="dark_mode"
                  dense
                  round
                />
                <q-btn
                  class="relative"
                  :class="{ 'bg-#0F1214': !$q.dark.isActive }"
                  flat
                  icon="light_mode"
                  dense
                  round
                />
              </div>
            </div>
            <!-- TODO Make This Dynamic -->
            <button
              @click="$router.push('/Profile')"
              class="bg-opacity-40 px-2 text-xs bg-#007AFF1A text-primary !rounded-full border-1px border-solid border-#007AFF"
            >
              <QIcon name="portrait" size="24px" />
              <!-- TODO Make This Dynamic -->
              <!-- {{  }} -->
              کاربر مهمان
            </button>
          </div>
          <!--  -->
        </div>
        <!-- before:bg-#121212 -->
        <div
          class="w-62% mx-auto absolute top-[3.85rem] lg:top-[4.7rem] xl:top-[5.4rem] 2xl:xl:top-[5.8rem] left-1/2 translate-x-1/2"
        >
          <QInput
            rounded
            standout="bg-transparent"
            v-model="search"
            label="جست و جو کنید"
            class="z-3 !rounded-full"
            bgColor="grey-10"
            :dark="true"
          >
            <template v-slot:prepend>
              <q-icon name="search" color="blue-10" />
            </template>
          </QInput>
        </div>
      </div>
    </q-header>
  </TransitionGroup>
</template>
