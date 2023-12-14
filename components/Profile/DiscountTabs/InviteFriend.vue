<template>
  <div class="flex flex-col items-center gap-1 max-w-125 mx-auto gap-3">
    <img
      src="@/assets/discount-pic.png"
      alt="discount-pic.png"
      width="275"
      height="275"
    />
    <p class="text-text-secondary">
      کاربر گرامی شما میتوانید با معرفی ما به دوستان خود از تخفیف های ما
      برخوردار شوید.
    </p>
    <QInput
      type="tel"
      label=" شماره موبایل :"
      v-model="phone"
      standout="bg-transparent"
      bgColor="background-secondary"
      rounded
      class="w-full mb-2"
      :input-style="{ fontSize: '12px' }"
      input-class="text-white"
      dense
    />
    <PrimaryButton class="max-w-125 rounded-xl mb-4">
      ارسال دعوت نامه
    </PrimaryButton>
  </div>
</template>

<script setup lang="ts">
const phone = ref('***********')
</script>

<style scoped></style>
