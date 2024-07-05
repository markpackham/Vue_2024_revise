import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobView from "@/views/JobView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  // Lets us use Back button via history
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: JobView,
    },
    // NOT FOUND
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
