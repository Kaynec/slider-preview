<script setup lang="ts">
import { QForm, QSpinnerGears, useQuasar } from 'quasar'

useSeoMeta({
  title: 'Cheats  - submit code page',
  ogTitle: 'Cheats  - submit code page',
  description: 'صفحه تایید کد',
  ogDescription: 'صفحه تایید کد'
})

const emailAuthenticationForm = ref<QForm | null>(null)
const isPwd = ref(true)
const email = ref('')
const password = ref('')
const q = useQuasar()
const router = useRouter()
const onSubmit = () => {
  emailAuthenticationForm?.validate().then(async success => {
    if (success) {
      q.loading.show({
        message: 'login.userMessage',
        backgroundColor: 'grey',
        spinner: QSpinnerGears,
        customClass: 'loader'
      })
      try {
        // const res = await auth.loginUser(email, password);
        q.loading.hide()
      } catch (err) {
        console.error(err)
        q.loading.hide()
      }
    }
  })
}

const details = ref({
  phone_number: '',
  password: ''
})
</script>

<template>
  <QPage class="lg:px-6xl column mb-lg">
    <QCard
      class="pa-xs px-xl !m-y-sm flex m-lg flex-col min-h-160 w-full gap-3 items-center mx-auto justify-center !rounded-2rem"
    >
      <h3 class="text-primary text_5xl">ورود به حساب کاربری</h3>
      <span class="text_sm text-text-secondary">
        خوش برگشتی! لطفا برای دسترسی به حساب کاربری خود وارد شوید.
      </span>
      <div class="flex flex-col w-full max-w-240 gap-3">
        <QInput
          standout="bg-transparent"
          :bg-color="$q.dark.isActive ? 'grey-10' : 'grey-4'"
          label="کد ارسال شده:"
          maxlength="4"
          type="number"
          v-model="details.phone_number"
          :input-style="{ fontSize: '12px' }"
          input-class="text-white hide-input-arrows"
        />
      </div>
      <div class="flex flex-col w-full items-center gap-3">
        <QBtn class="!rounded-xl !max-w-120 !w-full bg-blue-7"> تایید کد </QBtn>
        <QBtn class="!rounded-xl !max-w-120 !w-full" color="grey-9">
          ارسال مجدد کد
        </QBtn>
      </div>
      <NuxtLink class="text-blue-7" to="/auth/forgotPassword">
        تغییر شماره موبایل
      </NuxtLink>
    </QCard>
  </QPage>
</template>

<style lang="scss">
.authentication {
  margin: auto;
  max-width: 30em;
  width: 100%;
  .q-img {
    height: 190px;
  }
}

.pa-xs {
  background-image: url('@/assets/login-bg.png');
  background-size: cover;
  background-position: center;
}
</style>
