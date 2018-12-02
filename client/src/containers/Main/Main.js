import React, { Component } from 'react'
import locales from '../../config/locales'
import { Helmet } from 'react-helmet'
import { addLocalizationData } from 'rmw-shell/lib/config/locales'
import { withA2HS } from 'a2hs'
import routes from '../../config/routes'
import Switch from 'react-router-dom/Switch';
import Drawer from '../../components/Navigation/Drawer'
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import { GitHubIcon } from 'rmw-shell/lib/components/Icons'
import { Typography } from '@material-ui/core';

addLocalizationData(locales)

const styles = theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column'
  },
  root: {
    flexGrow: 1,
    flex: '1 0 100%',
    paddingTop: '20px'
    // height: '100%',
    // overflow: 'hidden'
  },
  hero: {
    height: '100%',
    // minHeight: '80vh',
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    color: "#666666"
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    letterSpacing: '.1rem',
    textIndent: '.7rem',
    marginTop: '10px',
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.only('xs')]: {
      fontSize: 24,
      letterSpacing: '.1em',
      textIndent: '.1rem'
    },
    whiteSpace: 'wrap'
  },
  subtitle: {
    fontSize: 18,
    [theme.breakpoints.only('xs')]: {
      fontSize: 14,
      maxWidth: "200px"
    },
  },
  headline: {
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit,
    maxWidth: 600,
    textAlign: 'center',
    fontSize: 18
  },
  primaryColor: {
    color: theme.palette.primary.main
  },
  content: {
    height: '100%',
    // paddingTop: theme.spacing.unit * 8,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit
    }
  },
  button: {
    marginTop: theme.spacing.unit * 3
  },
  fullWidthForm: {
    width: "100%",
    maxWidth: "400px",
    padding: "16px",
    display: "inline-grid"
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 10,
    right: theme.spacing.unit * 4,
  }
})


class Main extends Component {
  componentDidMount() {
    // const { setA2HPState } = this.props
    // console.log(this.props)
    // setA2HPState({ isAppInstallable: true })
  }

  render() {
    const { classes, theme } = this.props;
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
      <AppBar color="primary" position='static'>
        <Toolbar disableGutters>
          <Drawer></Drawer>
          <Typography align='center'
            component='h1'
            color='inherit'
            gutterBottom
            className={classes.headline}>
            Churrascos
            </Typography>
          <div style={{ flex: 1 }} />
          <Tooltip id="tooltip-icon2" title="GitHub repository">
            <IconButton
              name='github'
              aria-label='Open Github'
              color='inherit'
              href='https://github.com/leopq/churras'
              target='_blank'
              rel='noopener'
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Switch>
        {routes}
      </Switch>
    </div>
  }
}

export default withA2HS(withStyles(styles, { withTheme: true })(Main))
