<template>
  <div class="flex flex-col my-6xl">
    <span class="text_6xl heading">خدمات ما</span>
    <p class="text-text-secondary text_sm">
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
      طراحان گرافیک است،
    </p>
    <div class="row q-col-gutter-md">
      <div class="col-12 col-sm-6 col-md-4">
        <QCard
          class="pa-sm flex flex-col noisy border-1 border-border-primary gap-1 lg:gap-3"
        >
          <div class="flex items-center justify-start gap-1">
            <img
              src="@/assets/home_imgs/cards/ps5.svg?inline"
              width="50"
              height="50"
              alt="ps5 card image"
            />
            <span class="heading text_lg">خرید کنسول و لوازم جانبی</span>
          </div>
          <p class="text-text-secondary text-xs">
            و لوازم جانبی آن میتواند تجربه‌ای هیجان انگیز باشد. این کنسول نسل
            جدیدی از سری PlayStation است که توانایی‌های گرافیکی و ...
          </p>
          <NuxtLink
            class="inline-flex flex-row-reverse mt-auto justify-end items-center text-blue-7"
            to=""
          >
            <LinkIcon />

            <span> مشاهده محصولات </span>
          </NuxtLink>
        </QCard>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <QCard
          class="pa-sm flex flex-col h-full noisy border-1 border-border-primary gap-1 lg:gap-3"
        >
          <div class="flex items-center justify-start gap-1">
            <img
              src="@/assets/home_imgs/cards/controller.png"
              width="50"
              height="50"
              alt="ps5 card image"
            />
            <span class="heading text_lg">تعمیرات و تست دسته</span>
          </div>
          <p class="text-text-secondary text-xs">
            و لوازم جانبی آن میتواند تجربه‌ای هیجان انگیز باشد. این کنسول نسل
            جدیدی از سری PlayStation است که توانایی‌های گرافیکی و ...
          </p>
          <NuxtLink
            class="inline-flex flex-row-reverse mt-auto justify-end items-center text-blue-7"
            to=""
          >
            <LinkIcon />

            <span> مشاهده محصولات </span>
          </NuxtLink>
        </QCard>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <QCard
          class="pa-sm flex flex-col h-full noisy border-1 border-border-primary"
        >
          <div class="flex items-center justify-start gap-1">
            <img
              src="@/assets/home_imgs/cards/fortnite.png"
              width="50"
              height="50"
              alt="ps5 card image"
            />
            <span class="heading text_lg">نصب بازی</span>
          </div>
          <p class="text-text-secondary text-xs">
            و لوازم جانبی آن میتواند تجربه‌ای هیجان انگیز باشد. این کنسول نسل
            جدیدی از سری PlayStation است که توانایی‌های گرافیکی و ...
          </p>
          <NuxtLink
            class="inline-flex flex-row-reverse mt-auto justify-end items-center text-blue-7"
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
  background: url(@/assets/home_imgs/cards/grain.svg?inline) !important;
  background-position: 10% !important;
  background-size: cover !important;
  border-radius: 0.7rem;
  box-shadow: none;
}
</style>
