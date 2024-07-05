<script setup>
import axios from "axios";
import { reactive, ref, defineProps, onMounted } from "vue";
import { RouterLink } from "vue-router";

import JobListing from "./JobListing.vue";
// import jobsData from "@/jobs1.json";

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

// const jobs = ref(jobsData);
// Using reactive instead of ref which is optional, ref would work fine
// const jobs = ref([]);

const state = reactive({
  jobs: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:8888/jobs");
    state.jobs = response.data;
  } catch (error) {
    console.error("Error fetching jobs ", error);
  } finally {
    // "finally" will run no matter if a try or a catch is hit
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
