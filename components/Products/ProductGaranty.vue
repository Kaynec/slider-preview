<template>
  <QCard class="min-h-full q-pa-md flex flex-col gap-6 !rounded-2xl">
    <div
      class="flex flex-col gap-3 full-width items-start justify-end text-text-secondary"
    >
      <div class="flex gap-2 items-center">
        <Comment class="fill-gray" />
        ۳۵ نظر ثبت شده
      </div>
      <div class="flex gap-2 items-center">
        <Badge class="fill-gray" />
        گارانتی اصالت و سلامت فیزیکی کالا
      </div>
      <div class="flex gap-2 items-center">
        <ShipmentExpress class="fill-gray" />
        ارسال تا ۷ روز کاری آینده
      </div>
    </div>
    <!--  -->
    <q-separator />
    <h5 class="text-h5 text-text-primary">گارانتی محصول</h5>

    <q-radio
      class="translate-x-2 text-text-secondary"
      val="line"
      label="۱۰ روز مهلت تست رایگان و اصالت کالا (اورجینال)"
    />
    <q-radio
      class="translate-x-2 text-text-secondary"
      val="line"
      label="۱۲ ماه ضمانت خدمات و تعمیرات(+300,000 تومان)"
    />
    <q-separator />

    <div class="flex justify-between">
      <span class="line-through"> قیمت: </span>
      <span> ۲۸.۵۰۰.۰۰۰ تومان </span>
    </div>
    <PrimaryButton> افزودن به سبد خرید </PrimaryButton>
  </QCard>
</template>
