<script setup lang="ts">
useSeoMeta({
  title: 'cspro - repair page register',
  ogTitle: 'cspro - repair page register',
  description: 'خدمات تعمیر - ثبت ت',
  ogDescription: 'خدمات تعمیر - ثبت ت'
})

definePageMeta({
  currentPageName: 'خدمات تعمیر - ثبت تعمیر'
})
</script>
<template>
  <main>
    <section class="row q-col-gutter-lg pb-lg">
      <div class="col-12 col-lg-4">
        <SelectRepairParts />
      </div>
      <div class="col-12 col-lg-8 flex flex-col pa-lg gap-8">
        <h3 class="text-text-primary text-h6">نحوه محاسبه تعرفه تعمیرات:</h3>
        <div class="leading-8">
          <p class="text-text-secondary my-lg">
            مشتری گرامی با توجه به اینکه روند تعمیر دسته شما ممکن است با هزینه
            های اضافی همراه باشد تیم ما سعی می کند یک بازه تقریبی برای تعیین
            تعرفه خدمات به شما ارائه کند:
          </p>
          <p>
            <small class="text-text-secondary">1.</small>
            هزینه تعمیر بدنه کنسول شما دسته شما عددی دربازه ی قیمتی 500.000 الی
            1.000.000 تومان میباشد
          </p>
          <p>
            <small class="text-text-secondary">2.</small>
            هزینه تعمیر ارور C789 _ 646 دسته شما عددی دربازه ی قیمتی 500.000 الی
            1.000.000 تومان میباشد
          </p>
        </div>
        <h4 class="f-text-16-32">
          بازه حدودی تعرفه خدمات:
          <strong> 1.500.000 الی 2.500.000 تومان </strong>
        </h4>
        <div class="text-primary flex flex-row gap-2 items-start">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM11.25 8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75C11.59 13.75 11.25 13.41 11.25 13V8ZM12.92 16.38C12.87 16.51 12.8 16.61 12.71 16.71C12.61 16.8 12.5 16.87 12.38 16.92C12.26 16.97 12.13 17 12 17C11.87 17 11.74 16.97 11.62 16.92C11.5 16.87 11.39 16.8 11.29 16.71C11.2 16.61 11.13 16.51 11.08 16.38C11.03 16.26 11 16.13 11 16C11 15.87 11.03 15.74 11.08 15.62C11.13 15.5 11.2 15.39 11.29 15.29C11.39 15.2 11.5 15.13 11.62 15.08C11.86 14.98 12.14 14.98 12.38 15.08C12.5 15.13 12.61 15.2 12.71 15.29C12.8 15.39 12.87 15.5 12.92 15.62C12.97 15.74 13 15.87 13 16C13 16.13 12.97 16.26 12.92 16.38Z"
                fill="url(#paint0_linear_246_7302)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_246_7302"
                  x1="12"
                  y1="-1.75"
                  x2="12"
                  y2="25.3333"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4DCAFF" />
                  <stop offset="1" stop-color="#4EA3E0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <p class="flex-1">
            کاربر گرامی ما پس از تعمیر دسته شما فاکتور هزینه تعمیر دسته شما را
            برایتان ارسال میکنیم؛ در قدم اول شما نیاز به پرداخت وجه ندارید.
          </p>
        </div>
        <div class="flex flex-col lg:flex-row gap-2">
          <div class="flex-1">
            <PrimaryButton class="!h-10">
              دریافت نوبت برای ارسال کنسول
            </PrimaryButton>
          </div>
          <div class="flex-1">
            <QBtn
              icon="bookmark"
              outline
              color="primary"
              rounded
              class="full-width !h-10 q-py-sm"
            >
              ذخیره مشکلات برای تعمیر در آینده
            </QBtn>
          </div>
        </div>
      </div>
      <!--  -->

      <div class="col-12 mt-2rem mb-3rem">
        <h3 class="text-2xl py-lg">نحوه محاسبه و تعرفه خدمات تعمیر</h3>
        <p v-for="i in 2" class="text-text-secondary">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی
          نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم
          متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
          گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
          و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید
          سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم
          ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
          طراحان گرافیک است، لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
          صنعت چاپ، و با استفاده از طراحان گرافیک است، لورم ایپسوم متن ساختگی با
          تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
        </p>
      </div>

      <div
        class="flex flex-col items-start w-full bg-background-secondary !rounded-2xl mb-lg"
      >
        <h4 class="text-primary pb-lg text-xl">قیمت خدمات تعمیر کنسول</h4>
        <SmallDetail
          label="خرابی بدنه دسته"
          desc="در صورت شکستگی یا ... حدود عددی ما بین 1.000.000 تومان الی 2.500.000 هزینه بر خواهد بود"
        />
        <SmallDetail label="دکمه های اصلی" desc="500.000 الی 1.000.000 تومان" />
        <SmallDetail label="دکمه های اصلی" desc="500.000 الی 1.000.000 تومان" />
        <SmallDetail
          label="دکمه های اصلی"
          desc="در صورت شکستگی یا ... حدود عددی ما بین 1.000.000 تومان الی 2.500.000 هزینه بر خواهد بود"
        />
        <SmallDetail
          label="دکمه های اصلی"
          desc="در صورت شکستگی یا ... حدود عددی ما بین 1.000.000 تومان الی 2.500.000 هزینه بر خواهد بود"
          :addSeperator="false"
        />
      </div>
    </section>
  </main>
</template>
