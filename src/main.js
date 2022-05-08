import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://powerful-mesa-06277.herokuapp.com";

createApp(App).use(router).mount("#app");
