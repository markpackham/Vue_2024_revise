<script setup>
import jobsData from "@/jobs1.json";
import { ref } from "vue";

const jobs = ref(jobsData);
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
    </div>
  </section>
  <div v-for="job in jobs" :key="job.id">
    {{ job.title }}
  </div>
</template>
