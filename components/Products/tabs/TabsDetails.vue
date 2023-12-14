<template>
  <div class="flex flex-col items-start mb-3xl">
    <h4 class="text-primary pb-lg text-xl">مشخصات کلی</h4>
    <SmallDetail label="ابعاد" desc="10.6x16x6.6cm" />
    <SmallDetail
      label="امکانات ارتباطی"
      desc="بلوتوث - کابل USB-C - جک 3.5 میلی‌متری"
    />
    <SmallDetail label="تاریخ عرضه" desc="۱۱ آبان ۱۴۰۱" />
    <SmallDetail label="خانواده محصول" desc="Playstation" />
    <SmallDetail label="سازنده" desc="Sony" />
    <SmallDetail label="مدت زمان شارژ" desc="۲-۳ ساعت" />
    <SmallDetail
      label="نشانگر LED"
      desc="دارای لایت بار"
      :addSeperator="false"
    />
  </div>
  <div class="flex flex-col items-start">
    <h4 class="text-primary pb-lg text-xl">مشخصات گیم پد</h4>
    <SmallDetail label="نوع اتصال" desc="بلوتوث - کابل USB-C" />
    <SmallDetail label="خروجی صدا" desc="جک 3.5 میلی‌متری - دارای اسپیکر" />
    <SmallDetail label="میکروفون" desc="دارد با قابلیت میوت و حساس به باد" />
    <SmallDetail label="فیدبک" desc="فیدبک هپتیک" />
    <SmallDetail label="سازنده" desc="Sony" />
    <SmallDetail label="چینش آنالوگ‌ها" desc="متقارن" />
    <SmallDetail
      label="تریگرها"
      desc="تریگرهای تطبیق‌پذیر (با توجه به بازی)"
      :addSeperator="false"
    />
  </div>
</template>
