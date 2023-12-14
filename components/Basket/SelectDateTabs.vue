<script setup lang="ts">
const dates = ref(['2022-10-15', '2023-03-07', '2023-11-28'])

const apiResponse = ref([
  { date: '2022-10-15 09:00:00' },
  { date: '2022-10-15 12:00:00' },
  { date: '2022-10-15 15:00:00' },
  { date: '2022-10-15 18:00:00' },
  { date: '2022-10-15 21:00:00' },
  { date: '2022-10-15 09:30:00' },
  { date: '2022-10-15 12:30:00' },
  { date: '2022-10-15 15:30:00' },
  { date: '2022-10-15 18:30:00' },
  { date: '2023-03-07 10:00:00' },
  { date: '2023-03-07 13:00:00' },
  { date: '2023-03-07 16:00:00' },
  { date: '2023-03-07 19:00:00' },
  { date: '2023-03-07 22:00:00' },
  { date: '2023-03-07 10:30:00' },
  { date: '2023-03-07 13:30:00' },
  { date: '2023-03-07 16:30:00' },
  { date: '2023-03-07 19:30:00' },
  { date: '2023-11-28 11:00:00' },
  { date: '2023-11-28 14:00:00' },
  { date: '2023-11-28 17:00:00' },
  { date: '2023-11-28 20:00:00' },
  { date: '2023-11-28 23:00:00' },
  { date: '2023-11-28 11:30:00' },
  { date: '2023-11-28 14:30:00' },
  { date: '2023-11-28 17:30:00' },
  { date: '2023-11-28 20:30:00' }
])

const currentTab = ref(dates.value[0])

// filter the apiResponse and give the one that have
const filteredData = computed(() => {
  return apiResponse.value
    .filter(el => {
      const elDateWithoutHour = el.date.toString().split(' ')[0]
      return elDateWithoutHour === currentTab.value
    })
    .map(el => {
      const hour = new Date(el.date).toLocaleDateString('fa', {
        hour: 'numeric'
      })
      const day = new Date(el.date).toLocaleDateString('fa', {
        weekday: 'long'
      })
      const date = new Date(el.date).toLocaleDateString('fa')
      return {
        hour,
        day,
        date,
        el
      }
    })
})
</script>
<template>
  <div class="border-1 border-border-primary rounded-1rem q-pb-lg">
    <q-tabs
      v-model="currentTab"
      content-class="text-text-primary !border-1 !border-solid  custom !border-dark"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab
        :name="item"
        :label="new Date(item).toLocaleDateString('fa')"
        v-for="item in dates"
        :key="item"
      >
        <span class="mt-2">
          {{
            new Date(item).toLocaleDateString('fa', {
              weekday: 'long'
            })
          }}
        </span>
      </q-tab>
    </q-tabs>

    <q-separator />

    <!-- Intro -->
    <q-tab-panels v-model="currentTab" animated>
      <q-tab-panel v-for="date in dates" :name="date" :key="date">
        <section class="grid grid-cols-3 gap-lg">
          <QCard
            v-for="card in filteredData"
            :key="card.date"
            class="flex flex-col items-center pa-lg border-1 border-solid border-border-primary justify-center gap-4 bg-background-secondary"
          >
            <span>{{ card.date }}</span>
            <span>{{ card.day }}</span>
            <span>{{ card.hour }} ساعت</span>
          </QCard>
        </section>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<style lang="scss">
.custom {
  border-top-right-radius: 1rem !important;
  border-top-left-radius: 1rem !important;
  background: $background-secondary !important;
}
</style>
