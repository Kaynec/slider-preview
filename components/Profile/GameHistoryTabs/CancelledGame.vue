<template>
  <div class="grid gap-4">
    <UserGameCard
      submition-date="1402/08/23"
      :price="1_850_000"
      transaction-code="1500 6579 15"
      currentStatusDate="1402/09/16"
      purchaseStatus="Cancelled"
      v-for="i in 4"
      installType="ارسال کنسول به فروشگاه"
    />
  </div>
</template>
