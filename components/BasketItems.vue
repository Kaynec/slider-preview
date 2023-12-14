<template>
  <div>
    <QCardSection class="flex flex-col">
      <div class="flex items-center gap-5">
        <img class="max-w-30" :src="item.image" :alt="item.alt" />
        <div class="flex flex-col gap-4 pb-xl grow">
          <span class="text-lg">{{ item.title }}</span>
          <div class="flex gap-6 justify-between">
            <div
              class="text-text-secondary flex items-center"
              v-for="(option, optionIndex) in item.options"
              :key="optionIndex"
            >
              <Bullet class="fill-primary" />
              <span class="pl-2">{{ option.label }}:</span>
              <span class="text-text-primary">{{ option.value }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-3 justify-end items-center gap-6rem">
        <div
          class="icons flex justify-between text-primary items-center min-w-50 rounded-3xl border-1 border-border-primary px-xl py-xs"
        >
          <Plus class="fill-primary w-6 h-6" />
          <span>{{ item.quantity }}</span>
          <TrashCan class="stroke-primary !fill-none w-6 h-6" />
        </div>
        <span class="text-xl">
          {{ item.price }}
          <span class="text-sm text-text-secondary">تومان</span>
        </span>
      </div>
      <q-separator class="mt-lg" color="border-primary" v-if="addSeperator" />
    </QCardSection>
  </div>
</template>

<script setup lang="ts">
const { Item } = defineProps<{
  item: {
    image: string
    alt: string
    title: string
    options: {
      label: string
      value: string
    }[]
    quantity: number
    price: string
  }
  addSeperator: boolean
}>()
</script>
