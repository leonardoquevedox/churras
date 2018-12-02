import React, { Component } from 'react'
import locales from '../../config/locales'
import { Helmet } from 'react-helmet'
import { addLocalizationData } from 'rmw-shell/lib/config/locales'
import { withA2HS } from 'a2hs'
import routes from '../../config/routes'
import Switch from 'react-router-dom/Switch';

addLocalizationData(locales)

class Main extends Component {
  componentDidMount() {
    // const { setA2HPState } = this.props
    // console.log(this.props)
    // setA2HPState({ isAppInstallable: true })
  }

  render() {
    return <div>
      <Helmet>
        <link async rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
        <link async rel='stylesheet' href='index.css' />
      </Helmet>
      <Switch>
        {routes}
      </Switch>
    </div>
  }
}

export default withA2HS(Main)
