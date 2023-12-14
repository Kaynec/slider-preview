<template>
  <QCard class="shadow-none bg-background-primary min-h-120">
    <q-tabs
      v-model="tab"
      class="text-text-secondary bg-background-primary flex justify-start b-none rounded-lg text-right"
      indicator-color="transparent"
      active-color="primary"
      inline-label
    >
      <div class="w-full grid grid-cols-2 border-b-1 border-border-primary">
        <q-tab
          :class="{
            'bg-primary-light border-b-1 border-primary': tab === icon.key
          }"
          :name="icon.key"
          class="min-w-45 pa-xs"
          content-class="flex   justify-start "
          v-for="icon in icons"
          :label="icon.name"
        >
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
      <q-tab-panel name="Discount" key="Discount">
        <Discount />
      </q-tab-panel>
      <q-tab-panel name="InviteFriend" key="InviteFriend">
        <InviteFriend />
      </q-tab-panel>
    </q-tab-panels>
  </QCard>
</template>

<script setup lang="ts">
const icons = [
  { key: 'Discount', name: 'کد تخفیف' },
  { key: 'InviteFriend', name: ' دعوت از دوستان ' }
]

import { ref } from 'vue'
const tab = ref('Discount')
</script>
<route lang="yaml">
meta:
  requiresNotAuth: false
</route>
