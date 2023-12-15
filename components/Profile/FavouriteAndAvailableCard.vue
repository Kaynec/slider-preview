<template>
  <QCard
    class="bg-background-primary px-4 py-6 shadow-none rounded-xl border-3 border-border-primary"
  >
    <div class="flex items-start gap-6 justify-center">
      <section
        class="rounded-lg basis-full lg:basis-6rem bg-background-secondary border-1px border-solid border-#303030 pa-sm"
      >
        <QImg :src="getImg" fit="scale-down" />
      </section>
      <div class="flex justify-between grow items-start ps-3">
        <div>
          <h5 class="pb-3 f-text-13-20 translate-x-3">
            {{ name }}
          </h5>
          <h6 class="text-text-secondary relative f-text-10-13">
            <Bullet
              class="absolute -start-3 fill-primary shadow-2xl top-1/2 !rounded-full bg-primary w-1.25 h-1.25"
            />
            قیمت محصول :
            <span class="text-text-primary"> {{ price }} تومان </span>
          </h6>
        </div>
      </div>
    </div>
    <div class="btns flex flex-col lg:flex-row gap-5 pt-3xl">
      <div class="flex-1">
        <OutlinedButton
          class="border-accent text-accent flex items-center !rounded-2xl w-full h-13 justify-center !p-0 max-w-45"
        >
          <TrashCan class="stroke-negative me-3" />
          حذف
        </OutlinedButton>
      </div>
      <!-- Showing Two Seperate Buttons based on their availablee status -->
      <div class="flex-1" v-if="notAvailable">
        <button
          class="h-13 w-full relative justify-center !p-0 !rounded-2xl custom-bg flex items-center gap-1"
        >
          <div
            class="absolute bg-primary-light rounded-es-xl rounded-ee-xl rounded-ss-xl rounded-es-xl rounded-se-lg inset-0 t"
          ></div>
          <div class="i-carbon-warning bg-#FFCE20 text-xl" />
          عدم موجودی
        </button>
      </div>
      <div class="flex-1" v-else>
        <PrimaryButton class="h-13 justify-center !p-0 !rounded-2xl">
          <Bag class="fill-text-primary me-3" />
          افزودن به سبد خرید
        </PrimaryButton>
      </div>
    </div>
  </QCard>
</template>

<script setup lang="ts">
import defaultImage from '@/assets/home_imgs/cards/Controller-Big.png'

const props = defineProps<{
  name: string
  price: number
  discount: number
  discountCode: string
  image?: string
  notAvailable?: boolean
}>()

const getImg = computed(() => props.image ?? defaultImage)
</script>
<style scoped>
.custom-bg {
  background: url('@/assets/gradient-button.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.card-with-border {
  position: relative;
  z-index: 999;
}

.card-with-border::before {
  content: '';
  position: absolute;
  border-bottom-left-radius: 1rem;
  left: 0;
  bottom: 0;
  width: 35%;
  height: 75%;
  background: linear-gradient(
    to bottom,
    #74a1d2ad,
    #4f94deac,
    #4262859b,
    #163250ae
  );
  z-index: -1;
}

.card-with-border::after {
  content: '';
  position: absolute;
  border-bottom-left-radius: 1rem;
  left: 1px;
  bottom: 1px;
  width: 40%;
  height: 75%;
  background: inherit;
  z-index: -1;
}

.left-border {
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
  height: 75%;

  background: linear-gradient(
    to bottom,
    #74a1d276,
    #4f94deac,
    #4262859b,
    #163250ae
  );
  z-index: -1;
}
.left-border-overlay {
  content: '';
  position: absolute;
  border-top-right-radius: 1rem;
  width: 40%;
  height: 75%;
  background: inherit;
  right: 1px;
  top: 1px;
  z-index: -1;
}
</style>
