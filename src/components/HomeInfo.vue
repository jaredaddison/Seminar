<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-vetpartners border-4 border-white">
    <div class="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
      <div class="h-full w-full xl:grid xl:grid-cols-2">
        <div class="h-full xl:relative xl:col-start-2">
          <img
            class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
            :src="url"
            alt="People working on laptops"
          />
          <div
            aria-hidden="true"
            class="
              absolute
              inset-x-0
              top-0
              h-32
              bg-gradient-to-b
              from-vetpartners
              xl:inset-y-0
              xl:left-0
              xl:h-full
              xl:w-32
              xl:bg-gradient-to-r
            "
          />
        </div>
      </div>
    </div>
    <div
      class="
        max-w-4xl
        mx-auto
        px-4
        sm:px-6
        lg:max-w-7xl
        lg:px-8
        xl:grid xl:grid-cols-2 xl:grid-flow-col-dense
        xl:gap-x-8
      "
    >
      <div
        class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24"
      >
        <h2 class="text-sm font-semibold text-gray-100 tracking-wide uppercase">
          Major Objectives
        </h2>
        <p class="mt-3 text-3xl font-extrabold text-white">
          This Training is Advanced!
        </p>
        <p class="mt-5 text-lg text-gray-300">
          We are going to train you like the vets who are studying for
          Memberships.... are you ready?
        </p>
        <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
          <p v-for="item in metrics" :key="item.id">
            <span class="block text-2xl font-bold text-white">{{
              item.stat
            }}</span>
            <span class="mt-1 block text-base text-gray-300"
              ><span class="font-medium text-white">{{ item.emphasis }}</span>
              {{ item.rest }}</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let url =
  'https://up.raindrop.io/raindrop/files/268/872/162/20210310_075259_0002.png'
const metrics = [
  {
    id: 1,
    stat: 'RAAS',
    emphasis: 'Renin-Angiotensin-Aldosterone-System',
    rest: 'and its relationship with emergency presentations and hypovolaemic shock',
  },
  {
    id: 2,
    stat: 'Ventilation',
    emphasis: 'Carbon Dioxide',
    rest: 'more than the misconceptions and how to use it to save lives',
  },
  {
    id: 3,
    stat: 'Hypoxia',
    emphasis: 'vs Hypoxaemia',
    rest: 'and why it makes a life-saving difference',
  },
  {
    id: 4,
    stat: 'Shock',
    emphasis: 'What is it.....really',
    rest: 'and how do we manage it... properly!!',
  },
]
</script>
