<template>
  <div
    class="custom-bg min-h-55 rounded-xl border-2 border-primary flex flex-col justify-between gap-2 text-text-primary pa-sm"
  >
    <img
      src="@/assets/shop/fortnite.svg"
      class="absolute bottom-0 min-w-65 right-0"
      aria-details="just a bg image actually"
    />
    <h5>پکیج <span class="text-primary"> پیشنهادی </span> ما به شما:</h5>
    <div class="grid place-content-center lg:grid-cols-3 gap-2 lg:max-w-80%">
      <QCard
        v-for="i in 3"
        :key="i"
        class="grid grid-cols-3 px-xs py-lg items-center bg-dark text-xs border-1 border-solid border-border-primary"
      >
        <img
          src="@/assets/shop/game.png"
          class="w-full !max-w-15 inline-flex"
          alt="game card image "
        />
        <div class="flex flex-col gap-2 w-full col-span-2 items-start">
          خرید بازی Murder on the Orient Express نسخه دلوکس برای PS5
          <span class="text-right">
            ۲۸.۵۰۰.۰۰۰
            <strong class="text-text-secondary"> تومان </strong>
          </span>
        </div>
      </QCard>
    </div>
  </div>
</template>
