import { createApp } from "vue";
import AppComponent from "./App.vue";
import { registerPlugins } from './plugins'

const app = createApp(AppComponent)

registerPlugins(app)

app.mount("#app");

export * from './plugins/vuetify'
