import getMenuItems from './menuItems'
import locales from './locales'
import routes from './routes'
import themes from './themes'

const dev = {
  s3: {
    BUCKET: 'YOUR_DEV_S3_UPLOADS_BUCKET_NAME'
  },
  api: {
    GATEWAY_URL: 'http://localhost:3000'
  },
  cognito: {
    REGION: 'YOUR_DEV_COGNITO_REGION',
    USER_POOL_ID: 'YOUR_DEV_COGNITO_USER_POOL_ID',
    APP_CLIENT_ID: 'YOUR_DEV_COGNITO_APP_CLIENT_ID',
    IDENTITY_POOL_ID: 'YOUR_DEV_IDENTITY_POOL_ID'
  }
}

const prod = {
  s3: {
    BUCKET: 'YOUR_PROD_S3_UPLOADS_BUCKET_NAME'
  },
  api: {
    GATEWAY_URL: 'YOUR_PROD_API_GATEWAY_URL'
  },
  cognito: {
    REGION: 'YOUR_PROD_COGNITO_REGION',
    USER_POOL_ID: 'YOUR_PROD_COGNITO_USER_POOL_ID',
    APP_CLIENT_ID: 'YOUR_PROD_COGNITO_APP_CLIENT_ID',
    IDENTITY_POOL_ID: 'YOUR_PROD_IDENTITY_POOL_ID'
  }
}

const local = {
  ...dev,
  api: {
    GATEWAY_URL: 'http://localhost:3000'
  }
}

const envs = {
  local: local,
  dev: dev,
  prod: prod
}

const config = envs[process.env.REACT_APP_STAGE || 'dev']

export default {
  ...config,
  // Add common config values here
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
  application_name: 'Churras',
  MAX_ATTACHMENT_SIZE: 5000000
}
