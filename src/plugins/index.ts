import { App } from 'vue'
import { vuetify } from './vuetify'
import { loadFonts } from './webfontloader'

export function registerPlugins(app: App) {
    loadFonts()
    app.use(vuetify)
}