<template>
  <div class="flex py-xl justify-between full-width px-sm lg:px-xl">
    <span class="flex-1 max-w-90">
      {{ label }}
    </span>
    <div class="flex-1 text-text-secondary">
      <span class="pb-lg">
        {{ desc }}
      </span>
      <q-separator v-if="addSeperator" class="mt-sm" color="border-primary" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { addSeperator = true } = defineProps<{
  label: string
  desc: string
  addSeperator?: boolean
}>()
</script>

<style scoped></style>
