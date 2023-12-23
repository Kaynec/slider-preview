<script setup>
useSeoMeta({
  title: 'Cheats  - products page',
  ogTitle: 'Cheats  - products page',
  description: 'صفحه محصول',
  ogDescription: 'صفحه محصول'
})

definePageMeta({
  currentPageName: 'محصولات - پلی استیشن'
})
</script>

<template>
  <main class="w-full">
    <!-- We Show a Full Desktop Version here 40% percent of the view is filled with garanty and 60 percent is details of the product -->
    <section class="row q-col-gutter-md" v-if="$q.screen.width > 900">
      <div class="col-12 col-md-9">
        <ProductDetails />
      </div>
      <div class="col-12 col-md-3">
        <ProductGaranty />
      </div>
    </section>
    <ProductDetailsMobile v-else />
    <!-- We Here Show The mobile Version With is just combineing the above two toghether -->
    <!--  Tabs -->
    <QCard class="mt-lg mb-4xl !rounded-xl"> <ProductTabs /> </QCard>
  </main>
</template>
