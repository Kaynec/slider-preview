<template>
  <div class="flex flex-col my-xl">
    <p class="mb-4rem">
      با کنترلر DualSense تجربه‌ای جدید و بی‌نظیر را از بازی‌های ویدیویی خواهید
      داشت.
    </p>
    <h4 class="text-primary text-xl pb-sm">حس‌های خود را تقویت کنید</h4>
    <p class="text-text-secondary">
      کنترلر دوال سنس مخصوص پلی استیشن 5، دارای قابلیت پاسخ‌دهی هپتیک، تریگرهای
      تطبیق‌پذیر پویا و یک میکروفون داخلی در قالب یک کنترلر زیبا و خوش‌دست است.
    </p>
    <div
      class="flex gap-4 items-start pt-xl leading-relaxed flex-col lg:flex-row"
    >
      <img
        src="@/assets/home_imgs/cards/controller_with_cover.png"
        alt="controller_with_cover"
        class="flex-1"
      />
      <div class="flex-1 gap-3 flex flex-col lg:pt-4rem">
        <span class="text-text-primary text-lg">پاسخ‌دهی هپتیک </span>
        <p class="text-text-secondary">
          با قابلیت پاسخ‌دهی هپتیک و دو عملگر مکانیکی که جایگزین موتورهای
          لرزاننده شده‌اند، شما تمام اتفاقات درون بازی را در دستان خود احساس
          خواهید کرد. لرزش‌های پویای دوال سنس به شما این امکان را می‌دهند تا
          جزئیات فراوانی از عوامل محیطی تا سلاح درون دستان‌تان را کاملا احساس
          کنید.با قابلیت پاسخ‌دهی هپتیک و دو عملگر مکانیکی که جایگزین موتورهای
          لرزاننده شده‌اند، شما تمام اتفاقات درون بازی را در دستان خود احساس
          خواهید کرد. لرزش‌های پویای دوال سنس به شما این امکان را می‌دهند تا
          جزئیات فراوانی از عوامل محیطی تا سلاح درون دستان‌تان را کاملا احساس
          کنید.
        </p>
      </div>
    </div>

    <ul class="p-lg space-y-3rem">
      <li class="relative" v-for="i in 3">
        <div
          class="absolute -left-5 top-3 w-2 h-2 rounded-full bg-primary"
        ></div>
        <h5 class="pb-xs">پاسخ‌دهی هپتیک</h5>
        <p class="text-text-secondary">
          با قابلیت پاسخ‌دهی هپتیک و دو عملگر مکانیکی که جایگزین موتورهای
          لرزاننده شده‌اند، شما تمام اتفاقات درون بازی را در دستان خود احساس
          خواهید کرد. لرزش‌های پویای دوال سنس به شما این امکان را می‌دهند تا
          جزئیات فراوانی از عوامل محیطی تا سلاح درون دستان‌تان را کاملا احساس
          کنید.
        </p>
      </li>
    </ul>

    <div class="grid grid-cols-4 gap-3xl">
      <div v-for="i in 4" class="w-full flex items-center justify-center">
        <img
          class="w-full max-w-50"
          src="@/assets/home_imgs/cards/Controller-Big.png"
          alt="controller image"
        />
      </div>
    </div>
    <ul class="p-lg space-y-3rem">
      <li class="relative" v-for="i in 2">
        <div
          class="absolute -left-5 top-3 w-2 h-2 rounded-full bg-primary"
        ></div>
        <h5 class="pb-xs">پاسخ‌دهی هپتیک</h5>
        <p class="text-text-secondary">
          با قابلیت پاسخ‌دهی هپتیک و دو عملگر مکانیکی که جایگزین موتورهای
          لرزاننده شده‌اند، شما تمام اتفاقات درون بازی را در دستان خود احساس
          خواهید کرد. لرزش‌های پویای دوال سنس به شما این امکان را می‌دهند تا
          جزئیات فراوانی از عوامل محیطی تا سلاح درون دستان‌تان را کاملا احساس
          کنید.
        </p>
      </li>
    </ul>
  </div>
</template>
