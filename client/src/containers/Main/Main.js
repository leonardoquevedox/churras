import React, { Component } from 'react'
import locales from '../../config/locales'
import { Helmet } from 'react-helmet'
import { addLocalizationData } from 'rmw-shell/lib/config/locales'
import { withStyles } from '@material-ui/core';
import { withA2HS } from 'a2hs'
import routes from '../../config/routes'
import Switch from 'react-router-dom/Switch';
import NavBar from '../../components/Navigation/NavBar'
import Tabs from '../../components/Navigation/Tabs'
import withRouter from 'react-router-dom/withRouter';

const styles = theme => ({})
addLocalizationData(locales)

class Main extends Component {
  componentDidMount() {
    // const { setA2HPState } = this.props
    // console.log(this.props)
    // setA2HPState({ isAppInstallable: true })
  }

  render() {
    const { theme } = this.props;
    theme.palette.primary = {
      contrastText: "#fff",
      dark: "#666666",
      light: "#7986cb",
      main: "#fe1800"
    }
    return <div>
      <Helmet>
        <link async rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
        <link async rel='stylesheet' href='index.css' />
      </Helmet>
      <Helmet>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="apple-mobile-web-app-status-bar-style" content={theme.palette.primary.main} />
        <meta name="msapplication-navbutton-color" content={theme.palette.primary.main} />
        <title>Churras: Dashboard</title>
      </Helmet>
      <NavBar />
      <Switch>
        {routes}
      </Switch>
      <Tabs />
    </div>
  }
}

export default withA2HS(withRouter(withStyles(styles, { withTheme: true })(Main)))
