<template>
  <div
    class="rounded-1rem mb-4xl flex gap-8 !p-0 !items-stretch flex-col lg:flex-row"
  >
    <div class="min-w-75 mx-lg lg:m-0">
      <q-tabs
        v-model="userTab"
        vertical
        class="text-text-secondary bg-background-primary b-none rounded-lg pa-2 text-right"
        indicator-color="transparent"
        active-color="primary"
        inline-label
      >
        <q-tab
          :class="{ 'bg-primary-light': userTab === icon.key }"
          :name="icon.key"
          class="rounded-lg"
          content-class="flex  gap-2 !w-full !justify-start !rounded-lg"
          v-for="icon in icons"
        >
          <template #default>
            <component
              :style="`
                color: ${
                  icon.key === userTab ? getCssVar('primary') : '#636363'
                };
              `"
              class="!w-7 !h-7"
              :is="icon.icon"
            />

            {{ icon.name }}
          </template>
        </q-tab>
      </q-tabs>
    </div>

    <div class="flex-1">
      <q-tab-panels
        v-model="userTab"
        animated
        swipeable
        vertical
        class="bg-transparent !p-0 !m-0"
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel name="UserInformation" key="userInformation">
          <UserInformation />
        </q-tab-panel>
        <q-tab-panel name="Location" key="Location">
          <UserLocation />
        </q-tab-panel>
        <q-tab-panel name="Discount" key="Discount">
          <UserDiscount />
        </q-tab-panel>
        <q-tab-panel name="Notification" key="Notification">
          <UserNotification />
        </q-tab-panel>
        <q-tab-panel name="Favourite" key="Favourite">
          <UserFavourite />
        </q-tab-panel>
        <q-tab-panel name="PurchaseHistory" key="PurchaseHistory">
          <UserPurchaseHistory />
        </q-tab-panel>
        <q-tab-panel name="RepairHistory" key="RepairHistory">
          <UserRepairHistory />
        </q-tab-panel>
        <q-tab-panel name="GameServiceHistory" key="GameServiceHistory">
          <UserGameHistory />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserInformation from '@/components/Profile/UserInformation.vue'
import { getCssVar } from 'quasar'

import UserIcon from '@/assets/icons/user.svg'

import BasketIcon from '@/assets/icons/basket.svg'
import ShoppingCardIcon from '@/assets/icons/shop.svg'
import JoystickIcon from '@/assets/icons/joystick.svg'
import HeartIcon from '@/assets/icons/heart.svg'
import LocationIcon from '@/assets/icons/location.svg'
import NotificationIcon from '@/assets/icons/notification.svg'
import DiscountCode from '@/assets/icons/discount.svg'
import SignOutIcon from '@/assets/icons/signout.svg'
import UserDiscount from '@/components/Profile/UserDiscount.vue'

const icons = [
  { key: 'UserInformation', name: 'اطلاعات کاربری', icon: UserIcon },
  { key: 'PurchaseHistory', name: 'تاریخچه خرید', icon: BasketIcon },
  {
    key: 'GameServiceHistory',
    name: 'تاریخچه خدمات بازی',
    icon: ShoppingCardIcon
  },
  { key: 'RepairHistory', name: 'تاریخچه تعمیرات', icon: JoystickIcon },
  { key: 'Favourite', name: 'محصولات مورد علاقه', icon: HeartIcon },
  { key: 'Location', name: 'آدرس ها', icon: LocationIcon },
  { key: 'Notification', name: 'اعلانات', icon: NotificationIcon },
  { key: 'Discount', name: 'کد تخفیف', icon: DiscountCode },
  { key: '', name: 'خروج از حساب کاربری', icon: SignOutIcon }
]

const initialTab = 'UserInformation'

const userTab = ref(initialTab)

useSeoMeta({
  title: 'Cheats  - profile page',
  ogTitle: 'Cheats  - profile page',
  description: 'پروفایل کاربری',
  ogDescription: 'پروفایل کاربری'
})

definePageMeta({
  currentPageName: 'پروفایل کاربری'
})
</script>
