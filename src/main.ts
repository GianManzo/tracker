import App from "./App.vue";
import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faIcons } from "./shared/icons/icons.fortawesome";

const app = createApp(App);
faIcons();

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
