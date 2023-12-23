<template>
  <div class="flex flex-col gap-4 my-6xl">
    <span class="text-h4 heading">خدمات ما</span>
    <p class="text-text-secondary">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
      طراحان گرافیک است،
    </p>
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-6 col-md-4">
        <QCard class="pa-sm flex flex-col gap-3 h-full noisy">
          <div class="flex items-center gap-sm">
            <img
              src="@/assets/home_imgs/cards/ps5.svg?inline"
              width="50"
              height="50"
              alt="ps5 card image"
            />
            <span class="heading text-xl">خرید کنسول و لوازم جانبی</span>
          </div>
          <p class="text-text-secondary">
            و لوازم جانبی آن میتواند تجربه‌ای هیجان انگیز باشد. این کنسول نسل
            جدیدی از سری PlayStation است که توانایی‌های گرافیکی و ...
          </p>
          <NuxtLink
            class="flex flex-row-reverse justify-end items-center text-blue-7"
            to=""
          >
            <LinkIcon />

            <span> مشاهده محصولات </span>
          </NuxtLink>
        </QCard>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <QCard class="pa-sm flex flex-col gap-3 h-full noisy bg-green">
          <div class="flex items-center gap-sm">
            <img
              src="@/assets/home_imgs/cards/controller.svg?inline"
              width="50"
              height="50"
              alt="ps5 card image"
            />
            <span class="heading text-xl">تعمیرات و تست دسته</span>
          </div>
          <p class="text-text-secondary">
            و لوازم جانبی آن میتواند تجربه‌ای هیجان انگیز باشد. این کنسول نسل
            جدیدی از سری PlayStation است که توانایی‌های گرافیکی و ...
          </p>
          <NuxtLink
            class="flex flex-row-reverse justify-end items-center text-blue-7"
            to=""
          >
            <LinkIcon />

            <span> مشاهده محصولات </span>
          </NuxtLink>
        </QCard>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <QCard class="pa-sm flex flex-col gap-3 h-full noisy">
          <div class="flex items-center gap-sm">
            <img
              src="@/assets/home_imgs/cards/fortnite.svg?inline"
              width="50"
              height="50"
              alt="ps5 card image"
            />
            <span class="heading text-xl">نصب بازی</span>
          </div>
          <p class="text-text-secondary">
            و لوازم جانبی آن میتواند تجربه‌ای هیجان انگیز باشد. این کنسول نسل
            جدیدی از سری PlayStation است که توانایی‌های گرافیکی و ...
          </p>
          <NuxtLink
            class="flex flex-row-reverse justify-end items-center text-blue-7"
            to=""
          >
            <LinkIcon />

            <span> مشاهده محصولات </span>
          </NuxtLink>
        </QCard>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.noisy {
  background: url(../../assets/home_imgs/cards/grain.svg) !important;
  background-position: 10% !important;
  background-size: cover !important;
  border-radius: 1.6rem;
  min-height: 12rem;
}
</style>
