<template>
  <div class="col my-6rem relative space-y-xl">
    <!-- Background -->

    <div class="flex">
      <div class="flex-1 space-y-xl">
        <h4 class="text-h4 heading">وبلاگ</h4>
        <p class="text-text-secondary max-w-65ch">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است،
        </p>
      </div>
    </div>

    <div class="row q-col-gutter-lg q-py-lg">
      <div class="col-12 col-md-4" v-for="i in 6">
        <BlogComponent
          label="شماره موبایل یا ایمیل"
          desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،"
          time="  ۲ هفته پیش"
          comment-amount="46"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// TODO THis is Important
import { useQuasar } from 'quasar'
const $q = useQuasar()
const colorFromScriptSetup = ref($q.dark.isActive ? '#121212' : '#fff')
</script>
