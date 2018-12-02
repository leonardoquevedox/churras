import React from 'react'
import Loadable from 'react-loadable'
import LoadingComponent from 'rmw-shell/lib/components/LoadingComponent'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import A2HSProvider from 'a2hs'

const Loading = () => <LoadingComponent />

export const MainAsync = Loadable({
  loader: () => import('../src/containers/Main'),
  loading: Loading
})

export const LandingPageAsync = Loadable({
  loader: () => import('../src/pages/LandingPage'),
  loading: Loading
});

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

export default function App() {
  return (
    <A2HSProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPageAsync} />
          <Route component={MainAsync} />
        </Switch>
      </Router>
    </A2HSProvider>
  )
}
