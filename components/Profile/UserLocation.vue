<script setup lang="ts">
import OutlinedButton from '../OutlinedButton.vue'

const currentActiveAddressId = ref()

const model = ref([
  {
    name: 'تهران میدان فردوسی ، بین دارستانی و وصال، خ سرابی ، کوچه یاران ، پلاک ۱ واحد ۳',
    id: 1
  },
  {
    name: 'تهران بزرگراه رستگار جنوب ، بلوار کشاورز ، میدان خلیلی خ مهرداد غربی ، بن بست دلاوری  ، پلاک 5۱ واحد6',
    id: 2
  },
  {
    name: 'تهران میدان هاشمی ، خ مظفری دارستانی ، خ مهرداد غربی ، بن بست حکیم  ، پلاک 45۱ واحد 9',
    id: 3
  }
])

async function submitUserData() {
  console.log('user Data')
}

const currentAddress = ref()

const showEditAddress = ref(false)
const changeCurrentAddress = (address: typeof model.value[0]) => {
  currentAddress.value = address
  showEditAddress.value = true
}
</script>
<template>
  <QCard class="px-sm pb-xs bg-background-primary shadow-none">
    <EditAddress v-model="showEditAddress" :address="currentAddress" />
    <div class="flex items-center justify-between w-full pa-sm">
      <div class="flex gap-2 items-center">
        <div class="space-y-2">
          <h4 class="text-xl text-text-primary">انتخاب آدرس</h4>
        </div>
      </div>
      <OutlinedButton> افزودن آدرس جدید </OutlinedButton>
    </div>
    <section
      class="border-1 rounded-lg py-sm border-border-primary space-y-3 text-text-secondary"
    >
      <div
        v-for="address in model"
        class="flex justify-between px-1 gap-1 items-center"
        :class="{ 'text-primary': address.id === currentActiveAddressId }"
      >
        <QRadio
          v-model="currentActiveAddressId"
          :val="address.id"
          :label="address.name"
          class="basis-65% text-xs"
        />
        <button
          class="inline-flex gap-2 text_sm items-center"
          @click="changeCurrentAddress(address)"
        >
          <span>ویرایش آدرس</span>
          <CurvedLeftArrow
            class="stroke-text-secondary"
            :class="{ 'stroke-primary': address.id === currentActiveAddressId }"
          />
        </button>
      </div>
    </section>
  </QCard>
</template>
