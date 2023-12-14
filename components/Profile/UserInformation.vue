<script setup lang="ts">
import { useQuasar } from 'quasar'
import OutlinedButton from '../OutlinedButton.vue'

const model = ref({
  first_name: '',
  last_name: '',
  phone_number: '',
  email: '',
  password: '',
  repassword: '',
  email_verified: false,
  email_verification: '',
  birth_date: ''
})

const $q = useQuasar()

async function submitUserData () {
  $q.loading.show()

  return new Promise((res, rej) => {
    setTimeout(() => {
      $q.loading.hide()
      model.value.email_verified = true
    }, 1500)
  })
}
const isPwd = ref(false)
</script>
<template>
  <QCard class="px-sm pb-xs bg-background-primary shadow-none">
    <div class="flex items-center justify-between w-full pa-sm">
      <div class="flex gap-2 items-center">
        <div
          class="rounded-full bg-black grid place-content-center w-25 h-25 aspect-1"
        >
          <!-- TODO when there is actually user -->
          <!-- <img src="" alt=""> -->
          <div class="i-carbon-user text-3xl text-primary" />
          <!--  -->
        </div>
        <div class="space-y-2">
          <h4 class="text-xl text-text-primary">حمیدرضا فکری</h4>
          <h6 class="text-xs text-text-secondary">0912-038-11 22</h6>
        </div>
      </div>
      <OutlinedButton> خروج از حساب کاربری </OutlinedButton>
    </div>
    <!-- form -->
    <QForm class="row q-col-gutter-lg" @submit.prevent="submitUserData">
      <div class="col-12 col-lg-6">
        <QInput
          type="text"
          label="نام"
          v-model="model.first_name"
          bgColor="background-secondary"
          rounded
          standout="bg-transparent"
          class="rounded-full"
          :input-style="{ fontSize: '12px' }"
          input-class="text-white"
        />
      </div>
      <div class="col-12 col-lg-6">
        <QInput
          type="text"
          label="نام خانوادگی:"
          v-model="model.last_name"
          standout="bg-transparent"
          bgColor="background-secondary"
          rounded
          :input-style="{ fontSize: '12px' }"
          input-class="text-white"
        />
      </div>
      <div class="col-12 col-lg-6">
        <QInput
          type="tel"
          label="شماره موبایل:"
          v-model="model.phone_number"
          standout="bg-transparent"
          bgColor="background-secondary"
          rounded
          :input-style="{ fontSize: '12px' }"
          input-class="text-white"
        />
      </div>
      <div class="col-12 col-lg-6">
        <q-input
          v-model="model.birth_date"
          mask="date"
          :rules="['date']"
          label="تاریخ تولد:"
          type="text"
          standout="bg-transparent"
          bgColor="background-secondary"
          rounded
          :input-style="{ fontSize: '12px' }"
          input-class="text-white"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="model.birth_date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-12 col-lg-6">
        <QInput
          label="رمز عبور"
          v-model="model.password"
          :type="isPwd ? 'password' : 'text'"
          color="red"
          bgColor="background-secondary"
          standout="bg-transparent"
          rounded
          input-class="text-white"
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

      <div class="col-12 col-lg-6">
        <QInput
          label="تکرار رمز عبور"
          v-model="model.repassword"
          standout="bg-transparent"
          :type="isPwd ? 'password' : 'text'"
          bgColor="background-secondary"
          rounded
          :input-style="{ fontSize: '12px' }"
          input-class="text-white"
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
      <div class="col-12 col-lg-6">
        <QInput
          type="text"
          label="ایمیل"
          v-model="model.email"
          :disable="model.email_verified"
          standout="bg-transparent"
          bgColor="background-secondary"
          rounded
          :input-style="{ fontSize: '12px' }"
          input-class="text-white"
        >
          <template v-slot:append v-if="model.email_verified">
            <q-icon class="bg-positive rounded-full" name="check" /> </template
        ></QInput>
      </div>
      <div
        class="col-12 col-lg-6"
        :class="{
          visible: model.email_verified,
          invisible: !model.email_verified
        }"
      >
        <QInput
          type="tel"
          label="کد تایید ایمیل:"
          v-model="model.email_verification"
          standout="bg-transparent"
          bgColor="background-secondary"
          rounded
          :input-style="{ fontSize: '12px' }"
          input-class="text-white"
        />
      </div>
      <div class="col-9 md-col-6 lg-col-3">
        <PrimaryButton type="submit"> ذخیره تغییرات </PrimaryButton>
      </div>
    </QForm>
  </QCard>
</template>
