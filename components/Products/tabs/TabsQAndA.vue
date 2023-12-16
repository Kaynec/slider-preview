<template>
  <div class="flex flex-col gap-4 mt-xl">
    <QCard
      v-for="i in 4"
      :key="i"
      class="bg-background-primary pa-lg space-y-xl border-2px border-border-primary"
    >
      <div class="flex flex-col gap-3 items-start">
        <div class="flex items-center gap-2">
          <span class="text-text-primary"> عدنان عبدالله پور </span>
          <span class="text-text-secondary"> 1401/08/22 </span>
        </div>
        <div class="text-text-primary flex gap-2">
          <QuestionMark class="fill-text-primary" /> سوال:
        </div>
      </div>
      <p class="text-text-secondary">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز ..
      </p>
      <!--  -->
      <div>
        <div
          class="text-text-primary border-1px border-solid border-border-secondary rounded-2xl pa-sm"
        >
          <div class="text-primary mb-sm flex gap-2">
            <Answer class="fill-primary" /> پاسخ::
          </div>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز .. لورم
          ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
          طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز .. لورم
          ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
          طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز ..
        </div>
      </div>
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
        label="نام:"
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
        label="نام خانوادگی:"
        rounded
        type="text"
        :input-style="{ fontSize: '12px' }"
        input-class="text-white"
      />
    </div>
    <div class="col-12 col-lg-4">
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
    <div class="col-12">
      <QInput
        standout="bg-transparent"
        dense
        bg-color="background-primary"
        label="متن سوال::"
        rounded
        type="textarea"
        :input-style="{ fontSize: '12px', resize: 'none' }"
      />
    </div>
    <div class="col-12">
      <PrimaryButton class="max-w-56 !rounded-full"> ارسال سوال</PrimaryButton>
    </div>
  </div>
</template>
