<script setup lang="ts">
useSeoMeta({
  title: 'Cheats  - forgot password',
  ogTitle: 'Cheats  - forgot password',
  description: 'فراموشی رمزعبور',
  ogDescription: 'فراموشی رمزعبور'
})

import { QForm, QSpinnerGears, useQuasar } from 'quasar'

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
          label="شماره موبایل خود را وارد کنید"
          type="tel"
          v-model="details.phone_number"
          :input-style="{
            fontSize: '12px'
          }"
          input-class="text-white"
        />
      </div>
      <NuxtLink class="text-blue-7" to="/auth/login">
        برگشت به صفحه ورود
      </NuxtLink>
      <div class="flex flex-col w-full items-center gap-3">
        <QBtn class="!rounded-xl !max-w-120 !w-full bg-blue-7">
          ارسال کد تایید
        </QBtn>
      </div>
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
  background-image: url('@/assets/login-bg.webp');
  background-size: cover;
  background-position: center;
}
</style>
