<template>
  <QCard
    class="bg-background-primary px-2 py-3 shadow-none rounded-xl border-3 border-border-primary"
  >
    <div class="flex gap-2">
      <div class="flex gap-1.5 w-fit me-4">
        <section v-for="image in getImgs" class="min-w-6rem max-h-6rem">
          <QImg
            :src="image"
            fit="scale-down"
            class="rounded-xl w-full h-full aspect-1"
          />
        </section>
      </div>
      <div class="flex justify-between grow items-start pt-2">
        <div class="grid grid-cols-2 gap-x-2">
          <TextWithBullet label="تاریخ ثبت سفارش:" :value="submitionDate" />
          <TextWithBullet
            label="مبلغ سفارش:"
            :value="`${price.toString()} تومان `"
          />
          <TextWithBullet
            :label="`تاریخ ${getTextTypeForDateSection(purchaseStatus)} سفارش:`"
            :value="currentStatusDate"
          />
          <TextWithBullet label="کد پیگیری سفارش:" :value="transactionCode" />

          <TextWithBullet label="نحوه نصب:" :value="installType" />

          <!-- Current Text Bases On State example ongoing or cancelled -->

          <div
            class="flex gap-2 items-center py-3 flex-nowrap whitespace-nowrap ms-1"
          >
            <div
              :style="`background:${getCssVar(
                getCurrentState.backgroundColor
              )}`"
              class="!rounded-full w-5 h-5 flex items-center justify-center"
              v-if="getCurrentState.iconClass"
            >
              <div :class="getCurrentState.iconClass" />
            </div>
            <span v-html="getCurrentState.name"></span>
          </div>
        </div>
        <!--  -->

        <button class="inline-flex gap-2 text-primary my-auto">
          <span>جزییات سفارش</span>
          <CurvedLeftArrow class="stroke-primary" />
        </button>
      </div>
    </div>
  </QCard>
</template>

<script setup lang="ts">
import CodPicture from '@/assets/cod_pic.png'
import gamePicture from '@/assets/game_pic.png'
import { getCssVar } from 'quasar'

type PurchaseStatus = 'Returned' | 'Cancelled' | 'Delivered' | 'Ongoing'

const props = defineProps<{
  price: number
  transactionCode: string
  images?: string[]
  submitionDate: string
  currentStatusDate: string
  purchaseStatus: PurchaseStatus
  installType: string
}>()

const getTextTypeForDateSection = (
  type: 'Returned' | 'Cancelled' | 'Delivered' | 'Ongoing'
) => {
  switch (type) {
    case 'Returned':
      return 'مرجوع'
    case 'Cancelled':
      return 'لغو'
    default:
      return 'تحویل'
  }
}

const states = [
  {
    name: 'لغو شده توسط کاربر',
    iconClass: 'i-carbon-close',
    backgroundColor: 'negative',
    type: 'Cancelled'
  },
  {
    name: 'مرجوع شده توسط کاربر',
    iconClass: 'i-carbon-warning bg-warning',
    backgroundColor: '',
    type: 'Returned'
  },
  {
    name: 'تحویل داده شده',
    iconClass: 'i-carbon-checkmark',
    backgroundColor: 'positive',
    type: 'Delivered'
  },
  {
    name: `<span class='text-secondary ms-1'>در جریان ...</span>`,
    iconClass: '',
    backgroundColor: 'negative',
    type: 'Ongoing'
  }
]

const getCurrentState = states.find(el => el.type === props.purchaseStatus)!

const getImgs = computed(() =>
  props.images && props.images.length ? props.images : [CodPicture, gamePicture]
)
</script>
