<script setup lang="ts">
import { QForm, QSpinnerGears, useQuasar } from 'quasar'
import { apiAuthJwtCustomerLoginCreate } from '@/api/index'
const state = useGlobalStore()

useSeoMeta({
  title: 'Cheats  - login page',
  ogTitle: 'Cheats  - login page',
  description: 'صفحه ورود',
  ogDescription: 'صفحه ورود'
})

onMounted(() => {
  console.log(state.getToken())
})

const loginAuthenticationForm = ref<QForm | null>(null)
const isPwd = ref(true)
const email = ref('')
const password = ref('')
const q = useQuasar()
const router = useRouter()
const onSubmit = () => {
  const token = state.getToken()

  loginAuthenticationForm.value?.validate().then(async success => {
    //
    if (success) {
      q.loading.show({
        message: 'درحال ارسال درخواست',
        backgroundColor: 'grey',
        // spinner: QSpinnerGears,
        customClass: 'loader'
      })
      try {
        // const res = await auth.loginUser(email, password);
        const res = await apiAuthJwtCustomerLoginCreate({
          phone_number: details.value.phone_number,
          password: details.value.password
        })
        console.log(res)
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

const passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
</script>

<template>
  <QPage class="lg:px-6xl column mb-lg">
    <QForm
      @submit.prevent="onSubmit"
      class="w-full"
      ref="loginAuthenticationForm"
    >
      <QCard
        class="pa-xs px-xl !m-y-sm flex m-lg flex-col min-h-160 w-full gap-3 items-center mx-auto justify-center !rounded-2rem"
      >
        <h3 class="text-primary text_5xl">ورود به حساب کاربری</h3>
        <span class="text_sm text-text-secondary">
          خوش برگشتی! لطفا برای دسترسی به حساب کاربری خود وارد شوید.
        </span>
        <div class="flex flex-col w-full max-w-240 gap-8">
          <QInput
            standout="!bg-transparent"
            :bg-color="$q.dark.isActive ? 'grey-10' : 'grey-4'"
            label="شماره موبایل خود را وارد کنید"
            type="tel"
            v-model="details.phone_number"
            :input-style="{ fontSize: '12px' }"
            input-class="text-white"
            autocomplete="off"
            :rules="[
              val => !!val || 'لطفا شماره همراه خود را وارد کنید',
              val => val.length === 11 || 'شماره همراه اشتباه است'
            ]"
            lazy-rules
          />

          <QInput
            standout="!bg-transparent"
            :bg-color="$q.dark.isActive ? 'grey-10' : 'grey-4'"
            label="رمز ورود خود را وارد کنید"
            :type="isPwd ? 'password' : 'text'"
            v-model="details.password"
            :input-style="{ fontSize: '12px' }"
            input-class="text-white"
            autocomplete="off"
            :rules="[
              val => !!val || 'لطفا  رمز عبور خود را وارد کنید',
              val =>
                !!passRegex.test(val) ||
                'رمز عبور باید دارای یه حرف و یک شماره و یک کارکتر خاص باشد'
            ]"
            lazy-rules
          >
            <template v-slot:append>
              <q-icon
                class="text-text-primary"
                :name="isPwd ? 'visibility_off' : 'visibility'"
                @click="isPwd = !isPwd"
              />
            </template>
          </QInput>
        </div>
        <NuxtLink class="text-blue-7" to="/auth/forgotPassword">
          فراموشی رمز عبور؟
        </NuxtLink>
        <div class="flex flex-col w-full items-center gap-3">
          <QBtn class="!rounded-xl !max-w-120 !w-full bg-blue-7" type="submit">
            ورود به حساب کاربری
          </QBtn>
          <QBtn
            class="!rounded-xl !max-w-120 !w-full"
            color="grey-9"
            type="button"
            @click="navigateTo({ name: 'Auth-Register' })"
          >
            ثبت نام
          </QBtn>
        </div>
      </QCard>
    </QForm>
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
