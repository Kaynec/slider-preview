<script setup>
const phone_number = ref('')
</script>
<template>
  <div class="bg-transparent text-xs relative !mt-auto text-center footer">
    <QCard class="relative !rounded-t-2.5rem bg-dark px-lg pt-lg">
      <UpwardAngle />

      <div class="flex py-sm justify-center">
        <span class="span-border">خدمات</span>
        <span class="span-border">محصولات</span>
        <span class="span-border">بلاگ</span>
      </div>
      <div class="flex py-sm justify-center">
        <span class="span-border">درباره ما</span>
        <span class="span-border">محصولات ما</span>
        <span class="span-border">مشتریان</span>
      </div>

      <q-separator class="!my-4 text-text-secondary" />
      <div class="flex gap-3 py-lg justify-center">
        <div class="text-2xl i-carbon:logo-instagram" />
        <div class="text-2xl i-carbon:logo-linkedin" />
        <div class="text-2xl i-carbon:logo-twitter" />
      </div>
      <q-separator class="!my-2" />
      <!-- Bottom Part Of The Footer Section -->
      <div class="flex flex-col !gap-3 py-xs text-text-secondary">
        <div class="flex gap-1 items-center">
          <div class="text-lg i-carbon:phone text-primary" />
          021- ۱۲۳۴۵۶۷۸۹
        </div>
        <div class="flex gap-1 items-center">
          <div class="text-lg i-carbon:email text-primary" />
          Info@k................com
        </div>
        <div class="flex gap-1 items-center">
          <div class="text-lg i-carbon:location text-primary" />
          تهران , تهران
        </div>
      </div>
      <q-separator class="!my-2" />

      <div class="py-sm flex flex-col flex-basis-50% mx-auto gap-2">
        <h4 class="text-center text-primary text-lg">
          ما را معرفی کن تخفیف بگیر
        </h4>
      </div>
      <QInput
        rounded
        standout="bg-transparent"
        v-model="phone_number"
        label="شماره موبایل"
        class="!rounded-full b-1 b-#FFFFFF26 b-solid"
        color="text-primary"
        dense
      >
        <template v-slot:append>
          <q-icon name="send" class="-rotate-130" color="blue-10" />
        </template>
      </QInput>
      <h5 class="text_sm mt-lg">
        تمامی حقوق مادی و معنوی برای ...... محفوظ است
      </h5>
    </QCard>
  </div>
</template>
<style scoped>
.span-border {
  padding-inline: 24px;
  border-inline-start: 1px solid #ffffff4d;
}
.span-border:last-child {
  border-inline-end: none;
}

.footer {
  display: block;
}

@media screen and (width > 900px) {
  .footer {
    display: none;
  }
}
</style>
