import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

createApp(App).use(BootstrapVue);

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://powerful-mesa-06277.herokuapp.com";

createApp(App).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
