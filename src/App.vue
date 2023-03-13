<script setup lang="ts">
import { RouterView } from 'vue-router';

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <v-app>
    <Navbar />
    <v-main>
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>
