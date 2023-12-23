<template>
  <div class="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur z-9999">
    <aside
      show-if-above
      :width="200"
      :breakpoint="500"
      class="absolute inset-0 w-95% max-w-180 bg-background-primary z-99"
      ref="aside"
    >
      <!-- Close Icon -->
      <button class="absolute -end-5 top-8 z-999" @click="toggleDrawer">
        <svg
          width="55"
          height="55"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_402_8174)">
            <circle
              cx="14"
              cy="14"
              r="14"
              transform="matrix(-1 0 0 1 36 8)"
              fill="#007AFF"
            />
          </g>
          <path
            d="M19.5016 29.2253C19.6599 29.2253 19.8182 29.1669 19.9432 29.0419L25.3766 23.6086C26.2599 22.7253 26.2599 21.2753 25.3766 20.3919L19.9432 14.9586C19.7016 14.7169 19.3016 14.7169 19.0599 14.9586C18.8182 15.2003 18.8182 15.6003 19.0599 15.8419L24.4932 21.2753C24.8932 21.6753 24.8932 22.3253 24.4932 22.7253L19.0599 28.1586C18.8182 28.4003 18.8182 28.8003 19.0599 29.0419C19.1849 29.1586 19.3432 29.2253 19.5016 29.2253Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_402_8174"
              x="0"
              y="0"
              width="44"
              height="44"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="2"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_402_8174"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0.478431 0 0 0 0 1 0 0 0 0.4 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_402_8174"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_402_8174"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </button>

      <!--  -->

      <q-scroll-area class="fit">
        <div class="flex flex-col items-center px-2xl">
          <img
            src="@/assets/logo.png"
            class="relative aspect-1"
            alt="website logo"
          />
          <NuxtLink
            v-for="link in links"
            @click="toggleDrawer"
            :to="link.route"
            class="self-start w-full py-2"
            exact-active-class="text-primary"
          >
            {{ link.name }}
            <q-separator class="!my-xs" />
          </NuxtLink>
          <div class="flex justify-between w-full items-center">
            <span>تم سایت:</span>
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
        </div>
      </q-scroll-area>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { links } from '@/layouts/links'
import { onClickOutside } from '@vueuse/core'

const drawer = ref(false)

const aside = ref()

const emit = defineEmits(['close'])
const toggleDrawer = () => {
  emit('close')
}
onClickOutside(aside, () => {
  toggleDrawer()
})
</script>
