import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const vuetifyTest = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')
