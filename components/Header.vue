<script setup lang="ts">
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
</script>
<template>
  <q-header class="bg-transparent p-2 absolute top-0">
    <!-- Bigger Part of Header -->
    <div class="flex items-center justify-between pt-3 relative">
      <img
        alt="absolute header background"
        src="@/assets/header-bg.svg"
        class="absolute inset-0 w-full"
      />

      <img
        src="@/assets/logo.png"
        class="relative max-w-25 2xl:max-w-35"
        alt="website logo"
      />

      <div
        class="flex flex-1 relative justify-between md:pl-4 md:pl-24 xl:pl-36 pr-6"
      >
        <NuxtLink v-for="link in links" :to="link.route" :key="link.name">{{
          link.name
        }}</NuxtLink>
        <!-- Toggle And content Below Toggle -->
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-4">
            <!-- Shop Icon -->
            <svg
              width="26"
              height="27"
              viewBox="0 0 26 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9597 8.95999C19.2897 8.21999 18.2797 7.78999 16.8797 7.63999V6.87999C16.8797 5.50999 16.2997 4.18999 15.2797 3.26999C14.2497 2.32999 12.9097 1.88999 11.5197 2.01999C9.12975 2.24999 7.11975 4.55999 7.11975 7.05999V7.63999C5.71975 7.78999 4.70975 8.21999 4.03975 8.95999C3.06975 10.04 3.09975 11.48 3.20975 12.48L3.90975 18.05C4.11975 20 4.90975 22 9.20975 22H14.7897C19.0897 22 19.8797 20 20.0897 18.06L20.7897 12.47C20.8997 11.48 20.9197 10.04 19.9597 8.95999ZM11.6597 3.40999C12.6597 3.31999 13.6097 3.62999 14.3497 4.29999C15.0797 4.95999 15.4897 5.89999 15.4897 6.87999V7.57999H8.50975V7.05999C8.50975 5.27999 9.97975 3.56999 11.6597 3.40999ZM8.41975 13.15H8.40975C7.85975 13.15 7.40975 12.7 7.40975 12.15C7.40975 11.6 7.85975 11.15 8.40975 11.15C8.96975 11.15 9.41975 11.6 9.41975 12.15C9.41975 12.7 8.96975 13.15 8.41975 13.15ZM15.4197 13.15H15.4097C14.8597 13.15 14.4097 12.7 14.4097 12.15C14.4097 11.6 14.8597 11.15 15.4097 11.15C15.9697 11.15 16.4197 11.6 16.4197 12.15C16.4197 12.7 15.9697 13.15 15.4197 13.15Z"
                fill="#979797"
              />
              <g clip-path="url(#clip0_14_438)">
                <rect
                  x="14"
                  y="15"
                  width="12"
                  height="12"
                  rx="6"
                  fill="#007AFF"
                />
                <path
                  d="M22.1411 17.705C22.1511 17.735 22.1727 17.81 22.2061 17.93C22.2394 18.0467 22.2744 18.1867 22.3111 18.35C22.3511 18.5133 22.3844 18.69 22.4111 18.88C22.4411 19.0667 22.4561 19.2417 22.4561 19.405C22.4561 19.735 22.4011 20.0217 22.2911 20.265C22.1844 20.5083 22.0444 20.71 21.8711 20.87C21.6977 21.03 21.5011 21.1483 21.2811 21.225C21.0611 21.3017 20.8411 21.34 20.6211 21.34C20.3777 21.34 20.1527 21.305 19.9461 21.235C19.7394 21.1617 19.5511 21.0717 19.3811 20.965C19.4477 21.5783 19.4877 22.155 19.5011 22.695C19.5144 23.235 19.5211 23.7217 19.5211 24.155V24.525C19.5144 24.6117 19.5111 24.7067 19.5111 24.81C19.5111 24.9133 19.5111 25.0033 19.5111 25.08H18.4311V23.945C18.4311 23.5517 18.4227 23.1283 18.4061 22.675C18.3927 22.2183 18.3594 21.7417 18.3061 21.245C18.2527 20.745 18.1744 20.2267 18.0711 19.69C17.9677 19.1533 17.8277 18.6033 17.6511 18.04L18.6911 17.705L18.9111 18.375C18.9111 18.3783 18.9261 18.4283 18.9561 18.525C18.9861 18.6183 19.0311 18.735 19.0911 18.875C19.1511 19.0117 19.2277 19.1617 19.3211 19.325C19.4144 19.485 19.5244 19.6333 19.6511 19.77C19.7777 19.9067 19.9211 20.0217 20.0811 20.115C20.2411 20.205 20.4211 20.25 20.6211 20.25C20.6644 20.25 20.7277 20.2433 20.8111 20.23C20.8944 20.2133 20.9777 20.1767 21.0611 20.12C21.1444 20.0633 21.2177 19.98 21.2811 19.87C21.3444 19.7567 21.3761 19.6017 21.3761 19.405C21.3761 19.2983 21.3661 19.18 21.3461 19.05C21.3261 18.9167 21.3011 18.7867 21.2711 18.66C21.2411 18.53 21.2094 18.41 21.1761 18.3C21.1461 18.19 21.1211 18.1033 21.1011 18.04L22.1411 17.705Z"
                  fill="white"
                />
              </g>
              <rect
                x="14.5"
                y="15.5"
                width="11"
                height="11"
                rx="5.5"
                stroke="#182A3E"
              />
              <defs>
                <clipPath id="clip0_14_438">
                  <rect
                    x="14"
                    y="15"
                    width="12"
                    height="12"
                    rx="6"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
            <div class="bg-#24272C rounded-xl px-2 py-1">
              <!-- @click="toggleDarkMode(true)" -->
              <!-- TODO Rechange This  -->
              <q-btn
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
            class="bg-opacity-40 px-2 py-1 bg-#007AFF1A text-primary !rounded-full border-1px border-solid border-#007AFF"
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
        class="w-62% mx-auto absolute top-4.5rem xl:top-5.25rem 2xl:top-7.2rem left-1/2 -translate-x-1/2"
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
    <!--  -->
  </q-header>
</template>
