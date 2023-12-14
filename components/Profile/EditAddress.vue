<template>
  <q-dialog v-model="showEditAddress">
    <q-card class="shadow-none pa-xs w-full max-w-210">
      <q-card-section class="flex items-center gap-3">
        <button
          class="i-carbon-arrow-right text-lg"
          @click="showEditAddress = !showEditAddress"
        />
        <div class="text-h6">جزییات آدرس</div>
        <button
          class="i-carbon-close ms-auto text-lg"
          @click="showEditAddress = !showEditAddress"
        />
      </q-card-section>

      <q-separator class="my-3" />

      <q-card-section class="mt-xl">
        <QForm class="space-y-4" @submit.prevent="submitAddresChanges">
          <QInput
            type="text"
            label="کد پستی"
            bgColor="background-secondary"
            standout="bg-transparent"
            class="rounded-full"
            :input-style="{ fontSize: '12px' }"
            input-class="text-white"
            v-model="model.postal_code"
          />
          <QInput
            type="textarea"
            label="نشانی پستی"
            bgColor="background-secondary"
            standout="bg-transparent"
            class="rounded-full"
            :input-style="{ fontSize: '12px' }"
            input-class="text-white"
            v-model="model.name"
            autogrow
          />
          <PrimaryButton type="submit"> ثبت تغییرات </PrimaryButton>
        </QForm>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
const showEditAddress = defineModel<boolean>()

const props = defineProps<{
  address: {
    postal_code: string
    name: string
  }
}>()

const model = ref({ ...props.address })

async function submitAddresChanges() {
  // TODO Call Api For Update of Address
  console.log('Call Api For Update')
}
</script>

<style scoped></style>
