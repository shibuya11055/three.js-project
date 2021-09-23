import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import * as THREE from "three";

createApp(App).use(router, THREE).mount("#app");
