<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Suspense>
    <main>
      <Navbar />
      <router-view></router-view>
    </main>
  </Suspense>
</template>

<style lang="less"></style>
