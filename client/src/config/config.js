import getMenuItems from './menuItems'
import locales from './locales'
import routes from './routes'
import themes from './themes'

const config = {
  initial_state: {
    themeSource: {
      isNightModeOn: false,
      source: 'light'
    },
    locale: 'en'
  },
  drawer_width: 256,
  locales,
  themes,
  routes,
  getMenuItems,
}

export default config
