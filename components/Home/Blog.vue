<template>
  <div class="mt-5rem relative space-y-xl">
    <div class="flex">
      <div class="flex-1 space-y-xl">
        <h4 class="text_6xl heading">وبلاگ</h4>
        <p class="text-text-secondary max-w-65ch">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است،
        </p>
      </div>
    </div>

    <div class="w-full">
      <Slider
        :loop="false"
        slider-class=""
        class="mx-auto !overflow-visible"
        :slides-per-view="1.1"
        :pagination="{
          clickable: true
        }"
        :breakpoints="{
          640: {
            slidesPerView: 1.8
          },
          880: {
            slidesPerView: 2.5
          },
          1200: {
            slidesPerView: 3
          },
          1536: {
            slidesPerView: 3.5
          }
        }"
      >
        <SwiperSlide class="pb-2rem">
          <BlogComponent
            label="شماره موبایل یا ایمیل"
            desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،"
            time="  ۲ هفته پیش"
            comment-amount="46"
          />
        </SwiperSlide>
        <SwiperSlide class="pb-2rem">
          <BlogComponent
            label="شماره موبایل یا ایمیل"
            desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،"
            time="  ۲ هفته پیش"
            comment-amount="46"
          />
        </SwiperSlide>
        <SwiperSlide class="pb-2rem">
          <BlogComponent
            label="شماره موبایل یا ایمیل"
            desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،"
            time="  ۲ هفته پیش"
            comment-amount="46"
          />
        </SwiperSlide>
        <SwiperSlide class="pb-2rem">
          <BlogComponent
            label="شماره موبایل یا ایمیل"
            desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،"
            time="  ۲ هفته پیش"
            comment-amount="46"
          />
        </SwiperSlide>
        <SwiperSlide class="pb-2rem">
          <BlogComponent
            label="شماره موبایل یا ایمیل"
            desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،"
            time="  ۲ هفته پیش"
            comment-amount="46"
          />
        </SwiperSlide>
        <SwiperSlide class="pb-2rem">
          <BlogComponent
            label="شماره موبایل یا ایمیل"
            desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،"
            time="  ۲ هفته پیش"
            comment-amount="46"
          />
        </SwiperSlide>
        <SwiperSlide class="pb-2rem">
          <BlogComponent
            label="شماره موبایل یا ایمیل"
            desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،"
            time="  ۲ هفته پیش"
            comment-amount="46"
          />
        </SwiperSlide>
        <SwiperSlide class="pb-2rem">
          <BlogComponent
            label="شماره موبایل یا ایمیل"
            desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،"
            time="  ۲ هفته پیش"
            comment-amount="46"
          />
        </SwiperSlide>
      </Slider>
    </div>
  </div>
</template>

<script setup>
// TODO THis is Important
import { useQuasar } from 'quasar'
const $q = useQuasar()
const colorFromScriptSetup = ref($q.dark.isActive ? '#121212' : '#fff')
</script>
<style>
.swiper-pagination {
  /* ... other styles ... */
  /* bottom: -10px !important; */
}
</style>
