/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import router from "./routers/index.js";
import userStore from "./store/user.js";
import axios from "axios";

const app = createApp(App);

registerPlugins(app);

app.use(router);
app.use(userStore);
app.mount("#app");

// axios 전역 설정
axios.defaults.baseURL = "http://localhost:8787"; // 개발
