<script setup>
const phone_number = ref('')
</script>
<template>
  <q-footer class="bg-transparent text-xs sticky bottom-0 !mt-auto">
    <QCard class="relative rounded-t-4rem px-8xl bg-dark">
      <UpwardAngle />
      <div class="content flex flex-col">
        <!-- Logo And Top Part Of The Footer Section -->
        <div class="flex justify-between items-center">
          <img
            src="@/assets/logo.png"
            class="relative max-w-20 mix-blend-difference"
            alt="foooter logo"
          />
          <div class="flex gap-15">
            <span class="span-border">خدمات</span>
            <span class="span-border">محصولات</span>
            <span class="span-border">بلاگ</span>
            <span class="span-border">درباره ما</span>
            <span class="span-border">محصولات ما</span>
            <span class="span-border">مشتریان</span>
          </div>
          <div class="flex gap-3">
            <div class="text-2xl i-carbon:logo-instagram" />
            <div class="text-2xl i-carbon:logo-linkedin" />
            <div class="text-2xl i-carbon:logo-twitter" />
          </div>
        </div>
        <q-separator class="my-4 xl:my-1 2xl:my-0" />
        <!-- Bottom Part Of The Footer Section -->
        <div class="flex justify-between items-center">
          <div class="flex flex-col gap-2 text-text-primary">
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
          <div class="flex flex-col flex-basis-50% gap-2">
            <h4 class="text-center text-primary text-lg">
              ما را معرفی کن تخفیف بگیر
            </h4>
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
          </div>
          <span class="text-xs"
            >تمامی حقوق مادی و معنوی برای ...... محفوظ است</span
          >
        </div>
      </div>
    </QCard>
  </q-footer>
</template>
<style scoped>
.span-border {
  padding-inline-end: 24px;
  border-inline-end: 2px solid #ffffff4d;
}
.span-border:last-child {
  border-inline-end: none;
}
</style>
