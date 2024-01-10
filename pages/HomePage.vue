<template>
  <QPage class="row col">
    <Slider class="pt-lg">
      <Story title="some story" v-for="i in 50" />
    </Slider>
    <PopularProducts />
  </QPage>
</template>

<style lang="scss">
.carousel-image {
  height: 150px !important;
  width: 100%;
  margin: 0 auto;
}

@media screen and (min-width: 350px) {
  .carousel-image {
    min-height: 10rem !important;
  }
}

@media screen and (min-width: 450px) {
  .carousel-image {
    min-height: 11rem !important;
  }
}

@media screen and (min-width: 550px) {
  .carousel-image {
    min-height: 13rem !important;
  }
}

@media screen and (min-width: 680px) {
  .carousel-image {
    min-height: 16rem !important;
  }
}

@media screen and (min-width: 1024px) {
  .carousel-image {
    min-height: 25rem !important;
  }

  .show-mydata {
    flex-direction: row;
  }
}

@media screen and (min-width: 1400px) {
  .carousel-image {
    min-height: 35rem !important;
  }

  .show-mydata {
    flex-direction: row;
  }
}

.animation {
  animation: scale-down 0.8s ease-in-out forwards;
}

@keyframes scale-down {
  from {
    transform: translateY(-600px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
