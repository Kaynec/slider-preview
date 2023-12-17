<script setup lang="ts">
useSeoMeta({
  title: 'cspro - console repair page',
  ogTitle: 'cspro - console repair page',
  description: 'خدمات تعمیر - کنسول',
  ogDescription: 'خدمات تعمیر - کنسول'
})

definePageMeta({
  currentPageName: 'خدمات تعمیر - تست کنسول'
})

const tabConditions = {
  DifferentErrorTypes: 'انواع ارور ها',
  BodyDamage: 'شکستگی بدنه',
  HardwareProblem: 'مشکل سخت افزاری',
  SoftwareProblem: 'مشکل نرم افزاری'
}

const tab = ref<keyof typeof tabConditions>('DifferentErrorTypes')

const errorMessages = ref([
  {
    error: 'C454_46842',
    active: false
  },
  {
    error: 'C454_46843',
    active: false
  },
  {
    error: 'C454_46844',
    active: false
  },
  {
    error: 'C454_46845',
    active: false
  },
  {
    error: 'C454_46846',
    active: false
  },
  {
    error: 'C454_46847',
    active: false
  },
  {
    error: 'C454_46848',
    active: false
  },
  {
    error: 'C454_46849',
    active: false
  },
  {
    error: 'C454_46850',
    active: false
  },
  {
    error: 'C454_46851',
    active: false
  },
  {
    error: 'C454_46852',
    active: false
  },
  {
    error: 'C454_46853',
    active: false
  }
])

const currentActiveIndex = ref<number>(+Infinity)

const setElementToActive = (index: number) => {
  if (errorMessages.value[currentActiveIndex.value])
    errorMessages.value[currentActiveIndex.value].active = false
  errorMessages.value[index].active = true
  currentActiveIndex.value = index
}
</script>
<template>
  <main>
    <QCard class="mt-lg mb-3rem !rounded-xl q-pb-lg">
      <q-tabs
        v-model="tab"
        content-class="text-text-primary !border-1 !border-solid !border-dark"
        active-color="text-primary"
        active-bg-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab
          :name="item"
          :label="tabConditions[item as keyof typeof tabConditions]"
          v-for="item in Object.keys(tabConditions)"
          :key="item"
        />
      </q-tabs>

      <q-separator />

      <!-- DifferentErrorTypes -->
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="DifferentErrorTypes">
          <div class="row q-col-gutter-md">
            <div
              class="col-12 col-md-6 col-lg-3"
              v-for="(error, index) in errorMessages"
              @click="setElementToActive(index)"
            >
              <div
                class="relative border-1 min-h-50 after:rounded-b-xl rounded-xl after:z-1 after:absolute after:content-[''] after:w-full after:h-8 after:bg-black after-bottom-0 after-end-0"
                :class="{
                  ' border-primary': error.active,
                  'border-border-primary': !error.active
                }"
              >
                <img
                  src="@/assets/console-error.png"
                  alt="console error problem"
                  class="absolute rounded-xl object-cover w-full max-h-full"
                  aria-details="it's a background image"
                />
                <span
                  class="text-left end-2 text-text-primary bottom-2 absolute z-2"
                  >Error {{ error.error }}</span
                >
              </div>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
      <!-- Details -->
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="BodyDamage">
          <div class="row q-col-gutter-md">
            <div
              class="col-12 col-md-6 col-lg-3"
              v-for="(error, index) in errorMessages"
              @click="setElementToActive(index)"
            >
              <div
                class="relative border-1 min-h-50 after:rounded-b-xl rounded-xl after:z-1 after:absolute after:content-[''] after:w-full after:h-8 after:bg-black after-bottom-0 after-end-0"
                :class="{
                  ' border-primary': error.active,
                  'border-border-primary': !error.active
                }"
              >
                <img
                  src="@/assets/console-error.png"
                  alt="console error problem"
                  class="inset-0 absolute rounded-xl"
                  aria-details="it's a background image"
                />
                <span
                  class="text-left end-2 text-text-primary bottom-2 absolute z-2"
                  >Error {{ error.error }}</span
                >
              </div>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
      <!-- Comments -->
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="HardwareProblem">
          <div class="row q-col-gutter-md">
            <div
              class="col-12 col-md-6 col-lg-3"
              v-for="(error, index) in errorMessages"
              @click="setElementToActive(index)"
            >
              <div
                class="relative border-1 min-h-50 after:rounded-b-xl rounded-xl after:z-1 after:absolute after:content-[''] after:w-full after:h-8 after:bg-black after-bottom-0 after-end-0"
                :class="{
                  ' border-primary': error.active,
                  'border-border-primary': !error.active
                }"
              >
                <img
                  src="@/assets/console-error.png"
                  alt="console error problem"
                  class="inset-0 absolute rounded-xl"
                  aria-details="it's a background image"
                />
                <span
                  class="text-left end-2 text-text-primary bottom-2 absolute z-2"
                  >Error {{ error.error }}</span
                >
              </div>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
      <!-- QandA -->
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="SoftwareProblem">
          <div class="row q-col-gutter-md">
            <div
              class="col-12 col-md-6 col-lg-3"
              v-for="(error, index) in errorMessages"
              @click="setElementToActive(index)"
            >
              <div
                class="relative border-1 min-h-50 after:rounded-b-xl rounded-xl after:z-1 after:absolute after:content-[''] after:w-full after:h-8 after:bg-black after-bottom-0 after-end-0"
                :class="{
                  ' border-primary': error.active,
                  'border-border-primary': !error.active
                }"
              >
                <img
                  src="@/assets/console-error.png"
                  alt="console error problem"
                  class="inset-0 absolute rounded-xl"
                  aria-details="it's a background image"
                />
                <span
                  class="text-left end-2 text-text-primary bottom-2 absolute z-2"
                  >Error {{ error.error }}</span
                >
              </div>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>

      <div class="ps-4 w-full">
        <PrimaryButton class="max-w-130"> ثبت خرابی کنسول </PrimaryButton>
      </div>
    </QCard>
  </main>
</template>
