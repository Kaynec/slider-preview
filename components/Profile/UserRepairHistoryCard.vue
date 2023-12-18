<template>
  <QCard
    class="bg-background-primary px-2 py-3 shadow-none rounded-xl border-3 border-border-primary"
  >
    <div class="flex gap-2">
      <div class="flex items-start gap-3">
        <section
          class="rounded-lg min-w-6rem max-h-6rem bg-background-secondary border-1px border-solid border-#303030 pa-sm"
        >
          <QImg :src="getImg" fit="scale-down" class="w-full h-full aspect-1" />
        </section>
        <!-- Name Section On Smaller Displays -->
        <div class="text-lg pt-xl lg:hidden">
          {{ name }}
        </div>
      </div>

      <div class="flex justify-between grow items-start pt-2">
        <div
          class="grid grid-cols-2 lg:grid-cols-3 xl:gap-x-7 lg:gap-x-4 md:gap-x-3 gap-x-2 gap-y-3 ms-3"
        >
          <!-- Name Section On Large Displays -->
          <div class="text-lg hidden !lg:inline-grid">
            {{ name }}
          </div>
          <!--  -->
          <TextWithBullet label="تاریخ ثبت سفارش:" :value="submitionDate" />
          <TextWithBullet
            label="مبلغ سفارش:"
            :value="`${price.toString()} تومان `"
          />
          <TextWithBullet label="تاریخ ذخیره خرابی:" value="1402/08/23" />
          <TextWithBullet :label="`تاریخ  سفارش:`" :value="currentStatusDate" />
          <TextWithBullet label="کد پیگیری سفارش:" :value="transactionCode" />
        </div>
        <!-- This Little Part Is Dynamic based On The Condition we are inside -->

        <div
          class="flex flex-row pt-5 lg:p-0 lg:flex-col gap-2 md:gap-4 items-end my-auto"
        >
          <template v-if="repairType === 'Saved'">
            <button class="border-2 border-negative p-1 rounded">
              <TrashCan class="stroke-negative w-6 h-6" />
            </button>

            <button class="inline-flex gap-2 text-primary">
              <span>ثبت درخواست تعمیر</span>
              <CurvedLeftArrow class="stroke-primary" />
            </button>
          </template>
          <template v-else-if="repairType === 'Ongoing'">
            <button class="inline-flex gap-2 text-primary">
              <span>جزییات تعمیرات</span>
              <CurvedLeftArrow class="stroke-primary" />
            </button>
          </template>
          <template v-else-if="repairType === 'Repaired'">
            <button class="inline-flex gap-2 text-primary">
              <span>جزییات تعمیرات</span>
              <CurvedLeftArrow class="stroke-primary" />
            </button>
          </template>
          <template v-else-if="repairType === 'Cancelled'">
            <button class="inline-flex gap-2 text-primary">
              <span>تعمیر</span>
              <CurvedLeftArrow class="stroke-primary" />
            </button>
          </template>
        </div>
        <!-- End OF Section -->
      </div>
    </div>
  </QCard>
</template>

<script setup lang="ts">
import defaultControllerImage from '@/assets/home_imgs/cards/controller-big.png'

type RepairType = 'Saved' | 'Cancelled' | 'Repaired' | 'Ongoing'

const props = defineProps<{
  price: number
  transactionCode: string
  image?: string
  name: string
  submitionDate: string
  currentStatusDate: string
  repairType: RepairType
}>()

const getImg = computed(() => props.image ?? defaultControllerImage)
</script>
