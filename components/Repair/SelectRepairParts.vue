<script lang="ts" setup>
const vModel1 = ref(false)
const vModel2 = ref(false)
const vModel3 = ref(false)
const vModel4 = ref(false)
const vModel5 = ref(false)
const desc = ref('')
</script>
<template>
  <QCard
    class="min-h-full q-pa-md flex flex-col gap-6 !rounded-2xl bg-background-secondary"
  >
    <div
      class="flex flex-col gap-3 full-width items-start justify-end text-text-secondary"
    >
      <span> لطفا موارد لازم برای تعمیر کنسول را انتخاب کنید:. </span>
    </div>

    <div class="flex flex-col">
      <q-checkbox
        class="translate-x-2 text-text-secondary"
        val="line"
        label="بدنه کنسول دارای شکستگی می باشد."
        v-model="vModel1"
      />
      <q-checkbox
        class="translate-x-2 text-text-secondary"
        val="line"
        label="بدنه کنسول دارای شکستگی می باشد."
        v-model="vModel2"
      />
      <q-checkbox
        class="translate-x-2 text-text-secondary"
        val="line"
        label="بدنه کنسول دارای شکستگی می باشد."
        v-model="vModel3"
      />
      <q-checkbox
        class="translate-x-2 text-text-secondary"
        val="line"
        label="بدنه کنسول دارای شکستگی می باشد."
        v-model="vModel4"
      />
      <q-checkbox
        class="translate-x-2 text-text-secondary"
        val="line"
        label="بدنه کنسول دارای شکستگی می باشد."
        v-model="vModel5"
      />
    </div>
    <QInput
      type="textarea"
      standout="bg-transparent"
      outlined
      input-style="resize:none"
      bg-color="background-secondary"
      label="لطفا توضیحات تکمیلی خود را بنویسید."
      v-model="desc"
    />
  </QCard>
</template>
