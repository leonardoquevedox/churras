import React from 'react'
import Loadable from 'react-loadable'
import LoadingComponent from 'rmw-shell/lib/components/LoadingComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import A2HSProvider from 'a2hs'
import theme from './config/themes/custom'
import { MuiThemeProvider } from '@material-ui/core'

import API from './api'
import AuthUtils from './utils/AuthUtils'

import config from './config'
API.setDomain(config.api.GATEWAY_URL)

const Loading = () => <LoadingComponent />

export const MainAsync = Loadable({
  loader: () => import('../src/containers/Main'),
  loading: Loading
})

export const LandingPageAsync = Loadable({
  loader: () => import('../src/pages/Landing'),
  loading: Loading
})

export default function App() {
  return (
    <A2HSProvider>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            {/* Unprotected routes */
              !AuthUtils.isLoggedIn() && config.routes.unprotected
            }
            {/* Protected routes */}
            {AuthUtils.isLoggedIn() &&
              <Route component={MainAsync} />
            }
          </Switch>
        </Router>
      </MuiThemeProvider>
    </A2HSProvider>
  )
}
