<script setup lang="ts">
import { QForm, QSpinnerGears, useQuasar } from 'quasar'

const emailAuthenticationForm = ref<QForm | null>(null)
const q = useQuasar()
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

const isPwd = ref(true)

const details = ref({
  first_name: '',
  last_name: '',
  phone_number: '',
  password: '',
  confirm_password: ''
})
</script>

<template>
  <QPage class="px-6xl column pb-3xl">
    <QCard
      class="pa-xs !min-h-160 !m-y-sm flex m-lg flex-col col w-full gap-3 items-center mx-auto justify-center !rounded-3rem full-height"
    >
      <h3 class="text-primary text-h5">ثبت نام</h3>
      <span class="text-sm text-text-secondary">
        خوش امدید! لطفا برای ورود یک حساب کاربری بسازید.
      </span>
      <div class="flex flex-col w-full max-w-240 gap-8">
        <div class="row gap-4">
          <div class="col">
            <QInput
              standout="bg-transparent"
              :bg-color="$q.dark.isActive ? 'grey-10' : 'grey-4'"
              label="نام:"
              type="text"
              v-model="details.first_name"
              :input-style="{
                fontSize: '12px'
              }"
              input-class="text-white"
              style="border-radius: 250px !important"
            />
          </div>
          <div class="col">
            <QInput
              standout="bg-transparent"
              :bg-color="$q.dark.isActive ? 'grey-10' : 'grey-4'"
              label="نام خانوادگی:"
              type="text"
              v-model="details.last_name"
              :input-style="{ fontSize: '12px' }"
              input-class="text-white"
            >
            </QInput>
          </div>
        </div>

        <div class="row gap-4">
          <div class="col">
            <QInput
              standout="bg-transparent"
              :bg-color="$q.dark.isActive ? 'grey-10' : 'grey-4'"
              label="شماره موبایل خود را وارد کنید"
              type="tel"
              v-model="details.phone_number"
              :input-style="{ fontSize: '12px' }"
              input-class="text-white"
            />
          </div>
        </div>

        <div class="row gap-4">
          <div class="col">
            <QInput
              standout="bg-transparent"
              :bg-color="$q.dark.isActive ? 'grey-10' : 'grey-4'"
              label="رمز عبور"
              type="password"
              v-model="details.phone_number"
              :input-style="{ fontSize: '12px' }"
              input-class="text-white"
            />
          </div>
          <div class="col">
            <QInput
              standout="bg-transparent"
              :bg-color="$q.dark.isActive ? 'grey-10' : 'grey-4'"
              label="تکرار رمز عبور"
              v-model="details.confirm_password"
              :input-style="{ fontSize: '12px' }"
              input-class="text-white"
              :type="isPwd ? 'password' : 'text'"
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
        </div>
      </div>
      <NuxtLink class="text-blue-7" to="/auth/forgotPassword">
        فراموشی رمز عبور؟
      </NuxtLink>
      <div class="flex flex-col w-full items-center gap-3">
        <QBtn class="rounded-xl max-w-120 w-full bg-blue-7">
          ورود به حساب کاربری
        </QBtn>
        <QBtn class="rounded-xl max-w-120 w-full" color="grey-9">
          ثبت نام
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
  background-image: url('@/assets/login-bg.png');
  background-size: cover;
  background-position: center;
}
</style>
