import "vuetify/dist/vuetify.min.css";
import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import { CustomButton, CustomDrawer } from "../components";
import { App } from "vue";

const vuetify = createVuetify({
  blueprint: md3, icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

const LibComponents = {
  install: (app: App) => {
    app.component("CustomButton", CustomButton);
    app.component("CustomDrawer", CustomDrawer);
  },
};

export { vuetify, LibComponents, CustomButton, CustomDrawer };
