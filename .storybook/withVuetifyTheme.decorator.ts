export const DEFAULT_THEME = "dark";

import { VApp } from 'vuetify/components'

export const withVuetifyTheme = (story, context) => {
  const globalTheme = context.globals.theme || DEFAULT_THEME;
  return {
    components: { story, VApp },
    template: `
    <div style="height: 530px; overflow: hidden">
      <v-app theme="${globalTheme}"  full-height="${false}">
        <story/>
      </v-app>
    </div>
    `,
  }
}
