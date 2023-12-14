<template>
  <QCard class="shadow-none bg-background-primary min-h-120">
    <q-tabs
      v-model="tab"
      class="text-text-secondary bg-background-primary flex justify-start b-none rounded-lg text-right"
      indicator-color="transparent"
      active-color="primary"
      inline-label
    >
      <div class="w-full flex items-center border-b-1 border-border-primary">
        <q-tab
          :class="{
            'bg-primary-light border-b-1 border-primary': tab === icon.key
          }"
          :name="icon.key"
          v-for="icon in icons"
          class="flex-1"
        >
          <span class="text-xs"> {{ icon.name }} </span>
        </q-tab>
      </div>
    </q-tabs>

    <q-tab-panels
      v-model="tab"
      animated
      swipeable
      vertical
      class="bg-transparent !p-0 !m-0"
      transition-prev="jump-up"
      transition-next="jump-up"
    >
      <q-tab-panel name="Ongoing" key="Ongoing">
        <OngoingRepairHistory />
      </q-tab-panel>
      <q-tab-panel name="Repaired" key="Repaired">
        <RepairedRepairHistory />
      </q-tab-panel>
      <q-tab-panel name="Saved" key="Saved">
        <SavedRepairHistory />
      </q-tab-panel>
      <q-tab-panel name="Cancelled" key="Cancelled">
        <CancelledRepairHistory />
      </q-tab-panel>
    </q-tab-panels>
  </QCard>
</template>

<script setup lang="ts">
const icons = [
  { key: 'Ongoing', name: 'در جریان' },
  { key: 'Repaired', name: 'تعمیر شده' },
  { key: 'Saved', name: 'ذخیره شده' },
  { key: 'Cancelled', name: 'لغو شده' }
]

import { ref } from 'vue'
const tab = ref('Ongoing')
</script>
<route lang="yaml">
meta:
  requiresNotAuth: false
</route>
