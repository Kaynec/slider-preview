<template>
  <TransitionGroup>
    <q-header
      :class="{
        'w-full  container !max-w-90rem': scrollAmount > 0,
        'mx-auto max-w-full ': scrollAmount <= 0
      }"
      class="bg-transparent mx-auto transition-600"
    >
      <DesktopHeader :scrollAmount="scrollAmount" />
      <MobileHeader :scrollAmount="scrollAmount" />
    </q-header>
  </TransitionGroup>
</template>

<script setup>
defineProps(['scrollAmount'])
</script>
