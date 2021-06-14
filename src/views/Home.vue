<template>
  <HeaderRepo />
  <span class="border-2 border-white antialiased font-sans">
    <HeroHome />
    <HomeInfo />
  </span>
  <FooterRepo />
</template>

<script setup>
import HeaderRepo from '@/components/HeaderRepo.vue'
import HeroHome from '@/components/HeroHome.vue'
import HomeInfo from '@/components/HomeInfo.vue'
import FooterRepo from '@/components/FooterRepo.vue'
</script>

<style>
#app {
  @apply bg-gray-200
}
</style>
