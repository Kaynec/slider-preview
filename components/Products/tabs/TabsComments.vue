<template>
  <div class="flex flex-col gap-4 mt-xl">
    <QCard
      v-for="i in 4"
      :key="i"
      class="bg-background-primary pa-2xl space-y-xl border-2px border-border-primary"
    >
      <div class="flex gap-3 items-start">
        <img
          src="@/assets/avatar.png"
          alt="avatar picture"
          class="max-w-13 rounded-full object-cover"
        />
        <div class="flex flex-col">
          <span class="text-text-primary"> عدنان عبدالله پور </span>
          <span class="text-text-secondary"> 1401/08/22 </span>
        </div>
        <Heart class="stroke-text-secondary fill-none" />
        <Reply class="stroke-text-secondary fill-none" />
      </div>
      <p class="text-text-secondary">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز ..
      </p>
    </QCard>
  </div>
  <q-separator class="my-xl h-2px" color="border-primary" />
  <span class="text-text-primary text-xl"> ثبت نظر </span>
  <div class="row q-col-gutter-md">
    <div class="col-6 col-lg-4">
      <QInput
        standout="bg-transparent"
        dense
        bg-color="background-primary"
        label="نام و نام خانوادگی:"
        rounded
        type="text"
        :input-style="{ fontSize: '12px' }"
        input-class="text-white"
      />
    </div>
    <div class="col-6 col-lg-4">
      <QInput
        standout="bg-transparent"
        dense
        bg-color="background-primary"
        label="ایمیل:"
        rounded
        type="email"
        :input-style="{ fontSize: '12px' }"
        input-class="text-white"
      />
    </div>
    <div class="col-12 col-lg-4">
      <QInput
        standout="bg-transparent"
        dense
        bg-color="background-primary"
        label="امتیاز شما به محصول:"
        rounded
        type="text"
        :input-style="{ fontSize: '12px' }"
        input-class="text-white"
      >
        <template #append>
          <span v-for="i in 2" class="i-carbon:star text-sm"> </span>
          <span v-for="i in 3" class="i-carbon:star text-primary text-sm">
          </span>
        </template>
      </QInput>
    </div>
    <div class="col-12">
      <QInput
        standout="bg-transparent"
        dense
        bg-color="background-primary"
        label="متن نظر:"
        rounded
        type="textarea"
        :input-style="{ fontSize: '12px', resize: 'none' }"
      />
    </div>
    <div class="col-12">
      <PrimaryButton class="max-w-56"> ثبت نظر</PrimaryButton>
    </div>
  </div>
</template>
