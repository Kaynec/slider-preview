<script setup lang="ts"></script>
<template>
  <main>
    <section class="row q-col-gutter-lg">
      <div class="col-12 col-lg-9">
        <ProductDetails />
      </div>
      <div class="col-12 col-lg-3">
        <ProductGaranty />
      </div>
    </section>
    <!--  Tabs -->
    <QCard class="mt-lg mb-4xl !rounded-xl"> <ProductTabs /> </QCard>
  </main>
</template>
