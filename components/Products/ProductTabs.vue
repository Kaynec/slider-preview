<script setup lang="ts">
enum tabConditions {
  Intro = 'معرفی',
  Details = 'خصوصیات',
  Comments = 'نظرات',
  QandA = 'پرسش و پاسخ'
}

const tab = ref<keyof typeof tabConditions>('Intro')
</script>
<template>
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

  <!-- Intro -->
  <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="Intro">
      <TabsIntro />
    </q-tab-panel>
  </q-tab-panels>
  <!-- Details -->
  <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="Details">
      <TabsDetails />
    </q-tab-panel>
  </q-tab-panels>
  <!-- Comments -->
  <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="Comments">
      <TabsComments />
    </q-tab-panel>
  </q-tab-panels>
  <!-- QandA -->
  <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="QandA">
      <TabsQAndA />
    </q-tab-panel>
  </q-tab-panels>
</template>
