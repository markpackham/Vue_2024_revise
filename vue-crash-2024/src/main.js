import "./assets/main.css";
// Replaced Font Awesome with Prime Icons
// https://github.com/primefaces/primeicons
// Vue specific version
// https://primevue.org/icons
import "primeicons/primeicons.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import router from "./router";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(Toast);

app.mount("#app");

// json-server path http://localhost:8888/jobs
