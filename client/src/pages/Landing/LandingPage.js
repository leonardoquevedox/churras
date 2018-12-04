import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { GitHubIcon } from 'rmw-shell/lib/components/Icons'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

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
    color: '#666666'
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
    fontSize: 28,
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.only('xs')]: {
      fontSize: 24,
      letterSpacing: '.1em',
      textIndent: '.1rem'
    },
    whiteSpace: 'wrap'
  },
  subtitle: {
    fontSize: 14,
    [theme.breakpoints.only('xs')]: {
      fontSize: 14,
      maxWidth: '200px'
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
    width: '100%',
    maxWidth: '400px',
    padding: '16px',
    display: 'inline-grid'
  },
  lightColor: {
    color: 'white',
    textDecoration: 'none'
  }
})

class SigninPage extends Component {


  isAuthorised = () => {
    try {
      const key = Object.keys(localStorage).find(e => e.match(/persist:root/))
      const data = JSON.parse(localStorage.getItem(key))
      const auth = JSON.parse(data.auth)

      return auth && auth.isAuthorised

    } catch (ex) {
      return false
    }
  }

  componentDidMount() {
    const { history } = this.props

    if (this.isAuthorised()) {
      history.push('/signin')
    }
  }

  render() {
    const { classes, history, theme } = this.props
    return (
      <div className={classes.main}>
        <Helmet>
          <meta name='theme-color' content={theme.palette.primary.main} />
          <meta name='apple-mobile-web-app-status-bar-style' content={theme.palette.primary.main} />
          <meta name='msapplication-navbutton-color' content={theme.palette.primary.main} />
          <title>Churras</title>
        </Helmet>
        <AppBar color='primary' position='static'>
          <Toolbar disableGutters>
            <Tooltip id='tooltip-icon2' title='GitHub repository' className={classes.rightDivider}>
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
            <span>|</span>
            <Button onClick={(e) => { history.push('signin') }}>
              <Typography
                align='center'
                component='div'
                color='inherit'
                gutterBottom
                className={classes.lightColor}
              >
                {'Entre'}
              </Typography>
            </Button>
            <span>|</span>
            <Button onClick={(e) => { history.push('signup') }}>
              <Typography
                align='center'
                component='div'
                color='inherit'
                gutterBottom
                className={classes.lightColor}
              >
                {'Cadastre-se'}
              </Typography>
            </Button>
            <span>|</span>
            <div style={{ flex: 1 }} />
          </Toolbar>
        </AppBar>
        <div className={classes.root}>
          <div className={classes.hero}>
            <div className={classes.content}>
              <img
                src='/icon.png'
                alt='Material-UI Logo'
                width='125'
                height='125'
                style={{ margin: 'auto', display: 'block' }}
              />
              <div className={classes.text}>
                <Typography
                  align='center'
                  component='h1'
                  color='inherit'
                  gutterBottom
                  className={classes.title}
                >
                  {'Seja bem vindx ao Churras!'}
                </Typography>
                <Typography
                  align='center'
                  component='div'
                  color='inherit'
                  className={classes.subtitle}
                >
                  {'Sua nova plataforma de gerenciamento de churrascos com a galera!'}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(SigninPage))
