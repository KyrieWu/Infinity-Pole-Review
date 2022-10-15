import { createApp } from "vue";
import store from "./store/user";
import App from "./App.vue";

createApp(App).use(store).mount("#app");
